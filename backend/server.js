/* ============================================================
   MediaVault Backend — Node.js + Express + yt-dlp
   Free deploy: Render / Koyeb / Hugging Face Spaces (Docker)
   ============================================================ */
const express = require("express");
const { execFile } = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { mkdtemp } = require("fs/promises");

const app = express();
const YTDLP = process.env.YTDLP_PATH || "yt-dlp";
const PORT = process.env.PORT || 8080;

/* ---- CORS (frontend on a different free host) ---- */
app.use(function (req, res, next) {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

/* ---- helpers ---- */
function run(args, timeoutMs) {
  if (process.env.FFMPEG_PATH) args = ["--ffmpeg-location", process.env.FFMPEG_PATH].concat(args);
  return new Promise(function (resolve, reject) {
    execFile(
      YTDLP,
      args,
      { maxBuffer: 32 * 1024 * 1024, timeout: timeoutMs || 90000 },
      function (err, stdout, stderr) {
        if (err) reject(new Error(String(stderr || err.message).slice(0, 400)));
        else resolve(stdout);
      }
    );
  });
}

function allowedUrl(u) {
  return /^(https?:\/\/)?([\w-]+\.)*(youtube\.com|youtu\.be|facebook\.com|fb\.watch|tiktok\.com|instagram\.com|instagr\.am|vm\.tiktok\.com|vt\.tiktok\.com|x\.com|twitter\.com|vimeo\.com|dailymotion\.com|pinterest\.com|soundcloud\.com)\/./i.test(u);
}

function fmtSize(n) {
  if (!n || n <= 0) return null;
  var mb = n / 1048576;
  return mb >= 1024 ? (mb / 1024).toFixed(2) + " GB" : mb.toFixed(1) + " MB";
}

function durStr(s) {
  s = Math.round(s || 0);
  var m = Math.floor(s / 60), r = s % 60;
  return String(m).padStart(2, "0") + ":" + String(r).padStart(2, "0");
}

/* ---- health check ---- */
app.get("/api/health", function (req, res) {
  res.json({ ok: true, service: "mediavault-backend" });
});

/* ---- info: analyze a link, return title + available qualities ---- */
app.get("/api/info", async function (req, res) {
  var url = req.query.url || "";
  if (!url || !allowedUrl(url)) return res.status(400).json({ ok: false, error: "Invalid or unsupported URL" });
  try {
    var out = await run(["-J", "--no-playlist", "--no-warnings", url], 90000);
    var info = JSON.parse(out);
    var formats = info.formats || [];
    var maxH = formats.reduce(function (m, f) { return f.height ? Math.max(m, f.height) : m; }, 0);

    var mp4 = [];
    [1080, 720, 480, 360, 144].forEach(function (h) {
      if (h > maxH) return;
      var best = formats
        .filter(function (f) { return f.height === h && f.vcodec !== "none"; })
        .sort(function (a, b) { return (b.tbr || 0) - (a.tbr || 0); })[0];
      var size = null;
      if (best) {
        size = best.filesize || best.filesize_approx || null;
        if (!size && best.acodec === "none") {
          var audio = formats
            .filter(function (f) { return f.acodec !== "none"; })
            .sort(function (a, b) { return (b.tbr || 0) - (a.tbr || 0); })[0];
          var aSize = audio ? (audio.filesize || audio.filesize_approx || 0) : 0;
          size = (best.filesize_approx || best.filesize || 0) + aSize || null;
        }
      }
      mp4.push([h + "p", h >= 720 ? "hd" : "", size ? "≈ " + fmtSize(size) : "—"]);
    });

    var dur = info.duration || 0;
    var mp3 = [
      ["320 kbps", "best", "≈ " + (fmtSize((dur * 320 * 1000) / 8) || "—")],
      ["192 kbps", "", "≈ " + (fmtSize((dur * 192 * 1000) / 8) || "—")],
      ["128 kbps", "", "≈ " + (fmtSize((dur * 128 * 1000) / 8) || "—")],
      ["64 kbps", "", "≈ " + (fmtSize((dur * 64 * 1000) / 8) || "—")]
    ];

    res.json({
      ok: true,
      title: info.title || "video",
      author: info.uploader || info.channel || info.uploader_id || "",
      views: info.view_count || 0,
      duration: durStr(dur),
      thumbnail: info.thumbnail || "",
      mp4: mp4,
      mp3: mp3
    });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

/* ---- download: stream the converted file to the browser ---- */
app.get("/api/download", async function (req, res) {
  var url = req.query.url || "";
  var fmt = req.query.fmt === "mp3" ? "mp3" : "mp4";
  var q = parseInt(req.query.q, 10) || (fmt === "mp3" ? 320 : 720);
  if (!url || !allowedUrl(url)) return res.status(400).json({ ok: false, error: "Invalid or unsupported URL" });

  var args = ["--no-playlist", "--no-warnings", "--socket-timeout", "20"];
  if (fmt === "mp3") {
    args = args.concat(["-f", "bestaudio/best", "-x", "--audio-format", "mp3", "--audio-quality", q + "K"]);
  } else {
    args = args.concat([
      "-f", "bestvideo[height<=" + q + "]+bestaudio/best[height<=" + q + "]/best",
      "--merge-output-format", "mp4"
    ]);
  }

  var dir;
  try {
    dir = await mkdtemp(path.join(os.tmpdir(), "mv-"));
    args = args.concat(["-o", path.join(dir, "out.%(ext)s"), url]);
    await run(args, 15 * 60 * 1000);

    var files = fs.readdirSync(dir).filter(function (f) { return !f.endsWith(".part"); });
    if (!files.length) throw new Error("Download failed — try another link");
    var fp = path.join(dir, files[0]);
    var st = fs.statSync(fp);

    res.setHeader("Content-Length", st.size);
    res.setHeader("Content-Type", "application/octet-stream");
    res.setHeader("Content-Disposition", 'attachment; filename="mediavault.' + (fmt === "mp3" ? "mp3" : "mp4") + '"');
    var stream = fs.createReadStream(fp);
    stream.pipe(res);
    var cleanup = function () { try { fs.rmSync(dir, { recursive: true, force: true }); } catch (e) {} };
    stream.on("close", cleanup);
    res.on("close", cleanup);
  } catch (e) {
    if (dir) { try { fs.rmSync(dir, { recursive: true, force: true }); } catch (x) {} }
    if (!res.headersSent) res.status(500).json({ ok: false, error: e.message });
    else res.end();
  }
});

/* ---- optional: same-origin frontend (local test / single-server mode) ---- */
var frontDir = path.join(__dirname, "..");
app.get("/", function (req, res) {
  var f = path.join(frontDir, "index.html");
  if (fs.existsSync(f)) {
    var html = fs.readFileSync(f, "utf8").replace('window.MV_API_BASE = "";', 'window.MV_API_BASE = ".";');
    res.set("Content-Type", "text/html; charset=utf-8");
    return res.send(html);
  }
  res.send("MediaVault backend running. (index.html not found next to backend/)");
});

app.get("/app.js", function (req, res) {
  var f = path.join(frontDir, "app.js");
  if (fs.existsSync(f)) return res.sendFile(f);
  res.status(404).send("app.js not found");
});

app.listen(PORT, "0.0.0.0", function () {
  console.log("MediaVault backend listening on port " + PORT);
});

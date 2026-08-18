
/* ================= languages ================= */
var LANGS = [
  {c:"en", n:"English"},
  {c:"bn", n:"বাংলা"},
  {c:"hi", n:"हिन्दी"},
  {c:"zh", n:"中文"},
  {c:"es", n:"Español"},
  {c:"ar", n:"العربية"},
  {c:"fr", n:"Français"}
];

/* ================= i18n ================= */
var I18N = {
  en: {
    "lang.select":"Select language",
    "nav.platforms":"Platforms","nav.how":"How it works","nav.faq":"FAQ",
    "hero.title1":"Download videos from","hero.title2":"your favorite apps.",
    "hero.sub":"Paste a YouTube, Facebook, TikTok or Instagram link, hit Convert, and save it as MP4 up to 1080p — or extract the audio as MP3. Fast, free, no signup.",
    "conv.btn":"Convert",
    "conv.hint":"Supported: youtube.com • youtu.be • facebook.com • fb.watch • tiktok.com • instagram.com",
    "ph.yt":"Paste YouTube link here (youtube.com / youtu.be)",
    "ph.fb":"Paste Facebook link here (facebook.com / fb.watch)",
    "ph.tt":"Paste TikTok link here (tiktok.com)",
    "ph.ig":"Paste Instagram link here (instagram.com)",
    "an.1":"Connecting to {p}…","an.2":"Fetching video details…","an.3":"Scanning available qualities…","an.4":"Preparing download options…",
    "tips.1":"Tip: On mobile, just tap Share → Copy Link inside the app.",
    "tips.2":"Tip: MP3 at 320 kbps gives you the best audio quality.",
    "tips.3":"Tip: 720p is the sweet spot between quality and file size.",
    "tips.4":"Tip: TikTok and Instagram videos download without the watermark.",
    "res.ready":"Your video is ready ✨","res.nowm":"No watermark","res.again":"Convert another video",
    "res.demo":"Demo preview — connect a backend API to enable real downloads.",
    "tab.mp4":"MP4 Video","tab.mp3":"MP3 Audio",
    "q.download":"Download","q.mp4d":"MP4 • video + audio","q.mp3d":"MP3 • audio only",
    "tag.hd":"HD","tag.best":"Best",
    "trust.1":"200M+ files converted","trust.2":"4.9★ user rating","trust.3":"100% free, always",
    "feat.tag":"Features","feat.head":"One tool. Every platform.","feat.sub":"Everything you need to save videos and music — beautifully simple.",
    "feat.1t":"4 Platforms","feat.1d":"YouTube, Facebook, TikTok and Instagram — one downloader for all of them.",
    "feat.2t":"Every Quality","feat.2d":"MP4 from 144p up to 1080p Full HD — pick the perfect size for you.",
    "feat.3t":"MP3 Extraction","feat.3d":"Pull clean audio at up to 320 kbps for music, podcasts and ringtones.",
    "feat.4t":"No Watermark","feat.4d":"TikTok and Instagram videos are saved clean — no logos, ready to repost.",
    "feat.5t":"Free & Unlimited","feat.5d":"No account, no caps, no fees. Convert as much as you want.",
    "feat.6t":"Private & Safe","feat.6d":"Nothing is stored. Links are processed on the fly and forgotten.",
    "how.tag":"How it works","how.head":"Three steps. That's it.","how.sub":"From link to download in under a minute.",
    "how.1t":"Copy the link","how.1d":"Open the app, tap Share on the video and choose Copy Link.",
    "how.2t":"Paste & convert","how.2d":"Select the platform above, paste your link and press Convert.",
    "how.3t":"Pick your quality","how.3d":"Choose MP4 or MP3, pick a quality and save it to your device.",
    "stat.1":"files converted","stat.2":"happy users","stat.3":"average rating","stat.4":"always free",
    "faq.tag":"FAQ","faq.head":"Questions? Answers.",
    "faq.1q":"Which platforms are supported?","faq.1a":"YouTube, Facebook, TikTok and Instagram — including Shorts, Reels, Watch videos and photo slideshows.",
    "faq.2q":"What qualities can I download?","faq.2a":"MP4 video from 144p up to 1080p Full HD, and MP3 audio at 64–320 kbps. The exact options depend on the source video.",
    "faq.3q":"Is the TikTok watermark removed?","faq.3a":"Yes — TikTok and Instagram downloads are clean, with no logos or watermarks.",
    "faq.4q":"Does it work on mobile?","faq.4a":"Yes, it runs in any modern browser on Android, iPhone, tablet and desktop. Nothing to install.",
    "faq.5q":"Do I need to register?","faq.5a":"No. There's no account, no limit and no fee — the service is 100% free.",
    "faq.6q":"Is it legal?","faq.6a":"Download only content you own or have permission to save, and always respect creators' rights and each platform's terms of service.",
    "cta.t":"Ready to convert your first video?","cta.s":"Paste a link and see how easy it is.","cta.b":"Try it now — free",
    "foot.tag":"The prettiest way to save videos and music from YouTube, Facebook, TikTok and Instagram.",
    "foot.product":"Product","foot.legal":"Legal","foot.privacy":"Privacy Policy","foot.terms":"Terms of Service","foot.contact":"Contact",
    "foot.note":"MediaVault is an independent demo project and is not affiliated with YouTube, Facebook, TikTok, Instagram or their owners. Download only content you have the right to save.",
    "toast.err":"That doesn't look like a {p} link — check it and try again.",
    "toast.clip":"Couldn't read the clipboard — please paste manually (Ctrl + V).",
    "toast.demo":"Demo mode — connect a backend to enable real downloads.",
    "toast.pasted":"Link pasted — hit Convert!"
  },
  bn: {
    "lang.select":"ভাষা নির্বাচন করুন",
    "nav.platforms":"প্ল্যাটফর্ম","nav.how":"কিভাবে কাজ করে","nav.faq":"প্রশ্নোত্তর",
    "hero.title1":"ভিডিও ডাউনলোড করুন",
    "hero.title2":"আপনার প্রিয় সব অ্যাপ থেকেই।",
    "hero.sub":"YouTube, Facebook, TikTok বা Instagram-এর লিংক পেস্ট করুন, Convert চাপুন — MP4-এ 1080p পর্যন্ত সেভ করুন, অথবা MP3 অডিও বের করুন। দ্রুত, ফ্রি, সাইনআপ ছাড়াই।",
    "conv.btn":"কনভার্ট",
    "conv.hint":"সাপোর্টেড: youtube.com • youtu.be • facebook.com • fb.watch • tiktok.com • instagram.com",
    "ph.yt":"YouTube লিংক এখানে পেস্ট করুন (youtube.com / youtu.be)",
    "ph.fb":"Facebook লিংক এখানে পেস্ট করুন (facebook.com / fb.watch)",
    "ph.tt":"TikTok লিংক এখানে পেস্ট করুন (tiktok.com)",
    "ph.ig":"Instagram লিংক এখানে পেস্ট করুন (instagram.com)",
    "an.1":"{p}-এর সাথে কানেক্ট হচ্ছে…","an.2":"ভিডিওর তথ্য আনা হচ্ছে…","an.3":"কোয়ালিটি অপশন খোঁজা হচ্ছে…","an.4":"ডাউনলোড অপশন প্রস্তুত হচ্ছে…",
    "tips.1":"টিপ: মোবাইলে অ্যাপেই Share → Copy Link চাপলে লিংক কপি হয়ে যায়।",
    "tips.2":"টিপ: MP3 320 kbps-এ পাবেন সেরা অডিও কোয়ালিটি।",
    "tips.3":"টিপ: 720p হলো কোয়ালিটি ও ফাইল সাইজের পারফেক্ট ব্যালেন্স।",
    "tips.4":"টিপ: TikTok ও Instagram ভিডিও ওয়াটারমার্ক ছাড়া ডাউনলোড হয়।",
    "res.ready":"ভিডিও প্রস্তুত ✨","res.nowm":"ওয়াটারমার্ক ছাড়া","res.again":"আরেকটি ভিডিও কনভার্ট করুন",
    "res.demo":"ডেমো প্রিভিউ — আসল ডাউনলোড চালু করতে ব্যাকএন্ড API কানেক্ট করুন।",
    "tab.mp4":"MP4 ভিডিও","tab.mp3":"MP3 অডিও",
    "q.download":"ডাউনলোড","q.mp4d":"MP4 • ভিডিও + অডিও","q.mp3d":"MP3 • শুধু অডিও",
    "tag.hd":"HD","tag.best":"সেরা",
    "trust.1":"২০০M+ ফাইল কনভার্ট হয়েছে","trust.2":"৪.৯★ ইউজার রেটিং","trust.3":"১০০% ফ্রি, সার্ভিস",
    "feat.tag":"ফিচার","feat.head":"একটি টুল, সব প্ল্যাটফর্ম।","feat.sub":"ভিডিও আর মিউজিক সেভ করার যা যা দরকার — সুন্দরভাবে সহজ।",
    "feat.1t":"৪টি প্ল্যাটফর্ম","feat.1d":"YouTube, Facebook, TikTok আর Instagram — সবগুলোর জন্য একটাই ডাউনলোডার।",
    "feat.2t":"সব কোয়ালিটি","feat.2d":"144p থেকে 1080p ফুল HD পর্যন্ত MP4 — আপনার মতো সাইজ বেছে নিন।",
    "feat.3t":"MP3 এক্সট্র্যাকশন","feat.3d":"মিউজিক, পডকাস্ট বা রিংটোনের জন্য 320 kbps পর্যন্ত পরিষ্কার অডিও।",
    "feat.4t":"ওয়াটারমার্ক ছাড়া","feat.4d":"TikTok ও Instagram ভিডিও পরিষ্কার সেভ হয় — লোগো ছাড়াই, রিপোস্ট-রেডি।",
    "feat.5t":"ফ্রি ও আনলিমিটেড","feat.5d":"অ্যাকাউন্ট নেই, লিমিট নেই, ফি নেই। যত খুশি কনভার্ট করুন।",
    "feat.6t":"প্রাইভেট ও সেফ","feat.6d":"কিছুই সেভ করা হয় না। লিংক প্রসেস হয় তাৎক্ষণিকভাবে, তারপর মুছে যায়।",
    "how.tag":"কিভাবে কাজ করে","how.head":"তিন ধাপেই শেষ।","how.sub":"লিংক থেকে ডাউনলোড, এক মিনিটেরও কম সময়ে।",
    "how.1t":"লিংক কপি করুন","how.1d":"অ্যাপ খুলুন, ভিডিওতে Share চাপুন এবং Copy Link সিলেক্ট করুন।",
    "how.2t":"পেস্ট ও কনভার্ট","how.2d":"উপরে প্ল্যাটফর্ম সিলেক্ট করে লিংক পেস্ট করুন, Convert চাপুন।",
    "how.3t":"কোয়ালিটি বেছে নিন","how.3d":"MP4 বা MP3 সিলেক্ট করে কোয়ালিটি বেছে নিয়ে ডিভাইসে সেভ করুন।",
    "stat.1":"ফাইল কনভার্ট হয়েছে","stat.2":"সন্তুষ্ট ইউজার","stat.3":"গড় রেটিং","stat.4":"সবসময় ফ্রি",
    "faq.tag":"প্রশ্নোত্তর","faq.head":"প্রশ্ন? উত্তর এখানেই।",
    "faq.1q":"কোন কোন প্ল্যাটফর্ম সাপোর্টেড?","faq.1a":"YouTube, Facebook, TikTok ও Instagram — Shorts, Reels, Watch ভিডিও এবং ফটো স্লাইডশোসহ।",
    "faq.2q":"কোন কোন কোয়ালিটিতে ডাউনলোড করা যায়?","faq.2a":"MP4-তে 144p থেকে 1080p ফুল HD, আর MP3-তে 64–320 kbps। সঠিক অপশনগুলো সোর্স ভিডিওর উপর নির্ভর করে।",
    "faq.3q":"TikTok-এর ওয়াটারমার্ক কি সরানো যায়?","faq.3a":"হ্যাঁ — TikTok ও Instagram ডাউনলোড পরিষ্কার থাকে, কোনো লোগো বা ওয়াটারমার্ক ছাড়াই।",
    "faq.4q":"মোবাইলে কাজ করে?","faq.4a":"হ্যাঁ, Android, iPhone, ট্যাবলেট ও ডেস্কটপের যেকোনো আধুনিক ব্রাউজারে চলে। কিছু ইনস্টল করা লাগে না।",
    "faq.5q":"রেজিস্ট্রেশন করতে হবে?","faq.5a":"না। কোনো অ্যাকাউন্ট, লিমিট বা ফি নেই — সার্ভিসটি ১০০% ফ্রি।",
    "faq.6q":"এটা কি লিগ্যাল?","faq.6a":"শুধু নিজের বা অনুমতি আছে এমন কনটেন্ট ডাউনলোড করুন এবং ক্রিয়েটরদের অধিকার ও প্ল্যাটফর্মের শর্ত মেনে চলুন।",
    "cta.t":"প্রথম ভিডিও কনভার্ট করার জন্য প্রস্তুত?","cta.s":"লিংক পেস্ট করুন, কতটা সহজ নিজেই দেখুন।","cta.b":"এখনই ট্রাই করুন — ফ্রি",
    "foot.tag":"YouTube, Facebook, TikTok ও Instagram থেকে ভিডিও ও মিউজিক সেভ করার সবচেয়ে সুন্দর উপায়।",
    "foot.product":"প্রোডাক্ট","foot.legal":"লিগ্যাল","foot.privacy":"প্রাইভেসি পলিসি","foot.terms":"শর্তাবলী","foot.contact":"যোগাযোগ",
    "foot.note":"MediaVault একটি স্বাধীন ডেমো প্রজেক্ট; YouTube, Facebook, TikTok, Instagram বা তাদের মালিকদের সাথে এর কোনো সম্পর্ক নেই। শুধু যেসব কনটেন্ট ডাউনলোড করার অধিকার আছে সেগুলোই ডাউনলোড করুন।",
    "toast.err":"এটা {p} লিংক মনে হচ্ছে না — চেক করে আবার চেষ্টা করুন।",
    "toast.clip":"ক্লিপবোর্ড পড়া যায়নি — ম্যানুয়ালি পেস্ট করুন (Ctrl + V)।",
    "toast.demo":"ডেমো মোড — আসল ডাউনলোডের জন্য ব্যাকএন্ড লাগবে।",
    "toast.pasted":"লিংক পেস্ট হয়েছে — কনভার্ট চাপুন!"
  },
  hi: {
    "lang.select":"भाषा चुनें",
    "nav.platforms":"प्लेटफ़ॉर्म","nav.how":"यह कैसे काम करता है","nav.faq":"सामान्य प्रश्न",
    "hero.title1":"वीडियो डाउनलोड करें","hero.title2":"अपने पसंदीदा ऐप्स से।",
    "hero.sub":"YouTube, Facebook, TikTok या Instagram का लिंक पेस्ट करें, Convert दबाएँ और MP4 को 1080p तक सेव करें — या ऑडियो को MP3 में निकालें। तेज़, मुफ़्त, बिना साइनअप।",
    "conv.btn":"कन्वर्ट",
    "conv.hint":"समर्थित: youtube.com • youtu.be • facebook.com • fb.watch • tiktok.com • instagram.com",
    "ph.yt":"YouTube लिंक यहाँ पेस्ट करें (youtube.com / youtu.be)",
    "ph.fb":"Facebook लिंक यहाँ पेस्ट करें (facebook.com / fb.watch)",
    "ph.tt":"TikTok लिंक यहाँ पेस्ट करें (tiktok.com)",
    "ph.ig":"Instagram लिंक यहाँ पेस्ट करें (instagram.com)",
    "an.1":"{p} से कनेक्ट हो रहा है…","an.2":"वीडियो विवरण लाए जा रहे हैं…","an.3":"उपलब्ध क्वालिटी खोजी जा रही हैं…","an.4":"डाउनलोड विकल्प तैयार किए जा रहे हैं…",
    "tips.1":"टिप: मोबाइल पर ऐप में Share → Copy Link दबाएँ।",
    "tips.2":"टिप: MP3 320 kbps सबसे बेहतरीन ऑडियो क्वालिटी देता है।",
    "tips.3":"टिप: 720p क्वालिटी और फ़ाइल साइज़ का संतुलन है।",
    "tips.4":"टिप: TikTok और Instagram वीडियो वॉटरमार्क के बिना डाउनलोड होते हैं।",
    "res.ready":"वीडियो तैयार है ✨","res.nowm":"वॉटरमार्क के बिना","res.again":"दूसरा वीडियो कन्वर्ट करें",
    "res.demo":"डेमो प्रीव्यू — असली डाउनलोड के लिए बैकएंड API जोड़ें।",
    "tab.mp4":"MP4 वीडियो","tab.mp3":"MP3 ऑडियो",
    "q.download":"डाउनलोड","q.mp4d":"MP4 • वीडियो + ऑडियो","q.mp3d":"MP3 • केवल ऑडियो",
    "tag.hd":"HD","tag.best":"सर्वश्रेष्ठ",
    "trust.1":"200M+ फ़ाइलें कन्वर्ट हुईं","trust.2":"4.9★ यूज़र रेटिंग","trust.3":"100% मुफ़्त, हमेशा",
    "feat.tag":"फ़ीचर्स","feat.head":"एक टूल, हर प्लेटफ़ॉर्म।","feat.sub":"वीडियो और म्यूज़िक सेव करने का सब कुछ — बेहद आसान।",
    "feat.1t":"4 प्लेटफ़ॉर्म","feat.1d":"YouTube, Facebook, TikTok और Instagram — सबके लिए एक ही डाउनलोडर।",
    "feat.2t":"हर क्वालिटी","feat.2d":"144p से 1080p फुल HD तक MP4 — अपने हिसाब से साइज़ चुनें।",
    "feat.3t":"MP3 एक्सट्रैक्शन","feat.3d":"म्यूज़िक, पॉडकास्ट या रिंगटोन के लिए 320 kbps तक साफ़ ऑडियो।",
    "feat.4t":"वॉटरमार्क के बिना","feat.4d":"TikTok और Instagram वीडियो साफ़ सेव होते हैं — बिना लोगो, रीपोस्ट के लिए तैयार।",
    "feat.5t":"मुफ़्त और असीमित","feat.5d":"कोई अकाउंट नहीं, कोई लिमिट नहीं, कोई शुल्क नहीं। जितना चाहें कन्वर्ट करें।",
    "feat.6t":"प्राइवेट और सुरक्षित","feat.6d":"कुछ भी सेव नहीं होता। लिंक तुरंत प्रोसेस होकर मिट जाते हैं।",
    "how.tag":"यह कैसे काम करता है","how.head":"तीन स्टेप। बस।","how.sub":"लिंक से डाउनलोड तक एक मिनट से भी कम।",
    "how.1t":"लिंक कॉपी करें","how.1d":"ऐप खोलें, वीडियो पर Share दबाएँ और Copy Link चुनें।",
    "how.2t":"पेस्ट और कन्वर्ट","how.2d":"ऊपर प्लेटफ़ॉर्म चुनें, लिंक पेस्ट करें और Convert दबाएँ।",
    "how.3t":"क्वालिटी चुनें","how.3d":"MP4 या MP3 चुनें, क्वालिटी तय करें और डिवाइस में सेव करें।",
    "stat.1":"फ़ाइलें कन्वर्ट हुईं","stat.2":"संतुष्ट यूज़र","stat.3":"औसत रेटिंग","stat.4":"हमेशा मुफ़्त",
    "faq.tag":"सामान्य प्रश्न","faq.head":"सवाल? जवाब यहाँ।",
    "faq.1q":"कौन-कौन से प्लेटफ़ॉर्म समर्थित हैं?","faq.1a":"YouTube, Facebook, TikTok और Instagram — Shorts, Reels, Watch वीडियो और फ़ोटो स्लाइडशो सहित।",
    "faq.2q":"कौन सी क्वालिटी में डाउनलोड कर सकते हैं?","faq.2a":"MP4 में 144p से 1080p फुल HD, और MP3 में 64–320 kbps। सटीक विकल्प सोर्स वीडियो पर निर्भर करते हैं।",
    "faq.3q":"क्या TikTok का वॉटरमार्क हट जाता है?","faq.3a":"हाँ — TikTok और Instagram डाउनलोड साफ़ होते हैं, बिना किसी लोगो या वॉटरमार्क।",
    "faq.4q":"क्या मोबाइल पर चलता है?","faq.4a":"हाँ, Android, iPhone, टैबलेट और डेस्कटॉप के किसी भी आधुनिक ब्राउज़र में चलता है। कुछ इंस्टॉल नहीं करना है।",
    "faq.5q":"क्या रजिस्ट्रेशन चाहिए?","faq.5a":"नहीं। कोई अकाउंट, लिमिट या शुल्क नहीं — सेवा 100% मुफ़्त है।",
    "faq.6q":"क्या यह कानूनी है?","faq.6a":"सिर्फ़ वही कंटेंट डाउनलोड करें जिसका आपको अधिकार है, और क्रिएटर्स के अधिकार व प्लेटफ़ॉर्म की शर्तों का सम्मान करें।",
    "cta.t":"पहला वीडियो कन्वर्ट करने के लिए तैयार?","cta.s":"एक लिंक पेस्ट करें और देखें कितना आसान है।","cta.b":"अभी आज़माएँ — मुफ़्त",
    "foot.tag":"YouTube, Facebook, TikTok और Instagram से वीडियो व म्यूज़िक सेव करने का सबसे सुंदर तरीका।",
    "foot.product":"प्रोडक्ट","foot.legal":"कानूनी","foot.privacy":"प्राइवेसी पॉलिसी","foot.terms":"सेवा की शर्तें","foot.contact":"संपर्क",
    "foot.note":"MediaVault एक स्वतंत्र डेमो प्रोजेक्ट है; YouTube, Facebook, TikTok, Instagram या उनके मालिकों से इसका कोई संबंध नहीं है। सिर्फ़ वही कंटेंट डाउनलोड करें जिसका अधिकार आपके पास है।",
    "toast.err":"यह {p} लिंक नहीं लगता — जाँच कर फिर कोशिश करें।",
    "toast.clip":"क्लिपबोर्ड नहीं पढ़ा जा सका — कृपया मैन्युअली पेस्ट करें (Ctrl + V)।",
    "toast.demo":"डेमो मोड — असली डाउनलोड के लिए बैकएंड चाहिए।",
    "toast.pasted":"लिंक पेस्ट हो गया — Convert दबाएँ!"
  },
  zh: {
    "lang.select":"选择语言",
    "nav.platforms":"平台","nav.how":"使用方法","nav.faq":"常见问题",
    "hero.title1":"下载视频，","hero.title2":"来自你喜爱的应用。",
    "hero.sub":"粘贴 YouTube、Facebook、TikTok 或 Instagram 链接，点击转换，即可保存最高 1080p 的 MP4 视频，或提取 MP3 音频。快速、免费、无需注册。",
    "conv.btn":"转换",
    "conv.hint":"支持：youtube.com • youtu.be • facebook.com • fb.watch • tiktok.com • instagram.com",
    "ph.yt":"在此粘贴 YouTube 链接（youtube.com / youtu.be）",
    "ph.fb":"在此粘贴 Facebook 链接（facebook.com / fb.watch）",
    "ph.tt":"在此粘贴 TikTok 链接（tiktok.com）",
    "ph.ig":"在此粘贴 Instagram 链接（instagram.com）",
    "an.1":"正在连接 {p}…","an.2":"正在获取视频信息…","an.3":"正在扫描可用画质…","an.4":"正在准备下载选项…",
    "tips.1":"提示：在手机 App 中点击 分享 → 复制链接 即可。",
    "tips.2":"提示：320 kbps 的 MP3 音质最佳。",
    "tips.3":"提示：720p 是画质与文件大小的最佳平衡。",
    "tips.4":"提示：TikTok 和 Instagram 视频下载后无水印。",
    "res.ready":"视频已就绪 ✨","res.nowm":"无水印","res.again":"转换另一个视频",
    "res.demo":"演示预览 — 接入后端 API 即可启用真实下载。",
    "tab.mp4":"MP4 视频","tab.mp3":"MP3 音频",
    "q.download":"下载","q.mp4d":"MP4 • 视频 + 音频","q.mp3d":"MP3 • 仅音频",
    "tag.hd":"高清","tag.best":"最佳",
    "trust.1":"200M+ 文件已转换","trust.2":"4.9★ 用户评分","trust.3":"永久免费",
    "feat.tag":"功能","feat.head":"一个工具，所有平台。","feat.sub":"保存视频和音乐所需的一切 — 简单优雅。",
    "feat.1t":"4 大平台","feat.1d":"YouTube、Facebook、TikTok 和 Instagram — 一个下载器全部搞定。",
    "feat.2t":"全部画质","feat.2d":"从 144p 到 1080p 全高清 MP4 — 选择最适合你的大小。",
    "feat.3t":"MP3 提取","feat.3d":"提取最高 320 kbps 的纯净音频，适合音乐、播客和铃声。",
    "feat.4t":"无水印","feat.4d":"TikTok 和 Instagram 视频保存后干净无标志，可直接转发。",
    "feat.5t":"免费无限制","feat.5d":"无需账户、无限制、无费用，随心转换。",
    "feat.6t":"隐私安全","feat.6d":"不存储任何内容，链接即时处理、即刻遗忘。",
    "how.tag":"使用方法","how.head":"三步搞定。","how.sub":"从链接到下载，不到一分钟。",
    "how.1t":"复制链接","how.1d":"打开 App，点击视频上的分享，选择复制链接。",
    "how.2t":"粘贴并转换","how.2d":"在上方选择平台，粘贴链接并点击转换。",
    "how.3t":"选择画质","how.3d":"选择 MP4 或 MP3，挑选画质并保存到设备。",
    "stat.1":"文件已转换","stat.2":"满意用户","stat.3":"平均评分","stat.4":"永久免费",
    "faq.tag":"常见问题","faq.head":"有疑问？这里有答案。",
    "faq.1q":"支持哪些平台？","faq.1a":"YouTube、Facebook、TikTok 和 Instagram — 包括 Shorts、Reels、Watch 视频和图片轮播。",
    "faq.2q":"可以下载哪些画质？","faq.2a":"MP4 视频从 144p 到 1080p 全高清，MP3 音频为 64–320 kbps。具体选项取决于源视频。",
    "faq.3q":"会去掉 TikTok 水印吗？","faq.3a":"会 — TikTok 和 Instagram 下载内容干净无标志或水印。",
    "faq.4q":"手机上能用吗？","faq.4a":"可以，支持 Android、iPhone、平板和电脑上的所有现代浏览器，无需安装任何软件。",
    "faq.5q":"需要注册吗？","faq.5a":"不需要。没有账户、没有限制、没有费用 — 服务 100% 免费。",
    "faq.6q":"这合法吗？","faq.6a":"请只下载你拥有或有权保存的内容，并尊重创作者的权利和各平台的服务条款。",
    "cta.t":"准备好转换第一个视频了吗？","cta.s":"粘贴链接，看看有多简单。","cta.b":"立即免费试用",
    "foot.tag":"保存 YouTube、Facebook、TikTok 和 Instagram 视频与音乐的最美方式。",
    "foot.product":"产品","foot.legal":"法律","foot.privacy":"隐私政策","foot.terms":"服务条款","foot.contact":"联系我们",
    "foot.note":"MediaVault 是一个独立的演示项目，与 YouTube、Facebook、TikTok、Instagram 或其所有者无关。请只下载你有权保存的内容。",
    "toast.err":"这看起来不是 {p} 链接 — 请检查后重试。",
    "toast.clip":"无法读取剪贴板 — 请手动粘贴（Ctrl + V）。",
    "toast.demo":"演示模式 — 启用真实下载需要后端。",
    "toast.pasted":"链接已粘贴 — 点击转换！"
  },
  es: {
    "lang.select":"Elegir idioma",
    "nav.platforms":"Plataformas","nav.how":"Cómo funciona","nav.faq":"Preguntas",
    "hero.title1":"Descarga videos de","hero.title2":"tus apps favoritas.",
    "hero.sub":"Pega un enlace de YouTube, Facebook, TikTok o Instagram, pulsa Convertir y guárdalo como MP4 hasta 1080p — o extrae el audio en MP3. Rápido, gratis y sin registro.",
    "conv.btn":"Convertir",
    "conv.hint":"Compatible: youtube.com • youtu.be • facebook.com • fb.watch • tiktok.com • instagram.com",
    "ph.yt":"Pega aquí el enlace de YouTube (youtube.com / youtu.be)",
    "ph.fb":"Pega aquí el enlace de Facebook (facebook.com / fb.watch)",
    "ph.tt":"Pega aquí el enlace de TikTok (tiktok.com)",
    "ph.ig":"Pega aquí el enlace de Instagram (instagram.com)",
    "an.1":"Conectando con {p}…","an.2":"Obteniendo datos del video…","an.3":"Buscando calidades disponibles…","an.4":"Preparando opciones de descarga…",
    "tips.1":"Consejo: en el móvil, toca Compartir → Copiar enlace en la app.",
    "tips.2":"Consejo: MP3 a 320 kbps te da la mejor calidad de audio.",
    "tips.3":"Consejo: 720p es el punto ideal entre calidad y tamaño.",
    "tips.4":"Consejo: los videos de TikTok e Instagram se descargan sin marca de agua.",
    "res.ready":"Tu video está listo ✨","res.nowm":"Sin marca de agua","res.again":"Convertir otro video",
    "res.demo":"Vista previa de demo — conecta una API backend para activar descargas reales.",
    "tab.mp4":"Video MP4","tab.mp3":"Audio MP3",
    "q.download":"Descargar","q.mp4d":"MP4 • video + audio","q.mp3d":"MP3 • solo audio",
    "tag.hd":"HD","tag.best":"Mejor",
    "trust.1":"200M+ archivos convertidos","trust.2":"4.9★ valoración","trust.3":"100% gratis, siempre",
    "feat.tag":"Características","feat.head":"Una herramienta. Todas las plataformas.","feat.sub":"Todo lo necesario para guardar videos y música — con total simplicidad.",
    "feat.1t":"4 plataformas","feat.1d":"YouTube, Facebook, TikTok e Instagram — un solo descargador para todas.",
    "feat.2t":"Todas las calidades","feat.2d":"MP4 desde 144p hasta 1080p Full HD — elige el tamaño perfecto.",
    "feat.3t":"Extracción MP3","feat.3d":"Extrae audio limpio de hasta 320 kbps para música, podcasts y tonos.",
    "feat.4t":"Sin marca de agua","feat.4d":"Los videos de TikTok e Instagram se guardan limpios — sin logos, listos para compartir.",
    "feat.5t":"Gratis e ilimitado","feat.5d":"Sin cuenta, sin límites, sin costos. Convierte todo lo que quieras.",
    "feat.6t":"Privado y seguro","feat.6d":"No se guarda nada. Los enlaces se procesan al instante y se olvidan.",
    "how.tag":"Cómo funciona","how.head":"Tres pasos. Nada más.","how.sub":"Del enlace a la descarga en menos de un minuto.",
    "how.1t":"Copia el enlace","how.1d":"Abre la app, toca Compartir en el video y elige Copiar enlace.",
    "how.2t":"Pega y convierte","how.2d":"Selecciona la plataforma, pega tu enlace y pulsa Convertir.",
    "how.3t":"Elige la calidad","how.3d":"Elige MP4 o MP3, selecciona una calidad y guárdalo en tu dispositivo.",
    "stat.1":"archivos convertidos","stat.2":"usuarios felices","stat.3":"valoración media","stat.4":"siempre gratis",
    "faq.tag":"Preguntas frecuentes","faq.head":"¿Dudas? Respuestas.",
    "faq.1q":"¿Qué plataformas son compatibles?","faq.1a":"YouTube, Facebook, TikTok e Instagram — incluidos Shorts, Reels, videos de Watch y carruseles de fotos.",
    "faq.2q":"¿En qué calidades puedo descargar?","faq.2a":"Video MP4 desde 144p hasta 1080p Full HD, y audio MP3 de 64 a 320 kbps. Las opciones exactas dependen del video original.",
    "faq.3q":"¿Se quita la marca de agua de TikTok?","faq.3a":"Sí — las descargas de TikTok e Instagram salen limpias, sin logos ni marcas de agua.",
    "faq.4q":"¿Funciona en el móvil?","faq.4a":"Sí, funciona en cualquier navegador moderno de Android, iPhone, tablet y escritorio. No hay nada que instalar.",
    "faq.5q":"¿Necesito registrarme?","faq.5a":"No. No hay cuenta, ni límites, ni tarifas — el servicio es 100% gratis.",
    "faq.6q":"¿Es legal?","faq.6a":"Descarga solo contenido propio o con permiso, y respeta siempre los derechos de los creadores y los términos de cada plataforma.",
    "cta.t":"¿Listo para convertir tu primer video?","cta.s":"Pega un enlace y mira lo fácil que es.","cta.b":"Pruébalo gratis",
    "foot.tag":"La forma más bonita de guardar videos y música de YouTube, Facebook, TikTok e Instagram.",
    "foot.product":"Producto","foot.legal":"Legal","foot.privacy":"Política de privacidad","foot.terms":"Términos del servicio","foot.contact":"Contacto",
    "foot.note":"MediaVault es un proyecto demo independiente y no está afiliado a YouTube, Facebook, TikTok, Instagram ni a sus propietarios. Descarga solo contenido que tengas derecho a guardar.",
    "toast.err":"Eso no parece un enlace de {p} — revisa e inténtalo de nuevo.",
    "toast.clip":"No se pudo leer el portapapeles — pégalo manualmente (Ctrl + V).",
    "toast.demo":"Modo demo — conecta un backend para activar descargas reales.",
    "toast.pasted":"Enlace pegado — ¡pulsa Convertir!"
  },
  ar: {
    "lang.select":"اختر اللغة",
    "nav.platforms":"المنصات","nav.how":"كيف يعمل","nav.faq":"الأسئلة الشائعة",
    "hero.title1":"حمّل الفيديوهات من","hero.title2":"تطبيقاتك المفضلة.",
    "hero.sub":"الصق رابط يوتيوب أو فيسبوك أو تيك توك أو إنستغرام، اضغط تحويل، واحفظه بصيغة MP4 حتى جودة 1080p — أو استخرج الصوت بصيغة MP3. سريع ومجاني وبدون تسجيل.",
    "conv.btn":"تحويل",
    "conv.hint":"المدعوم: youtube.com • youtu.be • facebook.com • fb.watch • tiktok.com • instagram.com",
    "ph.yt":"الصق رابط يوتيوب هنا (youtube.com / youtu.be)",
    "ph.fb":"الصق رابط فيسبوك هنا (facebook.com / fb.watch)",
    "ph.tt":"الصق رابط تيك توك هنا (tiktok.com)",
    "ph.ig":"الصق رابط إنستغرام هنا (instagram.com)",
    "an.1":"جارٍ الاتصال بـ {p}…","an.2":"جارٍ جلب تفاصيل الفيديو…","an.3":"جارٍ فحص الجودات المتاحة…","an.4":"جارٍ تحضير خيارات التحميل…",
    "tips.1":"نصيحة: على الهاتف، اضغط مشاركة ← نسخ الرابط داخل التطبيق.",
    "tips.2":"نصيحة: MP3 بجودة 320 kbps يمنحك أفضل جودة صوت.",
    "tips.3":"نصيحة: 720p هو التوازن الأمثل بين الجودة وحجم الملف.",
    "tips.4":"نصيحة: فيديوهات تيك توك وإنستغرام تُحمَّل بدون علامة مائية.",
    "res.ready":"الفيديو جاهز ✨","res.nowm":"بدون علامة مائية","res.again":"حوّل فيديو آخر",
    "res.demo":"معاينة تجريبية — اربط واجهة برمجية خلفية لتفعيل التحميل الحقيقي.",
    "tab.mp4":"فيديو MP4","tab.mp3":"صوت MP3",
    "q.download":"تحميل","q.mp4d":"MP4 • فيديو + صوت","q.mp3d":"MP3 • صوت فقط",
    "tag.hd":"عالية","tag.best":"الأفضل",
    "trust.1":"أكثر من 200 مليون ملف تم تحويله","trust.2":"تقييم 4.9★ من المستخدمين","trust.3":"مجاني 100%، دائمًا",
    "feat.tag":"المزايا","feat.head":"أداة واحدة. كل المنصات.","feat.sub":"كل ما تحتاجه لحفظ الفيديوهات والموسيقى — ببساطة أنيقة.",
    "feat.1t":"4 منصات","feat.1d":"يوتيوب وفيسبوك وتيك توك وإنستغرام — أداة تحميل واحدة للجميع.",
    "feat.2t":"كل الجودات","feat.2d":"MP4 من 144p حتى 1080p بجودة Full HD — اختر الحجم المناسب لك.",
    "feat.3t":"استخراج MP3","feat.3d":"استخرج صوتًا نقيًا حتى 320 kbps للموسيقى والبودكاست والنغمات.",
    "feat.4t":"بدون علامة مائية","feat.4d":"فيديوهات تيك توك وإنستغرام تُحفظ نظيفة — بدون شعارات، جاهزة لإعادة النشر.",
    "feat.5t":"مجاني وغير محدود","feat.5d":"بدون حساب، بدون حدود، بدون رسوم. حوّل ما تشاء.",
    "feat.6t":"خاص وآمن","feat.6d":"لا نخزن شيئًا. تُعالج الروابط فورًا ثم تُنسى.",
    "how.tag":"كيف يعمل","how.head":"ثلاث خطوات. فقط.","how.sub":"من الرابط إلى التحميل في أقل من دقيقة.",
    "how.1t":"انسخ الرابط","how.1d":"افتح التطبيق، اضغط مشاركة على الفيديو واختر نسخ الرابط.",
    "how.2t":"الصق وحوّل","how.2d":"اختر المنصة بالأعلى، الصق رابطك واضغط تحويل.",
    "how.3t":"اختر الجودة","how.3d":"اختر MP4 أو MP3، حدد الجودة واحفظه على جهازك.",
    "stat.1":"ملفات تم تحويلها","stat.2":"مستخدم سعيد","stat.3":"متوسط التقييم","stat.4":"مجاني دائمًا",
    "faq.tag":"الأسئلة الشائعة","faq.head":"أسئلة؟ إجابات.",
    "faq.1q":"ما هي المنصات المدعومة؟","faq.1a":"يوتيوب وفيسبوك وتيك توك وإنستغرام — بما في ذلك Shorts وReels وفيديوهات Watch وألبومات الصور.",
    "faq.2q":"ما الجودات المتاحة للتحميل؟","faq.2a":"فيديو MP4 من 144p حتى 1080p Full HD، وصوت MP3 من 64 إلى 320 kbps. تعتمد الخيارات على الفيديو الأصلي.",
    "faq.3q":"هل تُزال علامة تيك توك المائية؟","faq.3a":"نعم — تحميلات تيك توك وإنستغرام تكون نظيفة، بدون شعارات أو علامات مائية.",
    "faq.4q":"هل يعمل على الهاتف؟","faq.4a":"نعم، يعمل على أي متصفح حديث في أندرويد وآيفون والتابلت والكمبيوتر. لا شيء لتثبيته.",
    "faq.5q":"هل أحتاج إلى تسجيل؟","faq.5a":"لا. لا حساب ولا حدود ولا رسوم — الخدمة مجانية 100%.",
    "faq.6q":"هل هذا قانوني؟","faq.6a":"حمّل فقط المحتوى الذي تملكه أو لديك إذن بحفظه، واحترم دائمًا حقوق المبدعين وشروط كل منصة.",
    "cta.t":"مستعد لتحويل أول فيديو لك؟","cta.s":"الصق رابطًا وشاهد مدى السهولة.","cta.b":"جرّبه الآن — مجانًا",
    "foot.tag":"أجمل طريقة لحفظ الفيديوهات والموسيقى من يوتيوب وفيسبوك وتيك توك وإنستغرام.",
    "foot.product":"المنتج","foot.legal":"قانوني","foot.privacy":"سياسة الخصوصية","foot.terms":"شروط الخدمة","foot.contact":"اتصل بنا",
    "foot.note":"MediaVault مشروع تجريبي مستقل ولا يتبع ليوتيوب أو فيسبوك أو تيك توك أو إنستغرام أو مالكيها. حمّل فقط المحتوى الذي تملك حق حفظه.",
    "toast.err":"هذا لا يبدو رابط {p} — تحقق وحاول مجددًا.",
    "toast.clip":"تعذّر قراءة الحافظة — الصق يدويًا (Ctrl + V).",
    "toast.demo":"وضع تجريبي — يلزم خادم خلفي للتحميل الحقيقي.",
    "toast.pasted":"تم لصق الرابط — اضغط تحويل!"
  },
  fr: {
    "lang.select":"Choisir la langue",
    "nav.platforms":"Plateformes","nav.how":"Comment ça marche","nav.faq":"FAQ",
    "hero.title1":"Téléchargez des vidéos depuis","hero.title2":"vos applis préférées.",
    "hero.sub":"Collez un lien YouTube, Facebook, TikTok ou Instagram, appuyez sur Convertir et enregistrez en MP4 jusqu'en 1080p — ou extrayez l'audio en MP3. Rapide, gratuit, sans inscription.",
    "conv.btn":"Convertir",
    "conv.hint":"Pris en charge : youtube.com • youtu.be • facebook.com • fb.watch • tiktok.com • instagram.com",
    "ph.yt":"Collez le lien YouTube ici (youtube.com / youtu.be)",
    "ph.fb":"Collez le lien Facebook ici (facebook.com / fb.watch)",
    "ph.tt":"Collez le lien TikTok ici (tiktok.com)",
    "ph.ig":"Collez le lien Instagram ici (instagram.com)",
    "an.1":"Connexion à {p}…","an.2":"Récupération des infos de la vidéo…","an.3":"Recherche des qualités disponibles…","an.4":"Préparation des options de téléchargement…",
    "tips.1":"Astuce : sur mobile, appuyez sur Partager → Copier le lien dans l'appli.",
    "tips.2":"Astuce : le MP3 à 320 kbps offre la meilleure qualité audio.",
    "tips.3":"Astuce : 720p est le bon compromis qualité/taille.",
    "tips.4":"Astuce : les vidéos TikTok et Instagram se téléchargent sans filigrane.",
    "res.ready":"Votre vidéo est prête ✨","res.nowm":"Sans filigrane","res.again":"Convertir une autre vidéo",
    "res.demo":"Aperçu démo — connectez une API backend pour activer les vrais téléchargements.",
    "tab.mp4":"Vidéo MP4","tab.mp3":"Audio MP3",
    "q.download":"Télécharger","q.mp4d":"MP4 • vidéo + audio","q.mp3d":"MP3 • audio seul",
    "tag.hd":"HD","tag.best":"Optimal",
    "trust.1":"200M+ fichiers convertis","trust.2":"4,9★ note utilisateurs","trust.3":"100% gratuit, toujours",
    "feat.tag":"Fonctionnalités","feat.head":"Un outil. Toutes les plateformes.","feat.sub":"Tout ce qu'il faut pour sauvegarder vidéos et musique — en toute simplicité.",
    "feat.1t":"4 plateformes","feat.1d":"YouTube, Facebook, TikTok et Instagram — un seul téléchargeur pour tout.",
    "feat.2t":"Toutes les qualités","feat.2d":"MP4 de 144p à 1080p Full HD — choisissez la taille idéale.",
    "feat.3t":"Extraction MP3","feat.3d":"Extrayez un audio propre jusqu'à 320 kbps pour la musique, les podcasts et les sonneries.",
    "feat.4t":"Sans filigrane","feat.4d":"Les vidéos TikTok et Instagram sont enregistrées propres — sans logo, prêtes à reposter.",
    "feat.5t":"Gratuit & illimité","feat.5d":"Pas de compte, pas de limite, pas de frais. Convertissez autant que vous voulez.",
    "feat.6t":"Privé & sécurisé","feat.6d":"Rien n'est stocké. Les liens sont traités à la volée puis oubliés.",
    "how.tag":"Comment ça marche","how.head":"Trois étapes. C'est tout.","how.sub":"Du lien au téléchargement en moins d'une minute.",
    "how.1t":"Copiez le lien","how.1d":"Ouvrez l'appli, appuyez sur Partager sur la vidéo et choisissez Copier le lien.",
    "how.2t":"Collez et convertissez","how.2d":"Sélectionnez la plateforme, collez votre lien et appuyez sur Convertir.",
    "how.3t":"Choisissez la qualité","how.3d":"Choisissez MP4 ou MP3, une qualité, et enregistrez sur votre appareil.",
    "stat.1":"fichiers convertis","stat.2":"utilisateurs satisfaits","stat.3":"note moyenne","stat.4":"toujours gratuit",
    "faq.tag":"FAQ","faq.head":"Des questions ? Des réponses.",
    "faq.1q":"Quelles plateformes sont prises en charge ?","faq.1a":"YouTube, Facebook, TikTok et Instagram — y compris Shorts, Reels, vidéos Watch et diaporamas photo.",
    "faq.2q":"Quelles qualités puis-je télécharger ?","faq.2a":"Vidéo MP4 de 144p à 1080p Full HD, et audio MP3 de 64 à 320 kbps. Les options exactes dépendent de la vidéo source.",
    "faq.3q":"Le filigrane TikTok est-il supprimé ?","faq.3a":"Oui — les téléchargements TikTok et Instagram sont propres, sans logo ni filigrane.",
    "faq.4q":"Ça marche sur mobile ?","faq.4a":"Oui, dans tout navigateur moderne sur Android, iPhone, tablette et ordinateur. Rien à installer.",
    "faq.5q":"Faut-il s'inscrire ?","faq.5a":"Non. Pas de compte, pas de limite, pas de frais — le service est 100% gratuit.",
    "faq.6q":"Est-ce légal ?","faq.6a":"Téléchargez uniquement le contenu dont vous détenez les droits ou avec permission, et respectez toujours les créateurs et les conditions de chaque plateforme.",
    "cta.t":"Prêt à convertir votre première vidéo ?","cta.s":"Collez un lien et voyez comme c'est simple.","cta.b":"Essayer — gratuit",
    "foot.tag":"La plus belle façon d'enregistrer vidéos et musique depuis YouTube, Facebook, TikTok et Instagram.",
    "foot.product":"Produit","foot.legal":"Mentions légales","foot.privacy":"Politique de confidentialité","foot.terms":"Conditions d'utilisation","foot.contact":"Contact",
    "foot.note":"MediaVault est un projet de démonstration indépendant, non affilié à YouTube, Facebook, TikTok, Instagram ou leurs propriétaires. Ne téléchargez que le contenu que vous avez le droit de sauvegarder.",
    "toast.err":"Cela ne ressemble pas à un lien {p} — vérifiez et réessayez.",
    "toast.clip":"Impossible de lire le presse-papiers — collez manuellement (Ctrl + V).",
    "toast.demo":"Mode démo — connectez un backend pour activer les vrais téléchargements.",
    "toast.pasted":"Lien collé — appuyez sur Convertir !"
  }
};

var lang = "en";
function t(key){ return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key; }

/* ================= language menu ================= */
var langWrap = null, langMenu = null, langBtn = null;
(function buildLangMenu(){
  langWrap = document.getElementById("langWrap");
  langMenu = document.getElementById("langMenu");
  langBtn = document.getElementById("langBtn");
  var h = "";
  for (var i = 0; i < LANGS.length; i++){
    h += '<button type="button" class="lang-opt" data-lang="' + LANGS[i].c + '">' +
         '<span class="code">' + LANGS[i].c.toUpperCase() + "</span>" +
         "<span>" + LANGS[i].n + "</span>" +
         '<svg class="check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>' +
         "</button>";
  }
  langMenu.innerHTML = h;
  langMenu.querySelectorAll(".lang-opt").forEach(function(b){
    b.addEventListener("click", function(){
      setLang(b.getAttribute("data-lang"));
      closeLangMenu();
    });
  });
  langBtn.addEventListener("click", function(e){
    e.stopPropagation();
    langMenu.hidden = !langMenu.hidden;
    langBtn.classList.toggle("open", !langMenu.hidden);
    langBtn.setAttribute("aria-expanded", String(!langMenu.hidden));
  });
  document.addEventListener("click", function(e){
    if (!langWrap.contains(e.target)) closeLangMenu();
  });
  document.addEventListener("keydown", function(e){
    if (e.key === "Escape") closeLangMenu();
  });
})();
function closeLangMenu(){
  langMenu.hidden = true;
  langBtn.classList.remove("open");
  langBtn.setAttribute("aria-expanded", "false");
}
function syncLangMenu(){
  langMenu.querySelectorAll(".lang-opt").forEach(function(b){
    b.classList.toggle("active", b.getAttribute("data-lang") === lang);
  });
}

function setLang(l){
  if (!I18N[l]) l = "en";
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = (l === "ar") ? "rtl" : "ltr";
  var els = document.querySelectorAll("[data-i18n]");
  for (var i = 0; i < els.length; i++){
    var k = els[i].getAttribute("data-i18n");
    if (I18N[l][k] != null) els[i].textContent = I18N[l][k];
  }
  try { localStorage.setItem("mv-lang", l); } catch(e){}
  syncLangMenu();
  updatePlaceholder();
  if (!document.getElementById("resultbox").hidden) renderResult();
}

/* restore saved language */
try {
  var savedLang = localStorage.getItem("mv-lang");
  if (savedLang && I18N[savedLang]) setLang(savedLang);
} catch(e){}

/* ================= platform data (demo) ================= */
var PLATFORMS = {
  yt: {
    name: "YouTube", phKey: "ph.yt", rx: /(youtube\.com|youtu\.be)\//i,
    grad: "g-yt", nowm: false,
    title: "lofi hip hop mix 🎧 beats to relax / study to",
    meta: "@lofi.girl • 128M views", dur: "12:34",
    mp4: [["1080p","hd","42.8 MB"],["720p","hd","24.6 MB"],["480p","","13.2 MB"],["360p","","9.1 MB"],["144p","","3.4 MB"]],
    mp3: [["320 kbps","best","8.2 MB"],["192 kbps","","4.9 MB"],["128 kbps","","3.3 MB"],["64 kbps","","1.6 MB"]]
  },
  fb: {
    name: "Facebook", phKey: "ph.fb", rx: /(facebook\.com|fb\.watch)\//i,
    grad: "g-fb", nowm: false,
    title: "Amazing street food tour in Dhaka 🍢🇧🇩",
    meta: "@foodie.bd • 2.1M views", dur: "08:15",
    mp4: [["1080p","hd","38.6 MB"],["720p","hd","21.3 MB"],["480p","","11.8 MB"],["360p","","7.9 MB"],["144p","","2.9 MB"]],
    mp3: [["320 kbps","best","6.7 MB"],["192 kbps","","4.0 MB"],["128 kbps","","2.7 MB"],["64 kbps","","1.3 MB"]]
  },
  tt: {
    name: "TikTok", phKey: "ph.tt", rx: /tiktok\.com\//i,
    grad: "g-tt", nowm: true,
    title: "Golden hour vibes ✨ #fyp #sunset #viral",
    meta: "@sunset.diaries • 1.2M views", dur: "00:32",
    mp4: [["1080p","hd","18.2 MB"],["720p","hd","10.4 MB"],["480p","","5.7 MB"],["360p","","3.9 MB"],["144p","","1.4 MB"]],
    mp3: [["320 kbps","best","1.3 MB"],["192 kbps","","0.8 MB"],["128 kbps","","0.5 MB"],["64 kbps","","0.3 MB"]]
  },
  ig: {
    name: "Instagram", phKey: "ph.ig", rx: /(instagram\.com|instagr\.am)\//i,
    grad: "g-ig", nowm: true,
    title: "Reel: 5 AM morning routine ☕ productivity",
    meta: "@daily.habits • 890K plays", dur: "00:45",
    mp4: [["1080p","hd","22.9 MB"],["720p","hd","12.8 MB"],["480p","","7.1 MB"],["360p","","4.8 MB"],["144p","","1.8 MB"]],
    mp3: [["320 kbps","best","1.9 MB"],["192 kbps","","1.1 MB"],["128 kbps","","0.8 MB"],["64 kbps","","0.4 MB"]]
  }
};

/* ================= state & elements ================= */
var MV_RAW = (typeof window.MV_API_BASE === "string" ? window.MV_API_BASE : "").replace(/\/+$/, "");
var API_BASE = MV_RAW === "." ? "" : MV_RAW; /* "." = same-origin backend (local/sandbox test) */
var REAL = MV_RAW !== "";                    /* khali ("") mane DEMO MODE */
var cur = "yt", curFmt = "mp4", stepTimer = null, tipTimer = null, tipIdx = 0;
var lastReal = null, lastUrl = "";
var TIP_KEYS = ["tips.1","tips.2","tips.3","tips.4"];

function $(s){ return document.querySelector(s); }
var form = $("#cvForm"), input = $("#linkInput"), row = $("#cvRow"),
    goBtn = $("#goBtn"), analyze = $("#analyze"), anStep = $("#anStep"), anTip = $("#anTip"),
    resultbox = $("#resultbox"), qList = $("#qList");

var toastTimer = null;
function toast(msg){
  var el = $("#toast");
  $("#toastMsg").textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function(){ el.classList.remove("show"); }, 3200);
}

/* ================= platform select ================= */
function updatePlaceholder(){ input.placeholder = t(PLATFORMS[cur].phKey); }
updatePlaceholder();

document.querySelectorAll(".plat-btn").forEach(function(btn){
  btn.addEventListener("click", function(){
    if (btn.getAttribute("data-p") === cur) return;
    cur = btn.getAttribute("data-p");
    document.querySelectorAll(".plat-btn").forEach(function(b){ b.classList.remove("active"); });
    btn.classList.add("active");
    stopAnalyze();
    resultbox.hidden = true;
    updatePlaceholder();
    input.focus();
  });
});

/* ================= convert flow ================= */
form.addEventListener("submit", function(e){
  e.preventDefault();
  var url = input.value.trim();
  var p = PLATFORMS[cur];
  if (!p.rx.test(url)){
    row.classList.remove("error");
    void row.offsetWidth;
    row.classList.add("error");
    toast(t("toast.err").replace("{p}", p.name));
    return;
  }
  row.classList.remove("error");
  resultbox.hidden = true;
  startAnalyze();
});

function startAnalyze(){
  analyze.hidden = false;
  goBtn.classList.add("loading");
  input.disabled = true;
  anStep.textContent = t("an.1").replace("{p}", PLATFORMS[cur].name);
  anTip.textContent = t(TIP_KEYS[0]); tipIdx = 1;

  var step = 1;
  stepTimer = setInterval(function(){
    step++;
    if (step <= 4) anStep.textContent = t("an." + step).replace("{p}", PLATFORMS[cur].name);
  }, 800);
  tipTimer = setInterval(function(){
    anTip.textContent = t(TIP_KEYS[tipIdx % TIP_KEYS.length]);
    tipIdx++;
  }, 2600);

  if (REAL){
    realConvert();
  } else {
    setTimeout(function(){
      stopAnalyze();
      renderResult();
      resultbox.hidden = false;
      $("#converter").scrollIntoView({ behavior:"smooth", block:"center" });
    }, 3400);
  }
}

/* ---- real backend call (yt-dlp server) ---- */
function realConvert(){
  var url = input.value.trim();
  var ctrl = window.AbortController ? new AbortController() : null;
  var to = setTimeout(function(){ if (ctrl) ctrl.abort(); }, 90000);
  fetch((API_BASE || "") + "/api/info?url=" + encodeURIComponent(url), ctrl ? { signal: ctrl.signal } : undefined)
    .then(function(r){ return r.json().then(function(j){ return j; }, function(){ return { ok:false, error:"Bad response (" + r.status + ")" }; }); })
    .then(function(j){
      clearTimeout(to);
      stopAnalyze();
      if (!j || !j.ok){ toast("⚠ " + ((j && j.error) || "Backend error")); return; }
      lastReal = j; lastUrl = url;
      renderResult();
      resultbox.hidden = false;
      $("#converter").scrollIntoView({ behavior:"smooth", block:"center" });
    })
    .catch(function(){
      clearTimeout(to);
      stopAnalyze();
      toast("⚠ Backend unreachable — check the server URL / try again");
    });
}

function fmtViews(v){
  if (!v) return "—";
  if (v >= 1e6) return (v / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
  if (v >= 1e3) return (v / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
  return String(v);
}

function stopAnalyze(){
  clearInterval(stepTimer); stepTimer = null;
  clearInterval(tipTimer); tipTimer = null;
  analyze.hidden = true;
  goBtn.classList.remove("loading");
  input.disabled = false;
}

/* ================= result render ================= */
function renderResult(){
  var p = PLATFORMS[cur];
  var thumb = $("#vThumb");
  thumb.className = "v-thumb " + p.grad;
  var data = lastReal;
  var img = $("#vThumbImg");
  img.hidden = true; img.removeAttribute("src");
  if (data && data.thumbnail){
    img.src = data.thumbnail;
    img.hidden = false;
    img.onerror = function(){ img.hidden = true; };
  }
  if (data){
    $("#vDur").textContent = data.duration || "--:--";
    $("#vTitle").textContent = data.title || "";
    $("#vMeta").textContent = (data.author ? "@" + data.author + " • " : "") + fmtViews(data.views) + " views";
  } else {
    $("#vDur").textContent = p.dur;
    $("#vTitle").textContent = p.title;
    $("#vMeta").textContent = p.meta;
  }
  $("#nowmChip").hidden = !p.nowm;
  $("#resNote").hidden = !!data;

  $("#tabMp4").classList.toggle("active", curFmt === "mp4");
  $("#tabMp3").classList.toggle("active", curFmt === "mp3");

  var rows = data ? ((curFmt === "mp4") ? data.mp4 : data.mp3)
                  : ((curFmt === "mp4") ? p.mp4 : p.mp3);
  var descKey = (curFmt === "mp4") ? "q.mp4d" : "q.mp3d";
  var html = "";
  for (var i = 0; i < rows.length; i++){
    var r = rows[i];
    var tagHtml = r[1]
      ? '<span class="q-tag">' + (r[1] === "hd" ? t("tag.hd") : t("tag.best")) + "</span>"
      : "";
    html +=
      '<div class="q-row">' +
        '<span class="q-badge' + (r[1] === "best" ? " best" : "") + '">' + r[0] + "</span>" +
        '<span class="q-desc">' + tagHtml + t(descKey) + "</span>" +
        '<span class="q-size">' + (data ? r[2] : "≈ " + r[2]) + "</span>" +
        '<button type="button" class="q-dl" data-q="' + r[0] + '">' +
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11m0 0l-4-4m4 4l4-4"/><path d="M5 20h14"/></svg>' +
          t("q.download") +
        "</button>" +
      "</div>";
  }
  qList.innerHTML = html;
  qList.querySelectorAll(".q-dl").forEach(function(btn){
    btn.addEventListener("click", function(){
      var qv = parseInt(btn.getAttribute("data-q"), 10) || 0;
      if (data && REAL){
        window.open((API_BASE || "") + "/api/download?url=" + encodeURIComponent(lastUrl) + "&fmt=" + curFmt + "&q=" + qv, "_blank");
      } else {
        toast(t("toast.demo") + " (" + PLATFORMS[cur].name + " • " + btn.getAttribute("data-q") + ")");
      }
    });
  });
}

$("#tabMp4").addEventListener("click", function(){ curFmt = "mp4"; renderResult(); });
$("#tabMp3").addEventListener("click", function(){ curFmt = "mp3"; renderResult(); });

$("#againLink").addEventListener("click", function(){
  setTimeout(function(){
    resultbox.hidden = true;
    lastReal = null;
    input.value = "";
    input.focus();
  }, 300);
});

/* ================= paste ================= */
$("#pasteBtn").addEventListener("click", function(){
  if (navigator.clipboard && navigator.clipboard.readText){
    navigator.clipboard.readText().then(function(txt){
      if (txt){ input.value = txt.trim(); toast(t("toast.pasted")); input.focus(); }
    }).catch(function(){ toast(t("toast.clip")); });
  } else {
    toast(t("toast.clip"));
  }
});

/* ================= nav scroll ================= */
var nav = $("#nav");
window.addEventListener("scroll", function(){
  if (window.scrollY > 24) nav.classList.add("scrolled");
  else nav.classList.remove("scrolled");
}, { passive:true });

/* ================= FAQ accordion ================= */
var items = document.querySelectorAll(".faq-item");
for (var fi = 0; fi < items.length; fi++){
  (function(item){
    item.querySelector(".faq-q").addEventListener("click", function(){
      var wasOpen = item.classList.contains("open");
      for (var k = 0; k < items.length; k++) items[k].classList.remove("open");
      if (!wasOpen) item.classList.add("open");
    });
  })(items[fi]);
}

/* ================= reveal on scroll (one-time) ================= */
var revealObs = new IntersectionObserver(function(entries){
  entries.forEach(function(en){
    if (en.isIntersecting){ en.target.classList.add("in"); revealObs.unobserve(en.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(function(el){ revealObs.observe(el); });

/* ================= animated counters ================= */
var countObs = new IntersectionObserver(function(entries){
  entries.forEach(function(en){
    if (!en.isIntersecting) return;
    countObs.unobserve(en.target);
    var el = en.target, target = parseFloat(el.getAttribute("data-count")),
        suffix = el.getAttribute("data-suffix") || "", t0 = null, dur = 1400;
    function frame(ts){
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = target * eased;
      el.textContent = (target % 1 !== 0 ? val.toFixed(1) : Math.round(val)) + suffix;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });
}, { threshold: 0.4 });
document.querySelectorAll("[data-count]").forEach(function(el){ countObs.observe(el); });

syncLangMenu();

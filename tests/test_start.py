import os
from pathlib import Path
import shutil
import subprocess
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[1]


class StartTest(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        shutil.copy(ROOT / "start.sh", self.root)
        shutil.copytree(ROOT / "scripts", self.root / "scripts", ignore=shutil.ignore_patterns("__pycache__"))
        (self.root / "bin").mkdir()
        (self.root / ".server").mkdir()
        (self.root / "scripts/download_server.py").write_text('print(".server/paper-26.3-253.jar")\n')
        self.env = os.environ.copy()
        self.env["PATH"] = str(self.root / "bin") + os.pathsep + self.env["PATH"]
        self.env.pop("MINECRAFT_VERSION", None)
        self.env.pop("EULA", None)

    def java(self, version):
        java = self.root / "bin/java"
        java.write_text(f'''#!/usr/bin/env bash
if [[ "$1" == "-version" ]]; then echo 'openjdk version "{version}"' >&2; else printf 'ARGS: %s\\n' "$*"; fi
''')
        java.chmod(0o755)

    def run_start(self):
        return subprocess.run([str(self.root / "start.sh")], cwd=self.root, env=self.env,
                              text=True, capture_output=True, stdin=subprocess.DEVNULL)

    def test_starts_26_3_with_java_25_and_explicit_eula(self):
        self.java("25.0.1")
        self.env["EULA"] = "TRUE"
        result = self.run_start()
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertIn("paper-26.3-253.jar nogui", result.stdout)
        self.assertEqual((self.root / "eula.txt").read_text(), "eula=true\n")

    def test_java_21_is_rejected(self):
        self.java("21.0.1")
        result = self.run_start()
        self.assertNotEqual(result.returncode, 0)
        self.assertIn("Java 25", result.stderr)
        self.assertFalse((self.root / "eula.txt").exists())

    def test_eula_is_not_accepted_automatically(self):
        self.java("25.0.1")
        result = self.run_start()
        self.assertNotEqual(result.returncode, 0)
        self.assertIn("EULA=TRUE", result.stderr)
        self.assertFalse((self.root / "eula.txt").exists())


if __name__ == "__main__":
    unittest.main()

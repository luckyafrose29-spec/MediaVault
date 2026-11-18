import fcntl
import os
from pathlib import Path
import shutil
import subprocess
import tarfile
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[1]


class BackupTest(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        shutil.copy(ROOT / "backup.sh", self.root)
        (self.root / "world").mkdir()
        (self.root / "world/level.dat").write_text("world data")
        (self.root / "world_nether").mkdir()
        (self.root / "world_nether/level.dat").write_text("nether")
        (self.root / "plugins").mkdir()
        (self.root / "plugins/config.yml").write_text("test")
        (self.root / "server.properties").write_text("level-name=world\n")

    def run_backup(self):
        return subprocess.run([str(self.root / "backup.sh")], cwd=self.root,
                              text=True, capture_output=True)

    def test_backup_contains_worlds_and_plugin_data(self):
        result = self.run_backup()
        self.assertEqual(result.returncode, 0, result.stderr)
        archive = next((self.root / "backups").glob("*.tar.gz"))
        with tarfile.open(archive) as tar:
            self.assertTrue({"world/level.dat", "world_nether/level.dat", "plugins/config.yml", "server.properties"}.issubset(tar.getnames()))

    def test_refuses_while_server_holds_lock(self):
        (self.root / ".server").mkdir()
        with (self.root / ".server/server.lock").open("w") as lock:
            fcntl.flock(lock, fcntl.LOCK_EX | fcntl.LOCK_NB)
            self.assertNotEqual(self.run_backup().returncode, 0)
        self.assertEqual(self.run_backup().returncode, 0)

    def test_refuses_custom_world_name(self):
        (self.root / "server.properties").write_text("level-name=anotherworld\n")
        self.assertNotEqual(self.run_backup().returncode, 0)
        self.assertEqual(list((self.root / "backups").iterdir()), [])


if __name__ == "__main__":
    unittest.main()

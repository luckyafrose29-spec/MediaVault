import hashlib
import importlib.util
import io
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

spec = importlib.util.spec_from_file_location("download_server", Path(__file__).resolve().parents[1] / "scripts/download_server.py")
server = importlib.util.module_from_spec(spec)
spec.loader.exec_module(server)


class DownloadTest(unittest.TestCase):
    def test_download_and_verify_cache(self):
        data = b"paper jar contents"
        with tempfile.TemporaryDirectory() as directory, \
             patch.object(server, "SHA256", hashlib.sha256(data).hexdigest()), \
             patch.object(server, "SIZE", len(data)), \
             patch.object(server.urllib.request, "urlopen", return_value=io.BytesIO(data)) as urlopen:
            target = server.download(Path(directory))
            self.assertEqual(target.read_bytes(), data)
            self.assertEqual(server.download(Path(directory)), target)
            self.assertEqual(urlopen.call_count, 1)

    def test_bad_download_cleans_up(self):
        with tempfile.TemporaryDirectory() as directory, \
             patch.object(server, "SIZE", 3), \
             patch.object(server.urllib.request, "urlopen", return_value=io.BytesIO(b"bad")):
            with self.assertRaisesRegex(ValueError, "SHA-256"):
                server.download(Path(directory))
            self.assertEqual(list((Path(directory) / ".server").iterdir()), [])

    def test_corrupted_cached_jar_is_replaced(self):
        data = b"valid jar"
        with tempfile.TemporaryDirectory() as directory, \
             patch.object(server, "SHA256", hashlib.sha256(data).hexdigest()), \
             patch.object(server, "SIZE", len(data)), \
             patch.object(server.urllib.request, "urlopen", return_value=io.BytesIO(data)) as urlopen:
            root = Path(directory)
            (root / ".server").mkdir()
            cached = root / ".server/paper-26.3-253.jar"
            cached.write_bytes(b"bad")
            self.assertEqual(server.download(root).read_bytes(), data)
            self.assertEqual(urlopen.call_count, 1)


if __name__ == "__main__":
    unittest.main()

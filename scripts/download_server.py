#!/usr/bin/env python3
"""Download and verify the pinned official Paper 26.3 build."""
import hashlib
import os
from pathlib import Path
import sys
import tempfile
import urllib.request

ROOT = Path(__file__).resolve().parent.parent
VERSION = "26.3"
BUILD = 253
SHA256 = "f9df8e19f4bdee97dbded48095391ea69c64342a4e19624db4f5e0d0136dfe0b"
SIZE = 55296155
URL = f"https://fill-data.papermc.io/v1/objects/{SHA256}/paper-{VERSION}-{BUILD}.jar"
USER_AGENT = "MediaVault-Minecraft-Server/1.0 (https://github.com/luckyafrose29-spec/MediaVault)"


def checksum(path):
    digest = hashlib.sha256()
    with path.open("rb") as file:
        for chunk in iter(lambda: file.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def download(root=ROOT):
    directory = root / ".server"
    directory.mkdir(parents=True, exist_ok=True)
    target = directory / f"paper-{VERSION}-{BUILD}.jar"
    if target.is_file() and target.stat().st_size == SIZE and checksum(target) == SHA256:
        return target

    print(f"Downloading Paper {VERSION} build {BUILD} from PaperMC...", file=sys.stderr)
    tmp_name = None
    try:
        with tempfile.NamedTemporaryFile(dir=directory, suffix=".jar.tmp", delete=False) as tmp:
            tmp_name = tmp.name
            digest = hashlib.sha256()
            size = 0
            request = urllib.request.Request(URL, headers={"User-Agent": USER_AGENT})
            with urllib.request.urlopen(request, timeout=60) as response:
                while True:
                    chunk = response.read(1024 * 1024)
                    if not chunk:
                        break
                    size += len(chunk)
                    if size > SIZE:
                        raise ValueError("Paper download exceeds expected size")
                    digest.update(chunk)
                    tmp.write(chunk)
        if digest.hexdigest() != SHA256 or size != SIZE:
            raise ValueError("Paper download failed the size/SHA-256 check")
        os.replace(tmp_name, target)
        tmp_name = None
        return target
    finally:
        if tmp_name is not None:
            Path(tmp_name).unlink(missing_ok=True)


def main():
    try:
        print(download())
    except (OSError, ValueError) as exc:
        print(f"Server download failed: {exc}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()

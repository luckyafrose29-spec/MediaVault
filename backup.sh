#!/usr/bin/env bash
# Offline backup: the same lock is held for the lifetime of the server process.
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p .server backups
exec 9>.server/server.lock
if ! flock -n 9; then
  echo 'Server বা আরেকটি backup চলছে। আগে server console-এ stop লিখুন।' >&2
  exit 1
fi

# Avoid producing a misleading incomplete backup for custom world names.
level_name=$(python3 - <<'PYCODE'
from pathlib import Path
import re
name = "world"
if Path("server.properties").exists():
    for line in Path("server.properties").read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if not line or line.startswith(("#", "!")):
            continue
        match = re.match(r"^level-name(?:\s*[=:]\s*|\s+)(.*)$", line)
        if match:
            name = match.group(1).strip()
print(name)
PYCODE
)
if [[ "$level_name" != "world" ]]; then
  echo 'Custom level-name পাওয়া গেছে; world ও সব dimension নিজে backup করুন (README দেখুন)।' >&2
  exit 1
fi

# Include default Paper dimension folders, plugin data and server administration files.
files=()
for path in world world_nether world_the_end plugins config server.properties \
  bukkit.yml spigot.yml paper.yml commands.yml permissions.yml help.yml \
  ops.json whitelist.json banned-players.json banned-ips.json; do
  [[ ! -e "$path" ]] || files+=("$path")
done
if [[ ! -d world && ! -d world_nether && ! -d world_the_end ]]; then
  echo 'Default world পাওয়া যায়নি। level-name বদলে থাকলে README অনুসরণ করুন।' >&2
  exit 1
fi
archive=$(mktemp "backups/server-$(date -u +%Y%m%d-%H%M%S)-XXXXXX.tar.gz")
if ! tar -czf "$archive" -- "${files[@]}"; then
  rm -f "$archive"
  exit 1
fi
echo "Backup: $archive"

#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

MIN_MEMORY="${MIN_MEMORY:-1G}"
MAX_MEMORY="${MAX_MEMORY:-2G}"

if ! command -v java >/dev/null 2>&1 || ! command -v python3 >/dev/null 2>&1 || ! command -v flock >/dev/null 2>&1; then
  echo "Java 25, Python 3 এবং flock প্রয়োজন। Codespaces-এ dev container rebuild করুন।" >&2
  exit 1
fi

# Minecraft 26.3 requires Java 25 or newer.
java_version=$(java -version 2>&1 | head -n 1)
if [[ ! "$java_version" =~ version\ \"([0-9]+) ]] || (( BASH_REMATCH[1] < 25 )); then
  echo "Java 25 বা নতুন সংস্করণ প্রয়োজন। পাওয়া গেছে: $java_version" >&2
  exit 1
fi

mkdir -p .server
exec 9>.server/server.lock
if ! flock -n 9; then
  echo 'Server বা backup ইতিমধ্যে চলছে। আগে সেটি বন্ধ করুন।' >&2
  exit 1
fi

if ! grep -Eq '^[[:space:]]*eula[[:space:]]*=[[:space:]]*true[[:space:]]*$' eula.txt 2>/dev/null; then
  echo 'Minecraft EULA পড়ুন: https://www.minecraft.net/eula'
  echo 'সার্ভার চালাতে এটি মেনে নিতে হবে।'
  if [[ "${EULA:-}" != "TRUE" ]]; then
    if [[ ! -t 0 ]]; then
      echo 'সম্মত হলে EULA=TRUE ./start.sh চালান।' >&2
      exit 1
    fi
    read -r -p 'আপনি কি EULA-তে সম্মত? (yes/no): ' answer
    if [[ "$answer" != "yes" ]]; then
      echo 'EULA-তে সম্মতি ছাড়া সার্ভার চালানো যাবে না।' >&2
      exit 1
    fi
  fi
  printf 'eula=true\n' > eula.txt
fi

jar=$(python3 scripts/download_server.py)
echo "Paper Minecraft 26.3 শুরু হচ্ছে। বন্ধ করতে কনসোলে stop লিখুন।"
exec java "-Xms${MIN_MEMORY}" "-Xmx${MAX_MEMORY}" -jar "$jar" nogui

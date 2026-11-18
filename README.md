# Minecraft Java 26.3 — Paper survival server

বন্ধুদের সঙ্গে ২–৩ ঘণ্টা খেলার জন্য একটি ছোট **Paper 26.3** server। Paper performance tuning ও Bukkit/Spigot/Paper plugin support দেয়। এখানে কোনো plugin আগে থেকে ইনস্টল নেই। Java Edition 26.3 ও বৈধ Minecraft account লাগবে; Bedrock/মোবাইল সরাসরি যোগ দিতে পারবে না। Java 25 প্রয়োজন।

## প্রথমবার Codespace-এ চালু করুন

1. GitHub-এ **Code → Codespaces → Create codespace**। অন্তত 4 GB RAM machine বেছে নিন। আগে তৈরি Codespace হলে Command Palette থেকে **Codespaces: Rebuild Container** চালান, যাতে Java 25 পাওয়া যায়।
2. আগে vanilla server-এ খেলে থাকলে আগে সার্ভার `stop` করে world-এর backup নিজের কম্পিউটারে download করুন। Paper প্রথমবার চালানোর সময় vanilla-এর Nether/End dimension আলাদা folder-এ স্থানান্তর করতে পারে। পুরোনো vanilla-তে ফেরার আগে backup restore করুন; নতুন version-এর world পুরোনো version-এ চালাবেন না।
3. Terminal-এ চালান:
   ```bash
   ./start.sh
   ```
4. [Minecraft EULA](https://www.minecraft.net/eula) পড়ে সম্মত হলে `yes` লিখুন। প্রথমবার অফিসিয়াল PaperMC থেকে নির্দিষ্ট Paper 26.3 build 253 download ও SHA-256 যাচাই হবে; Paper প্রথম চালুতে আরও প্রয়োজনীয় ফাইল download করতে পারে। ইন্টারনেট প্রয়োজন।
5. `Done` দেখালে server console-এ নিজের ও বন্ধুদের **Java username** whitelist-এ যোগ করুন (`/` ছাড়া):
   ```text
   whitelist add YourJavaUsername
   whitelist add FriendsJavaUsername
   ```
   নিজেকে admin করতে `op YourJavaUsername` লিখুন। শুধু বিশ্বস্ত কাউকে op দিন।

পরের দিন একই Codespace খুলে আবার `./start.sh` চালান। Non-interactive ব্যবহারে EULA পড়ে সম্মত হলে `EULA=TRUE ./start.sh` ব্যবহার করতে পারেন।

## Minecraft থেকে যোগ দিন

Codespaces-এর forwarded HTTPS URL Minecraft TCP address নয়। একটি TCP tunnel প্রয়োজন। উদাহরণ: [playit.gg](https://playit.gg/) (তৃতীয় পক্ষের সেবা, account ও তাদের শর্ত প্রযোজ্য)।

1. Server চালু রেখে Codespace-এ **দ্বিতীয় terminal** খুলুন।
2. playit-এর [অফিসিয়াল Linux installation নির্দেশনা](https://github.com/playit-cloud/playit-agent#installing-on-ubuntu-or-debian) অনুসরণ করে agent install করুন, তারপর `playit` চালান। Codespace network থেকে সেবাটি accessible হতে হবে।
3. দেখানো link দিয়ে agent account-এ যুক্ত করুন। Dashboard-এ **Minecraft Java / TCP** tunnel তৈরি করে local address `127.0.0.1`, local port `25565` দিন। Agent চালু রাখুন।
4. Dashboard-এর **public address ও port** Minecraft Java → Multiplayer → Add Server-এ দিন এবং বন্ধুদের দিন। Secret key কাউকে দেবেন না বা commit করবেন না।

## বন্ধ করা ও backup

- খেলা শেষে server console-এ `stop` লিখে পুরোপুরি বন্ধ হওয়ার জন্য অপেক্ষা করুন। তারপর playit বন্ধ করুন এবং Codespaces dashboard থেকে Codespace **Stop** করুন। Browser বন্ধ করলেই server নিরাপদে বন্ধ হয় না।
- Server বন্ধ থাকলে `./backup.sh` চালান। এটি default world, Nether, End, plugin data ও server configuration-এর timestamped backup `backups/`-এ রাখবে। Server চলমান থাকলে backup করতে দেবে না। `level-name` বদলালে script backup করবে না—server বন্ধ রেখে নিজের custom world folder, তার `_nether` ও `_the_end` folder এবং plugin/config files আলাদাভাবে backup করুন।
- VS Code Explorer-এ backup file-এ right-click → **Download** করে নিজের কম্পিউটারে রাখুন। Plugin data-তে secret থাকতে পারে, তাই backup গোপন রাখুন। একই Codespace-এর backup একমাত্র নিরাপদ কপি নয়: Codespace delete বা হারালে world-ও হারাবে।
- Restore করতে server বন্ধ রেখে বর্তমান world/config-এর backup নিন; তারপর backup extract করে সম্পূর্ণ পুরোনো world/plugin/config folder ফিরিয়ে দিন। আংশিকভাবে পুরোনো ও নতুন world folder মেশাবেন না। প্রয়োজনে নতুন খালি directory-তে extract করুন: `mkdir -p restore && tar -xzf backups/FILE.tar.gz -C restore`। তারপর প্রয়োজনীয় folder আগের জায়গায় ফিরিয়ে দিন। শুধু নিজের বিশ্বস্ত backup extract করুন।
- Codespaces idle timeout, ব্যবহার/বিলিং সীমা বা tunnel বন্ধ হলে server offline হবে; ২৪/৭ online থাকার নিশ্চয়তা নেই।

## Mods, settings ও plugins

- Upload করার জন্য `mods/` folder আছে, কিন্তু Paper Fabric/Forge/NeoForge mod চালাতে পারে না। Playit file যদি mod হয়, শুধু upload করলে কাজ করবে না; file-এর নাম বা link দিয়ে compatibility যাচাই করুন। Paper 26.3-compatible Playit **plugin** হলে সেটি `plugins/`-এ রাখুন এবং plugin-এর setup অনুসরণ করুন। বিকল্প হলো উপরে বর্ণিত standalone Playit agent। `mods/`-এর uploaded files backup script-এ নেই; দরকার হলে আলাদাভাবে backup করুন।


- `server.properties`-এ `motd`, `max-players`, `difficulty` ইত্যাদি বদলে server restart করুন। Default whitelist ও `online-mode=true` চালু রাখুন; RCON বন্ধ আছে।
- Default RAM 1–2 GB। কম RAM দরকার হলে `MAX_MEMORY=1500M ./start.sh`। `MIN_MEMORY` ও `MAX_MEMORY` দিয়ে বদলানো যায়; অতিরিক্ত RAM বরাদ্দ করলে Codespace অচল হতে পারে।
- Plugin দরকার হলে বিশ্বস্ত developer-এর **Paper 26.3-compatible** plugin JAR server বন্ধ অবস্থায় `plugins/`-এ রাখুন এবং restart করুন। Plugin স্বয়ংক্রিয়ভাবে ইনস্টল বা যাচাই করা হয় না; Java plugin সম্পূর্ণ server access পায়, তাই অজানা plugin ইনস্টল করবেন না।
- Server ইচ্ছাকৃতভাবে Paper 26.3 build 253-এ pinned; update করতে code ও checksum বদলাতে হবে এবং তার আগে backup নেওয়া উচিত। Paper পরিবর্তন vanilla gameplay/mechanics-এ কিছু পার্থক্য আনতে পারে।
- World, plugins, logs ও runtime files Git-এ commit হয় না। একাধিক server বা backup একই সঙ্গে চালু হওয়া ঠেকাতে lock ব্যবহার করা হয়; process চলার সময় lock file মুছবেন না।

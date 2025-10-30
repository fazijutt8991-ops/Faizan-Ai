// ✅ FAIZAN-AI Clean & Fixed Starter Script
// Author: Faizan Jutt
// Fixed by ChatGPT (v2.0)

import fs from "fs";
import path from "path";
import { exec } from "child_process";
import AdmZip from "adm-zip";
import { File } from "megajs"; // ✅ fixed import

// ───────────────────────────────
// ⚙️ CONFIGURATION
// ───────────────────────────────
const MEGA_LINK =
  "https://mega.nz/file/N6oQxYgZ#HNjpyhEgX2WvA3qOcpZZ5vhA6F8Y8tiLT16KTWrrvOc";
const DOWNLOAD_PATH = "./faizan-bot.zip";
const EXTRACT_PATH = "./faizan-bot";
const MAIN_SCRIPT = "index.js"; // main bot file

// ───────────────────────────────
// 📥 DOWNLOAD FUNCTION
// ───────────────────────────────
async function downloadFromMega() {
  console.log("📥 Downloading latest Faizan-AI files from MEGA...");

  const file = File.fromURL(MEGA_LINK);

  await new Promise((resolve, reject) => {
    file.download((err, data) => {
      if (err) {
        console.error("❌ Error while downloading:", err);
        reject(err);
      } else {
        fs.writeFileSync(DOWNLOAD_PATH, data);
        console.log("✅ Download complete!");
        resolve();
      }
    });
  });
}

// ───────────────────────────────
// 📦 EXTRACT FUNCTION
// ───────────────────────────────
function extractZip() {
  console.log("📦 Extracting files...");
  const zip = new AdmZip(DOWNLOAD_PATH);
  zip.extractAllTo(EXTRACT_PATH, true);
  console.log("✅ Extraction complete!");
}

// ───────────────────────────────
// 🚀 START BOT FUNCTION
// ───────────────────────────────
function startBot() {
  console.log("🚀 Starting Faizan-AI Bot...");
  const botPath = path.join(EXTRACT_PATH, MAIN_SCRIPT);
  const botProcess = exec(`node ${botPath}`);

  botProcess.stdout.on("data", (data) => console.log(data.toString()));
  botProcess.stderr.on("data", (data) => console.error(data.toString()));
}

// ───────────────────────────────
// 🧩 MAIN FUNCTION
// ───────────────────────────────
(async () => {
  try {
    // Download only if file doesn’t exist
    if (!fs.existsSync(DOWNLOAD_PATH)) await downloadFromMega();

    extractZip();
    startBot();
  } catch (error) {
    console.error("❌ Error during setup:", error);
  }

  // 🟢 Keep process alive for PM2
  setInterval(() => {}, 1000);
})();

import fs from "fs";
import path from "path";
import axios from "axios";
import chalk from "chalk";
import moment from "moment-timezone";

// --- Basic setup info ---
console.clear();
console.log(chalk.blueBright("🚀 Starting FAIZAN-AI..."));
console.log(chalk.greenBright(`🕒 ${moment().format("LLLL")}`));

// --- Load configuration ---
let config = {};
const configPath = path.join(process.cwd(), "config.js");

if (fs.existsSync(configPath)) {
  config = await import(`file://${configPath}?update=${Date.now()}`);
  console.log(chalk.yellow("✅ Config loaded successfully."));
} else {
  console.log(chalk.red("⚠️ Config file not found! Please check config.js"));
}

// --- Example startup message ---
console.log(chalk.cyan(`
-------------------------------------
🤖 FAIZAN-AI BOT IS NOW RUNNING!
-------------------------------------
`));

// --- Example async task ---
try {
  const res = await axios.get("https://api.github.com/repos/Faizan-MD-BOTZ/Faizan-Ai");
  console.log(chalk.magenta(`📦 Repo Info Loaded: ${res.data.full_name}`));
} catch (err) {
  console.log(chalk.red("❌ Failed to fetch repo info (no internet or API limit)."));
}

// --- Keep the bot alive ---
setInterval(() => {
  console.log(chalk.gray(`[${moment().format("LTS")}] 💡 Bot is active...`));
}, 60000);

// index.js — FAIZAN-AI simple startup test

import http from "http";

console.log("🚀 FAIZAN-AI is starting...");

// Simple HTTP server (to keep Replit / Render / Railway active)
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("✅ FAIZAN-AI BOT is running successfully!\n");
});

server.listen(3000, () => {
  console.log("💡 FAIZAN-AI is live at http://localhost:3000 or your deployment URL");
  console.log("💬 Everything is working fine. PM2 should keep it online.");
});

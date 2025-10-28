const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUxFOXRRR1lIaGxaZkZ3TVVBT3lkdXJNVjhwZnlnZjBldEU4Skc2U1RHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0kvTWtxcW1SYnlHZVhMV0pHV2hiQWE1TFlzaWtVaFYyUC9ENWk0Wk9SRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1TTZPWS9zUHVlVWthL2FWYnZMVm5VMTlrOStoZm5jNG5HSU1BYlNyL0d3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoVGtFZytyZHZRelYzZnI0TzdySXhMcXVNMXpRQlAyWWY5bVJQR1ZSdTJzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdJQ2dqRDN4Z0FsWUpHVTFrTzZEUnhFY3owMGk1cFQzeFdaQkpidzhSWFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkMrNFFOTTVQZGxESnphd1dUUFhubXUvME5QeUVuWmxBR2plQTJOVVhPQmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUVUUzFocFpnVHRpMjBWK3hXMTQ0dnhGZGJ1VmMyK2x4R0JwSTJlNVcybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVo0M0VldXRKSGVLS1Vsd1BtQW90aFhCVXc4ZThzUE01S010SjNzVjBIMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdPSFczZWFTVEJEWE8xcmlEODJUWkZQUkZmT0Z6Yy9YZkozUHVjZ0s3MG9pV05FeldCSzFXVU5lTldnYjVaaFFwaWlhYTN5T2lpSUZlbHNhbDg0K0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYsImFkdlNlY3JldEtleSI6IjMvOWs0Zi9LSjRjYnVsYTI3VmQwY2tHdWFRbzBrN2pyTGRSbFdGc0Jnd1k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzQwOTI4NzEwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDQ0RDODQ4QjMxNzVFMDg5Rjk0QkRFRUE5ODMwRTBCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjE2NzIwMzV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzM0MDkyODcxMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzEyRTVEM0ZGQzk5RkUzQTVBN0Y4MkQ4NkNENjI4MiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYxNjcyMDM3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzNDA5Mjg3MTBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM4OTk5RDhCNzJGQTdDRkI4NDI5NzNFMDcwNzE0NTAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MTY3MjA1N30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzQwOTI4NzEwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDMjBBODUyMTNENUNERTBEMzZFQTc0NzRBRDZGQkU1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjE2NzIwNjJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjF6MmRhNGFuUzNTM2xrOFBZUXZlRnciLCJwaG9uZUlkIjoiMDI0ZDRlYzAtNTY1ZS00YmZhLWJjMmItODRhMDI0ZDExMmIwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdSeXdxRE96VmtodkpEd0cwNDErMy8zZEVXcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVUmhWK1VzU09HNXRQRHlqd2lUdjVLN0pVN0U9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiREVWU1BBQ0UiLCJtZSI6eyJpZCI6IjkyMzM0MDkyODcxMDoyMEBzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijk2Mzc1Mzc1MTUxMjY5OjIwQGxpZCIsIm5hbWUiOiJmIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMR1FtYzBDRU5EMmc4Z0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJkTllidGxBN2VCUHpTVDdzUHk3M0VsemlKaDArdGJHa2ErbExmWTF4SXhnPSIsImFjY291bnRTaWduYXR1cmUiOiIrRU1yaEdVNDhHbENTYlBMU2QvN20wT3NNSTN2TnQzeWtBejhLSkpvdUpYa0QxL2lqbzZRZXorQzk5bCtRL3V3dngwUGtkaWhGdWZ0RjNvMjJKUWdDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibkl6SGhHS1RFS0l1a2NENzRwOWhPdGhtZWFwMDdTZjI2L0QxMzZGWDJsOCs4MUY0Z1FEVkdPS3hta2xlY1NqdWwyS3VOdTNRajZ0UGtoSTNvaU4yQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzNDA5Mjg3MTA6MjBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWFRXRzdaUU8zZ1Q4MGsrN0Q4dTl4SmM0aVlkUHJXeHBHdnBTMzJOY1NNWSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYxNjcyMDMxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNkeCJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY FAIZAN-AI 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.ibb.co/9mdHyGDL/shaban-md.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "FAIZAN-AI",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "FAIZAN-AI",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923266105873",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*FAIZAN-AI*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ FAIZAN-AI ❣️*",
// add bot owner name    
ALIVE_VID: process.env.ALIVE_VID || "https://i.ibb.co/9mdHyGDL/shaban-md.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923266105873",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANAYAT-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVBLOG9qelM3cG9SdENPTFk3bU1MYU9LZzNhSUxuamtHWGZEVUxkTTRGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNDBXR2FyWlFFbm9FQWlJVDJDRm1wZEVTenloa1J1M1JBNS9uTUJzcXVnND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTSTRPUU1SU2Y3QzFreU5lY0hwaWZMenUwVG9Dbysya2V6dDgvak14VzJnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQzREWEJBQkF2cHlOdkM2Nmt6UzVHSDNhelFtRUFZQktDRzNLU0NhcW00PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktQNDJNMXpFeVVTcUJLTU9nYlJCckhFa0VJc3h1UFdPMXQ1TlVVQTIyR2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdMRE90TVgwa0V6VnMvOTNVbGhGOHlDcUN3MHhxME5uNTNuWDdNemVYaTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0JKRVNOZU5NUVFSMmM0dVlxQWZMVlhQN2Z4Y2lWM1FKcVM1TU44SG9rcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3hqNXhoalZKa2JkdVRLNTZFTUtpajExMTkxRnFjN3dseE96cWRXMytnST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhoRlZDRng4Y01IZWY3U0xiNHk4SXVxSnozUjQvOUxITmpWUkNtTGxNalA3aUxhQXJUWGVyV01tNVdMSzB2QlNTSXpURHE3UlpPSXVXR1krNUpySUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM0LCJhZHZTZWNyZXRLZXkiOiJ0YmtuNHBuNGl4M1lhbERxZFNRSHlsSStJR1MyaEdEUUVEblBEazNmS3V3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJFTEFJTkFNRCIsIm1lIjp7ImlkIjoiOTIzMzQwOTI4NzEwOjI4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiOTYzNzUzNzUxNTEyNjk6MjhAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMU1FtYzBDRVA3WW1NZ0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJkTllidGxBN2VCUHpTVDdzUHk3M0VsemlKaDArdGJHa2ErbExmWTF4SXhnPSIsImFjY291bnRTaWduYXR1cmUiOiIxYkFtZUV6dzE3U1kzRmpPdC9uMnNXMzI0R0QrQkhTUC9KUzJpbzJ3dVZ0R2UwZGMvMmRxa3JiZWhQOUJkTFg3Q25SZW9sNVNkSjVkSW1qckZuNUNDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiejh1N1pjdHVGYlZ5QlJUOHVuNys2TVZmMmxjdGxMZEs5UUNQdzUwMHlXZDI1K00yUzE5T3duZHBaSVl2eW1XOTJ2Sm91dDlGNjlOU3J2NFZzZTVHQlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzNDA5Mjg3MTA6MjhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWFRXRzdaUU8zZ1Q4MGsrN0Q4dTl4SmM0aVlkUHJXeHBHdnBTMzJOY1NNWSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYyMDEyMjk5LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR1ZnIn0=",
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

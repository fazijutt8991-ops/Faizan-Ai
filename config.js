const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ANAYAT-AI~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0lMWXJrSVZPbUlBcm5OZVB3cmU0R0d3TjcrQzFnZWtBajBVbDI1WnIzWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1o1c3hTeVlmN0Z1Y1NoQ2FJTnVPV2RPYWtXQ3o2NWxNTHFlTzAvUHlWRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTWUwQmhISm1PRXRTVEcvQWIwUDFSN085L2ZrbjJ5eHZHODRmdjljTm1vPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKaEpWVWpsNENzcEowV1UvQ050blk1emVHN1VZTkJ2L0UvckZmYnhvcVR3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNFNGxlNExWancwTXo4TmwrWjZOOWtHSGZYdnRlYlo1MGlOTXFiTzl3MTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldBR2JFRWVnK2FrUldwQkRNeHl0MGNiQ1NLU1FTeDhveXV5ZzVSYmRhVFE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMksxWXZZa01CcHpNOVZJUlVsWnFpUjl4OWNuMDFNanJob21BOFRXYlcwRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQm1nOTF1MndHOGZ0Y3FGSUIxSGpOOFlIb3lCa0FBd05leE1qK1lhWDRsRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlQUEtiaWFHZ2t3eVRzTlJZWFk0MDdiNVNTak11b0NYWVEyay94NlZleWNLNlZUK2RlN1R6aU5jN25DdnNzekdNdnVFcWtxcVpLc3V6aWEyb0VCdEFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzUsImFkdlNlY3JldEtleSI6ImlBcHFFSkFDSTR6UnBFK2k3ZWYrUTgrSXkvK2QvSE04WkYvMHpVV0FvQk09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzNDA4NTc2Njc0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDMTIwNTEwRkU5MkQ4ODVGNzgwNTVDRDQxRDhENjAyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjIwMjU1NDZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzQwODU3NjY3NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzE3QzIzNTRDQ0RFQzRBN0VBMkU3NDJBRkNEOTY3MiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYyMDI1NTQ2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjM0MDg1NzY2NzRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUMzMkQ3Q0YwQzU3OUI3QjcwNTk2QjRBQjlCMkZGQTkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MjAyNTU0N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiRUxBSU5BTUQiLCJtZSI6eyJpZCI6IjkyMzQwODU3NjY3NDoxMEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjEyNTQ5MTAwODgxOTQwNzoxMEBsaWQiLCJuYW1lIjoiZmFpemFuanV0dG03NDUxIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOT1ArNndDRUxuQW1jZ0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJyZzk1ZXVndUVYQlAya3JpSys5U3BmSXRqT1Naam0xU080VnZEL3YwL2tZPSIsImFjY291bnRTaWduYXR1cmUiOiJDMGhaeWVhMWQ4VXFIMW9ldXlkTGlyR3IxZW5FUWMrSHhaWFlTaE1zMDRPa0NnTVQ2TkpqQXJhWGVsTCtIU2Nza3RWRnMvVjRuLzVBYVFkcG1MczdBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibXZrUUxmT29tcDFidUhZdnEreFpLeHNUZDZRSXIxRnFzd0JJRlRJNHRIWTJnakNGd2lodittTXgzcjFOdFF1RStaN2l6bkQvdnpGVHRtUXE5MG90QXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0MDg1NzY2NzQ6MTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYTRQZVhyb0xoRndUOXBLNGl2dlVxWHlMWXprbVk1dFVqdUZidy83OVA1RyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYyMDI1NTQyLCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9DciJ9",
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

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "EDITH-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUhyYXM0enFwcU1TMzdOOUxsdnBrTzl6UmEvWXgxdU1XTWlOWUtLTTVHWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOTFua0pRVFBzSnZQMDlIMnVwUnVhQWM2d3gwN3lvRzMxd1pIYUpVMFJDcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDTXBzK2RUZHZyUHBlcHNXUWczOVNYSDNaODJITWQyTjlmSlZUdkRNWGswPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3Qlp2aCtLdWw1TU5jc056QlNDeS9lbThENGdYMEU5eFJINHhJbW9FL3lBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1KZ3RJL1dqcUZFVFlOSGxldnUrcEE0aXIrWnB5Zll1VjJuWnBKbmxpbk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlcyaWREL0NnUDlISi80WXU5djNMRTR3QUtWQnVzYUY2UDNIOXIvQXpkQWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUwybTc3S2QwbmhyRS9naXd4U0FseVkzQURzcXdTWmlSaDVTa2lsc0ZGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmhJekhnU3BIL2dYRjl2K3lNTHg0TEx2ZnE1YmIvTVhYdzA1NXdHM0kyaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlSbG53MEg3MDMya3huUU1kUjVObkpUdUJkT3J1b1VmNjEzN21iL3lDMnowT2ZmVDZQdmlYQVY3OGFtbkJrWVZjSC9OS0JmRWk3VVhaYS8vTlRlNGdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIxLCJhZHZTZWNyZXRLZXkiOiIvVjlUYlFwc1Jua1VmMGxJd3JleldnRXhTSlV3bVdwOFNqeFRiTVJ6L2cwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMwNTEzMTM0MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5RTNBNEM2RDg5NkU0NERBMjBBQjI3NEExOTYxQzE1MiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUzNzc4MTc0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzMDUxMzEzNDBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiODg3RjRERUFCQzY3RTcxMEY0MTdGREU3NkRCMTI3MDAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1Mzc3ODE3NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzA1MTMxMzQwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjlCNTJGQTFGRUJBNzRBM0E2M0FGQkRCNUIzOTdGMDdFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTM3NzgxNzZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkVESVRIMTIzIiwibWUiOnsiaWQiOiI5MjMzMDUxMzEzNDA6MUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE0MTk1MzYwMTY0MjY5MToxQGxpZCIsIm5hbWUiOiJjaXR5IHBvbGljZSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT1Mxb3hjUStvK2l4QVlZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSE5WeFg2S2pNS2xNUWhlZ2JhZUhrTWZISEtHVUM1WDE0RDZQMlBPYjJSZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSXNLRkRoSG9WWkFhZG52NnRqSXFGWFc1VDA3ZzJPRXJibzRFRWxsNnpzRjcvNDF5UHhjbmszNmxlbnNDU2s0SmVzTzlzKzFUaDN6VVdVSE1NZTFHQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6Im43NW5LU1dXNDBIM2U5eHNuQ2ZxQjQ0b0JlWU1TR0RiZkZpTXNNekc2NExqTUhobUFoOXFIT2lrSWFZdjFEdDI1Ui9MRUE2N0hRVG5ybmoxZ3k1NWlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMzA1MTMxMzQwOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUnpWY1YraW96Q3BURUlYb0cybmg1REh4eHlobEF1VjllQStqOWp6bTlrWSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUzNzc4MTcyLCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9DMSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Arslan_MD 🇵🇰*",
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
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/yj7zp0.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Arslan_MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "Arslan_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ArslanMD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Arslan_MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/yj7zp0.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*Arslan_MD*🇵🇰",
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
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};

const fs = require('fs');
if (fs.existsSync('bot.env')) require('dotenv').config({ path: './bot.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
BOT_URL: process.env.BOT_URL || "https://raw.githubusercontent.com/BROKENMDofficial/BROKEN-MD-DATA/refs/heads/main/datafile.json",
AUTO_SITE: process.env.AUTO_SITE || "https://brokenshahbaz-apis.vercel.app/",
BAND_URL: process.env.BAND_URL || "https://raw.githubusercontent.com/BROKENMDofficial/BROKEN-MD-DATA/refs/heads/main/datafile.json",
REPO_LINK: process.env.REPO_LINK || "https://github.com/Arslan-MD/KIRA-MD",
REPO_NAME: process.env.REPO_NAME || "BROKEN 𝗠𝗗 𝗕𝗢𝗧 V1",
BOT_NAME: process.env.BOT_NAME || "BROKEN 𝗠𝗗 𝗕𝗢𝗧 V1",
DESCRIPTION: process.env.DESCRIPTION || "BROKEN 𝗠𝗗 𝗕𝗢𝗧 V1 PAKISTANI POWERFULL WHATSAPP BOT",
OWNER_NUMBER: process.env.OWNER_NUMBER || "923203734432",
OWNER_NAME: process.env.OWNER_NAME || "BROKEN SHAHBAZ Official",
ST_SAVE: process.env.ST_SAVE || "BROKEN 𝗠𝗗 𝗕𝗢𝗧 V1-STATUS-SERVER",
BIO_TEXT: process.env.BIO_TEXT || "BROKEN 𝗠𝗗 𝗕𝗢𝗧 V1-BY-BROKEN SHAHBAZ Official",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*`STATUS SEEN BY KIRA-MD`* _*POWERD BY*_ *BROKEN SHAHBAZ Official Whtsapp Bot*",
FOOTER: process.env.FOOTER || "KIRA-MD",
COPYRIGHT: process.env.COPYRIGHT || "*㋛ BROKEN 𝗠𝗗 𝗕𝗢𝗧 V1 BY BROKEN SHAHBAZ Official*",
VERSION: process.env.VERSION || "9.0.0",
NEWSLETTER: process.env.NEWSLETTER || "120363413821588578@newsletter",
WA_CHANNEL: process.env.WA_CHANNEL || "https://whatsapp.com/channel/0029VbDMOp3LSmbkHSqjPR1L",
INSTA: process.env.INSTA || "https://www.instagram.com/shahbaz759553?stkn=MTA1N3h3MjludnE3dw==",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.supaimg.com/f1745ecd-7fcf-4024-9c5d-c19ca3436c7c/4c04f3b1-d8d6-459e-a304-6da98a9fbfee.png",
OWNER_IMG: process.env.OWNER_IMG || "https://i.supaimg.com/f1745ecd-7fcf-4024-9c5d-c19ca3436c7c/27299b36-dbf2-44b3-9eab-08bca097bd59.jpg",
CONVERT_IMG: process.env.CONVERT_IMG || "*https://i.supaimg.com/f1745ecd-7fcf-4024-9c5d-c19ca3436c7c/4c04f3b1-d8d6-459e-a304-6da98a9fbfee.png",
AI_IMG: process.env.AI_IMG || "https://i.supaimg.com/f1745ecd-7fcf-4024-9c5d-c19ca3436c7c/4c04f3b1-d8d6-459e-a304-6da98a9fbfee.png",
SEARCH_IMG: process.env.SEARCH_IMG || "https://i.supaimg.com/f1745ecd-7fcf-4024-9c5d-c19ca3436c7c/4c04f3b1-d8d6-459e-a304-6da98a9fbfee.png",
DOWNLOAD_IMG: process.env.DOWNLOAD_IMG || "https://i.supaimg.com/f1745ecd-7fcf-4024-9c5d-c19ca3436c7c/4c04f3b1-d8d6-459e-a304-6da98a9fbfee.png",
MAIN_IMG: process.env.MAIN_IMG || "https://i.supaimg.com/f1745ecd-7fcf-4024-9c5d-c19ca3436c7c/4c04f3b1-d8d6-459e-a304-6da98a9fbfee.png",
GROUP_IMG: process.env.GROUP_IMG || "https://i.supaimg.com/f1745ecd-7fcf-4024-9c5d-c19ca3436c7c/4c04f3b1-d8d6-459e-a304-6da98a9fbfee.png",
FUN_IMG: process.env.FUN_IMG || "https://i.supaimg.com/f1745ecd-7fcf-4024-9c5d-c19ca3436c7c/4c04f3b1-d8d6-459e-a304-6da98a9fbfee.png",
TOOLS_IMG: process.env.TOOLS_IMG || "https://i.supaimg.com/f1745ecd-7fcf-4024-9c5d-c19ca3436c7c/4c04f3b1-d8d6-459e-a304-6da98a9fbfee.png",
OTHER_IMG: process.env.OTHER_IMG || "https://i.supaimg.com/f1745ecd-7fcf-4024-9c5d-c19ca3436c7c/4c04f3b1-d8d6-459e-a304-6da98a9fbfee.png",
MOVIE_IMG: process.env.MOVIE_IMG || "https://i.supaimg.com/f1745ecd-7fcf-4024-9c5d-c19ca3436c7c/4c04f3b1-d8d6-459e-a304-6da98a9fbfee.png",
NEWS_IMG: process.env.NEWS_IMG || "https://i.supaimg.com/f1745ecd-7fcf-4024-9c5d-c19ca3436c7c/4c04f3b1-d8d6-459e-a304-6da98a9fbfee.png",
PP_IMG: process.env.PP_IMG || "https://i.supaimg.com/f1745ecd-7fcf-4024-9c5d-c19ca3436c7c/4c04f3b1-d8d6-459e-a304-6da98a9fbfee.png"
};

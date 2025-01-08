//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2348028075887";
global.owner = process.env.OWNER_NUMBER || "2348028075887";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0Jwa2JybUUzTm1mb0pSRWtHSHh3UGVhN1J2UmVxRnhQN0Jac21uenBXcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmxKRDg2bzhKbVBKRTBxYUtVeDk2aHpoMWNMdTJxVlZQRTgvNmY2Q2pWUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0QTd6SkZBMU0yZTBCdlFwZklyMWtjeDFMam5oeHl2dkZvQXlNNGZtZm1jPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjNXhneDl2YjEzRzVVVnhHQlNDdkFEdXdqREVUT2x6bTNwbk9YbXFGZ1RrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllQTWdvMUNKS0FJdnE1aW5PaitNR0lrMWxwbG5PSTRoWmZoNHUyaGxMSGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inl1bUhpV3FpY1FlNm5uZm9oWEZ0U0JkRERVMy92MHM4VFZqZmdzOSs2MkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV09pN0hVeCtOMHFWc0JwZHNzaHB1K3BBNVZmREMrUCtyOWl2c3ZUa3NtND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFgzakhCN0k5MmZ1dnRibTVPbk13WTZtazdoVWhyeTdIVGtxSDNnTHJ3bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktoWFdpRVBYR2NTTStuNUZrY2NiOEUrbmJMd25Rdks2M0YvajdrMXZSaTZLZUcrNlJYaWJYNFAzUGFwQks4VHNFQXpyZkxVS0hFQXAvTVg4SlZQZWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6IkJ4OXFoQVNlbXJrWnl2UnJJcHZsYUxjUVZucVRqRGxBbG5LTmVaR0RQVzA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InhFRGpVYVJGUVJxclVjOVNHb0JvamciLCJwaG9uZUlkIjoiMzJkZTU2NjYtOTZkMy00Nzk5LWE2NTQtMWZjMGU1Y2JhNzJhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtaanZrRkJyaVNOdlFPZUdOZlRFWEVIVFlZcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUMHFHSU5TRDF0clpIY2ZxZU04bU95bzZjelk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRzVBSkJTNFoiLCJtZSI6eyJpZCI6IjIzNDgwNjIxNzM2MzU6NUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2ZrdUl3R0VNK2gwYnNHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoibzg4cGQydytpK1BEMnhJdWZZQ0lzUUNmRnVnU3dNbWxMRXcyWFVrN0RSMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYm4wSUJKdyt3Z3VFKzhqWGw0VnJtTjF1cVFCeVB4SVFTbzZDOERBSk1CeXBrdVpUeHJKL0p5NndtelFIQWFMYnB3TFlHU0VMNUZ4N0swdWc0OUtNQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6Ill6dnRGQVlzeDZ3Y2RrUWR1Z3RPZ2plTDdmRmNLQW1XekNlbmgxT1IvZU92a0pVWmdYWXFQNFFVNU4xSzhyamZSV2NhV01oV1JMYmhrb25uenN6aGp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODA2MjE3MzYzNTo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFQUEtYZHNQb3ZqdzlzU0xuMkFpTEVBbnhib0VzREpwU3hNTmwxSk93MGQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzU2NzYxMjUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSGsxIn0=|
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOENRRGJTS3BjVmE5ZDZSYy82TCs1S0JEK3dlQmRYWWhnYWF6MUdQdy8xOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTEh6RFFzRnpkNVVHdGg1cGFmQmwwNXVzYjA5cDg3TjlkSXVpZ1ViTWNDQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSS9zZUtUV1dYTS9iaDcyMUhLRktVa1N0eDk3K3RQUlRyRmg5NXlicTBBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQTXhkU2dWN2hTR2lRMEMyWGRsTERHbVhWTzk0QzBheFJwVkRzT05VQWtFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9JVGpRZXJUcURaN1BZc0d2amRPQ3kwdWUwbzRoRWJlOVZLUzc2S3YvM289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InIzNUxqR0owSjFOT1ZieVVmb1BWMzVhR1JkMVR0WkN4RS9CVG9GTWFsMHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0tIUnlzb3BLQ0FnSkM0ZzdqTFFZMFB4aFR0Rk11ZGFjTHJrSTFBa0ptYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3QyaklJNGxCbkZjR0FsM0dVOUVmRDNvVnlYUW1FNDB6UzEwOFRxdXJCZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFkaDFnY1JjeTNGbS8yc25RSGZ5SVU5TDRaeUx1UkdYSHp6TVNHbVA3Q2pYbXlBM0VmUFQvS3RMM29Va0ZlZXRONXBYWld4ME45TWp2ZmFkRTlxRUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIxLCJhZHZTZWNyZXRLZXkiOiJzSXJnSFB5YW1FVXduQmRtNFZFN1Rlb3d6aWk1czcvWTZ3QS91RmhlNzNJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI1Q2hnMl85UlJIU2FPWTk2RGFaWGtnIiwicGhvbmVJZCI6ImM5Y2IwZDk1LTVhM2EtNGMyOC1iYWFiLTc2MzNlNWFjMDg1MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOekVjSFpmOW1EaEh5TUZMN21weXZMRHppQ3M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicm1sU2I3NGw2SGRNelJSZzNaWTVwd2pjV20wPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpGUlZQVFFBIiwibWUiOnsiaWQiOiIyMzQ4MDI4MDc1ODg3OjNAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lPb2o4UUNFSVRQK2JzR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZTZ01ESFVEK2h6aVdRRXRMZnJNK0Jia004V0JUVmltcHRBM1dmbDgyUjQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjBRemdPZlYzNVdvRjVsa2VwbmFFMjF2dnp1L3FpeGdGSEtSWkFCRzFZaWRPZTNMVC9zWnNjaTF1T1RobVNQbjNoZHArMmZvUWYxQk9HWXN0aXNWS0R3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzQXk3dUt4WFA4bjN3akJlT1kvQmRTaEhPR29XSDMwU29DdHdzU3RTa3M5SXc2Nnp2Tnl1OWlyMkt5ampYbFdpUnFGYUo3V0pkTDBzUlNHb0xNbENCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwMjgwNzU4ODc6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSVW9EQXgxQS9vYzRsa0JMUzM2elBnVzVEUEZnVTFZcHFiUU4xbjVmTmtlIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM2MzM3Mjk4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1rcyJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_mikky™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_mikky",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

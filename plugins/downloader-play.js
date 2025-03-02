import fetch from "node-fetch";
import yts from "yt-search";
/**
 *
 * @param {*} query
 * @param {*} options
 * @returns
 */
async function search(query, options = {}) {
  const search = await yts.search({ query, hl: "es", gl: "ES", ...options });
  return search.videos;
}

function MilesNumber(number) {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = "$1.";
  let arr = number.toString().split(".");
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join(".") : arr[0];
}

function secondString(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " día, " : " días, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " horas, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " minutos, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundos") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
  if (!text)
    throw `*[❗خطاء❗] اكتب الامر من ثم اكتب الذي تريد البحث عنه بجانب الامر ياحب الخال*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${
      usedPrefix + command
    } Good Feeling - Flo Rida*`;
  try {
    const yt_play = await search(args.join(" "));
    let texto1 = `*◉—⌈🔊 تم التحميل من قبل بوت القياده الخال بلاي يوتيوب 🔊⌋—◉*\n
❏ 📌 *𝚃𝙸𝚃𝚄𝙻𝙾:* ${yt_play[0].title}
❏ 📆 *𝙿𝚄𝙱𝙻𝙸𝙲𝙰𝙳𝙾:* ${yt_play[0].ago}
❏ ⌚ *𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽:* ${secondString(yt_play[0].duration.seconds)}
❏ 👀 *𝚅𝙸𝚂𝚃𝙰𝚂:* ${`${MilesNumber(yt_play[0].views)}`}
❏ 👤 *𝙰𝚄𝚃𝙾𝚁:* ${yt_play[0].author.name}
❏ ⏯️ *𝙲𝙰𝙽𝙰𝙻:* ${yt_play[0].author.url}
❏ 🆔 *𝙸𝙳:* ${yt_play[0].videoId}
❏ 🪬 *𝚃𝙸𝙿𝙾:* ${yt_play[0].type}
❏ 🔗 *𝙻𝙸𝙽𝙺:* ${yt_play[0].url}`.trim();
    const buttons = [
      {
        buttonId: `#ytmp3 ${yt_play[0].url}`,
        buttonText: { displayText: "🎵 صوت 🎵" },
        type: 1,
      },
      {
        buttonId: `#ytmp4 ${yt_play[0].url}`,
        buttonText: { displayText: "🎥 فديو 🎥" },
        type: 1,
      },
      {
        buttonId: `#playlist ${text}`,
        buttonText: { displayText: "📋 اختيار المزيد 📋" },
        type: 1,
      },
    ];
    let buttonMessage = {
      document: { url: "https://wa.me/967711023486" },
      fileName: "❏ 🌿 ʀᴇᴘʀᴏᴅᴜᴄᴛᴏʀ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ",
      mimetype: "application/vnd.ms-excel",
      caption: texto1,
      fileLength: "99999999999999",
      mentions: [m.sender],
      footer: wm,
      buttons: buttons,
      headerType: 4,
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          showAdAttribution: true,
          title: `${yt_play[0].title}`,
          mediaType: 2,
          previewType: "VIDEO",
          thumbnailUrl: yt_play[0].image,
          mediaUrl: `${yt_play[0].url}`,
          sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`,
        },
      },
    };
    conn.sendMessage(m.chat, buttonMessage, { quoted: m });
  } catch {
    try {
      let vid2 = await (
        await fetch(
          `https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`
        )
      ).json();
      let { videoId, title, views, published, thumbnail } = await vid2
        .result[0];
      const url = "https://www.youtube.com/watch?v=" + videoId;
      let ytLink = await fetch(
        `https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`
      );
      let jsonn = await ytLink.json();
      let aud = await jsonn.result.audio;
      let capt = `❏ 📌 *𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}\n❏ 📆 *𝙿𝚄𝙱𝙻𝙸𝙲𝙰𝙳𝙾:* ${published}\n❏ 👀 *𝚅𝙸𝚂𝚃𝙰𝚂:* ${views}\n❏ 🔗 *𝙻𝙸𝙽𝙺:* ${url}`;
      const buttons = [
        {
          buttonId: `#playlist ${title}`,
          buttonText: { displayText: "📋 اختيار المزيد 📋" },
          type: 1,
        },
      ];
      const buttonMessage = {
        image: { url: thumbnail },
        caption: capt,
        footer: "*ᴇɴᴠɪᴀɴᴅᴏ ᴀᴜᴅɪᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*",
        buttons: buttons,
        headerType: 4,
      };
      let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m });

      conn.sendMessage(
        m.chat,
        {
          audio: { url: aud },
          mimetype: "audio/mp4",
          fileName: `${title}.mp3`,
        },
        { quoted: msg }
      );
    } catch {
      throw "*[❗خطاء❗] اكتب الامر ثم اكتب بجانيه الذي تريد البحث عنه ياحب الخال*";
    }
  }
};
handler.help = ["play", "play2"].map((v) => v + " < busqueda >");
handler.tags = ["downloader"];
handler.command = /^play2?$/i;
export default handler;

/*import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙼𝙰𝚂 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴/𝚃𝙸𝚃𝚄𝙻𝙾 𝙳𝙴 𝚄𝙽𝙰 𝙲𝙰𝙽𝙲𝙸𝙾𝙽*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
try {
let vid = (await youtubeSearch(text)).video[0]
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const urll = 'https://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `#ytmp3 ${urll}`, buttonText: { displayText: '🎵 𝐀𝐔𝐃𝐈𝐎 🎵' }, type: 1 },
{ buttonId: `#ytmp4 ${urll}`, buttonText: { displayText: '🎥 𝐕𝐈𝐃𝐄𝐎 🎥' }, type: 1 },
{ buttonId: `#playlist ${text}`, buttonText: { displayText: '📋 𝐌𝐀𝐒 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒 📋' }, type: 1 }, ]    
let texto1 = `*◉—⌈🔊 𝐘𝐎𝐔𝐓𝐔𝐁𝐄 𝐏𝐋𝐀𝐘 🔊⌋—◉*\n
❏ 📌 *𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}
❏ 📆 *𝙿𝚄𝙱𝙻𝙸𝙲𝙰𝙳𝙾:* ${publishedTime}
❏ ⌚ *𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽:* ${durationH}
❏ 👀 *𝚅𝙸𝚂𝚃𝙰𝚂:* ${viewH}
❏ 📇 *𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:* ${description}
❏ 🔗 *𝙻𝙸𝙽𝙺:* ${urll}`.trim()
let buttonMessage = { "document": { url: "https://wa.me/5219992095479" }, "fileName": '❏ 🌿 ʀᴇᴘʀᴏᴅᴜᴄᴛᴏʀ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ', "mimetype": 'application/vnd.ms-excel', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `${title}`, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch(thumbnail)).buffer(), "mediaUrl": `${urll}`, "sourceUrl": `https://github.com/BrunoSobrino/TheMystic-Bot-MD` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
try {
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `❏ 📌 *𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}\n❏ 📆 *𝙿𝚄𝙱𝙻𝙸𝙲𝙰𝙳𝙾:* ${published}\n❏ 👀 *𝚅𝙸𝚂𝚃𝙰𝚂:* ${views}\n❏ 🔗 *𝙻𝙸𝙽𝙺:* ${url}`
const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: '📋 𝐌𝐀𝐒 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒 📋'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*ᴇɴᴠɪᴀɴᴅᴏ ᴀᴜᴅɪᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mp4', fileName: `${title}.mp3`}, {quoted: msg})
} catch {  
throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*'}}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
export default handler*/

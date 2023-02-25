import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[❗خطاء❗] يمكنك كتابة الامر اولاً من ثم كتابة الذي تريد البحث عنه ياحب الخال*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} Good Feeling - Flo Rida*`
try {
let vid = (await youtubeSearch(text)).video[0]
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const urll = 'https://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `#ytmp3doc ${urll}`, buttonText: { displayText: '🎵 مقطع صوت 🎵' }, type: 1 },
{ buttonId: `#ytmp4doc ${urll}`, buttonText: { displayText: '🎥 فديو 🎥' }, type: 1 },
{ buttonId: `#playlist ${text}`, buttonText: { displayText: '📋 اختيار المزيد 📋' }, type: 1 }, ] 
let texto1 = `*◉—⌈🔊 تم التحميل من قبل بوت القياده الخال 🔊⌋—◉*\n
❏ 📌 *𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}
❏ 📆 *𝙿𝚄𝙱𝙻𝙸𝙲𝙰𝙳𝙾:* ${publishedTime}
❏ ⌚ *𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽:* ${durationH}
❏ 👀 *𝚅𝙸𝚂𝚃𝙰𝚂:* ${viewH}
❏ 📇 *𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:* ${description}
❏ 🔗 *𝙻𝙸𝙽𝙺:* ${urll}`.trim()
let buttonMessage = { "document": { url: "t.me/Driving_uncle_personally" }, "fileName": '❏ 🌿 ʀᴇᴘʀᴏᴅᴜᴄᴛᴏʀ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ', "mimetype": 'application/vnd.ms-excel', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `${title}`, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch(thumbnail)).buffer(), "mediaUrl": `${urll}`, "sourceUrl": `https://github.com/BrunoSobrino/TheMystic-Bot-MD` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
try {  
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `❏ 📌 *تم التحميل من قبل بوت الخال:* ${title}\n❏ 📆 *𝙿𝚄𝙱𝙻𝙸𝙲𝙰𝙳𝙾:* ${published}\n❏ 👀 *𝚅𝙸𝚂𝚃𝙰𝚂:* ${views}\n❏ 🔗 *𝙻𝙸𝙽𝙺:* ${url}`
const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: '📋 اختيار المزيد 📋'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*ᴇɴᴠɪᴀɴᴅᴏ ᴀᴜᴅɪᴏ, ᴀɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { document: { url: aud }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: msg})
} catch {  
throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*'}}}
handler.help = ['playdoc', 'play3'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play3|playdoc?$/i
export default handler

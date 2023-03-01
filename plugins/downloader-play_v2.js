import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `[❗خطاء❗] اذا كنت تريد تحميل شيئً ما عليك كتابة الامر اول شي ومن ثم اكتب الذي تريد تحميله بجانب الامر ياحب الخال\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:\n#play.1 Good Feeling - Flo Rida*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
if (command == 'play.1') {
conn.reply(m.chat, `*_⏳جاري التحميل اليك انتظر قليلاً ياحب الخال...⏳_*`, m)  
let json = await res.json()
let aa = conn.sendMessage(m.chat, { audio: { url: json.result.audio }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })
if (!aa) return conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `*_⏳جاري التحميل اليك انتظر قليلاً ياحب الخال...⏳_*`, m)
let json = await res.json()
conn.sendFile(m.chat, json.result.video, 'error.mp4', `_بوت القياده الخال_`, m)}
} catch (e) {
m.reply('*[❗خطاء❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*')
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
export default handler

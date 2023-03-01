import fetch from 'node-fetch'
import translate from '@vitalets/google-translate-api'
const teks = '*0 - Sí*\n*1 - No*\n*2 - No sé*\n*3 - Probablemente sí*\n*4 - Probablemente no*\n*5 - Volver a la pregunta anterior*'
export async function before(m) {
if (global.db.data.users[m.sender].banned) return
if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text) return !0
let aki = global.db.data.users[m.sender].akinator
if (!aki.sesi || m.quoted.id != aki.soal.key.id) return
if (!somematch(['0','1','2','3','4','5'], m.text)) return this.sendMessage(m.chat, { text: `*[❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙲𝙾𝙽 𝙻𝙾𝚂 𝙽𝚄𝙼𝙴𝚁𝙾𝚂 𝟷, 𝟸, 𝟹, 𝟺 𝚘 𝟻*\n\n${teks}` }, { quoted: aki.soal })
let { server, frontaddr, session, signature, question, progression, step } = aki
if (step == '0' && m.text == '5') return m.reply('*[❗] خطاء ارسل الامر مرة ثاني مع اسم العبه الذي تريد يشترط ان تكتب اسمها انجليزي*')
let res, anu, soal
try {
if (m.text == '5') res = await fetch(`https://api.lolhuman.xyz/api/akinator/back?apikey=${lolkeysapi}&server=${server}&session=${session}&signature=${signature}&step=${step}`)
else res = await fetch(`https://api.lolhuman.xyz/api/akinator/answer?apikey=${lolkeysapi}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&step=${step}&answer=${m.text}`)
anu = await res.json()
if (anu.status != '200') {
aki.sesi = false
aki.soal = null
return m.reply('*[❗] خطاء ارسل الامر مرة ثاني مع اسم العبه الذي تريد يشترط ان تكتب اسمها انجليزي*')}
anu = anu.result
if (anu.name) {
await this.sendMessage(m.chat, { image: { url: anu.image }, caption: `🎮 *تغيير العبه ياحب الخال* 🎮\n\n*𝙰𝙺𝙸𝙽𝙰𝚃𝙾𝚁 𝙲𝚁𝙴𝙴 𝚀𝚄𝙴 𝚃𝚄 𝙿𝙴𝚁𝚂𝙾𝙽𝙰𝙹𝙴 𝙴𝚂 ${anu.name}*\n_${anu.description}_`, mentions: [m.sender] }, { quoted: m })
aki.sesi = false
aki.soal = null
} else {
let resultes = await translate(`${anu.question}`, { to: 'es', autoCorrect: true })   
soal = await this.sendMessage(m.chat, { text: `🎮 *تغيير العبه ياروح الخال* 🎮\n*𝙿𝚁𝙾𝙶𝚁𝙴𝚂𝙾: ${anu.step} (${anu.progression.toFixed(2)} %)*\n\n*𝙹𝚄𝙶𝙰𝙳𝙾𝚁: @${m.sender.split('@')[0]}*\n*𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰: ${resultes.text}*\n\n${teks}`, mentions: [m.sender] }, { quoted: m })
aki.soal = soal
aki.step = anu.step
aki.progression = anu.progression
}} catch (e) {
aki.sesi = false
aki.soal = null
m.reply('*[❗] 𝙴𝚁𝚁𝙾𝚁, 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝙻𝙾 𝙼𝙰𝚂 𝚃𝙰𝚁𝙳𝙴*')}
return !0 }
function somematch( data, id ){
let res = data.find(el => el === id )
return res ? true : false; }

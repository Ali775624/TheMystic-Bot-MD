let handler = async (m, { conn, command, text }) => {
let love = `*❤️❤️ *إذا عـشت مئـة يـوم لا أرغــب أن ينقـص منـهـم يوم بدونـٰٰٖٖـك يــــ❅ـ͢ـــاروحـي 💋🖇️♥‹⇡😻💋💞*ت ❤️❤️*
*El amor de ${text} por ti es de* *${Math.floor(Math.random() * 100)}%* *de un 100%*
*Deberias pedirle que sea tu  novia/o ?*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(love)$/i
export default handler

import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let handler  = async (m, { conn }) => {
let texto = `
*—◉ قائمة اوامر واستخدام البوت*
> شرح الاستخدام: https://youtu.be/ViXwP-DgWuU
> قناة تحديثات البوت: https://t.me/Driving_uncle_personally
> قناة تريمكس: https://t.me/Termux7
> حسابي انستا: https://www.instagram.com/lqydhlkhlshkhsyan?r=nametag
> معرفي تليجرام للتواصل معي: https://t.me/TheYemenigentle

------------------------------------

*—◉ قوائم استخدام وتحديثات البوت*
> شرح استخدام البوت: http://youtu.be/Ga795EofBq4
> قناة تحديثات البوت: https://t.me/Driving_uncle_personally
> قناة تريمكس تليجرام: https://t.me/Termux7

------------------------------------

*—◉ ☟اوامر تشغيل البوت بتريمكس☟*
> cd && termux-setup-storage
> apt-get update -y && apt-get upgrade -y
> pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn 
> git clone https://github.com/BrunoSobrino/Mystic-termux.git && cd Mystic-termux 
> yarn install 
> npm install
> npm update
> npm install 
> npm start` 
let aa = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: texto, contextInfo: { externalAdReply: { title: 'ᴛʜᴇ ᴍʏsᴛɪᴄ - ʙᴏᴛ', body: null, thumbnail: imagen1, sourceUrl: 'https://github.com/BrunoSobrino/TheMystic-Bot-MD' }, mentionedJid: [m.sender] }}}, aa)
conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id, mentions: [m.sender] })  
}
handler.command = /^(instalarbot)/i
export default handler

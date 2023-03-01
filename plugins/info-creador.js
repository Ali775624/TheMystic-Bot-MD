let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
*—◉ قناة تحديثات البوت تليجرام https://t.me/Driving_uncle_personally*

*—◉ قناة شروحات وادوات تريمكس  https://t.me/Termux7*

*—◉ شرح استخدام البوت في واتساب 2  https://youtu.be/Ga795EofBq4*

*—◉ قناة تطبيقات مدفوعه تليجرام 3  https://t.me/paidapps3*

*—◉ رقمي للتواصل معي اتصال فقط wa.me/967711023486*

*—◉ اهم شروحات البوتات والتطبيقات 5 https://t.me/Driving_uncle_personally*

*—◉ شرح استخدام بوت واتساب 2  https://youtu.be/ViXwP-DgWuU*

*—◉ مطور البوت القياده الخال شخصياً 7 𝙴𝚂 wa.me/967711023486*

*—◉ رقمي للتواصل واتساب 8 𝙴𝚂 wa.me/967711023486*

*—◉ معرفي تليجرام للتواصل معي  9 https://t.me/TheYemenigentle*

*—◉ حسابي تيك توك  10 https://www.tiktok.com/@alloush_alyamanl?_t=8XH4ksw51Ji&_r=1*

*—◉ حسابي انستجرام 11 𝙴𝚂 https://www.instagram.com/lqydhlkhlshkhsyan?r=nametag*
`.trim()   
let buttonMessage= {
'document': { url: `https://github.com/BrunoSobrino/TheMystic-Bot-MD` },
'mimetype': `application/${document}`,
'fileName': `「  اليك قائمة اشيائي يا حب الخال 」`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/BrunoSobrino/TheMystic-Bot-MD',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://youtube.com/channel/UCToOQLOgWylIjKuBy96zUuQ' }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '👾 قائمة الاوامر 👾'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '📮 شات المطور 📮'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;𝑩𝒓𝒖𝒏𝒐 𝑺𝒐𝒃𝒓𝒊𝒏𝒐 👑;;;\nFN:𝑩𝒓𝒖𝒏𝒐 𝑺𝒐𝒃𝒓𝒊𝒏𝒐 👑\nORG:𝑩𝒓𝒖𝒏𝒐 𝑺𝒐𝒃𝒓𝒊𝒏𝒐 👑\nTITLE:\nitem1.TEL;waid=5219996125657:+521 999 612 5657\nitem1.X-ABLabel:𝑩𝒓𝒖𝒏𝒐 𝑺𝒐𝒃𝒓𝒊𝒏𝒐 👑\nX-WA-BIZ-DESCRIPTION:[❗] ᴄᴏɴᴛᴀᴄᴛᴀ ᴀ ᴇsᴛᴇ ɴᴜᴍ ᴘᴀʀᴀ ᴄᴏsᴀs ɪᴍᴘᴏʀᴛᴀɴᴛᴇs.\nX-WA-BIZ-NAME:𝑩𝒓𝒖𝒏𝒐 𝑺𝒐𝒃𝒓𝒊𝒏𝒐 👑\nEND:VCARD`
//await conn.sendMessage(m.chat, { contacts: { displayName: 'Bruno Sobrino 👑', contacts: [{ vcard }] }}, {quoted: m})
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler

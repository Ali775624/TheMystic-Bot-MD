let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `*https://github.com/BrunoSobrino/TheMystic-Bot-MD*`
let buttonMessage= {
'document': { url: `https://github.com/BrunoSobrino/TheMystic-Bot-MD` },
'mimetype': `application/${document}`,
'fileName': `「  اهلين برو مطورني الخال 」`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/BrunoSobrino/TheMystic-Bot-MD',
'mediaType': 2,
'previewType': 'pdf',
'title': 'بوت واتساب القياده الخال⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://youtube.com/channel/UCToOQLOgWylIjKuBy96zUuQ' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1}, 
{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = ['sc','script']
export default handler

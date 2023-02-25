import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '*[❗𝐈𝐍𝐅𝐎❗] يرجى التحديد على الصوره او الملصق الذي تريد تحويله 🦅🇾🇪*'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] يرجى التحديد على الصوره او الملصق الذي تريد تحويله 🦅🇾🇪*'
let img = await m.quoted.download()
if (!img) throw '*[❗𝐈𝐍𝐅𝐎❗] يرجى التحديد على الصوره او الملصق الذي تريد تحويله 🦅🇾🇪*'
stiker = await addExif(img, packname || global.packname, author || global.author)
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
else throw '*[❗𝐈𝐍𝐅𝐎❗]  يرجى التحديد على الصوره او الملصق الذي تريد تحويله 🦅🇾🇪 *'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^take|robar|wm$/i
export default handler

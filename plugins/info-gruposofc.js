let media = imagen4
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*شبيك لبيك اشياء البوت وتحديثاته بين يديك يمكنك استخدام البوت بتقنيه وسيعه مطور بحتراف وتقنيه من قبل الخال شخصياً اليك اسفل قائمة تحديثات البوت وشرح عن كيفية استخدام البوت :D*

*➤ قاىمة تحديثات البوت واضافات البوت:*
*1.-* قناة التحديثات تليجرام  https://t.me/Driving_uncle_personally

*2.-* طريقة استخدام البوت شرح يوتيوب https://youtu.be/ViXwP-DgWuU

*3.-* حسابي تيك توك https://www.tiktok.com/@alloush_alyamanl?_t=8XH4ksw51Ji&_r=1

*4.-* حسابي انستجرام https://www.instagram.com/lqydhlkhlshkhsyan?r=nametag

*5.-* اهم قناه مختص بـ ادوات تريمكس خطيره https://t.me/Termux7
`.trim(), wm, media, [['💟 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 💟', '#menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler

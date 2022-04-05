let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
┌─〔 GRUB BOT 〕
│ 
├➥ *✗Link grub bot by raditya*
│https://chat.whatsapp.com/KuW6Ojk8b3NF8GIpt9v4EL
│https://chat.whatsapp.com/EmCBNEjwdOcHzRlGCXKoxK
├➥ *Yang Di Perbolehkan Oleh Owner Saya*
│   *masukin ke grub✅*
├➥ *Admin Selalu Benar✅*
├➥ *Jangan spam karna*
│   *owner grub hp nya kentang✅*
├➥ *Sebelum Bergabung Ke Gc Lu*
│   *Chat Owner Terlebih dahulu!*
│
├➥*_DanzBot_🥀*
└─「 *DanzBot* 」
`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'GRUB DANZBOT')).buffer(), ext, 'Grub Bot By _DanzBot🥀_', 'SIAP BANG🗿', 'AUTO JOIN', 'Donasi', '.donasi', m)

}
handler.help = ['Gruboffical']
handler.tags = ['main']
handler.command = /^(gruboffical)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

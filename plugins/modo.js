let { Presence, GroupSettingChange } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, args, usedPrefix, command }) => {
	let isClose = { // Switch Case Like :v
		'1': Presence.unavailable,
		'0': Presence.available,
	}[(args[0] || '')]
	if (isClose === undefined)
		throw `
lo isiste mal
`.trim()
await conn.updatePresence(m.chat, isClose)
}
handler.help = ['mood *1 / 0*']
handler.tags = ['group']
handler.command = /^(mood)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.exp = 0
module.exports = handler

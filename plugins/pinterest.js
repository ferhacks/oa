let { Presence } = require('@adiwajshing/baileys')
const { text } = require('express')
let fetch = require('node-fetch')
const { MessageType } = require('@adiwajshing/baileys')
const sleep = async (ms) => { // Função parecida com a de shell usada pra esperar certo tempo antes de rodar algo, usa sistema de milisegundos
    return new Promise(resolve => setTimeout(resolve, ms));
}

let handler  = async (m, { conn, args, usedPrefix, command ,text}) => {
	if (!args || !args[0]) return conn.reply(m.chat, `Formato incorrecto!\n\n*Ejemplpo* : _${usedPrefix + command} Cocina_`, m)
    await sleep(3000)
    const linp = await fetch(`http://api.fdci.se/rep.php?gambar=${text}`)
    const pint = await linp.json()
    let erest = pint[Math.floor(Math.random() * pint.length) + 1]
    console.log(erest)
    await conn.sendFile(m.chat, erest, 'attp.jpg', '', m, true)
    .catch(async() => {
        let { Presence } = require('@adiwajshing/baileys')
        const { text } = require('express')
        let fetch = require('node-fetch')
        const linp2 = await fetch(`http://api.fdci.se/rep.php?gambar=${text}`)
        const pint2 = await linp2.json()
        let erest2 = pint2[Math.floor(Math.random() * pint.length) + 1]
        console.log(erest2)
        await conn.sendFile(m.chat, erest2, 'attp.jpg', '', m, true)
    })
}
handler.help = ['simi','s'].map(v => v + ' *text*')
handler.tags = ['fun']
handler.command = /^(pinterest)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = false
handler.exp = 0
module.exports = handler



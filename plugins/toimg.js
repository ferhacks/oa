
const { spawn } = require('child_process')
const util = require('util')
const { MessageType } = require('@adiwajshing/baileys')
const fs = require('fs')

let handler  = async (m, { conn }) => {
  if (!m.quoted) return conn.reply(m.chat, 'Etiqueta un stiker!', m)
  let q = { message: { [m.quoted.mtype]: m.quoted }}
  if (/sticker/.test(m.quoted.mtype)) {
    let sticker = await conn.downloadM(q)
    if (!sticker) throw sticker
    ran = getRandom('.png')
    spawn(`ffmpeg -i ${sticker} ${ran}`, (err) => {
      fs.unlinkSync(sticker)
      if (err) return reply(ind.stikga())
      buffer = fs.readFileSync(ran)
      conn.sendMessage(m.chat, buffer, MessageType.image, {
        quoted: m
      })
      fs.unlinkSync(ran)
    })
  }
}
handler.help = ['toimg (reply)']
handler.tags = ['sticker']
handler.command = /^toimg$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`
}
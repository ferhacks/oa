let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  this.sendContact(m.chat, '1', 'Aiden Random', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(randoma)$/i

module.exports = handler

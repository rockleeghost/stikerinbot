function handler(m) {
  this.sendContact(m.chat, '6289514791129', 'Ridwan', m)
  this.sendContact(m.chat, '628990546366', 'Indah Puspita', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler

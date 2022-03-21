let handler = function (m) {
	this.sendContact(m.chat, '6282228302341', 'Owner KannaBotz :)', m)
}

handler.customPrefix = ['🍭Owner Kannabot'] 
handler.command = new RegExp

module.exports = handler
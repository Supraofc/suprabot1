//Function Module
const {
WAConnection,
MessageType,
Presence,
Mimetype,
GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { color } = require('./lib/color')
const _welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
const { OwnerNumber, BotName, OwnerName } = require('./setting.json')
const { adeuss, goodbye } = require('./lib/adeuss.js')

//fotobot.
thumb = fs.readFileSync('./media/thumb.jpg')

require('./supra.js')
nocache('./supra.js', module => console.log(`${module}!`))

//Function Start
const starts = async (supraz = new WAConnection()) => {
supraz.logger.level = 'warn'
supraz.version = [2, 2143, 3]
supraz.browserDescription = [ 'SupraBot', 'Safari', '3.0' ]
supraz.on('qr', () => {
  console.log(color('[','white'), color('!','red'), color(']','white'), color(' Qr code ele irá mudar apos 20 segundos!!'))
})

//Botão imagen 
const sendButImage = async (from, context, fotext, img, but) => {
gam = img
jadinya = await supraz.prepareMessage(from, gam, MessageType.image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fotext,
buttons: but,
headerType: 4
}
supraz.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage)
}

//Connecting bot
fs.existsSync('./QrSupra.json') && supraz.loadAuthInfo('./QrSupra.json')
supraz.on('connecting', () => {
  start('2', 'Conectando...')
})

//Conectar ao dono
supraz.on('open', () => {
  success('2', 'SupraBOT conectado')
  supraz.sendMessage(`${OwnerNumber}@s.whatsapp.net`, `*Olá Proprietário ${BotName} 👋*\n\nBot agora conectado e pronto para usar 🤙😉\n\nSe ocorrer um erro, entre em contato com o desenvolvedor\n\nNão se esqueça de agradecer ao bot do desenvolvedor e se escrever no canal do youtube SUPRAOFC`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Desenvolvedor do bot",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/thumb.jpg'),sourceUrl:"https://wa.me/5593991919748?text=Estou%20conectado%20ao%20SupraBOT"}}})
})

//Auto Entrar grupo
await supraz.connect({timeoutMs: 30*1000})
fs.writeFileSync('./QrSupra.json', JSON.stringify(supraz.base64EncodedAuthInfo(), null, '\t'))
teks = `https://chat.whatsapp.com/BpctyGIy4tu5UibDznrUn7`
supraz.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
console.log(color('[ WARN ]', 'yellow'), color('BOT ENTRA NO GRUPO •   ∘̥⃟⸽⃟🌹  ⃢ ⃟ 𝐒𝐔𝐏𝐑𝐀 𝑪卄𝜜ᵀ  •', 'yellow'))


//função de welcome
supraz.on('chat-update', async (message) => {
require('./supra.js')(supraz, message, _welkom)
})
supraz.on("group-participants-update", async (anu) => {
const isWelkom = _welkom.includes(anu.jid)
try {
groupMet = await supraz.groupMetadata(anu.jid)
groupMembers = groupMet.participants
groupAdmins = getGroupAdmins(groupMembers)
mem = anu.participants[0]

console.log(anu)

try {
pp_user = await supraz.getProfilePicture(mem)
} catch (e) {
pp_user = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}


try {
pp_grup = await supraz.getProfilePicture(anu.jid)
} catch (e) {
pp_grup =
"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
}


if (anu.action == 'add' && mem.includes(supraz.user.jid)) {
supraz.sendMessage(anu.jid, '```Olá 👋, Se você quiser usar o bot, digite .menu\nBase by: SupraOfc```', 'conversation')
}


if (!isWelkom) return
if (anu.action == 'add') {
num = anu.participants[0]
mdata = await supraz.groupMetadata(anu.jid)
memeg = mdata.participants.length
let v = supraz.contacts[num] || { notify: num.replace(/@.+/, "") }
anu_user = v.vname || v.notify || num.split("@")[0]
time_wel = moment().tz('America/Sao_Paulo').format("HH:mm:ss")
try {
ppimg = await supraz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
image = await getBuffer(ppimg)
teks = `Olá *@${num.split('@')[0]}*\nBem vindo ao grupo ${mdata.subject}\n\n`
but = [
{ buttonId: '.fdsksksk', buttonText: { displayText: 'WELCOME 👋' }, type: 1 }
]
let buff = await getBuffer(ppimg)
sendButImage(mdata.id, teks+adeuss(), `*© Whatsapp | ${mdata.subject}*`, image, but)


} else if (anu.action == 'remove') {
num = anu.participants[0]
mdata = await supraz.groupMetadata(anu.jid)
memeg = mdata.participants.length
let w = supraz.contacts[num] || { notify: num.replace(/@.+/, "") }
anu_user = w.vname || w.notify || num.split("@")[0]
time_wel = moment().tz('America/Sao_Paulo').format("HH:mm:ss")
try {
ppimg = await supraz.getProfilePicture(`${num.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
imagee = await getBuffer(ppimg)
tekss = `Adeus *@${num.split('@')[0]}* não volte mas.\n\n`
butt = [
{ buttonId: '.fdsksksk', buttonText: { displayText: 'GOODBYE 👋' }, type: 1 }
]
let buff = await getBuffer(ppimg)
sendButImage(mdata.id, tekss+goodbye(), `*© Whatsapp | ${mdata.subject}*`, imagee, butt)
}
} catch (e) {
console.log("Error : %s", color(e, "red"))
}

})
}

function nocache(module, cb = () => { }) {
fs.watchFile(require.resolve(module), async () => {
  await uncache(require.resolve(module))
  cb(module)
})
}


function uncache(module = '.') {
return new Promise((resolve, reject) => {
  try {
delete require.cache[require.resolve(module)]
resolve()
  } catch (e) {
reject(e)
  }
})
}

starts()

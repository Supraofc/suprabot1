/*
 *Criador: Supraofc
 *Se for modificar deixe os creditos 
*/
//Chave da api vai valer por alguns dias se deseja ter uma chama wa.me/5593991919748 e compre 10 R$ mensal, chave que nunca vence 30 R$

const
{
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const cheerio = require('cheerio')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()

//Setting
const setting = JSON.parse(fs.readFileSync('./setting.json'))

//LIB
const { fetchJosn, kyun, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { webp2gifFile } = require("./lib/gif.js")
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, simih, getRandom, start, info, success, close } = require('./lib/functions')
const { uploadImages } = require('./lib/uploadimage')
const { pinterest } = require('./lib/pinterest') 
const Exif = require('./lib/exif');
const exif = new Exif();

//DataBase
const _welcom = JSON.parse(fs.readFileSync('./database/welcome.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
const antifake = JSON.parse(fs.readFileSync('./database/antifake.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const _user = JSON.parse(fs.readFileSync('./database/user.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const setiker = JSON.parse(fs.readFileSync('./media/sticker/stik.json'))

//Setting criador
ownernumber = setting.OwnerNumber
ownernumber2 = setting.OwnerNumber2
botname = setting.BotName
ownername = setting.OwnerName
ownername2 = setting.OwnerName2
botversao = setting.BotVersao
apikey = setting.apikey



//Auto Bio & nome
autobio = true
autoperfil = true
public = true
let blocked = []
let public_mode = setting. public_mode

//fotobot
const fakeimage = fs.readFileSync ('./media/supra.jpg')

const addCmd = (id, command) => {
const obj = { id: id, chats: command }
scommand.push(obj)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}



			
//Module Exports
module.exports = supra = async (supra, mek, _welkom) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
global.blocked
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
const tanggal = moment.tz('America/Sao_Paulo').format('dddd') + ', ' + moment.tz('America/Sao_Paulo').format('LL')
const time = moment().tz('America/Sao_Paulo').format("HH:mm:ss")
const timeMak = moment().tz('America/Sao_Paulo').format("HH:mm:ss");
const timeJay = moment().tz('America/Sao_Paulo').format("HH:mm:ss");
const type = Object.keys(mek.message)[0]
	const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == "buttonsResponseMessage") && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
mention != undefined ? mention.push(mentionByReply) : []
const mentionUser = mention != undefined ? mention.filter(n => n) : []
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const arg = budy.slice(command.length + 2, budy.length)
const c = args.join(' ')
const isCmd = body.startsWith(prefix)
const q = args.join(' ')
const Verived = "0@s.whatsapp.net"
const txt = mek.message.conversation
const botNumber = supra.user.jid
const ownerNumber = [`${ownernumber}@s.whatsapp.net`, `${ownernumber2}@s.whatsapp.net`]
const isGroup = from.endsWith('@g.us')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
let sender = isGroup ? mek.participant : mek.key.remoteJid
let senderr = mek.key.fromMe ? supra.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
const groupMetadata = isGroup ? await supra.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const senderNumber = sender.split("@")[0]
const hour_now = moment().format('HH:mm:ss')
const conts = mek.key.fromMe ? supra.user.jid : supra.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? supra.user.name : conts.notify || conts.vname || conts.name || '-'
const processsTime = (timestamp, now) => {
return moment.duration(now - moment(timestamp * 1000)).asSeconds()}
const isAntiLink = isGroup ? antilink.includes(from) : false
const isWelkom = isGroup ? _welkom.includes(from) : false 
const isOwner = ownerNumber.includes(sender)
const isMybot = isOwner || mek.key.fromMe
const itsMe = mek.key.fromMe ? true : false
const isAntiFake = isGroup ? antifake.includes(from) : false 
const autoRespost = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
let bio_nya = await supra.getStatus(sender)
try {
bio_user = `${bio_nya.status}`
} catch {
bio_user = '-'
}

//Messagem Aguarde e erro
mess = {
wait: 'AGUARDE UM POUCO💤',
success: 'PRONTINHO✔️',
error: {
stick: 'ERROR!!! TENTE MAS TARDE👺',
Iv: 'LINK INCORRETO! MANDA LINK VÁLIDO POHA...'
},
only: {
group: '❌ ESSE COMADO SÓ PODE SER USADO EM GRUPOS❌',					
owner: '❌ COMANDO SÓ PODE SER USADO PELO *SUPRA*',
admin: '❌ESSE COMANDO É APENAS PARA ADM DO GRUPO❌',
Badmin: 'PRECISO SER ADM PARA RESPONDER ESSE COMANDO'
}
}			
supra.on("group-participants-update", async (anu) => {
if(antifake.includes(anu.jid)) {
const mdata = await supra.groupMetadata(anu.jid)
if (anu.action == 'add'){
num = anu.participants[0]
if(!num.split('@')[0].startsWith(55)) {					
setTimeout(async function () {							
supra.groupRemove(mdata.id, [num])
}, )
}
}
}
})					
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
const reply = (teks) => {
supra.sendMessage(from, teks, text, {quoted:ftrol})
}
const sendMess = (hehe, teks) => {
supra.sendMessage(hehe, teks, text)
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? supra.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : supra.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
}
const costum = (pesan, tipe, target, target2) => {
supra.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
function jsonformat(string) {
return JSON.stringify(string, null, 2)
}
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
supra.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
supra.sendMessage(from, hasil, type, options).catch(e => {
supra.sendMessage(from, { url : link }, type, options).catch(e => {
reply('Something Error')
console.log(e)
})
})
})
})
}
//Midia Url
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
supra.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}  
//Auto Bio
if (autobio){
if (autobio === false) return
let settingstatus = 0;
if (new Date() * 1 - settingstatus > 1000) {
let _uptime = process.uptime() * 1000;
let uptimer = clockString(_uptime);
await supra.setStatus(`${botname} | ⏲️ Tempo de execução : ${uptimer}`).catch((_) => _);
settingstatus = new Date() * 1;
}}

/*//Auto perfil
if (autoperfil){
if (autoperfil === false) return
let settingperfil = 0;
if (new Date() * 1 - settingperfil > 1000) {
let _uptimee = process.uptime() * 1000;
let uptimere = clockString(_uptimee);
await supra.updateProfilePicture(botNumber, fakeimage)
 console.log(color('[','white'), color('!','red'), color(']','white'), color(uptimere))
settingperfil = new Date() * 1;
}}	
*/

var runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dia, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " horas, " : " Horas, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minuto, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " Segundo") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};
var datw = new Date();
var tahun = datw.getFullYear();
var bulan = datw.getMonth();
var taanggal = datw.getDate();
var hari = datw.getDay();
var jamss = datw.getHours();
var menit = datw.getMinutes();
var detik = datw.getSeconds();
switch(hari) {
case 0: hari = "Domingo"; break;
case 1: hari = "Segunda"; break;
case 2: hari = "Terça"; break;
case 3: hari = "Quarta"; break;
case 4: hari = "Quinta"; break;
case 5: hari = "Sexta"; break;
case 6: hari = "Sabado"; break;
}
switch(bulan) {
case 0: bulan = "Janeiro"; break;
case 1: bulan = "Fevereiro"; break;
case 2: bulan = "Março"; break;
case 3: bulan = "Abril"; break;
case 4: bulan = "Maio"; break;
case 5: bulan = "Junho"; break;
case 6: bulan = "Julho"; break;
case 7: bulan = "Agosto"; break;
case 8: bulan = "Setembro"; break;
case 9: bulan = "Outubro"; break;
case 10: bulan = "Novembro"; break;
case 11: bulan = "Dezembro"; break;
}
switch(jamss){
case 0: jamss = 'Boa-Noite 🌃'; break;
case 1: jamss = 'Boa-Noite 🌃'; break;
case 2: jamss = 'Boa-Noite 🌃'; break;
case 3: jamss = 'Bom-Dia 🎑'; break;
case 4: jamss = 'Bom-Dia 🎑'; break; 
case 5: jamss = 'Bom-Dia 🎑'; break;
case 6: jamss = 'Bom-Dia 🎑'; break;
case 7: jamss = 'Bom-Dia 🎑'; break;
case 8: jamss = 'Bom-Dia 🏞️'; break;
case 9: jamss = 'Bom-Dia 🏞️'; break;
case 10: jamss = 'Bom-Dia 🏞️'; break;
case 11: jamss = 'Bom-Dia 🏞️'; break; 
case 12: jamss = 'Meio-Dia 🏞️'; break;
case 13: jamss = 'Boa-Tarde 🏞️'; break;
case 14: jamss = 'Boa-Tarde 🏞️'; break;
case 15: jamss = 'Boa-Tarde 🌅'; break;
case 16: jamss = 'Boa-Tarde 🌅'; break;
case 17: jamss = 'Boa-Tarde 🌅'; break;
case 18: jamss = 'Boa-Tarde 🌌'; break; 
case 19: jamss = 'Boa-Noite 🌌'; break;
case 20: jamss = 'Boa-Noite 🌌'; break;
case 21: jamss = 'Boa-Noite 🌌'; break;
case 22: jamss = 'Boa-Noite 🌌'; break; 
case 23: jamss = 'Boa-Noite 🌌'; break;
}
var tampilUcapan = "" + jamss;
var tampilTanggal = hari + " "+ taanggal + " " + bulan + " " + tahun;
var tampilWaktu = "Jam: " + jamss + ":" + menit + ":" + detik;
var tampilHari = "" + jamss;
//Verify
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}
const cekUser = (sender) => {
let status = false
Object.keys(_user).forEach((i) => {
if (_user[i].id === sender) {
status = true
}
})
return status
}
const isUser = cekUser(sender)
const isRegistered = checkRegisteredUser(sender)
const daftar1 = `Olá ${pushname}\nVocê não está verificado Pressione o botão abaixo para verificação!!`
const daftar2 = '```Clique no botão abaixo para verificar```'
const daftar3 = [{buttonId: `${prefix}?`,buttonText: {displayText: `🌱 VERIFICAR 🌱`,},type: 1,},]
const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}


const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('finalizado');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
supra.sendMessage(to, media, MessageType.sticker,{quoted:mek})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}

// Button
const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
supra.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: ftrol
})
}

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
supra.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const sendButImage = async (from, context, fortext, img, but, mek) => {
jadinya = await supra.prepareMessage(from, img, image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fortext,
buttons: but,
headerType: 4
}
supra.sendMessage(from, buttonMessagesI, buttonsMessage, {
quoted: ftrol,
})
}
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
them = gam1
mediaxxaa = await supra.prepareMessage(id, them, MessageType.location, {thumbnail: them})
locmhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
const buttonMessages = {
locationMessage: locmhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
supra.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

const sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
kma = doc1
mhan = await supra.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
supra.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await supra.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
supra.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
supra.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};
//verificados
const floc = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
liveLocationMessage: {
caption: `Olá ${pushname}`,
jpegThumbnail: fakeimage
}
}
}
const fdoc = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `Olá ${pushname}`, 
jpegThumbnail: fakeimage
}
}
}
const ftrol = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 123,
status: 1,
surface : 1,
message: `${tampilUcapan} ${pushname}`, 
orderTitle: `${tampilUcapan} ${pushname}`,
thumbnail: fakeimage, 
sellerJid: '0@s.whatsapp.net' 
}
}
}
const supra2 ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "556181496039-1625944593@g.us"  }, "message": {orderMessage: {itemCount: 999999,status: 200, thumbnail: fakeimage, surface: 200, message: `「NEWTON (SUPRA)」❤️`, orderTitle: 'supra', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}	
	

//verificar
const addRegisterUser = (userid, sender, age, bio) => {
const obj = { id: userid, name: sender, age: age, bio: bio }
_user.push(obj)
fs.writeFileSync('./database/user.json', JSON.stringify(_user))
}

if (!public){
if (!isOwner && !itsMe) return
}
//Tempo
function clockString(ms) {
let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}

const timeWib = moment().tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
const timeWita = moment().tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
const timeWit = moment().tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')


colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')


if (isCmd && !isGroup)
console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
if (isCmd && isGroup)
console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))

supra.chatRead(from)

if (!mek.key.fromMe) {
switch(autoRespost) {


  case 'supra':
  const dkk = fs.readFileSync('./media/sticker/supra.webp');
  supra.sendMessage(from, dkk, sticker, {quoted:mek})
  break
}
}

switch (command) {


case 'menu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
var p = await supra.getStatus(`${sender}`, MessageType.text)
menu =
`*${tampilUcapan} @${sender.split('@')[0]}*

*Info Bot* 📱
👤 _*Criador*_ : ${ownername}
🤖 _*Nome Bot*_ : ${botname}
💻 _*Speed*_ : ${processsTime(mek.messageTimestamp.low, moment())}s
📱 _*Runtime*_ : ${runtime(process.uptime())}
📱 _*Prefix*_ : Multi
🗃 _*Status*_ : ${public? `Modo publico`:`Modo privado`}

*Info Usuario* 👤
🌱 _*Nome Usuario*_ : ${pushname}
🏷 _*Bio*_ : ${p.status==undefined?`Not Found`:p.status}
📱 _*Numero*_ : @${sender.split('@')[0]}

*Horário BR* 🌄
🕐 _*Hora*_ : ${timeWib}

*Hoje* 🌱
${tampilUcapan}
🌥 _*Dia*_ : ${hari}
🌚 _*Mês*_ : ${bulan}
💐 _*Ano*_ : ${tahun}

_*Outro menu*_ 💻
✾ ${prefix}grupobot
✾ ${prefix}regras
✾ ${prefix}infobot
✾ ${prefix}owner
✾ ${prefix}criador
✾ ${prefix}ping
✾ ${prefix}tovideo
✾ ${prefix}togif
✾ ${prefix}roubar autor|pac
✾ ${prefix}stickera
✾ ${prefix}wame

_*Grupo Menu*_ 🌱
✾ ${prefix}welcome *on/off*
✾ ${prefix}antilink *on/off*
✾ ${prefix}antifake *on/off*
✾ ${prefix}online
✾ ${prefix}linkgrupo
✾ ${prefix}infogp
✾ ${prefix}add
✾ ${prefix}add2
✾ ${prefix}kick
✾ ${prefix}demitir
✾ ${prefix}promover 
✾ ${prefix}setname
✾ ${prefix}setdesc
✾ ${prefix}fotogp
✾ ${prefix}abrirgp
✾ ${prefix}fechargp
✾ ${prefix}marcar *txt*
✾ ${prefix}linkgrupo
✾ ${prefix}tempoban
✾ ${prefix}tempoabrir

_*Criador Menu*_ ☕
✾ ${prefix}modo
✾ ${prefix}publico
✾ ${prefix}privado
✾ ${prefix}owner
✾ ${prefix}delete
✾ ${prefix}run
✾ ${prefix}bc *text*
✾ ${prefix}setbiobot

_*Pesquisa Menu*_ 🔎
✾ ${prefix}pinterest *text*
✾ ${prefix}gore *text*

_*Radom video*_ 🎬
✾ ${prefix}hentaivideo
✾ ${prefix}tiktokporn
✾ ${prefix}saycat

_*Diversão Menu*_ 😍
✾ ${prefix}shipp
✾ ${prefix}casal
✾ ${prefix}conselho
✾ ${prefix}dadu

_*CMD Menu*_ ✉️
✾ ${prefix}addsticker *sticker*
✾ ${prefix}liststicker *sticker*
✾ ${prefix}getsticker

_*Download Menu*_ 🗃
✾ ${prefix}play *nome*
✾ ${prefix}play2 *nome*
✾ ${prefix}tiktok *url*
✾ ${prefix}ytmp3 *url*
✾ ${prefix}ytmp4 *url*

_*Convert Menu*_ 💾
✾ ${prefix}sticker
✾ ${prefix}st
✾ ${prefix}attp *text*
✾ ${prefix}ttp *text*
✾ ${prefix}toimg 
✾ ${prefix}tourl 
✾ ${prefix}stickermeme
✾ ${prefix}semoji *emoji*
✾ ${prefix}trigger
✾ ${prefix}stickerbg 

_*Anime Menu*_ ⛩️
✾ ${prefix}waifu
✾ ${prefix}loli
✾ ${prefix}nfswloli
✾ ${prefix}hentai`
teks =
`${botname} | Online : ${runtime(process.uptime())}\nCriador : ${ownername}`
sendButImage(from, menu, teks, fakeimage, [{buttonId: `${prefix}owner`, buttonText: {displayText: '🪀 𝐎𝐖𝐍𝐄𝐑'}, type: 1},{buttonId: `${prefix}infobot`, buttonText:{displayText: '📒 𝐈𝐍𝐅𝐎'}, type: 1}], {quoted: ftrol})
break

case 'run':
  if (!isOwner) return;
  try {
  eval(`(async() => {
    ${body.slice(command.length + 2)}
   })()`)
   } catch (e) {
     reply(String(e))
   }
  break


case 'owner':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Criador ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${ownernumber}:${ownernumber}\n`
+ 'END:VCARD'.trim()
supra.sendMessage(from, {displayName: `${botname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply(`Esse é o numero do proprietário`)
break

case 'grupobot':
reply(`https://chat.whatsapp.com/BpctyGIy4tu5UibDznrUn7`)
break

case 'criador':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:Supra-ofc\n`
+ `ORG: Criador Supra-ofc R ;\n`
+ `TEL;type=CELL;type=VOICE;waid=559391919748:559391919748\n`
+ 'END:VCARD'.trim()
supra.sendMessage(from, {displayName: `${botname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
break
case 'modo':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
buttonss = [{buttonId: `${prefix}publico`, buttonText: {displayText: 'PUBLICO 🌱'}, type: 1},{buttonId: `${prefix}privado`, buttonText: {displayText: 'PRIVADO 🍂'}, type: 1}]
const buMess = {
contentText: "PUBLICO|PRIVADO",
footerText: 'Por favor, escolha um',
buttons: buttonss,
headerType: 1
}
await supra.sendMessage(from, buMess, MessageType.buttonsMessage, {quoted: mek})
break


case 'privado':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
 if(!public)return reply('*_Esse recurso foi ativo🌱_*')
public = false
return reply(`Modo privado ativo\nOnde apenas o proprietário pode usar o bot`,text)
break
case 'publico':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
if (public)return reply('*_Esse recurso foi ativo🌱_*')
public = true
return reply(`Modo publico ativo 🌱\nTodos usuários podem usar bot`, text)
break
case 'bc': case 'broadcast':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
if (args.length < 1) return reply('texto?')
anu100 = await supra.chats.all()
if (isMedia && !supra.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(supra).replace('quotedM','m')).message.extendedTextMessage.contextInfo : supra
bc100 = await supra.downloadMediaMessage(encmedia)
for (let _ of anu100) {
supra.sendMessage(_.jid, bc100, image, {quoted: ftrol, caption: `*「 SUPRA BOT 」*\n\n${body.slice(4)}`})
}
reply('Transmitido com sucesso')
} else {
for (let _ of anu100) {
supra.sendMessage(_.jid, 
{"contentText": `*「 TRANSMISSÃO 」*\n\n${body.slice(4)}`,
"footerText": `${tampilTanggal}`, 
"buttons": [
{"buttonId": `${prefix}menu`,
"buttonText": {"displayText": "MENU 🌱"
},"type": "RESPONSE"}
], "headerType": 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: fakeimage,
}}, MessageType.buttonsMessage )
}
reply('Transmitido com sucesso')
}
break

case 'linkgrupo':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 linkgc = await supra.groupInviteCode(from)
  yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grupo: ${groupName}`
supra.sendMessage(from, yeh, text, { quoted: mek })
break

case 'delete': case 'del': case 'd':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin) 
if (!isQuotedReply) return reply(`Marca msg do bot!!`)
supra.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: mek })
break

case 'setbiobot':{
if (!isOwner && !mek.key.fromMe) return reply(mess.only.owner) 
if (args.length < 1) return reply(`texto mn`)
supra.setStatus(q)
.then((res) => reply('Bio atualizada.'))
.catch((err) => reply('Error'))
}
break

case 'fechargp': 
 supra.updatePresence(from, Presence.composing)
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin) 
 if (!isGroup) return reply(mess.only.group)
 if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 var nomor = mek.participant
 const close = { text: `Grupo fechado pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\nagora *apenas administradores* podem enviar mensagens`,
contextInfo: {
 mentionedJid: [nomor]
}
  }
 supra.groupSettingChange (from, GroupSettingChange.messageSend, true);
 reply(close)
 break

case 'abrirgp':
case 'bukagc': 
 supra.updatePresence(from, Presence.composing)
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin) 
 if (!isGroup) return reply(mess.only.group)
 if (!isBotGroupAdmins) return reply(mess.only.Badmin)
open = {
 text: `Grupo aberto pelo administrador @${sender.split("@")[0]}\nagora *todos os participantes* podem enviar mensagens`,
contextInfo: {
mentionedJid: [sender]
 }
}
supra.groupSettingChange (from, GroupSettingChange.messageSend, false)
supra.sendMessage(from, open, text, {  quoted: mek
})
break



// informação do bot
case 'infobot':{
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
try {
let totalchat = await supra.chats.all()
let i = []
let giid = []
for (let mem of totalchat){
i.push(mem.jid)
}
for (let id of i){
if (id && id.includes('g.us')){
giid.push(id)
}
}
const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = supra.user.phone
nupe = ownernumber + '@s.whatsapp.net'
menu = `*BOT ESTATISTICAS* 💻
Nome Bot : ${botname}
Versão Bot : ${botversao}
Criador : @${nupe.split("@")[0]}
Prefix : Multi
Tempo de ex : ${runtime(process.uptime())}
Velocidade : ${processsTime(mek.messageTimestamp.low, moment())}s
Status : ${public? `Modo Publico`:`Modo Privado`}
Numero Grupo : ${giid.length}
Total Chat : ${totalchat.length}
Total Block : ${blocked.length}

*ESTATÍSTICAS DO CELULAR*📱
Versão Whatsapp : ${wa_version}
Ram Usada : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
Mcc : ${mcc}
Mnc : ${mnc}
Versão SO : ${os_version}
Marca HP : ${device_manufacturer}
Versão HP : ${device_model}
Navegador : ${supra.browserDescription}`
teks =
`${botname} | Tempo de execução : ${runtime(process.uptime())}\nCriador : ${ownername}`
supra.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'MENU 💌' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
} catch (e){
reply(`${e}`)
}
}
break

   case 'swm': 
case 'stickerbg':
 if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
const fgiff = {key: { fromMe: false, participant: '0@s.whatsapp.net', ...(from ? { remoteJid: "6283815956151-1613049930@g.us" } : {}) }, message: { videoMessage: { title: "Feito", seconds: 999, gifPlayback: true, caption: "📄SupraBOT", jpegThumbnail: fs.readFileSync('./media/supra.jpg')} } }
const { convertSticker } = require('./lib/swm.js')
if (type === 'imageMessage' || isQuotedImage){
const getbuff = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const dlfile = await supra.downloadMediaMessage(getbuff)
const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
var mantap = await convertSticker(bas64, `@Supra`, `Newton`)
var imageBuffer = new Buffer.from(mantap, 'base64');
supra.sendMessage(from, imageBuffer, MessageType.sticker, {quoted: fgiff})
} else {
reply('Marque uma imagem!')
}
break

case 'gore': //Em breve consertarei
 if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
  var hay= args.join(' ')  	
   data = await fetchJson(`https://supraz.herokuapp.com/api/gore?quero=${hay}&apikey=${apikey}`)
   sads = await getBuffer(data.baixar)   
   shaa = `*Dados obtidos com sucesso!!!*
Titulo: ${data.titulo}
Views: ${data.views}
Comentários:️ ${data.comentarios}`
  sendButVideo(from, shaa, 'Clique no botão abaixo para obter um video aleatório de Gore ', sads, [{buttonId: `${prefix}gore ${hay}`, buttonText: {displayText: '⏩Proximo'}, type: 1}], {quoted: mek})			
  break	

case 'ping':
case 'speed':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
timestampe = speed();
latensie = speed() - timestampe
reply(`_*Ping Teste*_\nMensegem respondida em ${latensie.toFixed(4)} Segundos 💬`)
break

case 'regras':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
menu =
`*Regras*📖
1. Por favor, use comandos a cada 5 segundos
2. Use com sabedoria.


*Dito*📄
1.Armazenaremos seus dados do WhatsApp em nosso servidor enquanto o BOT estiver ativo.
2.Seus dados serão excluídos quando o bot estiver OFFLINE
3.Não salvamos imagens, vídeos, arquivos, áudios e documentos que você envia
4.Nunca pediremos que você forneça informações pessoais
5.Se você encontrar um BUG/ERRO, por favor, reporte diretamente ao SUPRA!!


*ATÊNÇÃO*❗
*CONSEQUÊNCIAS DA VIOLAÇÃO DAS REGRAS*
- Bot bloqueará seu número.
- Você não poderá acessar o bot novamente.
- Explorar contra bots.
Sanções: *BLOCKPERMANENTE*`
teks =`${botname} | Tempo de execuções : ${runtime(process.uptime())}\nCriador : ${ownername}`
supra.sendMessage(from, { contentText: `${menu}`, footerText: `${teks}`, buttons: [{ buttonId: `${prefix}infobot`, buttonText: { displayText: 'INFO 💵' }, type: 1 },{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER 🌱' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

case 'verify': case 'daftar': case 'verificar': case '?':
 if (isUser) return reply('Você já está cadastrado no banco de dados')
 const serialUser = createSerial(18)
 veri = sender
 _registered.push(sender)
addRegisterUser(sender, pushname, bio_user, timeWib, serialUser)
fs.writeFileSync('./database/registered.json', JSON.stringify(_user))
teks = `_*Verificado com sucesso*_\n\n*Nome :* ${pushname}\n*Numero :* @${sender.split('@')[0]}\n*Bio :* ${bio_user}\n*serie :* ${serialUser}\n*Tempo :* ${timeWib}`
let papako = [{ buttonId: `${prefix}menu`, buttonText: { displayText: 'MENU 💌' }, type: 1 }]
sendButLocation(from, teks , `${botname}`, fakeimage, papako, {contextInfo: { mentionedJid: [sender]}})
break

case 'clearall':
if (!isOwner) return  reply(mess.only.owner)
anu = await supra.chats.all()
list_chat = await supra.chats.all()
for (let chat of list_chat) {
supra.modifyChat(chat.jid, "delete", {includeStarred: false})
}
reply("Chat limpo")
break
    


case 'marcar':
 if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
 if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `*#* @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
  
  case 'tempoban':
 if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})  
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin) 
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque a mensagem!')
if (args[1]=="segundos") {var tem = args[0]+"000"
} else if (args[1]=="minuto") {var tem = args[0]+"0000"
} else if (args[1]=="hora") {var tem = args[0]+"00000"
} else {return reply(`*Escolha:*\nsegundos\nminuto\nhora`)}
kick = mek.message.extendedTextMessage.contextInfo.participant
supra.groupRemove(from, [kick])
reply(`Membro banido\nSerá adicionado em: ${args[0]} ${args[1]}`)
setTimeout( () => {
supra.groupAdd(from, [kick])
reply(`Olá @${kick.split('@')[0]} bem vindo...`)
}, tem)
break

case 'tempoabrir':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})	
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin) 
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args[1]=="segundos") {var timer = args[0]+"000"
} else if (args[1]=="minuto") {var timer = args[0]+"0000"
} else if (args[1]=="hora") {var timer = args[0]+"00000"
} else {return reply(`*Escolha:*\nSegundos\nminuto\nhora`)}
supra.groupSettingChange (from, GroupSettingChange.messageSend, true);
reply(`Grupo irá abrir em ${args[0]} ${args[1]}`)
setTimeout( () => {
var nomor = mek.participant
supra.groupSettingChange (from, GroupSettingChange.messageSend, false);
reply('Grupo aberto membros podem enviar mensagem')
}, timer)
break

case 'gifstiker': case 's': case 'stickergif': case 'sticker': case 'stiker':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await supra.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
supra.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await supra.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
oppaconsole.log('Finish')
supra.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Envia uma imagem com legenda ${prefix}sticker\nOu videos de 1-9 segundos`)
}
break

case 'st':
 if (!isGroupAdmins) return reply(mess.only.admin)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await supra.downloadAndSaveMediaMessage(encmedia)                                     
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('newton', '@supra')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply(mess.wait())
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer1 = fs.readFileSync(rano)
supra.sendMessage(from, buffer1, sticker, {contextInfo :mek, sendEphemeral: true})
fs.unlinkSync(rano)
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await supra.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
reply('Aguarde um pouco💤')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('newton', '@supra')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer2 = fs.readFileSync(rano)
supra.sendMessage(from, buffer2, sticker, {contextInfo :mek, sendEphemeral: true})
fs.unlinkSync(rano)
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break		

case 'stickerwm': case 'swm': case 'take': case 'roubar': case 'rename':{
if (!isOwner) return reply(mess.only.owner) 
let packname1 = q.split('|')[0] ? q.split('|')[0] : q
let author1 = q.split('|')[1] ? q.split('|')[1] : ''
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await supra.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
exif.create(packname1, author1, `stickwm_${sender}`)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(color(`STARTED : ${cmd}`,'yellow'))
})
.on('error', function (err) {
console.log(color(`ERROR : ${err}`,'red'))
fs.unlinkSync(media)
reply(mess.error)
})
.on('end', function () {
console.log(color(`FINISH`,'magenta'))
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error)
supra.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if (( isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await supra.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
exif.create(packname1, author1, `stickwm_${sender}`)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(color(`INICIADA : ${cmd}`,'yellow'))
})
.on('error', function (err) {
console.log(color(`ERROR : ${err}`,'red'))
fs.unlinkSync(media)
let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error)
})
.on('end', function () {
console.log((`FINALIZADO`,'magenta'))
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error)
supra.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if (isQuotedSticker) {
let encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media = await supra.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
exif.create(packname1, author1, `takestick_${sender}`)
exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error)
supra.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
} else {
reply(`...`)
 }
}
 break
 
 case 'shipp':
 if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`Marca dois membros do grupo`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pro = '.\n'
for (let _ of mentioned) {
pro += `@${_.split('@')[0]}\n`
}
porc = `${Math.floor(Math.random() * 100)}`
yhb =  `@${mentioned[0].split('@')[0]} vc tem uma chance de ${porc}% de namorar com @${mentioned[1].split('@')[0]}👩‍❤️‍👨`,
mentions(`${yhb}`, mentioned, true, {quoted: mek})
break 

case 'casal':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
   const dd = groupMembers
  const ll = groupMembers
   const gg = dd[Math.floor(Math.random() * dd.length)]
	const rr = ll[Math.floor(Math.random() * ll.length)]
	teks = `*Futuro casal do grupo:*\n@${gg.jid.split('@')[0]} ❤️\n @${rr.jid.split('@')[0]} ❤️ `	
      buffer = await getBuffer(`https://cdn.discordapp.com/attachments/826140680220311645/845679237674565662/Tipografia_Anime_para_status_Apaixonado_6360p.mp4`)
      supra.sendMessage(from, buffer, video, {mimetype: 'video/mp4',quoted: mek, caption: teks})
      break
      

case 'conselho': //@SUPRA ♡
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
  try {
 anu = await fetchJson(`https://supraz.herokuapp.com/api/conselho?apikey=${apikey}`)
     ppimg = await supra.getProfilePicture(`${sender.split('@')[0]}@c.us`)
     } catch {
     ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
     }
     its = await getBuffer (ppimg)
     randTeks = `Este é meu conselho:
${anu.frase}`
     supra.sendMessage(from, its, image, {quoted: mek, caption: randTeks})
     break
 
 
case 'online':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
    let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
    let online = [...Object.keys(supra.chats.get(ido).presences), supra.user.jid]
    supra.sendMessage(from, 'Lista Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
    contextInfo: { mentionedJid: online }
    })
    break
    
     case 'dadu':	
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})      
  anu = await getBuffer(`https://supraz.herokuapp.com/api/dadu?apikey=${apikey}`)
 supra.sendMessage(from, anu, sticker, {quoted: mek})
 break

 case 'stickera':	
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
  anu = await getBuffer(`https://supraz.herokuapp.com/api/stickera?apikey=${apikey}`)
 supra.sendMessage(from, anu, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "🎆 Supra-key", 'jpegThumbnail': await getBuffer('https://i.pinimg.com/736x/6a/f4/43/6af4437506b69872c7ff6ec9b915dbe6.jpg')}}}})
 break 
 
case 'addsticker':  // SUPRA ♡		
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isQuotedSticker) return reply('marque um figurinha')
 var svst = args.join(' ')
	if (!svst) return reply('coloque um nome')
	boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	delb = await supra.downloadMediaMessage(boij)
	setiker.push(`${svst}`)
	fs.writeFileSync(`./media/sticker/${svst}.webp`, delb)
	fs.writeFileSync(`./media/sticker/stik.json`, JSON.stringify(setiker))
	supra.sendMessage(from, `Figurinha adicionada com sucesso\nDigite: ${prefix}liststicker para ver minha lista sticker`, MessageType.text, { quoted: mek }) 
	break
	
	
case 'slist':
	case 'lists':
	case 'stickerlist':
	case 'liststicker':  // SUPRA ♡		
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})	
teks = '*Sticker List :*\n\n'
for (let awokwkwk of setiker) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${setiker.length}*`
supra.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
break
		
case 'getsticker':
case 'gets':   // SUPRA ♡		
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
 namastc = body.slice(12)
 result = fs.readFileSync(`./media/sticker/${namastc}.webp`)
 supra.sendMessage(from, result, sticker, {quoted :mek})
 break
																	
 
case 'toimg':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isQuotedSticker) return reply('marque uma figurinha')
encmediaa = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await supra.downloadAndSaveMediaMessage(encmediaa)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Falha ao converter sticker em imagem')
buffer = fs.readFileSync(ran)
supra.sendMessage(from, buffer, image, {quoted: mek, caption: 'Prontinho✅'})
fs.unlinkSync(ran)
})
break

  
case 'togif':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isQuotedSticker) return 
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await supra.downloadAndSaveMediaMessage(encmediaaa)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
supra.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: 'Convertido✅'})
fs.unlinkSync(mediaaa)
}
break 

  
case 'tovideo':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isQuotedSticker) return 
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await supra.downloadAndSaveMediaMessage(encmediaaa)
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
supra.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: supra2, caption: 'Convertido✅'})
fs.unlinkSync(mediaaa)
}
break

case 'wame':  
case 'wa.me': 
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol}) 
supra.updatePresence(from, Presence.composing)
options = {
text: `Link WhatsApp : *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
contextInfo: {
mentionedJid: [sender]
}
}
supra.sendMessage(from, options, MessageType.text, {quoted: supra2})
break

case 'tourl': case 'imagetorul': case 'imgtourl': case 'videotourl': case 'tolink':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
 boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await supra.downloadMediaMessage(boij)
res = await uploadImages(owgi)
reply(res)
} else {
reply('fotos/vídeos')
}
break
case 'ttp':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!c) return reply(`${prefix}ttp supra bot`)
anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${c}`)
supra.sendMessage(from, anu1, image, {quoted: mek})
break
case 'attp':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Example: ${prefix + command} Oi`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
supra.sendMessage(from, buffer, sticker, { quoted: mek })
break
case 'emoji':case 'semoji':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!q) return reply(`Exemplo : ${prefix + command} 😂`)
hex2 = args.join(' ') 
emoji.get(`${hex2}`).then(emoji => {
teks = `${emoji.images[4].url}`
sendStickerFromUrl(from,`${teks}`)
})
break


case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply(`*${prefix + command}* supra`)
try {
if (!isQuotedImage) return reply(`uma img mano!`)
var teks2 = args.join(' ')
var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
var mediaaa = await supra.downloadMediaMessage(enmedia)
var njay = await uploadImages(mediaaa)
var resu = `https://api.memegen.link/images/custom/-/${teks2}.png?background=${njay}`
sendStickerFromUrl(from,`${resu}`)	
} catch (e) {
reply(lang.err())
console.log(e)
}
break	

case 'trigger': 
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
try {
if (!isQuotedImage) return reply(`uma img mano!`)
var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
var media = await supra.downloadMediaMessage(enmedia)
var njay = await uploadImages(media)
var resu = `https://some-random-api.ml/canvas/triggered?avatar=${njay}`
sendStickerFromUrl(from,`${resu}`)	
} catch (e) {
reply(lang.err())
console.log(e)
}
break	


 


//Anime
case 'waifu':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
anu = await fetchJson(`https://supra-api.herokuapp.com/api/waifu2?&apikey=${apikey}`)
kon = await getBuffer(anu.image)
pll = `By : ${botname}`
sendButImage(from, pll, ``, kon, [  
{
buttonId: `${prefix}${command}`,
buttonText: {
displayText: `PROXIMO ⏩`,
},
type: 1,
},
]); 
break

case 'loli':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
kon = await getBuffer(`https://supraz.herokuapp.com/api/randomloli?apikey=${apikey}`)
pll = `By : ${botname}`
sendButImage(from, pll, ``, kon, [  
{
buttonId: `${prefix}${command}`,
buttonText: {
displayText: `PROXIMO ⏩`,
},
type: 1,
},
]); 
break

case 'nfswloli':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
kon = await getBuffer(`https://supraz.herokuapp.com/api/nfswloli?apikey=${apikey}`)
pll = `By : ${botname}`
sendButImage(from, pll, ``, kon, [  
{
buttonId: `${prefix}${command}`,
buttonText: {
displayText: `PROXIMO ⏩`,
},
type: 1,
},
]); 
break

case 'hentai':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
kon = await getBuffer(`https://supraz.herokuapp.com/api/henta2?apikey=${apikey}`)
pll = `By : ${botname}`
sendButImage(from, pll, ``, kon, [  
{
buttonId: `${prefix}${command}`,
buttonText: {
displayText: `PROXIMO ⏩`,
},
type: 1,
},
]); 
break

  case 'hentaivideo':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
data = await fetchJson(`https://supraz.herokuapp.com/api/hentaivideo?apikey=${apikey}`)
sads = await getBuffer(data.resultado.video_1)   
 shaa = `*Random Hentai*
Titulo: ${data.resultado.titulo}
Categoria: ${data.resultado.categoria}
Views: ${data.resultado.views}
Tranf:️ ${data.resultado.share}
Formato: ${data.resultado.formato}`
  sendButVideo(from, shaa, 'Clique no botão abaixo para obter um video aleatório de Hentai\n©' + ownername + '', sads, [{buttonId: `${prefix}hentaivideo`, buttonText: {displayText: '⏩Proximo'}, type: 1}], {quoted: supra2})			
  break	
    
case 'tiktokporn':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
data = await fetchJson(`https://supraz.herokuapp.com/api/randomporn?apikey=supraz`)
sads = await getBuffer(`https://tikporntok.com/${data.video}`)   
 shaa = `*Random Video*
Titulo: ${data.titulo}
Like: ${data.like}
Favorito: ${data.favorito}
Views: ${data.views}
Tags: ${data.tags}
Descrição: ${data.tags}  `
  sendButVideo(from, shaa, 'Clique no botão abaixo para obter um video aleatório\n©' + ownername + '', sads, [{buttonId: `${prefix}tiktokporn`, buttonText: {displayText: '⏩Proximo'}, type: 1}], {quoted: supra2})			
  break	
    
  case 'saycat':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
data = await fetchJson(`https://supraz.herokuapp.com/api/saycat?apikey=supraz`)
sads = await getBuffer(data.resultado)   
 shaa = `*Random Saycat*`
  sendButVideo(from, shaa, 'Clique no botão abaixo para obter um video aleatório da Saycat\n©' + ownername + '', sads, [{buttonId: `${prefix}saycat`, buttonText: {displayText: '⏩Proximo'}, type: 1}], {quoted: supra2})			
  break	
    

case 'simi': //@SUPRA ♡
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply('Onde está o texto, Acha que sou vidente?😤')
teks = body.slice(5)
anu = await simih(teks) 
reply(anu)
break

case 'welcome':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return (mess.only.admin) 
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (args.length < 1) return reply(`${prefix}welcome on ativar\n${prefix}welcome off desativar`)
if ((args[0]) === 'on') {
if (isWelkom) return reply('*bem vindo está ativo!!*')
 _welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`Bem-vindo ativado com sucesso🌱`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return reply('*Está desligado*')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`Recurso de Bem vindo desativado🍂`)
} else {
reply('*on para habilitar, off para desabilitar*')
}
break
case 'antilink':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup && !isOwner) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin) 
if (!q) return reply(`....`)
if (args[0].toLowerCase() === 'on'){
if (isAntiLink) return reply(`Está ativo`)
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Antilink ativo com sucesso🌱')
} else if (args[0].toLowerCase() === 'off'){
let anu = antilink.indexOf(from)
antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Antilink desativado com sucesso🍂')
} else {
reply(`on/off`)
}
break


 case 'antifake':
  try {
  if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
  if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
  if (args.length < 1) return reply('Hmmmm')
if ((args[0]) === 'on') {
  if (isAntiFake) return reply('Ja esta ativo')
  antifake.push(from)
  fs.writeFileSync('./database/antifake.json', JSON.stringify(antifake))
  reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
} else if ((args[0]) === 'off') {
if (!isAntiFake) return reply('*Está desligado*')
  antifake.splice(from, 1)
  fs.writeFileSync('./database/antifake.json', JSON.stringify(antifake))
	reply('Desativado com sucesso o recurso de antifake neste grupo✔️')
  } else {
  reply('1 para ativar, 0 para desativar')
 }
 } catch {
 reply('Deu erro, tente novamente :/')
 }
  break
  
case 'infogp': //@SUPRA ♡
  supra.updatePresence(from, Presence.composing)
  if (!isGroup) return reply(mess.only.group)
 try {
	 ppimg = await supra.getProfilePicture(from)
  } catch {
	 ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
	}   
  let buf = await getBuffer(ppimg)
  teks = (args.length > 1) ? body.slice(8).trim() : ''
  teks += `*Nome do grupo :* ${groupName}\n*Número de Administradores :* ${groupAdmins.length}\n*Número de membros :* ${groupMembers.length}\n*Descrição :* ${groupDesc}`
  supra.sendMessage(from, buf, image, {quoted: mek, caption: teks})
  break   
  

case 'add': //@SUPRA ♡
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 if (args.length < 1) return reply('Insira o número alvo')
if (args[0].startsWith('08')) return reply('Use o código do país mas')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
supra.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Falha ao adicionar destino, talvez porque é privado')
}
break

case 'add2':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var memu_ido = []
for (let ids of entah) {
mems_ids.push(ido)
}
supra.groupAdd(from, memu_ido)
} else {
supra.groupAdd(from, [entah[0]])
}
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
supra.groupAdd(from, [entah])
}
break

case 'promover':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})  
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var memi_idi = []
for (let ids of entah) {
memi_idi.push(idi)
}
supra.groupMakeAdmin(from, memi_idi)
} else {
supra.groupMakeAdmin(from, [entah[0]])
}
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
supra.groupMakeAdmin(from, [entah])
}
break
case 'demitir':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})  
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!isGroup) return
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var memu_ido = []
for (let idk of entah) {
memk_idk.push(idk)
}
supra.groupDemoteAdmin(from, memk_idk)
} else {
supra.groupDemoteAdmin(from, [entah[0]])
}
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
supra.groupDemoteAdmin(from, [entah])
}
break


  case 'kk':
  case 'kick': 
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})  
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.groupadmins> 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
supra.groupRemove(from, M_exe)
} else {
supra.groupRemove(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
supra.groupRemove(from, [exe1])
reply(`Membro removido`)
}
break

case 'linkgrupo':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin) 
supra.groupInviteCode(from)
.then((res) => reply('https://chat.whatsapp.com/' + res))
break
case 'fotogp': //@SUPRA ♡
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})  
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
const mediaa = await supra.downloadAndSaveMediaMessage(encmedia)
await supra.updateProfilePicture (from, mediaa)
  reply('Alterado com sucesso o ícone do Grupo✔️')

break     

case 'setdesc': case 'setdesk':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})  
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
 desc = args.join(' ')			  
await supra.groupUpdateDescription(from, `${desc}`)
supra.sendMessage(from, `Alterado com sucesso descrição do grupo✔`, text, { quoted: mek })
			break   

   case 'setname':
 if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})  
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
idgrup = `${from.split("@s.whatsapp.net")[0]}`;
supra.groupUpdateSubject(idgrup, `${body.slice(8)}`)
supra.sendMessage(from, 'Alterado com sucesso o nome do grupo✔', text, {quoted: mek})
break 

  case 'tiktok': 
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})    
if (args.length === 0) return reply(`Coloque url amigo`)
  var hay= args.join(' ')
const captionsss = `*Escolha um formato para baixar*`
var thumbyt = await getBuffer(`https://telegra.ph/file/47abb7bfdbb3e5cd61eb4.jpg`)
sendButImage(from, captionsss, '© ' + ownername, thumbyt, [{buttonId: `${prefix}tiktokvideo ${hay}`, buttonText: {displayText: 'Video'}, type: 1},{buttonId: `${prefix}tiktokaudio ${hay}`, buttonText:{displayText: 'Audio'}, type: 1}], {quoted: ftrol})			
  break
  
  case 'tiktokaudio':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})    
if (args.length === 0) return reply(`Coloque url amigo`)
  var hay= args.join(' ')
  anu = await fetchJson(`https://supraz.herokuapp.com/api/tiktok2?url=${hay}&apikey=${apikey}`)    		
 lagu = await getBuffer(anu.audio)
 supra.sendMessage(from, lagu, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
  break 

case 'tiktokvideo':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})  
if (args.length === 0) return reply(`Coloque url amigo`)
  var hay= args.join(' ')
  anu = await fetchJson(`https://supraz.herokuapp.com/api/tiktok2?url=${hay}&apikey=${apikey}`) 		
 lagu = await getBuffer(anu.video)
supra.sendMessage(from, lagu, video, {mimetype: 'video/mp4', quoted: mek})
   break
   
 

case 'play': 
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length === 0) return reply(`Qual nome da música mn?`)
  var hay= args.join(' ')
  anu = await fetchJson(`https://supraz.herokuapp.com/api/yturl?quero=${hay}&apikey=${apikey}`)					
const captions = `*Dados obtidos com sucesso!!!*

➞ *Titulo* : ${anu.titulo}
➞ *Minutos* : ${anu.minutos}
➞ *Visualização* : ${anu.views}
➞ *Url* : ${anu.url}`
var thumbyt = await getBuffer(anu.imagem)
sendButImage(from, captions, '© ' + ownername, thumbyt, [{buttonId: `${prefix}ytmp4 ${anu.url}`, buttonText: {displayText: 'Video'}, type: 1},{buttonId: `${prefix}ytmp3 ${anu.url}`, buttonText:{displayText: 'Audio'}, type: 1}], {quoted: ftrol})			
  break
  
   case 'play2':  
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})   
var hay= args.join(' ')
  anu = await fetchJson(`https://supraz.herokuapp.com/api/playaudio?quero=${hay}&apikey=${apikey}`)
 buffer = await getBuffer(anu.thumb)  
 Iagu = await getBuffer(anu.baixar)
 fdsz = `*Dados obtidos com sucesso!!!*

➞ *Autor* : ${anu.canal}
➞ *Visualização* : ${anu.views}
➞ *Postado* : ${anu.postado}

*_Supra está baixando_* 🎶🎶`
 supra.sendMessage(from, buffer, image, { quoted: ftrol, thumbnail: fakeimage, caption: fdsz })
supra.sendMessage(from, Iagu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${anu.titulo}️`, 'jpegThumbnail': await getBuffer(anu.thumb)}}}})
   break		  


case 'ytmp3':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply("url")
url = args.join(' ')
anu = await fetchJson(`https://supraz.herokuapp.com/api/ytmp33?link=${url}&apikey=${apikey}`)
ytmp3 = await getBuffer(anu.link_baixar)
supra.sendMessage(from, ytmp3, audio, {mimetype:"audio/mp4", quoted:mek})
break

case 'ytmp4':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply("url")
url = args.join(' ')
anu = await fetchJson(`https://supraz.herokuapp.com/api/ytmp44?link=${url}&apikey=${apikey}`)
ytmp4 = await getBuffer(anu.link_baixar)
supra.sendMessage(from, ytmp4, video, {thumbnail:Buffer.alloc(0), quoted:mek})
break


case 'pinterest':
if (!isUser) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!c) return reply('Oq você está procurando?')
reply(mess.wait) 
pinterest(`${c}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest , `Pinterest : ${c}`)
})
break


default:
//Antilink
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return 
if (budy.includes("https://")){
sendButMessage(from, ` *GROUPO LINK DETECTADO*\n\nDesculpe, você será expulso deste grupo!`, `Clique abaixo para desligar`, [
{
buttonId: `${prefix}antilink off`,
buttonText: {
displayText: `Desativar antilink 🌱`,
},
type: 1,
}]);
supra.groupRemove(from, [sender])
}
 
if(budy.includes("@verif", "@verify","daftar")){
if (isUser) return reply('Você já está cadastrado no banco de dados')
addRegisterUser(sender, pushname, bio_user)
fs.writeFileSync('./database/user.json', JSON.stringify(_user))
teks = `*Verificado com sucesso 🎉*\n\n${a}📛 Nome  : ${pushname}\n#️⃣ Numero : @${sender.split('@')[0]}\n💌 Bio: ${bio_user}\n\n*Verificação do banco de dados ${botname}*`
footeregis = `Obrigado por se registrar 🤗\n© ${botname} By ${ownername}`
butregis = [
{ buttonId: `${prefix}menu`, buttonText: { displayText: 'MENU 💌' }, type: 1 }
 ]
sendButLocation(from, teks, footeregis, fakesupra, butregis, {contextInfo: { mentionedJid: [sender]
}
})
}

if (isOwner) {
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (isOwner) {
if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
}
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
// console.log(e)
}
}

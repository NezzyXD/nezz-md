/**
  ꕥ Boleh Reupload, Asal Izin + Cantumin Channel Ori
  ꕥ No Enc? Recode Sndiri
  ꕥ Cek https://github.com/DikaArdnt/
  
  ꕥ Thanks To :
  ꕥ My God
  ꕥ Dika Arndt (Author)
  ꕥ Fatih A
  ꕥ Nurutomo
  ꕥ Mhankbarbar
  ꕥ Ryuuka Team (Recode)
  ꕥ Penyedia Module
  ꕥ Penyedia Api
  ꕥ User RYUMD 
**/   

  require('./settings')
  const { default: makeWAryuuet, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
  const fs = require('fs')
  const util = require('util')
  const chalk = require('chalk')
  const { exec, spawn, execSync } = require("child_process")
  const axios = require('axios')
  const { fromBuffer } = require('file-type')
  const path = require('path')
  const os = require('os')
  const speed = require('performance-now')
  const { performance } = require('perf_hooks')
  const { pinterest, wallpaper, wikimedia, quotesAnime } = require('./lib/scraper')
  const { bytesToSize, TelegraPh, UploadFileUgu, webp2mp4File, telesticker } = require('./lib/uploader')
  const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom} = require('./lib/myfunc')
  const fetch = require('node-fetch')
  const yts = require('yt-search');
  const ffmpeg = require('fluent-ffmpeg')
  const moment = require('moment-timezone')
  const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
  const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
  const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
  const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
  const hour_now = moment().format('HH:mm:ss') 
  const { EmojiAPI } = require("emoji-api");
  const emoji = new EmojiAPI()
  const { color, RyuuLog } = require('./lib/color')
  const similarity = require('similarity')
  const qrcode = require('qrcode')
  
  //Module Apikey
  const xfar = require('xfarr-api');
  const hxz = require("hxz-api");
  const ra = require("ra-api");
  const kotz = require("kotz-api");
  const bochil = require("@bochilteam/scraper")
 
  a = '```'
  modelmenu = 'image'

  // DATABASE JSON
  const database = require('./src/database.json')
  
  // DATABASE JS
  const { rules } = require('./ryudata/rules.js')
  const { donasi } = require('./ryudata/donasi.js')
  const { sewa } = require('./ryudata/sewa.js')
  const { allmenu } = require(`./ryudata/allmenu.js`)
  const { stele, sdatabase, srpg, spoto, sphoto, svoice, smenu, simple, list, sowner, sgrup, sdown, ssearch, sasupan, sfun, sanime, snsfw, smaker, sother, sgame, sinfo, snulis, stextpro, srandom, scecan } = require('./ryudata/simple.js')
  const { janSpam, wrongFormat, notNum, notLink, fiturOff, fiturError, kataKasar, addUser, kickUser, proMote, deMote, namaGrup, epOn, epOff } = require('./ryudata/confat.js')
  const { changelog } = require('./ryudata/changelog.js')
  
  // DATABASE GAME MENU
  global.db = JSON.parse(fs.readFileSync('./src/database.json'))
  if (global.db) global.db = {
  sticker: {},
  database: {},
  game: {},
  others: {},
  users: {},
  chats: {},
  settings: {},
  ...(global.db || {})
  }
  let tebaklagu = db.game.tebaklagu = []
  let _family100 = db.game.family100 = []
  let kuismath = db.game.math = []
  let tebakgambar = db.game.tebakgambar = []
  let caklontong = db.game.lontong = []
  let caklontong_desk = db.game.lontong_desk = []
  let tebakkalimat = db.game.kalimat = []
  let tebaklirik = db.game.lirik = []
  let tebaktebakan = db.game.tebakan = []
  let absen = db.others.absen = []

  //Module Exports
  module.exports = ryuu = async (ryuu, m, chatUpdate, store) => {
  try {
  var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
  var budy = (typeof m.text == 'string' ? m.text : '')
  var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
  const isCmd = body.startsWith(prefix)
  const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
  const args = body.trim().split(/ +/).slice(1)
  const pushname = m.pushName || "No Name"
  const botNumber = ryuu.user.id ? ryuu.user.id.split(":")[0]+"@s.whatsapp.net" : ryuu.user.id
  const isCreator = [ryuu.user.id, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
  const itsMe = m.sender == ryuu.user.id ? true : false
  const text = q = args.join(" ")
  const quoted = m.quoted ? m.quoted : m
  const mime = (quoted.msg || quoted).mimetype || ''
  const isMedia = /image|video|sticker|audio/.test(mime)
  const from = m.key.remoteJid
  const { type, quotedMsg, mentioned, now, fromMe } = m
  const more = String.fromCharCode(8206)
  const readmore = more.repeat(4001)

  // 🗿 Function Group
  const isGroup = m.key.remoteJid.endsWith('@g.us')
  const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
  const groupMetadata = m.isGroup ? await ryuu.groupMetadata(m.chat).catch(e => {}) : ''
  const groupName = m.isGroup ? groupMetadata.subject : ''
  const participants = m.isGroup ? await groupMetadata.participants : ''
  const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
  const groupOwner = m.isGroup ? groupMetadata.owner : ''
  const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
  const isGroupAdmins = m.isGroup ? groupOwner.includes(m.sender) || groupAdmins.includes(m.sender) : false
  const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
  const isNumber = x => typeof x === 'number' && !isNaN(x)
  
  const isImage = (type == 'imageMessage')
  const isVideo = (type == 'videoMessage')
  const isSticker = (type == 'stickerMessage')
  const isQuotedMsg = (type == 'extendedTextMessage')
  const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
  const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
  const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
  const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
  const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
  
  //Background
  let picaks = [bg1,bg2,bg3,bg4]
  let picak = picaks[Math.floor(Math.random() * picaks.length)]
  let tipsz = [tips1, tips2, tips3, tips4, tips5]
  let tips = tipsz[Math.floor(Math.random() * tipsz.length)]
  let quote = [quotes1, quotes2, quotes3]
  let quotes = quote[Math.floor(Math.random() * quote.length)]
  
  // 🗿 Function Waktu
  const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
  if(time2 < "23:59:00"){ var ucapanWaktu = 'Selamat Malam 🌌 Dan Selamat Beristirahat 🛏️' }
  if(time2 < "19:00:00"){ var ucapanWaktu = 'Selamat Petang 🌆 Dan Selamat Bersantai 🛋️' }
  if(time2 < "18:00:00"){ var ucapanWaktu = 'Selamat Sore 🌇 Dan Selamat Bersantai ☕' }
  if(time2 < "15:00:00"){ var ucapanWaktu = 'Selamat Siang 🏞 Dan Selamat Beraktifitas 💼' }
  if(time2 < "11:00:00"){ var ucapanWaktu = 'Selamat Pagi 🌅 Dan Selamat Beraktifitas 🤝' } 
  if(time2 < "05:00:00"){ var ucapanWaktu = 'Selamat Malam 🏙 Dan Selamat Beristirahat 😪' }
  if(time2 < "23:59:00"){ var ucapanWaktu1 = 'Selamat Malam 🌌' }
  if(time2 < "19:00:00"){ var ucapanWaktu1 = 'Selamat Petang 🌆' }
  if(time2 < "18:00:00"){ var ucapanWaktu1 = 'Selamat Sore 🌇' }
  if(time2 < "15:00:00"){ var ucapanWaktu1 = 'Selamat Siang 🏞' }
  if(time2 < "11:00:00"){ var ucapanWaktu1 = 'Selamat Pagi 🌅' }
  if(time2 < "05:00:00"){ var ucapanWaktu1 = 'Selamat Malam 🏙' }
  
  //FAKE FAKE AN
  const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': global.thumb, thumbnail: global.thumb,sendEphemeral: true}}}
  const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":global.namaowner, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': global.namaowner, 'jpegThumbnail': global.thumb}}}
  const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: global.thumb, surface: 200, message: global.namaowner, orderTitle: 'FATIHmek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
  const replygrup = (teks) => {ryuu.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${ucapanWaktu1} ${pushname}`,"body": `Group Official`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": global.thumb,"sourceUrl": global.linkgroup}}}, { quoted: m})}    
  const replyvid = (teks) => {ryuu.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply":{"title": `${ucapanWaktu1} ${pushname}`,"body": global.namaowner,"previewType": "PHOTO","thumbnail": thumb, "sourceUrl": global.webme}}}, {quoted: m})}
  let replyacak = [replygrup, replyvid]
  let reply = replyacak[Math.floor(Math.random() * replyacak.length)]

  //Database
  try {
  let users = global.db.users[m.sender]
  if (typeof users !== 'object') global.db.users[m.sender] = {}
  if (users) {
  if (!isNumber(users.afkTime)) users.afkTime = -1
  if (!('banned' in users)) users.banned = false
  if (!('afkReason' in users)) users.afkReason = ''
  if (!('premium' in users)) users.premium = false
  if (!isNumber(users.premiumTime)) users.premiumTime = 0
  if (!('banned' in users)) users.banned = false
  
  if (!isNumber(users.limit)) users.limit = global.limitCount
  if (!isNumber(users.money)) users.money = 0
  if (!isNumber(users.exp)) users.exp = 0
  if (!isNumber(users.autolevelup)) users.autolevelup = true
  if (!isNumber(users.level)) users.level = 0
  if (!isNumber(users.role)) users.role = 'Beginner'
  if (!isNumber(users.healt)) users.healt = 100

  if (!isNumber(users.gold)) users.gold = 0
  if (!isNumber(users.besi)) users.besi = 0
  if (!isNumber(users.berlian)) users.berlian = 0
  if (!isNumber(users.potion)) users.potion = 0
  if (!isNumber(users.kayu)) users.kayu = 0
  if (!isNumber(users.sampah)) users.sampah = 0
  
  if (!isNumber(users.sword)) users.sword = 0
  if (!isNumber(users.armor)) users.armor = 0
  if (!isNumber(users.panah)) users.armor = 0
  if (!isNumber(users.anakpanah)) users.armor = 0
  if (!isNumber(users.kapak)) users.armor = 0
  if (!isNumber(users.pancing)) users.armor = 0
  if (!isNumber(users.umpan)) users.armor = 0
  if (!isNumber(users.alat)) users.armor = 0
  
  if (!isNumber(users.ikan)) users.ikan = 0
  if (!isNumber(users.ayam)) users.ayam = 0
  if (!isNumber(users.kambing)) users.kambing = 0
  if (!isNumber(users.kelinci)) users.kelinci = 0
  if (!isNumber(users.sapi)) users.sapi = 0
  
  if (!isNumber(users.common)) users.common = 0
  if (!isNumber(users.uncommon)) users.uncommon = 0
  if (!isNumber(users.mythic)) users.mythic = 0
  if (!isNumber(users.legendary)) users.legendary = 0

  if (!isNumber(users.kucing)) users.kucing = 0
  if (!isNumber(users.kucingexp)) users.kucingexp = 0
  if (!isNumber(users.kuda)) users.kuda = 0
  if (!isNumber(users.kudaexp)) users.kudaexp = 0
  if (!isNumber(users.rubah)) users.rubah = 0
  if (!isNumber(users.rubahexp)) users.rubahexp = 0
  if (!isNumber(users.makananpet)) users.makananpet = 0

  if (!('lastday' in users)) users.lastday = 0
  if (!('lastmonthly' in users)) users.lastmonthly = 0
  if (!('lastgajian' in users)) users.lastgajian = 0
  if (!('lastslot' in users)) users.lastslot = 0
  if (!('lastbansos' in users)) users.bansos = 0
  if (!('lastadventure' in users)) users.bansos = 0
  if (!('lastmancing' in users)) users.bansos = 0
  if (!('lastnebang' in users)) users.bansos = 0
  if (!('lastmining' in users)) users.bansos = 0
  } else global.db.users[m.sender] = {
  afkTime: -1,
  banned: false,
  afkReason: '',
  premium: false,
  premiumTime: 0,
  banned: false,
  
  limit: global.limitCount,
  money: 0,
  exp: 0,
  autolevelup: true,
  level: 0,
  role: 'Beginner',
  healt: 100,
  
  gold: 0,
  besi: 0,
  berlian: 0,
  potion: 0,
  kayu: 0,
  sampah: 0,
  
  sword: 0,
  armor: 0,
  panah: 0,
  anakpanah: 0,
  kapak: 0,
  pancing: 0,
  umpan: 0,
  alat: 0,
  
  ikan: 0,
  ayam: 0,
  kambing: 0,
  kelinci: 0,
  sapi: 0,
  
  common: 0,
  uncommon: 0,
  mythic: 0,
  legendary: 0,
                    
  kucing: 0,
  kucingexp: 0,
  kuda: 0,
  kudaexp: 0,
  rubah: 0,
  rubahexp: 0,
  makananpet: 0,
  
  lastday: 0,
  lastmonthly: 0,
  lastgajian: 0,
  lastslot: 0,
  lastbansos: 0,
  lastadventure: 0,
  lastmancing: 0,
  lastnebang: 0,
  lastmining: 0
  }
  
  //Anti Anti
  let chats = global.db.chats[m.chat]
  if (typeof chats !== 'object') global.db.chats[m.chat] = {}
  if (chats) {
  if (!('mute' in chats)) chats.mute = false
  if (!('antilink' in chats)) chats.antilink = false
  if (!('antiwame' in chats)) chats.antiwame = false
  if (!('antivirtex' in chats)) chats.antivirtex = false
  if (!('nsfw' in chats)) chats.nsfw = false
  if (!('event' in chats)) chats.event = false
  if (!('antiasing' in chats)) chats.antiasing = false
  if (!('isBanned' in chats)) chats.isBanned = false
  } else global.db.chats[m.chat] = {
  mute: false,
  antilink: false,
  antiwame: false,
  antivirtex: false,
  nsfw: false,
  event: false,
  antiasing: false,
  isBanned: false
  }
  
  let settings = global.db.settings[botNumber]
  if (typeof settings !== 'object') global.db.settings[botNumber] = {}
  if (settings) {
  if (!('anticall' in settings)) settings.anticall = false
  if (!('autoreact' in settings)) settings.autoreact = false
  if (!('simih' in settings)) settings.simih = false
  } else global.db.settings[botNumber] = {
  anticall: false,
  autoreact: false,
  simih: false
  }
  } catch (err) {
  console.error(err)
  }
  
  for (let jid of mentionUser) {
  let user = global.db.users[jid]
  if (!user) continue
  let afkTime = user.afkTime
  if (!afkTime || afkTime < 0) continue
  let reason = user.afkReason || ''
  reply(`${a}Jangan Tag Dia!\nKarena Dia Sedang AFK ${reason ? '\nAlasan : ' + reason : 'Alasan : Nothing'}\nSelama ${clockString(new Date - afkTime)}${a}`.trim())}
  if (db.users[m.sender].afkTime > -1) {
  let user = global.db.users[m.sender]
  reply(`*Kamu berhenti AFK ${user.afkReason ? 'setelah ' + user.afkReason : ''}*\n*Selama ${clockString(new Date - user.afkTime)}*`.trim())
  user.afkTime = -1
  user.afkReason = ''
  }
  
  // Reset Limit Setiap Jam 9 Malam
  let cron = require('node-cron')
  cron.schedule('21 09 * * *', () => {
  var user = Object.keys(global.db.users)
  var limitUser = user.limit
  for (let jid of user) global.db.users[jid].limit = limitUser
  console.log('Reseted Limit')
  }, {
  scheduled: true,
  timezone: "Asia/Jakarta"
  })

  // Respon Cmd with media
  if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
  let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
  let { text, mentionedJid } = hash
  let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
  userJid: ryuu.user.id,
  quoted: m.quoted && m.quoted.fakeObj
  })
  messages.key.fromMe = areJidsSameUser(m.sender, ryuu.user.id)
  messages.key.id = m.key.id
  messages.pushName = m.pushName
  if (m.isGroup) messages.participant = m.sender
  let msg = {
  ...chatUpdate,
  messages: [proto.WebMessageInfo.fromObject(messages)],
  type: 'append'
  }
  ryuu.ev.emit('messages.upsert', msg)
  }
		
  if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  kuis = true
  jawaban = tebaklagu[m.sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  await ryuu.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'TEBAK LAGU 🎵' }, type: 1 }], `*Tebak Lagu*\n\n*Jawaban :* Benar ☑️\n*🎁 Hadiah :* $1000`, 'Tekan Button Dibawah Ini Untuk Bermain Lagi', m)
  global.db.users[m.sender].money += 1000
  delete tebaklagu[m.sender.split('@')[0]]
  } else reply('*Maaf Kak Jawabanmu Salah 😢*')
  }

  if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  kuis = true
  jawaban = kuismath[m.sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  await m.reply(`*Kuis Matematika*\n\n*Jawaban :* Benar ☑️\n*🎁 Hadiah :* $1000`)
  global.db.users[m.sender].money += 1000
  delete kuismath[m.sender.split('@')[0]]
  } else reply('*Maaf Kak Jawabanmu Salah 😢*')
  }

  if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  kuis = true
  jawaban = tebakgambar[m.sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  await ryuu.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'TEBAK GAMBAR 🖼️' }, type: 1 }], `*Tebak Gambar*\n\n*Jawaban :* Benar ☑️\n*🎁 Hadiah :* $500`, 'Tekan Button Dibawah Ini Untuk Bermain Lagi', m)
  global.db.users[m.sender].money += 500
  delete tebakgambar[m.sender.split('@')[0]]
  } else reply('*Maaf Kak Jawabanmu Salah 😢*')
  }

  if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  kuis = true
  jawaban = caklontong[m.sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  await ryuu.sendButtonText(m.chat, [{ buttonId: 'caklontong', buttonText: { displayText: 'CAK LONTONG 👤' }, type: 1 }], `*Cak Lontong*\n\n*Jawaban :* Benar ☑️\n*🎁 Hadiah :* $1000`, 'Tekan Button Dibawah Ini Untuk Bermain Lagi', m)
  global.db.users[m.sender].money += 1000
  delete caklontong[m.sender.split('@')[0]]
  } else reply('*Maaf Kak Jawaban Salah 😢*')
  }

  if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  kuis = true
  jawaban = tebakkalimat[m.sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  await ryuu.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'TEBAK KALIMAT 👄' }, type: 1 }], `*Tebak Kalimat*\n\n*Jawaban :* Benar ☑️\n*🎁 Hadiah :* $500`, 'Tekan Button Dibawah Ini Untuk Bermain Lagi', m)
  global.db.users[m.sender].money += 500
  delete tebakkalimat[m.sender.split('@')[0]]
  } else reply('*Maaf Kak Jawaban Salah 😢*')
  }

  if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  kuis = true
  jawaban = tebaklirik[m.sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  await ryuu.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'TEBAK LIRIK 👨‍🎤' }, type: 1 }], `*Tebak Lirik*\n\n*Jawaban :* Benar ☑️\n*🎁 Hadiah :* $500`, 'Tekan Button Dibawah Ini Untuk Bermain Lagi', m)
  global.db.users[m.sender].money += 500
  delete tebaklirik[m.sender.split('@')[0]]
  } else reply('*Maaf Kak Jawabanmu Salah 😢*')
  }
  
  if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  kuis = true
  jawaban = tebaktebakan[m.sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  await ryuu.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'TEBAK TEBAKAN 🕹️' }, type: 1 }], `*Tebak Tebakan*\n\n*Jawaban :* Benar ☑️\n*🎁 Hadiah :* $500`, 'Tekan Button Dibawah Ini Untuk Bermain Lagi', m)
  global.db.users[m.sender].money += 500
  delete tebaktebakan[m.sender.split('@')[0]]
  } else reply('*Maaf Kak Jawabanmu Salah 😢*')
  }
  
  //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await ryuu.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await ryuu.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }
  
  //Suit PvP
  this.suit = this.suit ? this.suit : {}
  let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
  if (roof) {
  let win = ''
  let tie = false
  if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
  if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
  ryuu.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
  delete this.suit[roof.id]
  return !0
  }
  roof.status = 'play'
  roof.asal = m.chat
  clearTimeout(roof.waktu)
  //delete roof[roof.id].waktu
  ryuu.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${itsMe}`, m, { mentions: [roof.p, roof.p2] })
  if (!roof.pilih) ryuu.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
  if (!roof.pilih2) ryuu.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
  roof.waktu_milih = setTimeout(() => {
  if (!roof.pilih && !roof.pilih2) ryuu.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
  else if (!roof.pilih || !roof.pilih2) {
  win = !roof.pilih ? roof.p2 : roof.p
  ryuu.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
  }
  delete this.suit[roof.id]
  return !0
  }, roof.timeout)
  }
  var jwb = m.sender == roof.p
  var jwb2 = m.sender == roof.p2
  var g = /gunting/i
  var b = /batu/i
  var k = /kertas/i
  var reg = /^(gunting|batu|kertas)/i
  if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
  roof.pilih = reg.exec(m.text.toLowerCase())[0]
  roof.text = m.text
  reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
  if (!roof.pilih2) ryuu.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
  }
  if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
  roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
  roof.text2 = m.text
  reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
  if (!roof.pilih) ryuu.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
  }
  var stage = roof.pilih
  var stage2 = roof.pilih2
  if (roof.pilih && roof.pilih2) {
  clearTimeout(roof.waktu_milih)
  if (b.test(stage) && g.test(stage2)) win = roof.p
  else if (b.test(stage) && k.test(stage2)) win = roof.p2
  else if (g.test(stage) && k.test(stage2)) win = roof.p
  else if (g.test(stage) && b.test(stage2)) win = roof.p2
  else if (k.test(stage) && b.test(stage2)) win = roof.p
  else if (k.test(stage) && g.test(stage2)) win = roof.p2
  else if (stage == stage2) tie = true
  ryuu.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang 🏆\n` : ` Kalah 😣\n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang 🏆\n` : ` Kalah 😣\n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
  delete this.suit[roof.id]
  }
  }
	
  // 🗿 Bot Status
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
  cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
  return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
  last.total += cpu.total
  last.speed += cpu.speed / length
  last.times.user += cpu.times.user
  last.times.nice += cpu.times.nice
  last.times.sys += cpu.times.sys
  last.times.idle += cpu.times.idle
  last.times.irq += cpu.times.irq
  return last
  }, { speed: 0, total: 0, times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 }})
  
  // Antilink
  if (db.chats[m.chat].antilink) {
  if (budy.match(`chat.whatsapp.com`)) {
  reply(`Link Grup Lain Terdeteksi 🤬\nMaaf Kamu Akan Di Kick !`)
  if (!isBotAdmins) return reply(mess.botAdmin)
  var gclink = (`https://chat.whatsapp.com/`+await ryuu.groupInviteCode(m.chat))
  var isLinkThisGc = new RegExp(gclink, 'i')
  var isgclink = isLinkThisGc.test(m.text)
  if (isgclink) return reply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
  if (isGroupAdmins) return reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
  if (isCreator) return reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
  ryuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
  }
  
  // Antiwame
  if (db.chats[m.chat].antiwame) {
  if (budy.match(`wa.me`)) {
  reply(`Link Wame Lain Terdeteksi 🤬\nMaaf Kamu Akan Di Kick !`)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (isGroupAdmins) return reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
  if (isCreator) return reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
  ryuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
  }
  if (db.chats[m.chat].antiwame) {
  if (budy.match(`http://wa.me`)) {
  reply(`Link Wame Lain Terdeteksi 🤬\nMaaf Kamu Akan Di Kick !`)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (isGroupAdmins) return reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
  if (isCreator) return reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
  ryuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
  }
  if (db.chats[m.chat].antiwame) {
  if (budy.match(`https://wa.me`)) {
  reply(`Link Wame Lain Terdeteksi 🤬\nMaaf Kamu Akan Di Kick !`)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (isGroupAdmins) return reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
  if (isCreator) return reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
  ryuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
  }
  
  //Antivirtex
  if (db.chats[m.chat].antivirtex) {
  if (budy.length > 3500) {
  m.reply('Tandai telah dibaca\n'.repeat(300))
  reply(`Virtex Terdeteksi 🤬\nMaaf Kamu Akan Di Kick !`)
  if (!isBotAdmins) return reply(mess.botAdmin)
  ryuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
  }

  // FUNCTION ANTI CALL
  if (global.anticall) {
  if (db.settings[botNumber].anticall) {
  ryuu.ws.on('CB:call', async (json) => {
  const callerId = json.content[0].attrs['call-creator']
  if (json.content[0].tag == 'offer') {
  var pa7rick = await ryuu.sendContact(callerId, global.owner)
  ryuu.sendMessage(callerId, { text: `Sistem otomatis block!\nJangan menelpon bot!\nSilahkan Hubungi Owner Untuk Dibuka !`}, { quoted : pa7rick })
  await sleep(8000)
  await ryuu.updateBlockStatus(callerId, "block")
  }
  })
  }
  }
        
  //🗿 Public & Self
  if (!ryuu.public) {
  if (!m.key.fromMe && !isCreator) return
  }
  
  // 🗿 Push Message To Console
  if (m.message) {
  console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m R-TEAM94 \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'Dari', chalk.blue(pushname), 'Di', chalk.yellow(groupName ? groupName : 'Private Chat' ), 'args :', chalk.white(args.length))
  }
  
  //Update Database
  setInterval(() => {
  fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
  }, 60 * 1000)
    
  const sendFileFromUrl = async (from, url, caption, mek, men) => {
  var mime = '';
  var res = await axios.head(url)
  mime = res.headers['content-type']
  if (mime.split("/")[1] === "gif") {
  return ryuu.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
  }
  var type = mime.split("/")[0]+"Message"
  if(mime === "application/pdf"){
  return ryuu.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: mek })
  }
  if(mime.split("/")[0] === "image"){
  return ryuu.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
  }
  if(mime.split("/")[0] === "video"){
  return ryuu.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'video/mp4'}, {quoted: m})
  }
  if(mime.split("/")[0] === "audio"){
  return ryuu.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio/mp4'}, {quoted: m })
  }
  }
  const sendButton = (type, from, text, buttons, men, quoted, options) => { 
  if (type == 'image') {
  ryuu.sendMessage(from, { caption: text, image: options ? options : global.thumb, buttons: buttons, headerType: 'IMAGE', mentions: men }, {quoted: m})
  } else if (type == 'document') {
  ryuu.sendMessage(from, { caption: text, document: options ? options : fs.readFileSync(doc), buttons: buttons, headerType: 'DOCUMENT', mentions: men }, {quoted: m})
  } else if (type == 'video') {
  if (options === undefined || options === null) return reply('illegal method, chat owner bot')
  ryuu.sendMessage(from, { caption: text, video: options, buttons: buttons, headerType: 'VIDEO', mentions: men }, {quoted: m})
  } else if (type == 'location') {
  ryuu.sendMessage(from, { caption: text, location: { jpegthumb: options ? options : global.thumb }, buttons: buttons, headerType: 'LOCATION', mentions: men })
  } else if (type == 'text') {
  ryuu.sendMessage(from, { caption: text, buttons: buttons, headerType: 'TEXT', mentions: men }, {quoted: m})
  } else {
  reply('invalid type, please contact the owner bot')
  }
  }
  
  //Get Pp User
  try {
  ppuse = await ryuu.profilePictureUrl(m.sender, 'image')
  } catch {
  ppuse = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  var ppuser = await getBuffer(ppuse)
  
  //Status
  var elit = 'Petualang Biasa'
  if (isCreator) {
  elit = 'Dewa Game 👑'
  } 
  
  //Random Nomer
  function randomNomor(min, max = null) {
  if (max !== null) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
  return Math.floor(Math.random() * min) + 1
  }
  }
  
  //Leveling
  const growth = Math.pow(Math.PI / Math.E, 1.618) * Math.E * .75
  function xpRange(level, multiplier = global.multiplier || 1) {
  if (level < 0)
  throw new TypeError('level cannot be negative value')
  level = Math.floor(level)
  let min = level === 0 ? 0 : Math.round(Math.pow(level, growth) * multiplier) + 1
  let max = Math.round(Math.pow(++level, growth) * multiplier)
  return {
  min,
  max,
  xp: max - min
  }
  }
  function findLevel(xp, multiplier = global.multiplier || 1) {
  if (xp === Infinity)
  return Infinity
  if (isNaN(xp))
  return NaN
  if (xp <= 0)
  return -1
  let level = 0
  do
  level++
  while (xpRange(level, multiplier).min <= xp)
  return --level
  }
  function canLevelUp(level, xp, multiplier = global.multiplier || 1) {
  if (level < 0)
  return false
  if (xp === Infinity)
  return true
  if (isNaN(xp))
  return false
  if (xp <= 0)
  return false
  return level < findLevel(xp, multiplier)
  }

  //Hewan
  var ikan = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
  
  //Level User
  var user = global.db.users[m.sender]
  var role = (user.level <= 3) ? 'Warrior'
  : ((user.level >= 7) && (user.level <= 14)) ? 'Elite'
  : ((user.level >= 14) && (user.level <= 21)) ? 'Master'
  : ((user.level >= 21) && (user.level <= 28)) ? 'Grandmaster'
  : ((user.level >= 28) && (user.level <= 35)) ? 'Epic'
  : ((user.level >= 35) && (user.level <= 42)) ? 'Legend'
  : ((user.level >= 42) && (user.level <= 49)) ? 'Mythic'
  : ((user.level >= 49) && (user.level <= 56)) ? 'Mythical Glory'
  : ((user.level >= 56) && (user.level <= 63)) ? 'Majin'
  : ((user.level >= 63) && (user.level <= 70)) ? 'Demon Lord Seed'
  : ((user.level >= 70) && (user.level <= 77)) ? 'Demon Lord'
  : ((user.level >= 77) && (user.level <= 84)) ? 'True Demon Lord'
  : ((user.level >= 84) && (user.level <= 88)) ? 'Octagram'
  : ((user.level >= 88) && (user.level <= 91)) ? 'Older Demon Lord'
  : ((user.level >= 91) && (user.level <= 100)) ? 'Great demon lord'
  : 'Star king dragon'
  user.role = role
  
  //Autoread Grup
  if (global.autoReadGc) {
  if (m.isGroup) { ryuu.sendReadReceipt(m.chat, m.sender, [m.key.id]) }}
  
  //Auto Read All
  if (global.autoReadAll) { if (m.chat) { ryuu.sendReadReceipt(m.chat, m.sender, [m.key.id]) }}
  if (global.autoRecord) { if (m.chat) { ryuu.sendPresenceUpdate('recording', m.chat) }}
  if (global.autoTyping) { if (m.chat) { ryuu.sendPresenceUpdate('composing', m.chat) }}
  if (global.available) { if (m.chat) { ryuu.sendPresenceUpdate('available', m.chat) }
  }

  //Jangan Dihapus Ntar Error
  
  //Anti Asing
  if (db.chats[m.chat].antiasing) {
  if (m.sender.startsWith( '212' || '212' )) {
  ryuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
  if (m.sender.startsWith( '265' || '265' )) {
  ryuu.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
  }
  
  //Auto React
  if (db.settings[botNumber].autoreact) {
  let emoji = ["👍","👎","😂","😭","🤔","😒","😠","🗿"]
  let emot = emoji[Math.floor(Math.random() * emoji.length)]
  ryuu.sendMessage(m.chat, {
  react: {
  text: emot,
  key: m.key
  }
  })
  }
  
  //Auto Bio
  autobio = true
  if (autobio){
  if (autobio === false) return
  await ryuu.setStatus(`${global.namabot} || Created By Ryuuka Team 🕊️ || ⏰ Runtime : ${runtime(process.uptime())}`);
  }
  
  //Button
  abtn = `${ucapanWaktu1} Kak *${pushname}*\n\n`
  var btnsmenu = [{urlButton: {displayText: 'Source Code 💠️',url: 'http://youtube.com/c/RyuukaBotz'}}, {urlButton: {displayText: 'Website 🔗',url: global.webme}}, {"quickReplyButton": {"displayText": "Rules 📖","id": `rules`},},{"quickReplyButton": {"displayText": "Owner 👨","id": "owner"},},{"quickReplyButton": {"displayText": "All Menu 📖","id": `allmenu`}}]
  var btnsall = [{urlButton: {displayText: 'Source Code 💠️',url: 'http://youtube.com/c/RyuukaBotz'}}, {urlButton: {displayText: 'Website 🔗',url: global.webme}}, {"quickReplyButton": {"displayText": "Rules 📖","id": `rules`},},{"quickReplyButton": {"displayText": "Owner 👨","id": "owner"},},{"quickReplyButton": {"displayText": "Thanks To 🏆","id": `tqto`}}]
  var btnsmenu2 = [{urlButton: {displayText: 'Source Code 💠️',url: 'http://youtube.com/c/RyuukaBotz'}}, {urlButton: {displayText: 'Website 🔗',url: global.webme}}, {"quickReplyButton": {"displayText": "Rules 📖","id": `rules`},},{"quickReplyButton": {"displayText": "Owner 👨","id": "owner"},},{"quickReplyButton": {"displayText": "Tampilkan Menu ⛩️","id": `list`}}]
  var btnsmenu3 = [{urlButton: {displayText: 'Source Code 💠️',url: 'http://youtube.com/c/RyuukaBotz'}}, {urlButton: {displayText: 'Website 🔗',url: global.webme}}, {"quickReplyButton": {"displayText": "Sewa Bot 💸","id": `sewabot`}}]
  
  //function leveling 
  var user = global.db.users[m.sender]
  if (!user.autolevelup)
  return !0
  let before = user.level * 1
  while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++

  if (before !== user.level) {
  reply(`Selamat, Kamu Telah Naik Level!
*${before}* -> *${user.level}*
Gunakan *.profile* Untuk Mengecek
  `.trim())
  }
  
  // 🗿 CASE NYA 
  switch(command) {
  
  //Case Changelog
  case 'changelog':
  reply(changelog())
  break

  // CASE RULES
  case 'rules': case 'ruls':
  let btnruls = [{
  urlButton: {
  displayText: 'Website 🔗',
  url: global.webme
  }
  }]
  imgrules = await getBuffer(picak+'Rules')
  ryuu.send5ButImg(m.chat, rules(), `© ${global.namaowner}`, imgrules, btnruls)
  break
  
  // CASE INFO BOT
  case 'listpc': {
  if (!isCreator) return reply(mess.owner)
  let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
  let tekslist = `*🔒 LIST PERSONAL CHAT*\n\n`
  tekslist += `*📱 Total Chat :* ${anu.length} Chat\n\n`
  for (let i of anu) {
  let nama = store.messages[i].array[0].pushName
  tekslist += `📛 *Nama :* ${nama}\n`
  tekslist += `👤 *User :* @${i.split('@')[0]}\n`
  tekslist += `🔗 *Link Chat :* https://wa.me/${i.split('@')[0]}\n\n`
  tekslist += `──────────────────────\n\n`
  }
  ryuu.sendTextWithMentions(m.chat, tekslist, m)
  }
  break
  case 'listgc': {
  let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
  let tekslistgc = `👥 *LIST GROUP CHAT*\n\n`
  tekslistgc += `📱 Total Group : ${anu.length} Group\n\n`
  for (let e of anu) {
  let metadata = await ryuu.groupMetadata(e)
  tekslistgc += `📛 *Nama :* ${metadata.subject}\n`
  tekslistgc += `👤 *Owner Grup :* @${metadata.owner.split('@')[0]}\n`
  tekslistgc += `🌱 *ID :* ${metadata.id}\n`
  tekslistgc += `⏳ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n`
  tekslistgc += `👥 *Member :* ${metadata.participants.length}\n\n`
  tekslistgc += `──────────────────────\n\n`
  }
  ryuu.sendTextWithMentions(m.chat, tekslistgc, m)
  }
  break
  case 'listonline': case 'liston': {
  if(!m.isGroup) reply(mess.group)
  let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
  let online = [...Object.keys(store.presences[id]), botNumber]
  ryuu.sendText(m.chat, '⏰ List Online:\n\n' + online.map(v => '🌱 @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
  }
  break
  
  //CASE absen
  case 'absen': {
  if (!m.isGroup) return reply(mess.group)
  if (!isGroupAdmins) return reply(mess.admin)
  if (m.chat in absen) throw `_Masih ada absen di chat ini!_\n\n*${prefix}hapusabsen* - untuk menghapus absen`
  if (!text) throw `Masukkan Alasan Melakukan absen, Example: *${prefix + command} Pagi Hari*`
  m.reply(`absen dimulai!\n\n*${prefix}hadir* - untuk ya\n*${prefix}tidakhadir* - untuk tidak\n*${prefix}cekabsen* - untuk mengecek absen\n*${prefix}hapusabsen* - untuk menghapus absen`)
  absen[m.chat] = [q, [], []]
  await sleep(1000)
  hadir = absen[m.chat][1]
  tidakhadir = absen[m.chat][2]
  teks_absen = `*ABSEN IN THE DAY 🌤️*

*Alasan :* ${absen[m.chat][0]}

┌〔 *Member Hadir* 〕
│ 
├ *Hadir :* ${absen[m.chat][1].length}
│
│ 
└────

┌〔 *Member Tidak Hadir* 〕
│ 
├ *Tidak Hadir :* ${absen[m.chat][2].length}
│
│ 
└────

*${prefix}hapusabsen* - untuk menghapus absen`
  let buttonsabsen = [{buttonId: `hadir`, buttonText: {displayText: 'HADIR 🏅'}, type: 1},{buttonId: `tidakhadir`, buttonText: {displayText: 'TIDAK HADIR 📝'}, type: 1}]
  let buttonMessageabsen = {
  text: teks_absen,
  footer: 'Jika Button Tidak Muncul Ketik Hadir/Tidakhadir',
  buttons: buttonsabsen,
  headerType: 1
  }
  ryuu.sendMessage(m.chat, buttonMessageabsen)
  }
  break
  case 'hadir': {
  if (!m.isGroup) return reply(mess.group)
  if (!(m.chat in absen)) throw `_*Tidak ada absen digrup ini!*_\n\n*${prefix}absen* - untuk memulai absen`
  isabsen = absen[m.chat][1].concat(absen[m.chat][2])
  wasabsen = isabsen.includes(m.sender)
  if (wasabsen) throw 'Kamu Sudah absen'
  absen[m.chat][1].push(m.sender)
  menabsen = absen[m.chat][1].concat(absen[m.chat][2])
  teks_absen = `*ABSEN IN THE DAY 🌤️*

*Alasan :* ${absen[m.chat][0]}

┌〔 *Member Hadir* 〕
│ 
├ *Hadir :* ${absen[m.chat][1].length}
${absen[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 *Member Tidak Hadir* 〕
│ 
├ *Tidak Hadir :* ${absen[m.chat][2].length}
${absen[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusabsen* - untuk menghapus absen`
  let buttonshadir = [{buttonId: `hadir`, buttonText: {displayText: 'HADIR 🏅'}, type: 1},{buttonId: `tidakhadir`, buttonText: {displayText: 'TIDAK HADIR 📝'}, type: 1}]
  let buttonMessagehadir = {
  text: teks_absen,
  footer: 'Jika Button Tidak Muncul Ketik Hadir/Tidakhadir',
  buttons: buttonshadir,
  headerType: 1,
  mentions: menabsen
  }
  ryuu.sendMessage(m.chat, buttonMessagehadir)
  }
  break
  case 'tidakhadir': {
  if (!m.isGroup) return reply(mess.group)
  if (!(m.chat in absen)) throw `_*Tidak ada absen digrup ini!*_\n\n*${prefix}absen* - untuk memulai absen`
  isabsen = absen[m.chat][1].concat(absen[m.chat][2])
  wasabsen = isabsen.includes(m.sender)
  if (wasabsen) throw 'Kamu Sudah absen'
  absen[m.chat][2].push(m.sender)
  menabsen = absen[m.chat][1].concat(absen[m.chat][2])
  teks_absen = `*ABSEN IN THE DAY 🌤️*

*Alasan :* ${absen[m.chat][0]}

┌〔 *Member Hadir* 〕
│ 
├ *Hadir :* ${absen[m.chat][1].length}
${absen[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 *Member Tidak Hadir* 〕
│ 
├ *Tidak Hadir :* ${absen[m.chat][2].length}
${absen[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusabsen* - untuk menghapus absen`
  let buttonstidakhadir = [{buttonId: `hadir`, buttonText: {displayText: 'HADIR 🏅'}, type: 1},{buttonId: `tidakhadir`, buttonText: {displayText: 'TIDAK HADIR 📝'}, type: 1}]
  let buttonMessagetidakhadir = {
  text: teks_absen,
  footer: 'Jika Button Tidak Muncul Ketik Hadir/Tidakhadir',
  buttons: buttonstidakhadir,
  headerType: 1,
  mentions: menabsen
  }
  ryuu.sendMessage(m.chat, buttonMessagetidakhadir)
  }
  break
  case 'cekabsen':
  if (!m.isGroup) return reply(mess.group)
  if (!(m.chat in absen)) throw `_*Tidak ada absen digrup ini!*_\n\n*${prefix}absen* - untuk memulai absen`
  teks_absen = `*ABSEN IN THE DAY 🌤️*

*Alasan :* ${absen[m.chat][0]}

┌〔 *Member Hadir* 〕
│ 
├ Total: ${hadir.length}
${absen[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 *Member Tidak Hadir* 〕
│ 
├ Total: ${tidakhadir.length}
${absen[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusabsen* - untuk menghapus absen


global.namaowner
`
  ryuu.sendTextWithMentions(m.chat, teks_absen, m)
  break
  case 'deleteabsen': case'delabsen': case 'hapusabsen': {
  if (!m.isGroup) return reply(mess.group)
  if (!isGroupAdmins) return reply(mess.admin)
  if (!(m.chat in absen)) throw `_*Tidak ada absen digrup ini!*_\n\n*${prefix}absen* - untuk memulai absen`
  delete absen[m.chat]
  m.reply('Berhasil Menghapus Sesi absen Di Grup Ini')
  }
  break
  
  // CASE DONASI
  case 'donasi':
  let btndonasi = [{
  urlButton: {
  displayText: 'Owner 👨',
  url: `wa.me/${global.nomerowner}`
  }
  }]
  imgdonasi = global.donasi
  ryuu.send5ButImg(m.chat, donasi(), `© ${global.namaowner}`, imgdonasi, btndonasi)
  break

  // CASE SEWA BOT
  case 'sewabot':
  let btnsewa = [{
  urlButton: {
  displayText: 'Owner 👨',
  url: `wa.me/${global.nomerowner}`
  }
  }]
  imgsewa = await getBuffer(picak+'Sewa Bot')
  ryuu.send5ButImg(m.chat, sewa(), `© ${global.namaowner}`, imgsewa, btnsewa)
  break
  
  // CASE OWNER MENU
  case 'banned':
  if (!isCreator) return reply(mess.owner)
  if (!text) return reply('Masukkan Nomer Nya Atau Tag Orangnya')
  let siapa1 = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
  if (!siapa1) return reply('Masukkan Nomer Nya Atau Tag Orangnya')
  let nguser1 = global.db.users[m.sender]
  nguser1[siapa1].banned = true
  reply(mess.done)
  break
  case 'unbanned':
  if (!isCreator) return reply(mess.owner)
  if (!text) return reply('Masukkan Nomer Nya Atau Tag Orangnya')
  let siapa2 = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
  if (!siapa2) return reply('Masukkan Nomer Nya Atau Tag Orangnya')
  let nguser2 = global.db.users[m.sender]
  nguser2[siapa2].banned = false
  reply(mess.done)
  break
  case 'banchat':
  if (!isCreator) return reply(mess.owner)
  global.db.chats[m.chat].isBanned = true
  break
  case 'unbanchat':
  if (!isCreator) return reply(mess.owner)
  global.db.chats[m.chat].isBanned = true
  break
  case 'join': {
  if (!isCreator) return reply(mess.owner)
  if (!text) throw 'Masukkan Link Group!'
  if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
  reply(mess.wait)
  let result = args[0].split('https://chat.whatsapp.com/')[1]
  await ryuu.groupAcceptInvite(result).then((res) => reply(mess.done)).catch((err) => reply(fiturError(prefix)))
  }
  break
  case 'leave': {
  if (!isCreator) return reply(mess.owner)
  await ryuu.groupLeave(m.chat).then((res) => reply('Sayonara 👋\nSulit Di Kontrol Semoga Hari Kalian Mengontol')).catch((err) => reply(fiturError()))
  }
  break
  case 'block': {
  if (!isCreator) return reply(mess.owner)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await ryuu.updateBlockStatus(users, 'block').then((res) => reply(mess.done)).catch((err) => reply(fiturError(prefix)))
  }
  break
  case 'unblock': {
  if (!isCreator) return reply(mess.owner)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await ryuu.updateBlockStatus(users, 'unblock').then((res) => reply(mess.done)).catch((err) => reply(fiturError(prefix)))
  }
  break
  case 'setppbot': {
  if (!isCreator) return reply(mess.owner)
  if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
  if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
  if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
  let media = await ryuu.downloadAndSaveMediaMessage(quoted)
  await ryuu.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
  reply(mess.done)
  }
  break
  case 'public': {
  if (!isCreator && !m.key.fromMe) return reply(mess.owner)
  ryuu.public = true
  reply('Sukses Mengubah Mode Bot Menjadi Publik')
  }
  break
  case 'self': {
  if (!isCreator && !m.key.fromMe) return reply(mess.owner)
  ryuu.self = false
  reply('Sukses Mengubah Mode Bot Menjadi Self')
  }
  break
  case 'eval': {
  if (!isCreator && !m.key.fromMe) return reply(mess.owner)
  function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return reply(bang)
  }
  try {
  reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
  reply(String(e))
  }
  }
  break
  case 'anticall':
  if (!isCreator) return reply(mess.owner)
  if (args[0] === "on") {
  if (db.settings[botNumber].anticall) return reply(`Sudah Aktif Sebelumnya`)
  db.settings[botNumber].anticall = true
  reply(`Anticall Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.settings[botNumber].anticall) return reply(`Sudah Nonaktif Sebelumnya`)
  db.settings[botNumber].anticall = false
  reply(`Anticall Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsanticall = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ON ⚡' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'OFF ⚰️' }, type: 1 }
  ]
  await ryuu.sendButtonText(m.chat, buttonsanticall, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, ftroli)
  }
  break
  case 'autoreact':
  if (!isCreator) return reply(mess.owner)
  if (args[0] === "on") {
  if (db.settings[botNumber].autoreact) return reply(`Sudah Aktif Sebelumnya`)
  db.settings[botNumber].autoreact = true
  reply(`Autoreact Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.settings[botNumber].autoreact) return reply(`Sudah Nonaktif Sebelumnya`)
  db.settings[botNumber].autoreact = false
  reply(`Autoreact Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsautoreact = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ON ⚡' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'OFF ⚰️' }, type: 1 }
  ]
  await ryuu.sendButtonText(m.chat, buttonsautoreact, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, ftroli)
  }
  break
  case 'backup':
  if (!isCreator) return reply(mess.owner)
  ryuu.sendMessage(sender, { document: fs.readFileSync('./src/database.json'), mimetype: 'json', caption: 'Request By : Owner', mentions: []}, { quoted: m })
  break
  case 'setcmd': {
  if (!m.quoted) throw 'Reply Pesan!'
  if (!m.quoted.fileSha256) throw 'SHA256 Hash Tidak Ditemukan ❎'
  if (!text) throw `Untuk Command Apa?`
  let hash = m.quoted.fileSha256.toString('base64')
  if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'Anda Tidak Diizinkan Untuk Mengubah Perintah Stiker Ini ❎'
  global.db.sticker[hash] = {
  text,
  mentionedJid: m.mentionedJid,
  creator: m.sender,
  at: + new Date,
  locked: false,
  }
  reply(mess.done)
  }
  break
  case 'delcmd': {
  let hash = m.quoted.fileSha256.toString('base64')
  if (!hash) throw `Tidak ada hash`
  if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'Anda Tidak Diizinkan Untuk Mengubah Perintah Stiker Ini ❎'     
  delete global.db.sticker[hash]
  reply(mess.done)
  }
  break
  case 'listcmd': {
  let teks = `*List Hash 🚀*
Info: *bold* hash is Locked 🔒

*Hash ☕ :*
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
  ryuu.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
  }
  break
  case 'lockcmd': {
  if (!isCreator) return reply(mess.owner)
  if (!m.quoted) throw 'Reply Pesan!'
  if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
  let hash = m.quoted.fileSha256.toString('base64')
  if (!(hash in global.db.sticker)) throw 'Hash not found in database'
  global.db.sticker[hash].locked = !/^un/i.test(command)
  reply(mess.done)
  }
  break
  case 'addmsg': {
  if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
  if (!text) throw `Example : ${prefix + command} nama file`
  let msgs = global.db.database
  if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
  msgs[text.toLowerCase()] = quoted.fakeObj
 reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
  }
  break
  case 'getmsg': {
  if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
  let msgs = global.db.database
  if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
  ryuu.copyNForward(m.chat, msgs[text.toLowerCase()], true)
  }
  break
  case 'listmsg': {
  let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
  let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
  let teks = 'LIST DATABASE 📂\n\n'
  for (let i of seplit) {
  teks += `📛 *Name :* ${i.nama}\n🚀 *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
  }
  reply(teks)
  }
  break
  case 'delmsg': case 'deletemsg': {
  let msgs = global.db.database
  if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
  delete msgs[text.toLowerCase()]
  reply(`Berhasil menghapus '${text}' dari list pesan`)
  }
  break
  case 'bcgc': case 'bcgroup': {
  if (!isCreator && !m.key.fromMe) return reply(mess.owner)
  if (!text) throw `Text mana?\n\nExample : ${prefix + command} ${global.namaowner}`
  let getGroups = await ryuu.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
  let anu = groups.map(v => v.id)
  reply(mess.wait + '\nMohon Untuk Menunggu Sejenak')
  for (let i of anu) {
  await sleep(1500)
  let txt = `*Broadcast ${global.namabot}*\n\n${text}\n`
  ryuu.sendButtonText(i, txt, fkontak)
  }
  reply('Sukses Broadcast')
  }
  break
  case 'bc': case 'broadcast': case 'bcall': {
  if (!isCreator && !m.key.fromMe) return reply(mess.owner)
  if (!text) throw `Text mana?\n\nExample : ${prefix + command} ${global.namaowner}`
  let anu = await store.chats.all().map(v => v.id)
  let getGroups = await ryuu.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
  let anuan = groups.map(v => v.id)
  reply(mess.wait + '\nMohon Untuk Menunggu Sejenak')
  for (let yoi of anu && anuan) {
  await sleep(1500)
  let txt = `*Broadcast ${global.namabot}*\n\n${text}`
  ryuu.sendText(yoi, txt, fkontak)
  }
  reply('Sukses Broadcast')
  }
  break
  
  // CASE GROUP MENU
  case 'afk': {
  if (!m.isGroup) return reply(mess.group)
  let user = global.db.users[m.sender]
  user.afkTime = + new Date
  user.afkReason = text
  reply(`*${m.pushName} Sekarang Afk ${text ? 'Karena ' + text : 'Nothing'}*`)
  }
  break  
  case 'antilink':
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isGroupAdmins) return reply(mess.admin)
  if (args[0] === "on") {
  if (db.chats[m.chat].antilink) return reply(`Sudah Aktif Sebelumnya`)
  db.chats[m.chat].antilink = true
  reply(`Antilink Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].antilink) return reply(`Sudah Nonaktif Sebelumnya`)
  db.chats[m.chat].antilink = false
  reply(`Antilink Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsantilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ON ⚡' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'OFF ⚰️' }, type: 1 }
  ]
  await ryuu.sendButtonText(m.chat, buttonsantilink, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, ftroli)
  }
  break
  case 'antiasing':
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isGroupAdmins) return reply(mess.admin)
  if (args[0] === "on") {
  if (db.chats[m.chat].antiasing) return reply(`Sudah Aktif Sebelumnya`)
  db.chats[m.chat].antiasing = true
  reply(`Antiasing Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].antiasing) return reply(`Sudah Nonaktif Sebelumnya`)
  db.chats[m.chat].antiasing = false
  reply(`Antiasing Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsantiasing = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ON ⚡' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'OFF ⚰️' }, type: 1 }
  ]
  await ryuu.sendButtonText(m.chat, buttonsantiasing, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, ftroli)
  }
  break
  case 'antiwame':
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isGroupAdmins) return reply(mess.admin)
  if (args[0] === "on") {
  if (db.chats[m.chat].antiwame) return reply(`Sudah Aktif Sebelumnya`)
  db.chats[m.chat].antiwame = true
  reply(`Antiwame Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].antiwame) return reply(`Sudah Nonaktif Sebelumnya`)
  db.chats[m.chat].antiwame = false
  reply(`Antiwame Berhasil Di Nonaktifkan !`)
  } else {
  let buttonswame = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ON ⚡' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'OFF ⚰️' }, type: 1 }
  ]
  await ryuu.sendButtonText(m.chat, buttonswame, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, ftroli)
  }
  break
  case 'antivirtex':
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isGroupAdmins) return reply(mess.admin)
  if (args[0] === "on") {
  if (db.chats[m.chat].antivirtex) return reply(`Sudah Aktif Sebelumnya`)
  db.chats[m.chat].antivirtex = true
  reply(`Antivirtex Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].antivirtex) return reply(`Sudah Nonaktif Sebelumnya`)
  db.chats[m.chat].antivirtex = false
  reply(`Antivirtex Berhasil Di Nonaktifkan !`)
  } else {
  let buttonspirtex = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ON ⚡' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'OFF ⚰️' }, type: 1 }
  ]
  await ryuu.sendButtonText(m.chat, buttonspirtex, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, ftroli)
  }
  break
  case 'nsfw':
  if (!m.isGroup) return reply(mess.group)
  if (!isGroupAdmins && !isCreator && !m.key.fromMe) return reply(mess.admin)
  if (args[0] === "on") {
  if (db.chats[m.chat].nsfw) return reply(`Sudah Aktif Sebelumnya`)
  db.chats[m.chat].nsfw = true
  reply(`Nsfw Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].nsfw) return reply(`Sudah Nonaktif Sebelumnya`)
  db.chats[m.chat].nsfw = false
  reply(`Nsfw Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsnsfw = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ON ⚡' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'OFF ⚰️' }, type: 1 }
  ]
  await ryuu.sendButtonText(m.chat, buttonsnsfw, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, ftroli)
  }
  break
  case 'event':
  if (!m.isGroup) return reply(mess.group)
  if (!isGroupAdmins) return reply(mess.admin)
  if (args[0] === "on") {
  if (db.chats[m.chat].event) return reply(`Sudah Aktif Sebelumnya`)
  db.chats[m.chat].event = true
  reply(`Event Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.chats[m.chat].event) return reply(`Sudah Nonaktif Sebelumnya`)
  db.chats[m.chat].event = false
  reply(`Event Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsevent = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ON ⚡' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'OFF ⚰️' }, type: 1 }
  ]
  await ryuu.sendButtonText(m.chat, buttonsevent, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, ftroli)
  }
  break
  case 'kick': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isGroupAdmins) return reply(mess.admin)
  if (!m.quoted && !text) return reply('Tag Orang Yang Mau Di Kick!!')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await ryuu.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(kickUser())).catch((err) => reply(fiturError(prefix)))
  }
  break
  case 'add': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isGroupAdmins) return reply(mess.admin)
  if (!m.quoted && !text) return reply('Yang mau di add siapa??')
  if (args[0].startsWith('08')) return reply('Gunakan kode negara 62 Gan')
  let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await ryuu.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(addUser())).catch((err) => reply(fiturError(prefix)))
  }
  break
  case 'promote': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isGroupAdmins) return reply(mess.admin)
  if (!m.quoted && !text) return reply('Tag Orang Yang Mau Di Promote!!')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await ryuu.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(proMote())).catch((err) => reply(fiturError(prefix)))
  }
  break
  case 'demote': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isGroupAdmins) return reply(mess.admin)
  if (!m.quoted && !text) return reply('Tag Orang Yang Mau Di Demote!!')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await ryuu.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(deMote())).catch((err) => reply(fiturError(prefix)))
  }
  break
  case 'setname': case 'setsubject': case 'setnamagc':{
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isGroupAdmins) return reply(mess.admin)
  if (!text) throw 'Text nya Mana?'
  await ryuu.groupUpdateSubject(m.chat, text).then((res) => reply(namaGrup(text))).catch((err) => reply(fiturError(prefix)))
  }
  break
  case 'linkgroup': case 'linkgc': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  let response = await ryuu.groupInviteCode(m.chat)
  ryuu.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
  }
  break 
  case 'revoke':
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isGroupAdmins) return reply(mess.admin)
  await ryuu.groupRevokeInvite(from)
  .then( res => {
  reply(`Sukses menyetel tautan undangan grup ini`)
  }).catch(() => reply(fiturError()))
  break
  case 'tagall': case 'infoall':
  if (!m.isGroup) return reply(mess.group)
  if (!isGroupAdmins) return reply(mess.admin)
  let tekss = `*PENGUMUMAN 📢*\n\n*Pesan : ${q ? q : 'Nothing'}*\n\n`
  for (let mem of participants) {
  tekss += `🌱 @${mem.id.split('@')[0]}\n`
  }
  tekss += `\n*${global.namaowner}*`
  ryuu.sendMessage(m.chat, { text: tekss, mentions: participants.map(a => a.id) }, { quoted: m })
  break
  case 'hidetag':
  if (!m.isGroup) return reply(mess.group)
  if (!isGroupAdmins) return reply(mess.admin)
  ryuu.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)})
  break
  case 'setppgroup': case 'setppgrup': case 'setppgc': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isGroupAdmins) return reply(mess.admin)
  if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
  if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
  if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
  let media = await ryuu.downloadAndSaveMediaMessage(quoted)
  await ryuu.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
  reply(mess.done)
  }
  break
  case 'ephemeral': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isGroupAdmins) return reply(mess.admin)
  if (!text) throw 'Masukkan value enable/disable'
  if (args[0] === 'enable') {
  await ryuu.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(epOn())).catch((err) => reply(fiturError(prefix)))
  } else if (args[0] === 'disable') {
  await ryuu.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(epOff())).catch((err) => reply(fiturError(prefix)))
  }
  }
  break
  case 'group': case 'grup': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.botAdmin)
  if (!isGroupAdmins) return reply(mess.admin)
  if (args[0] === 'tutup'){
  await ryuu.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
  } else if (args[0] === 'buka'){
  await ryuu.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
  } else {
  let buttonsgroup = [
  { buttonId: `${command} buka`, buttonText: { displayText: 'BUKA ⚡' }, type: 1 },
  { buttonId: `${command} tutup`, buttonText: { displayText: 'TUTUP ⚰️' }, type: 1 }
  ]
  await ryuu.sendButtonText(m.chat, buttonsgroup, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} buka/tutup`, ftroli)
  }
  }
  break

  // CASE MAKER MENU
  case 'sticker': case 's': case 'stickergif': case 'sgif': case 'stikerin': {
  if (!quoted) throw `Reply Video/Image Dengan Caption ${prefix + command}`
  reply(mess.wait)
  if (/image/.test(mime)) {
  let media = await quoted.download()
  let encmedia = await ryuu.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
  if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 detik!')
  let media = await quoted.download()
  let encmedia = await ryuu.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(encmedia)
  } else {
  throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
  }
  }
  break
  case 'smeme': case 'stickermeme': case 'stickmeme': {
  if (!text) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
  if (text.includes('|')) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
  reply(mess.wait)
  if (!/image/.test(mime)) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
  arg = args.join(' ')
  mee = await ryuu.downloadAndSaveMediaMessage(quoted)
  mem = await TelegraPh(mee)
  meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
  memek = await ryuu.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(memek)
  }
  break
  case 'memegen': case 'smeme2': {
  if (!text) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
  if (!text.includes('|')) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
  if (!/image/.test(mime)) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
  reply(mess.wait)
  arg = args.join(' ')
  atas = arg.split('|')[0]
  bawah = arg.split('|')[1]
  let abeb = await ryuu.downloadAndSaveMediaMessage(quoted)
  let abe = await TelegraPh(abeb)
  let upz = `https://api.memegen.link/images/custom/${atas}/${bawah}.png?background=${util.format(abe)}`
  let mengmeme = await ryuu.sendImageAsSticker(m.chat, upz, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(mengmeme)
  }
  break
  case 'toimage': case 'toimg': {
  if (!quoted) throw 'Reply Stickernya Kak'
  if (!/webp/.test(mime)) throw `Reply stiker dengan caption *${prefix + command}*`
  reply(mess.wait)
  let media = await ryuu.downloadAndSaveMediaMessage(quoted)
  let ran = await getRandom('.png')
  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  fs.unlinkSync(media)
  if (err) throw err
  let buffer = fs.readFileSync(ran)
  ryuu.sendMessage(m.chat, { image: buffer }, { quoted: m })
  fs.unlinkSync(ran)
  })
  }
  break
  case 'tomp4': case 'tovideo': {
  if (!quoted) throw 'Reply Image'
  if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
  reply(mess.wait)
  let { webp2mp4File } = require('./lib/uploader')
  let media = await ryuu.downloadAndSaveMediaMessage(quoted)
  let webpToMp4 = await webp2mp4File(media)
  let txtmp4 = `*Convert Webp To Video 🎦*\n`
  txtmp4 += `*💬 Status :* Done\n`
  txtmp4 += `*❗Note :* Jangan Lupa Subscribe Ryuuka Botz`
  await ryuu.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: txtmp4 } }, { quoted: m })
  await fs.unlinkSync(media)
  }
  break
  case 'togif': {
  if (!quoted) throw 'Reply Image'
  if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
  reply(mess.wait)
  let { webp2mp4File } = require('./lib/uploader')
  let media = await ryuu.downloadAndSaveMediaMessage(quoted)
  let webpToMp4 = await webp2mp4File(media)
  let txtgif = `*Convert Webp To Video 🎦*\n`
  txtgif += `*💬 Status :* Done\n`
  txtgif += `*❗Note :* Jangan Lupa Subscribe Ryuuka Botz`
  await ryuu.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: txtgif }, gifPlayback: true }, { quoted: m })
  await fs.unlinkSync(media)
  }
  break
  case 'tourl': {
  reply(mess.wait)
  let media = await ryuu.downloadAndSaveMediaMessage(quoted)
  if (/image/.test(mime)) {
  let anu = await TelegraPh(media)
  reply(util.format(anu))
  } else if (!/image/.test(mime)) {
  let anu = await UploadFileUgu(media)
  reply(util.format(anu))
  }
  await fs.unlinkSync(media)
  }
  break
  case 'emojimix': {
  if (!text) throw `Example : ${prefix + command} 😅+🤔`
  reply(mess.wait)
  let [emoji1, emoji2] = text.split`+`
  let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
  for (let res of anu.results) {
  let encmedia = await ryuu.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
  await fs.unlinkSync(encmedia)
  }
  }
  break

  //Voice Changer
  case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
  try {
  let set
  if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
  if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
  if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
  if (/earrape/.test(command)) set = '-af volume=12'
  if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
  if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
  if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
  if (/reverse/.test(command)) set = '-filter_complex "areverse"'
  if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
  if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
  if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
  if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
  if (/audio/.test(mime)) {
  reply(mess.wait)
  let media = await ryuu.downloadAndSaveMediaMessage(quoted)
  let ran = getRandom('.mp3')
  exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
  fs.unlinkSync(media)
  if (err) return m.reply(err)
  let buff = fs.readFileSync(ran)
  ryuu.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
  fs.unlinkSync(ran)
  })
  } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
  } catch (e) {
  reply(e)
  }
  break
  
 
  // GAME MENU
  case 'tebak': {
  if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
  if (args[0] === "lagu") {
  if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
  let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
  let result = anu[Math.floor(Math.random() * anu.length)]
  let msg = await ryuu.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
  ryuu.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\n👨‍🎤 Artist : ${result.artist}\n⌚ Waktu : 60s\n🎁 Hadiah : $750`, msg).then(() => {
  tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
  })
  await sleep(60000)
  if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
  console.log("Jawaban: " + result.jawaban)
  ryuu.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ryuu.user.name, m)
  delete tebaklagu[m.sender.split('@')[0]]
  }
  } else if (args[0] === 'gambar') {
  if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
  let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
  let result = anu[Math.floor(Math.random() * anu.length)]
  ryuu.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\n📋 Deskripsi : ${result.deskripsi}\n⌚ Waktu : 60s\n🎁 Hadiah : $500`, m).then(() => {
  tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
  })
  await sleep(60000)
  if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
  console.log("Jawaban: " + result.jawaban)
  ryuu.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ryuu.user.name, m)
  delete tebakgambar[m.sender.split('@')[0]]
  }
  } else if (args[0] === 'kata') {
  if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
  let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
  let result = anu[Math.floor(Math.random() * anu.length)]
  ryuu.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\n⌚ Waktu : 60s\n🎁 Hadiah : $500`, m).then(() => {
  tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
  })
  await sleep(60000)
  if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
  console.log("Jawaban: " + result.jawaban)
  ryuu.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ryuu.user.name, m)
  delete tebakkata[m.sender.split('@')[0]]
  }
  } else if (args[0] === 'kalimat') {
  if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
  let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
  let result = anu[Math.floor(Math.random() * anu.length)]
  ryuu.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\n⌚ Waktu : 60s\n🎁 Hadiah : $500`, m).then(() => {
  tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
  })
  await sleep(60000)
  if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
  console.log("Jawaban: " + result.jawaban)
  ryuu.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ryuu.user.name, m)
  delete tebakkalimat[m.sender.split('@')[0]]
  }
  } else if (args[0] === 'lirik') {
  if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
  let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
  let result = anu[Math.floor(Math.random() * anu.length)]
  ryuu.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\n⌚ Waktu : 60s\n🎁 Hadiah : $500`, m).then(() => {
  tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
  })
  await sleep(60000)
  if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
  console.log("Jawaban: " + result.jawaban)
  ryuu.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ryuu.user.name, m)
  delete tebaklirik[m.sender.split('@')[0]]
  }
  } else if (args[0] === 'lontong') {
  if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
  let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
  let result = anu[Math.floor(Math.random() * anu.length)]
  ryuu.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\n⌚ Waktu : 60s\n🎁 Hadiah : $1000`, m).then(() => {
  caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
  caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
  })
  await sleep(60000)
  if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
  console.log("Jawaban: " + result.jawaban)
  ryuu.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, ryuu.user.name, m)
  delete caklontong[m.sender.split('@')[0]]
  delete caklontong_desk[m.sender.split('@')[0]]
  }
  }
  }
  break
  case 'kuismath': case 'math': {
   if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
   let { genMath, modes } = require('./src/math')
   if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
   let result = await genMath(text.toLowerCase())
   ryuu.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\n⌚ Waktu: ${(result.waktu / 1000).toFixed(2)} detik\n🎁 Hadiah : $1000`, m).then(() => {
   kuismath[m.sender.split('@')[0]] = result.jawaban
   })
   await sleep(result.waktu)
   if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
   console.log("Jawaban: " + result.jawaban)
   m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
   delete kuismath[m.sender.split('@')[0]]
   }
   }
   break
  case 'ttc': case 'ttt': case 'tictactoe': {
   let TicTacToe = require("./lib/tictactoe")
   this.game = this.game ? this.game : {}
   if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
   let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
   if (room) {
   reply('Partner ditemukan!')
   room.o = m.chat
   room.game.playerO = m.sender
   room.state = 'PLAYING'
   let arr = room.game.render().map(v => {
   return {
   X: '❌',
   O: '⭕',
   1: '1️⃣',
   2: '2️⃣',
   3: '3️⃣',
   4: '4️⃣',
   5: '5️⃣',
   6: '6️⃣',
   7: '7️⃣',
   8: '8️⃣',
   9: '9️⃣',
   }[v]
   })
   let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
   if (room.x !== room.o) await ryuu.sendText(room.x, str, m, { mentions: parseMention(str) } )
   await ryuu.sendText(room.o, str, m, { mentions: parseMention(str) } )
   } else {
   room = {
   id: 'tictactoe-' + (+new Date),
   x: m.chat,
   o: '',
   game: new TicTacToe(m.sender, 'o'),
   state: 'WAITING'
   }
   if (text) room.name = text
   reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
   this.game[room.id] = room
   }
   }
   break
  case 'delttc': case 'delttt': {
   this.game = this.game ? this.game : {}
   try {
   if (this.game) {
   delete this.game
   ryuu.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
   } else if (!this.game) {
   reply(`Session TicTacToe🎮 tidak ada`)
   } else throw '?'
   } catch (e) {
   reply(fiturError())
   }
   }
   break
  case 'suitpvp': case 'suit': {
   this.suit = this.suit ? this.suit : {}
   let poin = 10
   let poin_lose = 10
   let timeout = 60000
   if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Selesaikan suit mu yang sebelumnya`)
   if (!m.mentionedJid[0]) return reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
   if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
   let id = 'suit_' + new Date() * 1
   let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
   this.suit[id] = {
   chat: await ryuu.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
   id: id,
   p: m.sender,
   p2: m.mentionedJid[0],
   status: 'wait',
   waktu: setTimeout(() => {
   if (this.suit[id]) ryuu.sendText(m.chat, `_Waktu suit habis_`, m)
   delete this.suit[id]
   }, 60000), poin, poin_lose, timeout
   }
   }
   break

  // CASE SEARCH MENU
  case 'pinterest': {
  if (!text) return reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} hinata*`)
  reply(mess.wait)
  anu = await pinterest(text)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonspinterest = [{buttonId: `pinterest ${text}`, buttonText: {displayText: 'Next Result 🔎'}, type: 1}]
  ryuu.sendMessage(m.chat, { image: { url: result }, caption: 'ℹ️ Status : Done\n'+'💬 Note : Jangan Lupa Subrek Ryuuka Botz\n'+'💈Source Url : '+result, buttons: buttonspinterest }, { quoted: m })
  }
  break
  case 'wallanime':
  reply(mess.wait)
  let buttonswall = [{buttonId: `wallpaper`, buttonText: {displayText: 'Next Result 🔎'}, type: 1}]
  axios.get(`https://nekos.life/api/v2/img/wallpaper`)
  .then(({data}) => {
  sendFileFromUrl(m.chat, data.url, mess.done, buttonswall, m)
  })
  break

  // CASE OTHER MENU
  case 'delete': case 'del': {
  if (!m.quoted) throw false
  let { chat, fromMe, id, isBaileys } = m.quoted
  if (!isBaileys) throw 'Bukan Dari Saia Itu Banh 🗿'
  ryuu.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
  }
  break
  case 'speed': case 'tes':
  let timestamp = speed()
  let latensi = speed() - timestamp
  reply(`Merespon Dalam ${latensi.toFixed(4)} Detik`)
  break
  case 'runtime':
  reply(`*⌚ Runtime :* ${runtime(process.uptime())}`)
  break
  case 'ping': case 'botstatus': case 'statusbot': case 'infobot': {
  let timestamp = speed()
  let latensi = speed() - timestamp
  neww = performance.now()
  oldd = performance.now()
  let txtping = `*⍢⃝🤖 I N F O  B O T*\n\n`
  txtping += `*👤 Owner Name :* ${global.namaowner}\n`
  txtping += `*🕊️ Nama Bot :* ${global.namabot}\n`
  txtping += `*🔗 No. Owner :* wa.me/${global.nomerowner}\n\n`
  txtping += `*⍢⃝👾 I N F O  S T A T I S T I K*\n\n`
  txtping += `*🗃️ Lib :* Baileys Multi Device\n`
  txtping += `*🆎 Tipe :* Nodejs\n`
  txtping += `*📈 STATUS BOT :* ONLINE\n`
  txtping += `*⚡ Speed :* ${latensi.toFixed(4)} Second\n`
  txtping += `*⏰ Runtime :* ${runtime(process.uptime())}\n`
  txtping += `*💻 RAM Server :* ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}\n\n`
  txtping += `*⍢⃝🤝 C O N N E C T  W I T H  M E*\n\n`
  txtping += `*🎗️ Instagram :* ${global.instagram}\n`
  txtping += `*🎗️ Github :* ${global.github}\n`
  txtping += `*🎗️ Youtube :* ${global.youtube}\n`
  txtping += `*🎗️ WhatsApp :* wa.me/${global.nomerowner}\n`
  .trim()
  imgping = await getBuffer(picak+'Status\nBot')
  ryuu.send5ButImg(m.chat, txtping, `© ${global.namaowner}`, imgping, btnsmenu3)
  }
  break
  case 'owner':
  ryuu.sendContact(m.chat, global.owner, m)
  break
    
   // CASE DOWNLOAD
  case 'fbdl': case 'fb': case 'facebookdl': case 'facebook':
  if (!q) return reply(wrongFormat(prefix))
  if (!isUrl(q)) return reply(wrongFormat(prefix))
  if (!q.includes('facebook')/('fb')) return reply(notLink())
  await reply(mess.wait)
  xfar.Facebook(`${q}`).then(async data => {
  let txt = `*🌱 FACEBOOK DOWNLOADER 🌱*\n\n`
  txt += `*💬 Judul :* ${data.title}\n`
  txt += `*📈 Resolusi :* ${data.medias[1].quality}\n`
  txt += `*📥 Ukuran :* ${data.medias[1].formattedSize}\n`
  txt += `*〽️ Url :* ${data.url}\n\n`
  txt += `*Done !!! Jangan Lupa Subscribe YT Ryuuka Botz*`
  sendFileFromUrl(from,data.medias[1].url,txt,m)
  })
  .catch((err) => {
  reply(fiturError())
  })
  break
  case 'igdl': case 'ig': case 'instagramdl': case 'instagram':
  if (!q) return reply(wrongFormat(prefix))
  if (!isUrl(q)) return reply(wrongFormat(prefix))
  if (!q.includes('instagram')) return reply(notLink())
  await reply(mess.wait)
  bochil.instagramdlv2(`${q}`).then(async data => {
  let txt = `*🌱 INSTAGRAM DOWNLOADER 🌱*\n\n`
  txt += `*💬 Judul :* ${data.title}\n`
  txt += `*📥 Ukuran :* ${data.medias.length}\n`
  txt += `*〽️ Url :* ${data.url}\n\n`
  txt += `*Tunggu Proses Pengiriman Medianya Ya Kak 😎*`
  reply(txt)
  for (let i of data.medias) {
  if (i.extension === "mp4") {
  ryuu.sendMessage(from, { video: { url: i.url }})
  } else if (i.extension === "jpg") {
  ryuu.sendMessage(from, { image: { url: i.url }})
  }
  }
  })
  .catch((err) => {
  reply(fiturError())
  })
  break

  // MENU NYA BANH
  case 'setmenu':
  if (!isCreator) return reply(mess.owner)
  if (!text) return reply(`Opsi :\n1. image\n2. gif\n3. list\n\nContoh :\n${prefix}setmenu image`)
  if (text == "image") {
  modelmenu = "image"
  reply(mess.done+'\n\nModel Menu Sekarang : '+text)
  }
  else if (text == "gif") {
  modelmenu = "gif"
  reply(mess.done+'\n\nModel Menu Sekarang : '+text)
  }
  else if (text == "list") {
  modelmenu = "list"
  reply(mess.done+'\n\nModel Menu Sekarang : '+text)
  }
  else {
  reply(`Opsi :\n1. image\n2. gif\n3. list\n\nContoh :\n${prefix}setmenu image`)
  }
  break
  case 'list': case 'command':
  if(modelmenu == 'list'){
  const sections = [
  {
  title: "📖 All Menu Bot",
  rows: [
  {title: "All Menu", rowId: "allmenu", description: `Menampilkan Seluruh Menu ${global.namabot}`}
  ]
  },
  {
  title: `Sub Menu ${global.namabot} 🤖`,
  rows: [
  {title: "Owner Menu 👤", rowId: "ownermenu"},
  {title: "Group Menu 👥", rowId: "groupmenu"},
  {title: "Download Menu 📥", rowId: "downloadmenu"},
  {title: "Rpg Menu 🏔️", rowId: "rpgmenu"},
  {title: "Database Menu 📂️", rowId: "databasemenu"},
  {title: "Telesticker Menu️", rowId: "telestc"},
  {title: "Search Menu 🔎", rowId: "searchmenu"},
  {title: "Maker Menu 🎨", rowId: "makermenu"},
  {title: "Textprome Menu 👨‍🎨", rowId: "textpromenu"},
  {title: "Informasi Menu 🗞️", rowId: "infomenu"},
  {title: "Nulis Menu ✍️", rowId: "nulismenu"},
  {title: "Asupan Menu 👧", rowId: "asupanmenu"},
  {title: "Cecan Menu 👩", rowId: "cecanmenu"},
  {title: "Voice Menu 🎙️", rowId: "voicemenu"},
  {title: "Ephoto Menu 📸️", rowId: "ephotomenu"},
  {title: "Photooxy Menu 🖼️", rowId: "photooxymenu"},
  {title: "Fun Menu 🎮", rowId: "funmenu"},
  {title: "Game Menu 🎰", rowId: "gamemenu"},
  {title: "Random Menu 🎡", rowId: "randomenu"},
  {title: "Anime Menu ⛩️", rowId: "animemenu"},
  {title: "Nsfw Menu 🔞", rowId: "nsfwmenu"},
  {title: "Other Menu ⏭️", rowId: "othermenu"}
  ]
  },
  {
  title: "🏆 Big Thanks To",
  rows: [
  {title: "Contributors", rowId: "tqto", description: `Ucapan Terima Kasih Kepada Constributor`}
  ]
  },
  {
  title: "📚 Sumber Script",
  rows: [
  {title: "Script", rowId: "sc", description: `Menampilkan Sumber Script ${global.namabot}`}
  ]
  },
  {
  title: "👦 Creator",
  rows: [
  {title: "Creator", rowId: "creator", description: `Menampilkan Kontak Creator ${global.namabot}`}
  ]
  },
  ]
  const listMessage = {
  text: list(pushname, ucapanWaktu, namabot),
  footer: global.namaowner,
  buttonText: "KLIK DISINI 👋",
  sections
  }
  const sendMsg = await ryuu.sendMessage(m.chat, listMessage, {quoted: m})
  } else if(modelmenu == 'image'){
  imgsime = await getBuffer(picak+'Simple Menu')
  ryuu.send5ButImg(m.chat, simple(pushname, ucapanWaktu, namabot, prefix), `© ${global.namaowner}`, imgsime, btnsall)
  } else if(modelmenu == 'gif') {
  ryuu.send5ButGif(m.chat, simple(pushname, ucapanWaktu, namabot, prefix), `© ${global.namabot}`, global.thumbmp4, btnsall)
  }
  break
  case 'allmenu': case 'all':
  anu = `*Halo Kak ${pushname}*\n*${ucapanWaktu}*\n\n`
  imgall = await getBuffer(picak+'All Menu')
  ryuu.send5ButImg(m.chat, abtn+allmenu(quotes, prefix), `© ${global.namaowner}`, imgall, btnsall)
  break
  case 'ownermenu':
  imgowner = await getBuffer(picak+'Owner Menu')
  ryuu.send5ButImg(m.chat, abtn+sowner(quotes, prefix), `© ${global.namaowner}`, imgowner, btnsmenu)
  break
  case 'groupmenu':
  imggroup = await getBuffer(picak+'Group Menu')
  ryuu.send5ButImg(m.chat, abtn+sgrup(quotes, prefix), `© ${global.namaowner}`, imggroup, btnsmenu)
  break
  case 'downloadmenu':
  imgdown = await getBuffer(picak+'Download Menu')
  ryuu.send5ButImg(m.chat, abtn+sdown(quotes, prefix), `© ${global.namaowner}`, imgdown, btnsmenu)
  break
  case 'rpgmenu':
  imgrpg = await getBuffer(picak+'Rpg Menu')
  ryuu.send5ButImg(m.chat, abtn+srpg(quotes, prefix), `© ${global.namaowner}`, imgrpg, btnsmenu)
  break
  case 'databasemenu':
  imgdatabase = await getBuffer(picak+'Database Menu')
  ryuu.send5ButImg(m.chat, abtn+sdatabase(quotes, prefix), `© ${global.namaowner}`, imgdatabase, btnsmenu)
  break
  case 'telestickermenu': case 'telemenu': case 'telestc':
  imgtele = await getBuffer(picak+'Telesticker')
  ryuu.send5ButImg(m.chat, abtn+stele(quotes, prefix), `© ${global.namaowner}`, imgtele, btnsmenu)
  break
  case 'searchmenu':
  imgsearch = await getBuffer(picak+'Search Menu')
  ryuu.send5ButImg(m.chat, abtn+ssearch(quotes, prefix), `© ${global.namaowner}`, imgsearch, btnsmenu)
  break
  case 'infomenu':
  imginfo = await getBuffer(picak+'Info Menu')
  ryuu.send5ButImg(m.chat, abtn+sinfo(quotes, prefix), `© ${global.namaowner}`, imginfo, btnsmenu)
  break
  case 'nulismenu':
  imgnulis = await getBuffer(picak+'Nulis Menu')
  ryuu.send5ButImg(m.chat, abtn+snulis(quotes, prefix), `© ${global.namaowner}`, imgnulis, btnsmenu)
  break 
  case 'asupanmenu':
  imgasupan = await getBuffer(picak+'Asupan Menu')
  ryuu.send5ButImg(m.chat, abtn+sasupan(quotes, prefix), `© ${global.namaowner}`, imgasupan, btnsmenu)
  break
  case 'ephotomenu':
  imgepoto = await getBuffer(picak+'Ephoto Menu')
  ryuu.send5ButImg(m.chat, abtn+spoto(quotes, prefix), `© ${global.namaowner}`, imgpoto, btnsmenu)
  break
  case 'photooxymenu':
  imgphoto = await getBuffer(picak+'Photooxy Menu')
  ryuu.send5ButImg(m.chat, abtn+sphoto(quotes, prefix), `© ${global.namaowner}`, imgphoto, btnsmenu)
  break
  case 'cecanmenu':
  imgcecan = await getBuffer(picak+'Cecan Menu')
  ryuu.send5ButImg(m.chat, abtn+scecan(quotes, prefix), `© ${global.namaowner}`, imgcecan, btnsmenu)
  break
  case 'voicemenu':
  imgvoice = await getBuffer(picak+'Voice Menu')
  ryuu.send5ButImg(m.chat, abtn+svoice(quotes, prefix), `© ${global.namaowner}`, imgvoice, btnsmenu)
  break
  case 'funmenu':
  imgfun = await getBuffer(picak+'Fun Menu')
  ryuu.send5ButImg(m.chat, abtn+sfun(quotes, prefix), `© ${global.namaowner}`, imgfun, btnsmenu)
  break
  case 'gamemenu':
  imggame = await getBuffer(picak+'Game Menu')
  ryuu.send5ButImg(m.chat, abtn+sgame(quotes, prefix), `© ${global.namaowner}`, imggame, btnsmenu)
  break
  case 'randomenu':
  imgrandom = await getBuffer(picak+'Random Menu')
  ryuu.send5ButImg(m.chat, abtn+srandom(quotes, prefix), `© ${global.namaowner}`, imgrandom, btnsmenu)
  break
  case 'animemenu':
  imganime = await getBuffer(picak+'Anime Menu')
  ryuu.send5ButImg(m.chat, abtn+sanime(quotes, prefix), `© ${global.namaowner}`, imganime, btnsmenu)
  break
  case 'nsfwmenu':
  imgnsfw = await getBuffer(picak+'Nsfw Menu')
  ryuu.send5ButImg(m.chat, abtn+snsfw(quotes, prefix), `© ${global.namaowner}`, imgnsfw, btnsmenu)
  break
  case 'makermenu':
  imgmaker = await getBuffer(picak+'Maker Menu')
  ryuu.send5ButImg(m.chat, abtn+smaker(quotes, prefix), `© ${global.namaowner}`, imgmaker, btnsmenu)
  break
  case 'textpromenu':
  imgtextpro = await getBuffer(picak+'Textpro Menu')
  ryuu.send5ButImg(m.chat, abtn+stextpro(quotes, prefix), `© ${global.namaowner}`, imgtextpro, btnsmenu)
  break
  case 'othermenu':
  imgother = await getBuffer(picak+'Other Menu')
  ryuu.send5ButImg(m.chat, abtn+sother(quotes, prefix), `© ${global.namaowner}`, imgother, btnsmenu)
  break 
  
    //Salam
  case 'Assalamualaikum': case 'assalamualaikum': case 'Assalamualaikum Wr. Wb':
  reply(`Waalaikumsalam Kak ${pushname} 🙏`)
  break
  case 'Shalom': case 'Salam Sejahtera': case 'shalom': case 'salam sejahtera': case 'Salam sejahtera':
  reply(`Salam Sejahtera Juga Untukmu Kak ${pushname} 🙏`)
  break
  case 'Om Swastyastu': case 'om swastyastu': case 'Om swastyastu':
  reply(`Om Santi, Santi, Santi, Om Kak ${pushname} 🙏`)
  break
  case 'Namo Buddhaya': case 'Namo buddhaya': case 'namo buddhaya':
  reply(`Nammo Buddhaya Juga Kak ${pushname} 🙏`)
  break
  case 'Wie De Dong Tian': case 'Wie de dong tian': case 'wie de dong tian':
  reply(`Xian You Yi De Kak ${pushname} 🙏`)
  break
    
  //Thx
  case 'thanks': case 'makasih': case 'thx': case 'tengkiyu': case 'terima kasih': case 'Terima Kasih': case 'Terima kasih':
  reply(`Sama-Sama Kak ${pushname}`)
  break
    
  //Case Cek Prefix
  case 'cekpref': case 'cekprefix':
  reply('Bot Ini Menggunakan Multi Prefix Dan No Prefix')
  break  
   
  // JANGAN DIHAPUS TOD 🗿
  default:
  if (budy.startsWith('=>')) {
  if (!isCreator) return m.reply(mess.owner)
  function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return m.reply(bang)
  }
  try {
  m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
  m.reply(String(e))
  }
  }  
  if (budy.startsWith('>')) {
  if (!isCreator) return m.reply(mess.owner)
  try {
  let evaled = await eval(budy.slice(2))
  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
  await m.reply(evaled)
  } catch (err) {
  m = String(err)
  await m.reply(m)
  }
  }
  if (budy.startsWith('$')) {
  if (!isCreator) return m.reply(mess.owner)
  exec(budy.slice(2), (err, stdout) => {
  if(err) return reply(err)
  if (stdout) return m.reply(stdout)
  })
  }
  }
  switch (command) {

  //CASE SOURCE CODE
  case 'sc': case 'source': case 'sumber':
  let txtsc = `°°°°°°°°°°° *INFO SCRIPT* °°°°°°°°°°°\n\n`
  txtsc += `*Base Ori : Dika Ardnt*\n`
  txtsc += `https://github.com/DikaArdnt\n\n`
  txtsc += `*Recode By : Ryuuka Team*\n`
  txtsc += `http://youtube.com/c/RyuukaBotz\n\n`
  txtsc += `*User : ${global.namaowner}*`
  let btnsc = [{
  urlButton: {
  displayText: 'Source Code 💠️',
  url: 'http://youtube.com/c/RyuukaBotz'
  }
  }]
  imgsc = await getBuffer(picak+'Source Code')
  ryuu.send5ButImg(m.chat, txtsc, `© ${global.namaowner}`, imgsc, btnsc)
  break
  
  // CASE TQTO
  case 'tqto':
  tqto = `*BIG THANKS TO :*\n\nAdiwajshing :\nhttps://github.com/Adiwajshing\nDika Ardnt :\nhttps://github.com/DikaArdnt\nFatih Arridho :\nhttps://github.com/FatihArridho\nNurutomo :\nhttps://github.com/Nurutomo\nIstikmal : \nhttps://github.com/BochilGaming\nMhankbarbar :\nhttps://github.com/Mhankbarbar\nZeeone Ofc :\nhttps://github.com/Zeeone-Ofc\nR-TEAM94 :\nhttps://github.com/R-TEAM94\n${global.namaowner} :\n${global.webme}`
  btntq = [{
  urlButton: {
  displayText: 'Source Code 💠️',
  url: 'http://youtube.com/c/RyuukaBotz'
  }
  }]
  imgtqto = await getBuffer(picak+'Thanks To')
  ryuu.send5ButImg(m.chat, tqto, `© ${global.namaowner}`, imgtqto, btntq)
  break

  //Maker Menu
  case 'emoji':case 'semoji':
  if (!q) return reply(`Example : ${prefix + command} 😂`)
  reply(mess.wait)
  hex2 = args.join(' ') 
  let sem = [0,1,2,3,4,5,6,7,8,9,10,11]
  let semoji = sem[Math.floor(Math.random() * sem.length)]
  emoji.get(`${hex2}`).then(emoji => {
  teks = `${emoji.images[semoji].url}`
  ryuu.sendImageAsSticker(m.chat, teks, m, { packname: global.packname, author: global.author })
  })
  break
  case 'swm': case 'wm': case 'take': {
  if (!quoted) return reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`)
  if (!text) return reply(`Kirim perintah ${prefix + command} packname|author`)
  if (!text.includes('|')) return reply(`Kirim perintah ${prefix + command} packname|author`)
  reply (mess.wait)
  if (/image/.test(mime)) {
  let media = await quoted.download()
  let encmedia = await ryuu.sendImageAsSticker(m.chat, media, m, { packname: text.split("|")[0], author: text.split("|")[1] })
  await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
  if ((quoted.msg || quoted).seconds > 11) return reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`)
  let media = await quoted.download()
  let encmedia = await ryuu.sendVideoAsSticker(m.chat, media, m, { packname: text.split("|")[0], author: text.split("|")[1] })
  await fs.unlinkSync(encmedia)
  } else {
  reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`)
  }
  }
  break
  
  //Stalk Menu
  case 'igstalk': case 'stalkig':
  if(!text) return reply(`Kirim perintah ${command} Username\nContoh : ${command} fandyyy._`)
  reply(mess.wait)
  var data = await fetchJson(`https://hardianto.xyz/api/igstalk?username=${text}&apikey=hardianto`)
  var caption = `*INSTAGRAM STALK 🔎*\n\n👤Username : ${data.username}\n📛 Full Name : ${data.fullname}\n✅ Verified : ${data.verified}\n👥 Followers : ${data.followers}\n🫂 Following : ${data.follow}\n🗣️ Kategori : ${data.category}\n\n© Ryuuka Team`
  ryuu.sendMessage(m.chat, {caption: caption, image: {url: data.thumbnail}}, {quoted: m})
  break
  case 'githubstalk': case 'stalkgh':
  if(!text) return reply(`Kirim perintah ${command} Username\nContoh : ${command} fandyyy._`)
  reply(mess.wait)
  var data = await fetchJson(`https://api-ryubotz.herokuapp.com/api/githubstalk?username=${text}&apikey=RyuBotz`)
  var github = `*GITHUB STALK 🔎*\n\n💞 Bio : ${data.result.bio}\n🏢 Perusahaan : ${data.result.company}\n📧 Email : ${data.result.email}\n👥 Followers : ${data.result.follower}\n🫂 Following : ${data.result.following}\n🗣️ Kategori : ${data.result.Type}\n\n© Ryuuka Team`
  ryuu.sendMessage(m.chat, {caption: github, image: {url: data.result.avatar}}, {quoted: m})
  break
  
  //TextProMe
  case 'serti1': case 'serti2': case 'serti3':
  if(!text) return reply('Masukkan Teks')
  reply(mess.wait)
  const serti = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/${command}/img.php?nama=${text}`)
  let buttonsserti = [{buttonId: `thanks`, buttonText: {displayText: 'T H X  B A N G 😎'}, type: 1}]
  ryuu.sendMessage(m.chat, { image: serti, caption: mess.done, buttons: buttonsserti }, { quoted: m})
  break
  case 'magma': case '3dstone': case 'hallowen': case 'larva': 
  if(!text) return reply('Masukkan Teks')
  reply(mess.wait)
  const textpro = await getBuffer (`https://api-ryubotz.herokuapp.com/apo/textpro/${command}?text=${text}&apikey=RyuBotz`)
  let btntextpro = [{buttonId: `thanks`, buttonText: {displayText: 'T H X  B A N G 😎'}, type: 1}]
  ryuu.sendMessage(m.chat, { image: textpro, caption: mess.done, buttons: btntextpro }, { quoted: m})
  break
  case 'blackpink':
  if(!text) return reply('Masukkan Teks')
  reply(mess.wait)
  const blck = await getBuffer(`https://api-ryubotz.herokuapp.com/api/textpro/black-pink?text=${text}&apikey=RyuBotz`)
  let buttonblck = [{buttonId: `thanks`, buttonText: {displayText: 'T H X  B A N G 😎'}, type: 1}]
  ryuu.sendMessage(m.chat, { image: blck, caption: mess.done, buttons: buttonblck }, { quoted: m})
  break
  case 'neon':
  if(!text) return reply('Masukkan Teks')
  reply(mess.wait)
  const neon = await getBuffer(`https://api-ryubotz.herokuapp.com/api/textpro/neon-light?text=${text}&apikey=RyuBotz`)
  let buttonsneon = [{buttonId: `thanks`, buttonText: {displayText: 'T H X  B A N G 😎'}, type: 1}]
  ryuu.sendMessage(m.chat, { image: neon, caption: mess.done, buttons: buttonsneon }, { quoted: m})
  break
  case 'horor': case 'horror':
  if(!text) return reply('Masukkan Teks')
  reply(mess.wait)
  const hor = await getBuffer(`https://api-ryubotz.herokuapp.com/api/textpro/horor-blood?text=${text}&apikey=RyuBotz`)
  let buttonshor = [{buttonId: `thanks`, buttonText: {displayText: 'T H X  B A N G 😎'}, type: 1}]
  ryuu.sendMessage(m.chat, { image: hor, caption: mess.done, buttons: buttonshor }, { quoted: m})
  break
  case 'toxic':
  if(!text) return reply('Masukkan Teks')
  reply(mess.wait)
  const tox = await getBuffer(`https://api-ryubotz.herokuapp.com/api/textpro/toxic-bokeh?text=${text}&apikey=RyuBotz`)
  let buttonstox = [{buttonId: `thanks`, buttonText: {displayText: 'T H X  B A N G 😎'}, type: 1}]
  ryuu.sendMessage(m.chat, { image: tox, caption: mess.done, buttons: buttonstox }, { quoted: m})
  break
  case 'marvel':
  if(!text) return reply('Masukkan Teks')
  if(!text.includes('|')) return reply(`Kirim Pesan Dengan Caption ${prefix + command} *teks|teks*`)
  reply(mess.wait)
  arg = args.join(' ')
  atas = arg.split('|')[0]
  bawah = arg.split('|')[1]
  const mar = await getBuffer(`https://api-ryubotz.herokuapp.com/api/textpro/marvel-logo2?text=${atas}&text2=${bawah}&apikey=RyuBotz`)
  let buttonsmar = [{buttonId: `thanks`, buttonText: {displayText: 'T H X  B A N G 😎'}, type: 1}]
  ryuu.sendMessage(m.chat, { image: mar, caption: mess.done, buttons: buttonsmar }, { quoted: m})
  break
  case 'potter':
  if(!text) return reply('Masukkan Teks')
  reply(mess.wait)
  const pot = await getBuffer(`https://api-ryubotz.herokuapp.com/api/textpro/harry-potter?text=${text}&apikey=RyuBotz`)
  let buttonspot = [{buttonId: `thanks`, buttonText: {displayText: 'T H X  B A N G 😎'}, type: 1}]
  ryuu.sendMessage(m.chat, { image: pot, caption: mess.done, buttons: buttonspot }, { quoted: m})
  break
  case 'pornhub':
  if(!text) return reply('Masukkan Teks')
  if(!text.includes('|')) return reply(`Kirim Pesan Dengan Caption ${prefix + command} *teks|teks*`)
  reply(mess.wait)
  arg = args.join(' ')
  atas = arg.split('|')[0]
  bawah = arg.split('|')[1]
  const porn = await getBuffer(`https://api-ryubotz.herokuapp.com/api/textpro/pornhub?text=${atas}&text2=${bawah}&apikey=RyuBotz`)
  let buttonsporn = [{buttonId: `thanks`, buttonText: {displayText: 'T H X  B A N G 😎'}, type: 1}]
  ryuu.sendMessage(m.chat, { image: porn, caption: mess.done, buttons: buttonsporn }, { quoted: m})
  break
  case 'tahta':
  if(!text) return reply('Masukkan Teks')
  reply(mess.wait)
  const tahta = await getBuffer(`https://api-ryubotz.herokuapp.com/api/maker/harta-tahta?text=${text}&apikey=RyuBotz`)
  let buttonstahta = [{buttonId: `thanks`, buttonText: {displayText: 'T H X  B A N G 😎'}, type: 1}]
  ryuu.sendMessage(m.chat, { image: tahta, caption: mess.done, buttons: buttonstahta }, { quoted: m})
  break
  
  //Fitur photooxy
  case 'burnPapper':
  let { burnPaper } = require('./lib/photooxy.js')
  if (!text) return reply(`Teksnya Mana?`)
  reply(mess.wait)
  poto = await burnPapper(text)
  ryuu.sendMessage(m.chat, { image: { url: poto }, caption: mess.done, buttons: buttonspoto }, { quoted: m })
  break
  case '3dnature': case 'bevel': case 'burnpaper': case 'quotesgrass': case 'stars': case 'flaming': case 'romance': case 'gerbang': case 'fur': case 'funnycup':
  if(!text) return reply('Masukkan Teks')
  reply(mess.wait) 
  getpoto = await getBuffer(`https://api.violetics.pw/api/photooxy/${command}?apikey=beta&text=${text}`) 
  let buttonspoto = [{buttonId: `thanks`, buttonText: {displayText: 'T H X  B A N G 😎'}, type: 1}]
  ryuu.sendMessage(m.chat, { image: getpoto, caption: mess.done, buttons: buttonspoto }, { quoted: m}) 
  break
  
  //Fitur Ephoto360
  case '3d-underwater': case '3dtext-pig': case '3dvalentine-cards': case 'anonymous-neon': case 'advanced-glow': case 'art-shader': case 'angels-wings':
  if(!text) return reply('Masukkan Teks')
  reply(mess.wait) 
  getphoto = await getBuffer(`https://api.violetics.pw/api/ephoto360/${command}?apikey=beta&text=${text}`) 
  let buttonsphoto = [{buttonId: `thanks`, buttonText: {displayText: 'T H X  B A N G 😎'}, type: 1}]
  ryuu.sendMessage(m.chat, { image: getphoto, caption: mess.done, buttons: buttonsphoto }, { quoted: m}) 
  break
   
  //Random Menu
  case 'darkjokes': case 'dark': case 'darkjoke':
  reply(mess.wait)
  var but = [{buttonId: 'darkjokes', buttonText: { displayText: "Next Result ⏭️" }, type: 1 }]
  var data = await fetchJson(api('ryuu', `/api/random/${command}`, {}, 'apikey'))
  ryuu.sendMessage(m.chat, { caption: mess.done, image: { url: data.result }, buttons: but }, { quoted: m })
  break
  case 'meme': case 'randomeme':
  reply(mess.wait)
  var but = [{buttonId: 'meme', buttonText: { displayText: "Next Result ⏭️" }, type: 1 }]
  var data = await fetchJson(api('ryuu', `/api/random/${command}`, {}, 'apikey'))
  var meme = `${data.result.title}`
  ryuu.sendMessage(m.chat, {caption: meme, image: {url: data.result.url}, footer: '© Ryuuka Team', buttons: but}, {quoted: m})
  break
  case 'quotes': case 'quotes2':
  reply(mess.wait)
  var data = await fetchJson(api('ryuu', `/api/random/${command}`, {}, 'apikey'))
  ryuu.sendButtonText(m.chat, [{ buttonId: `${command}`, buttonText: { displayText: 'NEXT ⏩' }, type: 1 }], `${data.result.quote}`, '~ Ryuuka Team', m)
  break 
  case 'katabijak':
  reply(mess.wait)
  var but = [{buttonId: `${command}`, buttonText: { displayText: "Next Result ⏭️" }, type: 1 }]
  var data = await fetchJson(api('ryuu', '/api/random/katabijak', {}, 'apikey'))
  ryuu.sendButtonText(m.chat, [{ buttonId: 'pantun', buttonText: { displayText: 'NEXT ⏩' }, type: 1 }], `${data.result}`, '~ Ryuuka Team', m)
  break
  case 'quotesanime': case 'quoteanime': {
  anu = await quotesAnime()
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttons = [{buttonId: `quotesanime`, buttonText: {displayText: 'Next Result 🔎'}, type: 1}]
  let buttonMessage = {
  text: `⛩️ ${a}${result.quotes}${a}\n\nBy *'${result.karakter}'*, ${result.anime} 🇯🇵\n\n⏳ Terbit Tanggal ${result.up_at}`,
  footer: 'Klik Button Ini Untuk Mencari Lagi',
  buttons: buttons,
  headerType: 2
  }
  ryuu.sendMessage(m.chat, buttonMessage, { quoted: m })
  }
  break
  case 'fiersa': case 'fiersabersari':
  var fie = await fetch('https://raw.githubusercontent.com/irwanx/db/master/kata-kata/fiersa-besari.txt')
  var rsa = await fie.text()
  var ber = rsa.split('\n')
  var sari = ber[Math.floor(Math.random() * ber.length)]
  var btnfie = [{ buttonId: `${command}`, buttonText: { displayText: 'Fiersa Bersari️' }, type: 1 }]
  await ryuu.sendButtonText(m.chat, btnfie, sari, global.namaowner, m)
  break
  case 'senja': case 'katasenja':
  var ka = await fetch('https://raw.githubusercontent.com/irwanx/db/master/kata-kata/senja.txt')
  var ta = await ka.text()
  var sen = ta.split('\n')
  var ja = sen[Math.floor(Math.random() * sen.length)]
  var btnfiersa = [{ buttonId: `${command}`, buttonText: { displayText: 'Kata Senja' }, type: 1 }]
  await ryuu.sendButtonText(m.chat, btnfiersa, ja, global.namaowner, m)
  break
  case 'bucin': case 'katabucin':
  var bu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/kata-kata/bucin.json')
  var cin = bu[Math.floor(Math.random() * bu.length)]
  var btnbucin = [{ buttonId: `${command}`, buttonText: { displayText: 'Kata Bucin' }, type: 1 }]
  await ryuu.sendButtonText(m.chat, btnbucin, cin, global.namaowner, m)
  break
  case 'katailham': 
  let btnilham = [{buttonId: `katailham`, buttonText: {displayText: 'Kata Ilham'}, type: 1}]
  axios.get('https://leyscoders-api.herokuapp.com/api/katailham?apikey=MIMINGANZ').then((res) => {
  let hasil = `${res.data.result}`
  ryuu.sendButtonText(m.chat, btnilham, hasil, global.namaowner, m)
  })
  break
  
  // CASE NEKOPOI
  case 'ahegeo': case 'ass': case 'bdsm': case 'blowjob': case 'cuckold': case 'cum': case 'ero': case 'femdom': case 'foot': case 'gangbang': case 'glasses': case 'hentai': case 'jahy': case 'mstb': case 'neko': case 'orgy': case 'panties': case 'pussy': case 'yuri': case 'zettai':
  if(!m.isGroup) return reply(mess.group)
  if(!db.chats[m.chat].nsfw) return reply(fiturOff())
  reply(mess.wait)
  const nsfw = await getBuffer(api('ryuu', `/api/nsfw/${command}`, {}, 'apikey'))
  let buttonsnsfw = [{buttonId: `${command}`, buttonText: {displayText: 'Next Result 🔎'}, type: 1}]
  ryuu.sendMessage(m.chat, { image: nsfw, caption: `SANGE? 🤨📸`,buttons: buttonsnsfw }, { quoted: m})
  .catch((err) => {
  reply(fiturError())
  })
  break  
  
  // CASE GAME MENU
  case 'trut':
  case 'truth':
  var data = await fetchJson(`https://api.dhamzxploit.my.id/api/truth`)
  let btnstruth = [{
  urlButton: {
  displayText: 'Source Code 💠️',
  url: 'http://youtube.com/c/RyuukaBotz'
  }
  }, {
  "quickReplyButton": {
  "displayText": "Next Result ⏩",
  "id": `truth`
  },
  }]
  imgtruth = await getBuffer(picak+'Truth')
  ryuu.send5ButImg(m.chat, data.result, `© ${global.namaowner}`, imgtruth, btnstruth)
  break
  case 'dare':
  var data = await fetchJson(`https://api.dhamzxploit.my.id/api/dare`)
  let btnsdare = [{
  urlButton: {
  displayText: 'Source Code 💠️',
  url: 'http://youtube.com/c/RyuukaBotz'
  }
  }, {
  "quickReplyButton": {
  "displayText": "Next Result ⏩",
  "id": `dare`
  },
  }]
  imgdare = await getBuffer(picak+'Dare')
  ryuu.send5ButImg(m.chat, data.result, `© ${global.namaowner}`, imgdare, btnsdare)
  break
  case 'bagaimanakah':
  if (!text) return reply('Yang Lu Mau Tanyain Apaan?')
  const bagai = ['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Yo Ndak Tau, Kok Tanya Saia']
  const gaimana = bagai[Math.floor(Math.random() * bagai.length)]
  reply(gaimana)
  break
  case 'kapankah':
  if (!text) return reply('Yang Lu Mau Tanyain Apaan?')
  const kapan = ['1 Hari Lagi','1 Minggu Lagi','1 Tahun Lagi','1 Abad Lagi','Tidak Akan Pernah','Hmmm...','Tidak Ada']
  const kah = kapan[Math.floor(Math.random() * kapan.length)]
  reply(kah)
  break
  case 'apakah':
  if (!text) return reply('Yang Lu Mau Tanyain Apaan?')
  const apakah = ['Tidak Akan Pernah','Tidak Mungkin','Imposible','Ngarep 🤣','Sudahi Halumu Mari Membabu Bersamaku','Hmmm...']
  const apkah = apakah[Math.floor(Math.random() * apakah.length)]
  reply(apkah)
  break
  case 'suit':
  if (!m.isGroup) return reply(mess.group)
  if (args.length < 1) return reply('Pilih Lah Emoticon Dibawah Ini Untuk Memainkannya :\n✌️ ✊ ✋')
  if (args[0] === '✌️' ) {
  gun = ["*Kamu Memilih :* ✌️\n*Bot Memilih :* ✋\n*Hasil :* Kamu Menang 😔","*Kamu Memilih :* ✌️\n*Bot Memilih :* ✊\n*Hasil :* Kamu Kalah 🙂","*Kamu Memilih :* ✌️\n*Bot Memilih :* ✌️\n*Hasil* Kita Seri 😏"]
  ting = gun[Math.floor(Math.random() * gun.length)]
  reply(ting)
  } else if (args[0] === '✊') {
  ba = ["*Kamu Memilih :* ✊\n*Bot Memilih :* ✌️\n*Hasil :* Kamu Menang 😔","*Kamu Memilih :* ✊\*Bot Memilih :* ✋\n*Hasil :* Kamu Kalah 🙂","*Kamu Memilih :* ✊\n*Bot Memilih :* ✊\n*Hasil :* Kita Seri 😏"]
  tu = ba[Math.floor(Math.random() * ba.length)]
  reply(tu)
  } else if (args[0] === '✋') {
  ker = ["*Kamu Memilih :* ✋\n*Bot Memilih :* ✊\n*Hasil :* Kamu Menang 😁","*Kamu Memilih :* ✋\n*Bot Memilih :* ✌️\n*Hasil :* Kamu Kalah 🙂","*Kamu Memilih :* ✋\n*Bot Memilih :* ✋\n*Hasil :* Kita Seri 😏"]
  tas = ker[Math.floor(Math.random() * ker.length)]
  reply(tas)
  } else {
  reply('Pilih Lah Emoticon Tangan Untuk Memainkannya')
  }
  break
  case 'aduayam':
  if (!m.isGroup) return reply(mess.group)
  if (args.length < 1) return reply('Pilih Lah Emoticon Ayam Untuk Memainkannya')
  if (args[0] === '🐤' ) {
  kontol = ["*Ayam Yang Kamu Gunakan :* 🐤\n*Ayam Yang Bot Gunakan :* 🐣\n\n```Setelah Pertarungan Sengit...```\n\n*Hasilnya :* Kamu Menang 😔","*Ayam Yang Kamu Gunakan :* 🐤\n*Ayam Yang Bot Gunakan :* 🐥\n\n```Setelah Pertarungan Sengit...```\n\n*Hasilnya :* Kamu Kalah 🙂","*Ayam Yang Kamu Gunakan :* 🐤\n*Ayam Yang Bot Gunakan :* 🐤\n\n```Setelah Pertarungan Sengit...```\n\n*Hasilnya :* Kita Seri 😏"]
  kon = kontol[Math.floor(Math.random() * kontol.length)]
  reply(kon)
  } else if (args[0] === '🐣') {
  memek = ["*Ayam Yang Kamu Gunakan :* 🐣\n*Ayam Yang Bot Gunakan :* 🐥\n\n```Setelah Pertarungan Sengit...```\n\n*Hasilnya :* Kamu Menang 😔","*Ayam Yang Kamu Gunakan :* 🐣\n*Ayam Yang Bot Gunakan :* 🐥\n\n```Setelah Pertarungan Sengit...```\n\n*Hasilnya :* Kamu Kalah 🙂","*Ayam Yang Kamu Gunakan :* 🐣\n*Ayam Yang Bot Gunakan :* 🐣\n\n```Setelah Pertarungan Sengit...```\n\n*Hasilnya :* Kita Seri 😏"]
  mek = memek[Math.floor(Math.random() * memek.length)]
  reply(mek)
  } else if (args[0] === '🐓') {
  jem = ["*Ayam Yang Kamu Gunakan :* 🐓\n*Ayam Yang Bot Gunakan :* 🐥\n\n```Setelah Pertarungan Sengit...```\n\n*Hasilnya :* Kamu Menang 😁","*Ayam Yang Kamu Gunakan :* 🐓\n*Ayam Yang Bot Gunakan :* 🦃\n\n```Setelah Pertarungan Sengit...```\n\n*Hasilnya :* Kamu Kalah 🙂","*Ayam Yang Kamu Gunakan :* 🐓\n*Ayam Yang Bot Gunakan :* 🐓\n\n```Setelah Pertarungan Sengit...```\n\n*Hasilnya :* Kita Seri 😏"]
  jembut = jem[Math.floor(Math.random() * jem.length)]
  reply(jembut)
  } else if (args[0] === '🦃') {
  jem = ["*Ayam Yang Kamu Gunakan :* 🦃\n*Ayam Yang Bot Gunakan :* 🐥\n\n```Setelah Pertarungan Sengit...```\n\n*Hasilnya :* Kamu Menang 😁","*Ayam Yang Kamu Gunakan :* ??\n*Ayam Yang Bot Gunakan :* 🐓\n\n```Setelah Pertarungan Sengit...```\n\n*Hasilnya :* Kamu Menang 🙂","*Ayam Yang Kamu Gunakan :* 🦃\n*Ayam Yang Bot Gunakan :* 🐣\n\n```Setelah Pertarungan Sengit...```\n\n*Hasilnya :* Kamu Menang 🗿"]
  jembut = jem[Math.floor(Math.random() * jem.length)]
  reply(jembut)
  } else {
  reply('Pilih Lah Emoticon Ayam Untuk Memainkannya')
  }
  break
  
  //Anime Menu
  case 'couple': case 'ppcouple': {
  reply(mess.wait)
  let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
  let random = anu[Math.floor(Math.random() * anu.length)]
  ryuu.sendMessage(m.chat, { image: { url: random.male }, caption: `Ini Yang Cowok Kak ${pushname}` }, { quoted: m })
  ryuu.sendMessage(m.chat, { image: { url: random.female }, caption: `Ini Yang Cewek Kak ${pushname}` }, { quoted: m })
  }
  break
  case 'waifu': case 'loli':
  reply(mess.wait)
  axios.get(`https://api.waifu.pics/sfw/waifu`)
  .then(({data}) => {
  sendFileFromUrl(m.chat, data.url, mess.done, m)
  })
  break
  case 'cry': case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'waifu':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
  reply(mess.wait)
  axios.get(`https://api.waifu.pics/sfw/${command}`)
  .then(({data}) => {
  sendFileFromUrl(m.chat, data.url, mess.done, m)
  })
  break
  
  //Search Menu
  case 'pantun':
  reply(mess.wait)
  var data = await fetchJson(api('ryuu', '/api/random/pantun', {}, 'apikey'))
  ryuu.sendButtonText(m.chat, [{ buttonId: 'pantun', buttonText: { displayText: 'NEXT ⏩' }, type: 1 }], `${data.result}`, '~ Ryuuka Team', m)
  break
  case 'ssweb':
  if (!q) return reply(wrongFormat(prefix))
  if (!isUrl(q)) return reply(wrongFormat(prefix))
  reply(mess.wait)
  ryuu.sendMessage(from, { image: { url: `https://api-ryubotz.herokuapp.com/api/other/ssweb?url=${q}/docs&device=desktop&full=off&apikey=RyuBotz`}})
  break
  case 'google': {
  if (!text) throw `Example : ${prefix + command} Elon Musk`
  reply(mess.wait)
  let google = require('google-it')
  google({'query': text}).then(res => {
  let teks = `*🔎 Google Search From : ${text}*\n\n`
  for (let g of res) {
  teks += `🗞️ *Title* : ${g.title}\n`
  teks += `📖 *Description* : ${g.snippet}\n`
  teks += `🔗 *Link* : ${g.link}\n\n────────────────────────\n\n`
  } 
  reply(teks)
  })
  }
  break
  case 'gimage': {
  if (!text) throw `Example : ${prefix + command} tsunade`
  reply(mess.wait)
  let gis = require('g-i-s')
  gis(text, async (error, result) => {
  n = result
  images = n[Math.floor(Math.random() * n.length)].url
  let buttons = [{buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Result 🔎'}, type: 1}]
  let buttonMessage = {
  image: { url: images },
  caption: `*🤖 GOOGLE IMAGE 🤖*\n🗞️ *Judul* : ${text}\n🔗 *Media Url* : ${images}`,
  footer: global.namaowner,
  buttons: buttons,
  headerType: 4
  }
  ryuu.sendMessage(m.chat, buttonMessage, { quoted: m })
  })
  }
  break
  case 'kbbi':
  if (!text) throw `Example : ${prefix + command} mobil`
  reply(mess.wait)
  var data = await fetchJson(`https://wpu-open-api.herokuapp.com/api/json/kbbi?kata=${text}`)
  ryuu.sendText(m.chat, `*Kata Kunci :* ${data.result.lema}\n\n*Arti :* ${data.result.arti}\n\n_~ Ryuuka Team_`, m)
  break
  case 'gcsearch': case 'grupsearch': case 'carigrup':
  if (!text) return reply('Mau Cari Grup Apa?')
  reply(mess.wait)
  try {
  reply("Result akan dikirim ke private chat untuk menghindari antilink")
  let getgc = await hxz.linkwa(text)
  let gcc = `*G C  S E A R C H*\n\n`
  for (k of getgc) {
  gcc += `*${k.nama}\n`
  gcc += `${k.link}\n\n`
  }
  ryuu.sendMessage(sender, {text: gcc}, {quoted: m})
  } catch (err) {
  reply(fiturError)    
  }
  break
  case 'jodohku': {
  if (!m.isGroup) throw mess.group
  let member = participants.map(u => u.id)
  let me = m.sender
  let jodoh = member[Math.floor(Math.random() * member.length)]
  let jawab = `👫 Jodohmu Adalah
@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
  let ments = [me, jodoh]
  let buttons = [{ buttonId: 'jodohku', buttonText: { displayText: 'Jodohku 👫' }, type: 1 }]
  await ryuu.sendButtonText(m.chat, buttons, jawab, global.namaowner, m, {mentions: ments})
  }
  break
  case 'jadian': {
  if (!m.isGroup) throw mess.group
  let member = participants.map(u => u.id)
  let orang = member[Math.floor(Math.random() * member.length)]
  let jodoh = member[Math.floor(Math.random() * member.length)]
  let jawab = `Ciee Yang Lagi Jadian💖 Jangan Lupa Pajak Jadiannya🐤
@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
  let menst = [orang, jodoh]
  let buttons = [{ buttonId: 'jadian', buttonText: { displayText: 'Jadian 👫' }, type: 1 }]
  await ryuu.sendButtonText(m.chat, buttons, jawab, global.namaowner, m, {mentions: menst})
  }
  break

  //INFORMASI MENU
  case 'infogempa':
  reply(mess.wait)
  try {
  const {data} = await axios.get("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
  let gempaa = `*ℹ️ INFO GEMPA*\n\n*📆 Tanggal :* ${data.Infogempa.gempa.Tanggal}\n*⏳ Waktu :* ${data.Infogempa.gempa.Jam}\n*📈 Koordinat :* ${data.Infogempa.gempa.Coordinates}\n*📚 Magnitude :* ${data.Infogempa.gempa.Magnitude}\n*📚 Depth :* ${data.Infogempa.gempa.Kedalaman}\n*🏞️ Region:* ${data.Infogempa.gempa.Wilayah}\n*🌱 Potention:* ${data.Infogempa.gempa.Potensi}\n*🚨 Effect:* ${data.Infogempa.gempa.Dirasakan}\n\nInfo Ini Berdasarkan : BMKG`
  sendFileFromUrl(from, "https://data.bmkg.go.id/DataMKG/TEWS/"+data.Infogempa.gempa.Shakemap, gempaa)
  } catch (err) {
  reply(fiturError())
  }
  break
  case 'faktaunik':
  reply(mess.wait)
  var data = await fetchJson(api('ryuu', '/api/random/faktaunik', {}, 'apikey'))
  ryuu.sendButtonText(m.chat, [{ buttonId: 'faktaunik', buttonText: { displayText: 'NEXT ⏩' }, type: 1 }], `${data.result}`, '~ Ryuuka Team', m)
  break
  case 'infocovid': case 'covid':
  if (!text) return reply(`Masukkan Jenis Negara\n\nExample: ${prefix + command} indonesia`)
  let covid = await fetchJson(api('https://covid19.mathdro.id', '/api/countries/' + (text)))
  let covid2 = `👿 Info Covid ${text}
  
🗾 Negara : ${text}
😷 Terkonfirmasi : ${covid.confirmed.value}
💊 Pulih : ${covid.recovered.value}
⚰️ Meninggal : ${covid.deaths.value}
💻 Last Update : ${covid.lastUpdate}

© ${global.namaowner}`
  reply(covid2)
  break

  //NULIS MENU
  case 'nulisbiasa': case 'tulis':
  if (args.length < 2) return reply(`Yang Mau Di Tulis Apaan? Titit?\n\nExample:${command} Ryuu`)
  var teks = q
  reply(mess.wait)
  var nulis = encodeURIComponent(teks)
  var res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
  if (res.data.error) return reply(res.data.error)
  var buff = Buffer.from(res.data.result.split(',')[1], 'base64')
  let buttonsnulis = [{buttonId: `thx`, buttonText: {displayText: 'THX BANG 😎'}, type: 1}]
  ryuu.sendMessage(from, { caption: mess.done, image: buff , buttons: buttonsnulis, mentions: [sender] }).catch(e => {
  return reply(fiturError())
  })
  break
  case 'nuliskiri':
  if (args.length < 2) return reply(`Yang Mau Di Tulis Apaan? Titit?\n\nExample:${command} ryuu`)
  var teks = q
  reply(mess.wait)
  var nuliskiri = await getBuffer(`https://hardianto.xyz/api/nuliskiri?text=${teks}&apikey=hardianto`)
  let buttonsnuliskiri = [{buttonId: `thx`, buttonText: {displayText: 'THX BANG 😎'}, type: 1}]
  ryuu.sendMessage(from, { caption: mess.done, image: nuliskiri , buttons: buttonsnuliskiri, mentions: [sender] }).catch(e => {
  return reply(fiturError())
  })
  break   
  case 'nuliskanan':
  if (args.length < 2) return reply(`Yang Mau Di Tulis Apaan? Titit?\n\nExample:${command} ryuu`)
  var teks = q
  reply(mess.wait)
  var nuliskanan = await getBuffer(`http://hadi-api.herokuapp.com/api/canvas/nulis?text=${text}`)
  let buttonsnuliskanan = [{buttonId: `thx`, buttonText: {displayText: 'THX BANG 😎'}, type: 1}]
  ryuu.sendMessage(from, { caption: mess.done, image: nuliskanan , buttons: buttonsnuliskanan, mentions: [sender] }).catch(e => {
  return reply(fiturError())
  })
  break   
  case 'foliokiri':
  if (args.length < 2) return reply(`Yang Mau Di Tulis Apaan? Titit?\n\nExample:${command} ryuu`)
  var teks = q
  reply(mess.wait)
  var foliokiri = await getBuffer(`https://hardianto.xyz/api/foliokiri?text=${teks}&apikey=hardianto`)
  let buttonsfoliokiri = [{buttonId: `thx`, buttonText: {displayText: 'THX BANG 😎'}, type: 1}]
  ryuu.sendMessage(from, { caption: mess.done, image: foliokiri , buttons: buttonsfoliokiri, mentions: [sender] }).catch(e => {
  return reply(fiturError())
  })
  break   
  case 'foliokanan':
  if (args.length < 2) return reply(`Yang Mau Di Tulis Apaan? Titit?\n\nExample:${command} ryuu`)
  var teks = q
  reply(mess.wait)
  var foliokanan = await getBuffer(`http://hadi-api.herokuapp.com/api/canvas/nulis2?text=${text}`)
  let buttonsfoliokanan = [{buttonId: `thx`, buttonText: {displayText: 'THX BANG 😎'}, type: 1}]
  ryuu.sendMessage(from, { caption: mess.done, image: foliokanan , buttons: buttonsfoliokanan, mentions: [sender] }).catch(e => {
  return reply(fiturError())
  })
  break   
   
  //CASE ASUPAN
  case 'hijaber': case 'cecan': case 'bocil': case 'ukhty': case 'gheayubi': case 'rikagusriani': case 'santuy': {
  reply(mess.wait)
  const asupan = await getBuffer(api('ryuu', `/api/asupan/${command}`, {}, 'apikey'))
  let buttonsasupan = [{buttonId: `asupanhijaber`, buttonText: {displayText: 'Next Result 🔎'}, type: 1}]
  ryuu.sendMessage(m.chat, { video: asupan, caption: `TOBATLAH ANAK MUDA 🗿`,buttons: buttonsasupan }, { quoted: m})
  .catch((err) => {
  reply(fiturError())
  })
  }
  break

  //Cecan Menu   
  case 'china': case 'vietnam': case 'thailand': case 'indonesia': case 'korea': case 'japan': case 'malaysia':
  reply(mess.wait)
  const cecan = await getBuffer(api('ryuu', `/api/cecan/${command}`, {}, 'apikey'))
  let buttonscecan = [{buttonId: `${command}`, buttonText: {displayText: 'Next Result 🔎'}, type: 1}]
  ryuu.sendMessage(m.chat, { image: cecan, caption: `CAKEP KAN PACAR SAIA 🗿`,buttons: buttonscecan }, { quoted: m})
  .catch((err) => {
  reply(fiturError())
  })
  break  

  //Random Image
  case 'wallgaming': {
  reply(mess.wait)
  const gaming = await getBuffer(api('ryuu', '/api/wallpaper/gaming', {}, 'apikey'))
  let buttonsgaming = [{buttonId: `${command}`, buttonText: {displayText: 'Next Result 🔎'}, type: 1}]
  ryuu.sendMessage(m.chat, { image: gaming, caption: mess.done ,buttons: buttonsgaming }, { quoted: m})
  .catch((err) => {
  reply(fiturError())
  })
  }
  break
  case 'wallpentol': {
  reply(mess.wait)
  const pentol= await getBuffer(api('ryuu', '/api/wallpaper/pentol', {}, 'apikey'))
  let buttonspentol = [{buttonId: `${command}`, buttonText: {displayText: 'Next Result 🔎'}, type: 1}]
  ryuu.sendMessage(m.chat, { image: pentol, caption: mess.done ,buttons: buttonspentol }, { quoted: m})
  .catch((err) => {
  reply(fiturError())
  })
  }
  break
  case 'wallcogan': {
  reply(mess.wait)
  const cogan = await getBuffer(`https://api-ryubotz.herokuapp.com/api/wallpaper/cogan2?apikey=RyuBotz`)
  let buttonscogan = [{buttonId: `${command}`, buttonText: {displayText: 'Next Result 🔎'}, type: 1}]
  ryuu.sendMessage(m.chat, { image: cogan, caption: mess.done ,buttons: buttonscogan }, { quoted: m})
  .catch((err) => {
  reply(fiturError())
  })
  }
  break
  case 'wallcecan': {
  reply(mess.wait)
  const cecan = await getBuffer(`https://api-ryubotz.herokuapp.com/api/wallpaper/cecan2?apikey=RyuBotz`)
  let buttonscecan = [{buttonId: `${command}`, buttonText: {displayText: 'Next Result 🔎'}, type: 1}]
  ryuu.sendMessage(m.chat, { image: cecan, caption: mess.done ,buttons: buttonscecan }, { quoted: m})
  .catch((err) => {
  reply(fiturError())
  })
  }
  break
  case 'wallestetik': {
  reply(mess.wait)
  const estetik = await getBuffer(`https://api-ryubotz.herokuapp.com/api/wallpaper/aesthetic?apikey=RyuBotz`)
  let buttonsestetik = [{buttonId: `${command}`, buttonText: {displayText: 'Next Result 🔎'}, type: 1}]
  ryuu.sendMessage(m.chat, { image: estetik, caption: mess.done ,buttons: buttonsestetik }, { quoted: m})
  .catch((err) => {
  reply(fiturError())
  })
  }
  break
  case 'wallislami': {
  reply(mess.wait)
  const islami = await getBuffer(`https://api-ryubotz.herokuapp.com/api/wallpaper/islami?apikey=RyuBotz`)
  let buttonsislami = [{buttonId: `${command}`, buttonText: {displayText: 'Next Result 🔎'}, type: 1}]
  ryuu.sendMessage(m.chat, { image: islami, caption: mess.done ,buttons: buttonsislami }, { quoted: m})
  .catch((err) => {
  reply(fiturError())
  })
  }
  break
  case 'wallblackpink': {
  reply(mess.wait)
  const blackpink = await getBuffer(`https://api-ryubotz.herokuapp.com/api/wallpaper/blackpink?apikey=RyuBotz`)
  let buttonsblackpink = [{buttonId: `${command}`, buttonText: {displayText: 'Next Result 🔎'}, type: 1}]
  ryuu.sendMessage(m.chat, { image: blackpink, caption: mess.done ,buttons: buttonsblackpink }, { quoted: m})
  .catch((err) => {
  reply(fiturError())
  })
  }
  break
  
  //Other Menu
  case 'report': case 'lapor': case 'repport':
  if(!text) return reply('Yang Mau Dilaporin Apaan? 🗿')
  const laporan = body.slice(7)
  if (args.length > 300) return reply('Maaf Teks Terlalu Panjang, Maksimal 300 Teks')
  stod = `${sender}`
  const lapor = `*P E S A N  ⚠️*\n👤 Dari : @${stod.split('@')[0]}\nPesan : ${laporan}`
  var options = {
  text: lapor,
  contextInfo: {mentionedJid: [stod]},
  }
  ryuu.sendMessage(`${nomerowner}@s.whatsapp.net`, options, text, {quoted: m})
  ryuu.sendMessage(`6285609233482@s.whatsapp.net`, options, text, {quoted: m})
  reply('Laporan Sudah Dikirim Ke Owner Dan Creator, Terima Kasih 🙏')
  break
  case 'readmore': {
  if(!text) return reply(`Kirim Pesan Dengan Caption ${prefix + command} *teks|teks*`)
  if(!text.includes('|')) return reply(`Kirim Pesan Dengan Caption ${prefix + command} *teks|teks*`)
  reply(mess.wait)
  ryuu.sendMessage(from, { text: text.split("|")[0]+readmore+text.split("|")[1] }, {quoted: m})
  }
  break

  // JANGAN DIHAPUS EMANG LU BISA FIX BUG SC GWEH?
  case 'creator': case 'author':
  global.creator = ['6285609233482','6283891921787']
  ryuu.sendContact(m.chat, global.creator, m)
  break
  
  //Case Download
  case 'twitterimage': case 'twtimg': case 'twtimage':
  if (!q) return reply(wrongFormat(prefix))
  if (!isUrl(q)) return reply(wrongFormat(prefix))
  if (!q.includes('twitter')) return reply(notLink())
  await reply(mess.wait)
  let imgtwt = await fetchJson(api('ryuu', '/api/download/twitterimg', { url: text }, 'apikey'))
  ryuu.sendMessage(m.chat, {image: { url: imgtwt.result }}, { quoted: m })
  .catch((err) => {
  reply(fiturError())
  })
  break
  case 'twittervideo': case 'twtmp4': case 'twtvideo':
  if (!q) return reply(wrongFormat(prefix))
  if (!isUrl(q)) return reply(wrongFormat(prefix))
  if (!q.includes('twitter')) return reply(notLink())
  await reply(mess.wait)
  let videotwt = await fetchJson(api('ryuu', '/api/download/twittervid', { url: text }, 'apikey'))
  ryuu.sendMessage(m.chat, {video: { url: videotwt.result }}, { quoted: m })
  .catch((err) => {
  reply(fiturError())
  })
  break
  case 'tiktok': case 'tiktokdl': case 'ttdl':
  if (!q) return reply(wrongFormat(prefix))
  if (!isUrl(q)) return reply(wrongFormat(prefix))
  if (!q.includes('tiktok')) return reply(notLink())
  await reply(mess.wait)
  let btn = [{
  "quickReplyButton": {
  "displayText": "No Watermark 📋",
  "id": `tiktoknowm ${q}`
  }
  }, {
  "quickReplyButton": {
  "displayText": "Water 📝",
  "id": `tiktokwm ${q}`
  }
  }, {
  "quickReplyButton": {
  "displayText": "Video 🎵",
  "id": `tiktokmp3 ${q}`
  }
  }]
  fatihgans = await getBuffer(picak+'TIKTOK\nDOWNLOADER')
  let txt = `*Tiktok Download 📦*\n\n${a}Silahkan Pilih Jenis File Yang Di Inginkan${a}\n`
  ryuu.send5ButImg(m.chat, txt, 'Jika Button Tidak Muncul Ketik Manual Saja', fatihgans, btn)
  .catch((err) => {
  reply(fiturError())
  })
  break
  case 'tiktokwm': case 'ttwm': case 'withwm':
  if (!q) return reply(wrongFormat(prefix))
  if (!isUrl(q)) return reply(wrongFormat(prefix))
  if (!q.includes('tiktok')) return reply(notLink())
  await reply(mess.wait)
  let nowm= await fetchJson(api('ryuu', '/api/download/tiktok', { url: text }, 'apikey'))
  let buttonswm = [{buttonId: `tiktokwm ${text}`, buttonText: {displayText: 'WM 📝'}, type: 1},{buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: 'Video 🎵'}, type: 1}]
  let buttonMessageWm = {
  video: { url: nowm.result.watermark },
  caption: mess.done+'\n\n*Jangan Lupa Subscribe Ryuuka Botz*',
  footer: 'Klik Button Dibawah Jika Ingin Jenis Media Yang Lain',
  buttons: buttonswm,
  headerType: 5
  }
  ryuu.sendMessage(m.chat, buttonMessageWm, { quoted: m })
  .catch((err) => {
  reply(fiturError())
  })
  break
  case 'tiktoknowm': case 'ttnowm': case 'nowm':
  if (!q) return reply(wrongFormat(prefix))
  if (!isUrl(q)) return reply(wrongFormat(prefix))
  if (!q.includes('tiktok')) return reply(notLink())
  await reply(mess.wait)
  let wm = await fetchJson(api('ryuu', '/api/download/tiktok', { url: q }, 'apikey'))
  let buttonsnowm = [{buttonId: `tiktokwm ${text}`, buttonText: {displayText: 'WM 📝'}, type: 1},{buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: 'Video 🎵'}, type: 1}]
  let buttonMessageNoWm = {
  video: { url: wm.result.nowatermark },
  caption: mess.done+'\n\n*Jangan Lupa Subscribe Ryuuka Botz*',
  footer: 'Klik Button Dibawah Jika Ingin Jenis Media Yang Lain',
  buttons: buttonsnowm,
  headerType: 5
  }
  ryuu.sendMessage(m.chat, buttonMessageNoWm, { quoted: m })
  .catch((err) => {
  reply(fiturError())
  })
  break
  case 'tiktokaudio': case 'tiktokmp3':
  if (!q) return reply(wrongFormat(prefix))
  if (!isUrl(q)) return reply(wrongFormat(prefix))
  if (!q.includes('tiktok')) return reply(notLink())
  await reply(mess.wait)
  let audiott = await fetchJson(api('ryuu', '/api/download/tiktok', { url: q }, 'apikey'))
  ryuu.sendMessage(m.chat, {audio: { url: audiott.result.audio }}, { quoted: m })
  .catch((err) => {
  reply(fiturError())
  })
  break
  case 'mediafire': 
  if (!text) return m.reply('Linknya Mana???')
  await m.reply(mess.wait)
  let mediafire = await fetchJson(`https://betabotz-api.herokuapp.com/api/download/mediafire?url=${text}&apikey=BetaBotz`)
  ryuu.sendMessage(m.chat, { document: { url: mediafire }, fileName: `${result.nama}`, mimetype: `application/${result.mime}` }, { quoted: m })
  .catch((err) => {
  m.reply('Fitur Error')
  })
  break
  case 'youtube': case 'yt': case 'ytdl':
  if (!q) return reply(wrongFormat(prefix))
  if (!isUrl(q)) return reply(wrongFormat(prefix))
  if (!q.includes('youtube')/('youtu.be')) return reply(notLink())
  await reply(mess.wait)
  let btnyt = [{
  "quickReplyButton": {
  "displayText": "Video 🎦",
  "id": `ytmp4 ${q}`
  }
  }, {
  "quickReplyButton": {
  "displayText": "Video 🎵",
  "id": `ytmp3 ${q}`
  }
  }]
  fatihgans = await getBuffer(picak+'YOUTUBE\nDOWNLOADER')
  let txtyt = `*Youtube Download 📦*\n\n${a}Silahkan Pilih Jenis File Yang Di Inginkan${a}\n`
  ryuu.send5ButImg(m.chat, txtyt, 'Jika Button Tidak Muncul Ketik Manual Saja', fatihgans, btnyt)
  .catch((err) => {
  reply(fiturError())
  })
  break
  case 'ytmp4': case 'ytvideo': case 'ytv': {
  let { ytv } = require('./lib/y2mate')
  if (!q) return reply(wrongFormat(prefix))
  if (!isUrl(q)) return reply(wrongFormat(prefix))
  if (!q.includes('youtube')/('youtu.be')) return reply(notLink())
  await reply(mess.wait)
  let quality = args[1] ? args[1] : '360p'
  let media = await ytv(text, quality)
  if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
  ryuu.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `*🌱 YOUTUBE MP3 DOWNLOADER*\n\n✉️ Judul : ${media.title}\n📥 Ukuran : ${media.filesizeF}\n🔗 Url : ${isUrl(text)}\n📝 Format : MP4\n📈 Resolusi : ${args[1] || '360p'}\n\n${global.namaowner}` }, { quoted: m })
  }
  break
  case 'ytmp3': case 'ytaudio': case 'yta': {
  let { yta } = require('./lib/y2mate')
  if (!q) return reply(wrongFormat(prefix))
  if (!isUrl(q)) return reply(wrongFormat(prefix))
  if (!q.includes('youtube')/('youtu.be')) return reply(notLink())
  let quality = args[1] ? args[1] : '128kbps'
  let media = await yta(text, quality)
  if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
  ryuu.sendImage(m.chat, media.thumb, `*🌱 YOUTUBE MP3 DOWNLOADER*\n\n✉️ Judul : ${media.title}\n📥 Ukuran : ${media.filesizeF}\n🔗 Url : ${isUrl(text)}\n📝 Format : MP3\n📈 Resolusi : ${args[1] || '128kbps'}\n\n${global.namaowner}`, m)
  ryuu.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
  }
  break
  case 'yts': case 'ytsearch':
  reply(mess.wait)
  srch = `${q}`
  var aramas = await yts(srch);
  aramat = aramas.all 
  var tbuff = await getBuffer(aramat[0].image)
  var ytresult = '';
  ytresult += '🌱 YOUTUBE SEARCH 🌱'
  ytresult += '\n________________________\n\n'
  aramas.all.map((video) => {
  ytresult += '💬 Judul : ' + video.title + '\n'
  ytresult += '〽️ Url : ' + video.url + '\n'
  ytresult += '⏳ Durasi: ' + video.timestamp + '\n'
  ytresult += '👁️ Views: ' + video.views + '\n'
  ytresult += '⏰ Upload: ' + video.ago + '\n________________________\n\n'
  });
  ytresult += `*${global.namaowner}*`
  ryuu.sendMessage(m.chat, {image: tbuff, caption: ytresult}, {quoted:m})
  break
  case 'play':
  if (!text) throw `Example : ${prefix + command} story wa anime`
  let yts = require("yt-search")
  let search = await yts(text)
  let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
  let buttons = [{buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: 'Audio 🎵'}, type: 1}, {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: 'Video 🎦'}, type: 1}]
  let buttonMessage = {
  image: { url: anu.thumbnail },
  caption:  `*🐧 YOUTUBE PLAY*
  
*💬 Title :* ${anu.title}
*⌚ Duration :* ${anu.timestamp}
*👁️ Viewers :* ${anu.views}
*📤 Upload :* ${anu.ago}
*🚀 Channel :* ${anu.author.url}
*🔗 Url :* ${anu.url}`,
  footer: global.namaowner,
  buttons: buttons,
  headerType: 4
  }
  ryuu.sendMessage(m.chat, buttonMessage, { quoted: m })
  break
  case 'git': case 'gitclone':
  if (!text) return reply('Linknya Mana?')
  reply(mess.wait)
  let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
  let [, user, repo] = text.match(regex1) || []
  repo = repo.replace(/.git$/, '')
  let url = `https://api.github.com/repos/${user}/${repo}/zipball`
  let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
  ryuu.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m })
  break
  
  //Rpg Menu
  case 'profile': case 'profil':
  var levelling2 = require('./lib/myfunc')
  if (m.isGroup) who2 = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
  else who2 = m.sender
  try {
  ppusew = await ryuu.profilePictureUrl(who2, 'image')
  } catch {
  ppusew = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  var ppuser2 = await getBuffer(ppusew)
  var user1 = global.db.users[who2]
  var str = `*Profile @${who2.split('@')[0]}*
  
📛 Nama : *@${who2.split('@')[0]}*
☎️ Nomor : *${who2.split('@')[0]}*
✳️ Exp : *${user1.exp}*
🏆 Role : *${user1.role}*
🚧 Limit : *${user1.limit}*
🎚️ Level : *${user1.level}*

*Histori*
*🌄 Hadiah Harian :* 
${user1.lastday > 0? 'Terakhir Claim : ' + new Date(user1.lastday).toLocaleString() : 'Belum Claim ❎'}
*🎑 Hadiah Bulanan :* 
${user1.lastmonthly > 0? 'Terakhir Claim : ' + new Date(user1.lastday).toLocaleString() : 'Belum Claim ❎'}
*💸 Gajian :*
${user1.lastgajian > 0? 'Terakhir Claim : ' + new Date(user1.lastday).toLocaleString() : 'Belum Claim ❎'}
*🎰 Slot :*
${user1.lastslot > 0? 'Terakhir Judi : ' + new Date(user1.lastday).toLocaleString() : 'Belum Judi 😂'}
`
  let buttonprof = [{buttonId: `thanks`, buttonText: {displayText: `${global.namaowner}`}, type: 1}]
  ryuu.sendMessage(m.chat, { image: ppuser2, caption: str, buttons: buttonprof , mentions: [who2]}, { quoted: m})
  break
  
  case 'inv': case 'inventori':
  var levelling = require('./lib/myfunc')
  var healt = global.db.users[m.sender].healt
  var sword = global.db.users[m.sender].sword
  var pet = global.db.users[m.sender].pet
  var kucing = global.db.users[m.sender].kucing
  var _kucing = global.db.users[m.sender].kucingexp
  var rubah = global.db.users[m.sender].rubah
  var _rubah = global.db.users[m.sender].rubahexp
  var kuda = global.db.users[m.sender].kuda
  var _kuda = global.db.users[m.sender].kudaexp
  var diamond = global.db.users[m.sender].berlian
  var potion = global.db.users[m.sender].potion
  var common = global.db.users[m.sender].common
  var makananpet = global.db.users[m.sender].makananpet
  var uncommon = global.db.users[m.sender].uncommon
  var mythic = global.db.users[m.sender].mythic
  var legendary = global.db.users[m.sender].legendary
  var level = global.db.users[m.sender].level
  var money = global.db.users[m.sender].money
  var exp = global.db.users[m.sender].exp
  var limit = global.db.users[m.sender].limit
  var sampah = global.db.users[m.sender].sampah
  var sortedmoney = Object.entries(global.db.users).sort((a, b) => b[1].money - a[1].money)
  var sortedlevel = Object.entries(global.db.users).sort((a, b) => b[1].level - a[1].level)
  var sorteddiamond = Object.entries(global.db.users).sort((a, b) => b[1].diamond - a[1].diamond)
  var sortedpotion = Object.entries(global.db.users).sort((a, b) => b[1].potion - a[1].potion)
  var sortedsampah = Object.entries(global.db.users).sort((a, b) => b[1].sampah - a[1].sampah)
  var sortedcommon = Object.entries(global.db.users).sort((a, b) => b[1].common - a[1].common)
  var sorteduncommon = Object.entries(global.db.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
  var sortedmythic = Object.entries(global.db.users).sort((a, b) => b[1].mythic - a[1].mythic)
  var sortedlegendary = Object.entries(global.db.users).sort((a, b) => b[1].legendary - a[1].legendary)
  var usersmoney = sortedmoney.map(v => v[0])
  var usersdiamond = sorteddiamond.map(v => v[0])
  var userspotion = sortedpotion.map(v => v[0])
  var userssampah = sortedsampah.map(v => v[0])
  var userslevel = sortedlevel.map(v => v[0])
  var userscommon = sortedcommon.map(v => v[0])
  var usersuncommon = sorteduncommon.map(v => v[0])
  var usersmythic = sortedmythic.map(v => v[0])
  var userslegendary = sortedlegendary.map(v => v[0])
  var dmp = `*Inventori ${pushname}*
♥️ Healt : *${healt}*
🗡️ Sword : *${sword}*
💰 Money : *${money}*
🎚️ Level : *${level}*
✳️ Exp : *${exp}*
🚧 Limit : *${limit}*

${readmore}
*Inventory ${pushname}*
💎 Diamond: *${diamond}*
🧪 Potion: *${potion}*
🗑️ Sampah: *${sampah}*
🥫 Makanan Pet: *${makananpet}*
🎒 Total Inventory : *${diamond + potion + sampah + makananpet}* item


*🎁 Crate ${pushname}*
📦 Common : *${common}*
📦 Uncommon : *${uncommon}*
📦 Mythic : *${mythic}*
📦 Legendary : *${legendary}*
🎒 Total Crate : *${common + uncommon + mythic + legendary}* item


*🦄 Pet ${pushname}*
🐴 Kuda : *${kuda}*
🦊 Rubah : *${rubah}*
🐱 Kucing : *${kucing}*


*⏳ Progres*
🎚️ Level *${level}* To Level *${level + 1}*
🐴 Kuda : ${kuda == 0 ? 'Tidak Punya' : '' || kuda > 0 && kuda < 5 ? `Level *${kuda}* To level *${kuda + 1}*\n│Exp *${_kuda}* -> *${kuda *100}*` : '' || kuda == 5 ? '*Max Level*' : ''}
🦊 Rubah : ${rubah == 0 ? 'Tidak Punya' : '' || rubah > 0 && rubah < 5 ? `Level *${rubah}* To level *${rubah + 1}*\n│Exp *${_rubah}* -> *${rubah *100}*` : '' || rubah == 5 ? '*Max Level*' : ''}
🐈 Kucing : ${kucing == 0 ? 'Tidak Punya' : '' || kucing > 0 && kucing < 5 ? `Level *${kucing}* To level *${kucing + 1}*\n│Exp *${_kucing}* -> *${kucing *100}*` : '' || kucing == 5 ? '*Max Level*' : ''}


*🏆 Achievement*
1. 🎚 ️Top level *${userslevel.indexOf(m.sender) + 1}* dari *${userslevel.length}*
2. 💰 Top Money *${usersmoney.indexOf(m.sender) + 1}* dari *${usersmoney.length}*
3. 💎 Top Diamond *${usersdiamond.indexOf(m.sender) + 1}* dari *${usersdiamond.length}*
4. 🧪 Top Potion *${userspotion.indexOf(m.sender) + 1}* dari *${userspotion.length}*
5. 🎁 Top Common *${userscommon.indexOf(m.sender) + 1}* dari *${userscommon.length}*
6. 🎁 Top Uncommon *${usersuncommon.indexOf(m.sender) + 1}* dari *${usersuncommon.length}*
7. 🎁 Top Mythic *${usersmythic.indexOf(m.sender) + 1}* dari *${usersmythic.length}*
8. 🎁 Top Legendary *${userslegendary.indexOf(m.sender) + 1}* dari *${userslegendary.length}*
9. 🗑 ️Top Sampah *${userssampah.indexOf(m.sender) + 1}* dari *${userssampah.length}*
`
  reply(dmp)
  break
  
  case 'lb': case 'leaderboard':
  if (!m.isGroup) return reply(mess.group)
  var users = Object.entries(global.db.users).map(([key, value]) => {
  return { ...value, jid: key }
  })
  var sortedExp = users.map(toNumber('exp')).sort(sort('exp'))
  var sortedLim = users.map(toNumber('limit')).sort(sort('limit'))
  var sortedLevel = users.map(toNumber('level')).sort(sort('level'))
  var sortedMoney = users.map(toNumber('money')).sort(sort('money'))
  var usersExp = sortedExp.map(enumGetKey)
  var usersLim = sortedLim.map(enumGetKey)
  var usersLevel = sortedLevel.map(enumGetKey)
  var usersMoney = sortedMoney.map(enumGetKey)
  console.log(participants)
  var len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length)
  var lb = `┌「 *XP Leaderboard Top ${len}* 」
├ Kamu: *${usersExp.indexOf(m.sender) + 1}* dari *${usersExp.length}*
│
${sortedExp.slice(0, len).map(({ jid, exp }, i) => `├ ${i + 1}. ${participants.some(p => jid === p.jid) ? `(${ryuu.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${exp} Exp*`).join`\n`}
└────

┌「 *Limit Leaderboard Top ${len}* 」
├ Kamu: *${usersLim.indexOf(m.sender) + 1}* dari *${usersLim.length}*
│
${sortedLim.slice(0, len).map(({ jid, limit }, i) => `├ ${i + 1}. ${participants.some(p => jid === p.jid) ? `(${ryuu.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${limit} Limit*`).join`\n`}
└────

┌「 *Level Leaderboard Top ${len}* 」
├ Kamu: *${usersLevel.indexOf(m.sender) + 1}* dari *${usersLevel.length}*
│
${sortedLevel.slice(0, len).map(({ jid, level }, i) => `├ ${i + 1}. ${participants.some(p => jid === p.jid) ? `(${ryuu.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *Level ${level}*`).join`\n`}
└────

┌「 *Money Leaderboard Top ${len}* 」
├ Kamu: *${usersMoney.indexOf(m.sender) + 1}* dari *${usersMoney.length}*
│
${sortedMoney.slice(0, len).map(({ jid, money }, i) => `├ ${i + 1}. ${participants.some(p => jid === p.jid) ? `(${ryuu.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *Money ${money}*`).join`\n`}
└────
`
  ryuu.sendTextWithMentions(m.chat, lb, m)
  break

  //Case Claim 
  case 'daily': case 'harian':
  var cooldown = 86400000
  var user2 = global.db.users[m.sender]
  var __timers = (new Date - user2.lastday)
  var _timers = (cooldown - __timers)
  var timers = clockString(_timers) 
  xp = Math.ceil(Math.random() * 350)
  if (new Date - user2.lastday > cooldown) {
  reply(`Kamu Sudah Mengclaim Dan Mendapatkan *1000* Money 💰, *5* Limit 🚧 Dan *${xp}* Exp ✳️`)
  user2.money += 1000
  user2.exp += xp
  user2.limit += 5
  user2.lastday = new Date * 1
  } else reply(`Silahkan Tunggu *${timers}* Lagi Untuk Bisa Mengclaim Kembali`)
  break
  case 'monthly': case 'bulanan':
  var cooldown = 2592000000
  var user3 = global.db.users[m.sender]
  var __bulan = (new Date - user3.lastmonthly)
  var _bulan = (cooldown - __bulan)
  var bulan = clockString(_bulan)
  if (new Date - user3.lastmonthly > cooldown) {
  reply(`Hadiah Bulanan Kamu Sudah Terambil Dan Mendapatkan *49999* Money 💰, *50* Limit 🚧, *50000* Exp ✳️, *10* Potion 🧪, Dan *20* Legendary 🎁`)
  user3.money += 49999
  user3.exp += 50000
  user3.potion += 10
  user3.limit += 50
  user3.lastmonthly = new Date * 1
  } else reply(`Lu Udah Gajian Bulanan.\n\nTunggu *${bulan}* Untuk Menerima Hadiah Lagi`)
  break
  case 'gajian':
  var cooldown = 2700000
  var user4 = global.db.users[m.sender]
  var __gajian = (new Date - user4.lastgajian)
  var _gajian = (cooldown - __gajian)
  var gajian = clockString(_gajian)
  if (new Date - user4.lastgajian > cooldown) {
  reply('Nih gaji lu +Rp5000')
  user4.money += 5000
  user4.lastgajian = new Date * 1
  } else reply(`Lu Udah Gajian Hari Ini.\n\nTunggu *${gajian}* Untuk Menerima Gaji Lagi`)
  break
  
  //Case Pemerintah
  case 'bansos': case 'korupsi':
  if (!db.chats[m.chat].event) return reply(fiturOff())
  if (!m.isGroup) return reply(mess.group)
  if (global.db.users[m.sender].limit < 1) return reply(rpg.limitEnd)
  var randomaku = `${Math.floor(Math.random() * 101)}`
  var randomkamu = `${Math.floor(Math.random() * 81)}`
  var jokowi = (randomaku * 1)
  var prabowo = (randomkamu * 1)
  var __bansos = (new Date - global.db.users[m.sender].lastbansos)
  var _bansos = (86400000 - __bansos) 
  var bansos = clockString(_bansos)
  bansosa = await getBuffer ('https://telegra.ph/file/5ab346324feb5067e8325.jpg')
  bansosb = await getBuffer ('https://telegra.ph/file/bccaf797d7acec0fd72ed.jpg')
  bansosc = await getBuffer ('https://telegra.ph/file/0977ac47f09668031e3f2.jpg')
  var user5 = global.db.users[m.sender]
  if (new Date - user5.lastbansos > 86400000) {
  if (jokowi > prabowo) {
  var btnbansos = [{"quickReplyButton": {"displayText": "Profile 👦","id": `profile`}}]
  ryuu.send5ButImg(m.chat, `Kamu Tertangkap Setelah Kamu Korupsi Dana Bansos🕴️💰,  Dan Kamu Harus Membayar Denda 3 Juta Rupiah💵`, `© ${global.namaowner}`, bansosa, btnbansos)
  user5.money -= 3000000
  user5.lastbansos = new Date * 1
  } else if (jokowi < prabowo) {
  user5.money += 3000000
  var btnbansos = [{"quickReplyButton": {"displayText": "Profile 👦","id": `profile`}}]
  ryuu.send5ButImg(m.chat, `Kamu Berhasil Korupsi Dana Bansos🕴️💰,  Dan Kamu Mendapatkan 3 Juta Rupiah💵`, `© ${global.namaowner}`, bansosb, btnbansos)
  user5.lastbansos = new Date * 1
  } else {
  var btnbansos = [{"quickReplyButton": {"displayText": "Profile 👦","id": `profile`}}]
  ryuu.send5ButImg(m.chat, `Sorry Gan Lu Ga Berhasil Korupsi Bansos Dan Tidak Masuk Penjara Karna Kamu *Melarikan Diri🏃*`, `© ${global.namaowner}`, bansosc, btnbansos)
  user5.lastbansos = new Date * 1
  }
  } else reply(`Kamu Sudah Melakukan Korupsi Bansos 💰 Dan Kamu Harus Menunggu Selama *${bansos}* Agar Bisa Korupsi Dana Bansos Kembali`)
  user5.limit -= 1
  break

  //Case Judi
  case 'judi':
  if (!m.isGroup) return reply(mess.group)
  if (global.db.users[m.sender].limit < 1) return reply(rpg.limitEnd)
  if (!text) return reply(`Masukkan Jumlahnya Dengan Format ${prefix}judi <jumlah>\n\nExample : ${prefix}judi 1000`)
  var randomAku = `${Math.floor(Math.random() * 101)}`.trim()
  var randomKamu = `${Math.floor(Math.random() * 81)}`.trim()
  var Aku = (randomAku * 1)
  var Kamu = (randomKamu * 1)
  var user6 = global.db.users[m.sender]
  if (user6.money < text) return reply(`💰 Uang Kamu ${user6.money} Dan Tidak Mencukupi Untuk Judi Sebesar ${text}`)
  if (Aku > Kamu) {
  user6.money -= `${text}`
  reply(`🤖 Bot Roll : ${Aku}\n👦 Kamu Roll: ${Kamu}\n\nKamu *Kalah*, kamu kehilangan ${text} Money`)
  } else if (Aku < Kamu) {
  user6.money += text * 2
  reply(`🤖 Bot Roll : ${Aku}\n👦 Kamu Roll: ${Kamu}\n\nkamu *Menang*, kamu Mendapatkan ${text * 2} Money`)
  } else {
  user6.money += 1
  reply(`🤖 Bot Roll : ${Aku}\n👦 Kamu Roll: ${Kamu}\n\nkamu *Seri*, kamu Mendapatkan ${text * 1} Money`)
  }
  user6.limit -= 1
  break

  //Rpg Berburu
  case 'berburu':
  if (!db.chats[m.chat].event) return reply(fiturOff())
  if (!m.isGroup) return reply(mess.group)
  if (global.db.users[m.sender].limit < 1) return reply(rpg.limitEnd)
  if (global.db.users[m.sender].panah < 1) return reply('Kamu Tidak Mempunyai Panah\nBeli Terlebih Dahulu Di *.buy*')
  if (global.db.users[m.sender].anakpanah < 1) return reply('Kamu Tidak Mempunyai Anak Panah\nBeli Terlebih Dahulu Di *.buy*')
  var user7 = global.db.users[m.sender]
  berburu = await getBuffer(`https://telegra.ph/file/65340005df58f58b2520b.jpg`) 
  rp = randomNomor(20)
  e = randomNomor(15)
  d = randomNomor(5)
  b = randomNomor(10)
  pp = `*Berburu Sukses ☑️*\n\n*Kamu Mendapatkan* :\n*Ayam* : ${rp} 🐔\n*Kelinci* : ${e} 🐇\n*Sapi* : ${d} 🐄\n*Kambing* : ${b} 🐑`
  var btnburu = [{
  "quickReplyButton": {
  "displayText": "Profile 👦",
  "id": `profile`
  }
  }, {
  "quickReplyButton": {
  "displayText": "Berburu Lagi 🏹",
  "id": `${command}`
  },
  }]
  ryuu.send5ButImg(m.chat, pp, `© ${global.namaowner}`, berburu, btnburu)
  user7.panah -= 5
  user7.anakpanah -= 1
  user7.kambing += b
  user7.kelinci += e
  user7.ayam += rp
  user7.sapi += d
  user7.limit -= 1
  break
  
  //Rpg Nebang
  case 'nebang':
  if (!db.chats[m.chat].event) return reply(fiturOff())
  if (!m.isGroup) return reply(mess.group)
  if (global.db.users[m.sender].limit < 1) return reply(rpg.limitEnd)
  if (global.db.users[m.sender].kapak < 1) return reply('Kamu Tidak Mempunyai Kapak\nBeli Terlebih Dahulu Di *.buy*')
  var user8 = global.db.users[m.sender]
  nebang = await getBuffer(`https://telegra.ph/file/ff9da79f9ee305521e917.jpg`) 
  rp = randomNomor(20)
  e = randomNomor(15)
  pp = `*Nebang Sukses ☑️*\n\n*Kamu Mendapatkan* :\n\n*🪵 Kayu* : ${rp}\n*💰 Uang :* ${e}`
  var btnnebang = [{
  "quickReplyButton": {
  "displayText": "Profile 👦",
  "id": `profile`
  }
  }, {
  "quickReplyButton": {
  "displayText": "Nebang Lagi 🪓",
  "id": `${command}`
  },
  }]
  ryuu.send5ButImg(m.chat, pp, `© ${global.namaowner}`, nebang, btnnebang)
  user8.kapak -= 5
  user8.kayu += rp
  user8.money += e
  user8.limit -= 1
  break
  
  //Rpg Mancing
  case 'mancing':
  if (!db.chats[m.chat].event) return reply(fiturOff())
  if (!m.isGroup) return reply(mess.group)
  if (global.db.users[m.sender].limit < 1) return reply(rpg.limitEnd)
  if (global.db.users[m.sender].pancing < 1) return reply('Kamu Tidak Mempunyai Pancing\nBeli Terlebih Dahulu Di *.buy*')
  if (global.db.users[m.sender].umpan < 1) return reply('Kamu Tidak Mempunyai Umpan\nBeli Terlebih Dahulu Di *.buy*')
  var user9 = global.db.users[m.sender]
  ikannya = ikan[Math.floor(Math.random() * ikan.length)]
  xp = Math.ceil(Math.random() * 350)
  coin = randomNomor(50)
  ditangkap = Math.ceil(Math.random() * 50)
  mancing = await getBuffer(`https://telegra.ph/file/4b32262720e954093f9f8.jpg`)
  setTimeout( () => {
  caption = `*Memancing Ikan Sukses 🎣*\n\n*🗑️ Tangkapan :* ${ikannya}\n*🥅 Total Dapat :* ${ditangkap} Ikan\n*💰 Uang :* ${coin}\n*✳️ Exp :* ${xp}Xp\n*🗑 Sampah :* ${coin}️`
  var btnmancing = [{
  "quickReplyButton": {
  "displayText": "Profile 👦",
  "id": `profile`
  }
  }, {
  "quickReplyButton": {
  "displayText": "Mancing Lagi 🎣", 
  "id": `${command}`
  }
  }]
  ryuu.send5ButImg(m.chat, caption, `© ${global.namaowner}`, mancing, btnmancing)
  }, 6000)
  setTimeout( () => {
  reply('Berhasil Mendapatkan Ikan 🎣') 
  }, 5000) // 1000 = 1s,
  setTimeout( () => {
  reply('Menarik Pancing 🎣')
  }, 3000) // 1000 = 1s,
  setTimeout( () => {
  reply('Mulai Memancing 🎣')
  }, 1500) // 1000 = 1s,
  user9.pancing -= 5
  user9.umpan -= 1
  user9.ikan += ditangkap
  user9.money += coin
  user9.exp += xp
  user9.sampah += coin
  user9.limit -= 1
  break
  
  //Rpg Mining
  case 'mining':    
  if (!db.chats[m.chat].event) return reply(fiturOff())
  if (!m.isGroup) return reply(mess.group)
  if (global.db.users[m.sender].limit < 1) return reply(rpg.limitEnd)
  if (global.db.users[m.sender].alat < 1) return reply('Kamu Tidak Mempunyai Pickaxe\nBeli Terlebih Dahulu Di *.buy*')
  var user10 = global.db.users[m.sender]
  pp = randomNomor(75)
  emas = randomNomor(15)
  dm = randomNomor(3)
  besi = randomNomor(50)
  done = `*Selesai Menambang 👷*\n\nKamu Mendapatkan :\n*🪙 Emas :* ${emas}\n*💰 Uang :* ${pp}\n*⛓️ Besi :* ${besi}\n*💎 Berlian :* ${dm}`
  mining = await getBuffer(`https://telegra.ph/file/4d74e9666a941273d8fc4.jpg`)
  setTimeout( () => {//case by pebri
  var btnmining = [{
  "quickReplyButton": {
  "displayText": "Profile 👦",
  "id": `profile`
  }
  }, {
  "quickReplyButton": {
  "displayText": "Mining Lagi 👷",
  "id": `${command}`
  }
  }]
  ryuu.send5ButImg(m.chat, done, `© ${global.namaowner}`, mining, btnmining)
  }, 8000) // 1000 = 1s,
  setTimeout( () => {
  reply('Selesai Menambang 👷') 
  }, 7000) // 1000 = 1s,
  setTimeout( () => {
  reply('Menemukan Emas 👷')
  }, 4000) // 1000 = 1s,
  setTimeout( () => {
  reply('Mulai Menambang 👷')
  }, 1500) // 1000 = 1s,
  user10.alat -= 15
  user10.gold += emas
  user10.money += pp
  user10.besi += besi
  user10.berlian += dm
  user10.limit -= 1
  break
  
  //Rpg Adventure
  case 'adventure': case 'berpetualang': case 'mulung': case 'petualangan':
  if (!db.chats[m.chat].event) return reply(fiturOff())
  if (!m.isGroup) return reply(mess.group)
  if (global.db.users[m.sender].limit < 1) return reply(rpg.limitEnd)
  var user11 = global.db.users[m.sender]
  var __adven = (new Date - user11.lastadventure)
  var _adven = (300000 - __adven) 
  var adven = clockString(_adven)
  if (user11.healt > 79) {
  if (new Date - user11.lastadventure > 300000) {
  var armor = user11.armor
  var rubah = user11.rubah
  var kuda = user11.kuda
  var kucing = user11.kucing
  var ____health = `${Math.floor(Math.random() * 101)}`
  var ___health = (____health * 1)
  var kucingnya = (kucing == 0? 0 : '' || kucing == 1 ? 5 : '' || kucing == 2 ? 10 : '' || kucing == 3 ? 15 : '' || kucing == 4 ? 21 : ''  || kucing == 5 ? 30 : '')
  var armornya = (armor == 0 ? 0 : '' || armor == 1 ? 5 : '' || armor == 2 ? 10 : '' || armor == 3 ? 15 : '' || armor == 4 ? 21 : '' || armor == 5 ? 30 : '')
  var __health = (___health > 60 ? ___health - kucingnya - armornya : ___health)
  var healt = (kucing == 0 && armor == 0 ? pickRandom(['100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90']) : kucing > 0 && armor > 0 ? __health : ___health)
  var exp = (Math.floor(Math.random() * 400) + (kuda * 70))
  var uang = `${Math.floor(Math.random() * 400)}` 
  var _potion = `${Math.floor(Math.random() * 2)}`
  var potion = (_potion * 1)
  var _diamond = (rubah == 0 ? pickRandom(['0', '1', '0', '1', '0', '1', '0']) : '' || rubah == 1 ? pickRandom(['0', '1', '0', '1']) : '' || rubah == 2 ? pickRandom(['0', '1', '0', '1', '2']) : '' || rubah == 3 ? pickRandom(['0', '1', '0', '2', '2', '0']) : '' || rubah == 4 ? pickRandom(['0', '1', '1', '2', '1', '1', '0']) : '' || rubah == 5 ? pickRandom(['0', '0', '1', '2', '2', '1', '1', '0']) : '' )
  var diamond = (_diamond * 1)
  var _common = `${Math.floor(Math.random() * 3)}`
  var common = (_common * 1)
  var _uncommon = `${Math.floor(Math.random() * 2)}`
  var uncommon = (_uncommon * 1) 
  var _mythic = `${pickRandom(['1', '0', '0', '1'])}`
  var mythic = (_mythic * 1)
  var _legendary = `${pickRandom(['1', '0', '0', '0'])}`
  var sampah = `${Math.floor(Math.random() * 300)}`
  var str = `❤️ Nyawa Kamu Berkurang -${healt * 1} Karena Kamu Telah Berpetualang Sampai Ke ${pickRandom(['Jepang 🇯🇵', 'Korea Selatan 🇰🇷', 'Korea Utara 🇰🇵', 'Indonesia 🇮🇩', 'Amerika 🇺🇸', 'Iraq 🇮🇶', 'Arab 🇸🇦', 'Pakistan 🇵🇰', 'German 🇩🇪', 'Finlandia 🇫🇮', 'Bawa Dunia Mimpi 💭', 'Ujung Dunia 🌍', 'Mars 🌑', 'Bulan 🌜', 'Pluto 🌑', 'Matahari ☀️', 'Hatinya dia ❤️', 'Hilang Dari Dunia'])} dan mendapatkan
*✳️ Exp:* ${exp} 
*💰 Uang:* ${uang}
*🗑️ Sampah:* ${sampah}${potion == 0 ? '' : '\n*Potion:* ' + potion + ''}${diamond == 0 ? '' : '\n*diamond:* ' + diamond + ''}${common == 0 ? '' : '\n*common crate:* ' + common + ''}${uncommon == 0 ? '' : '\n*uncommon crate:* ' + uncommon + ''}
`
  reply(str)
  if (mythic > 0) {
  user11.mythic += mythic * 1
  reply('*Selamat anda mendapatkan item Rare yaitu*\n' + mythic + ' Mythic Crate')
  }
  if (legendary > 0) {
  user11.legendary += legendary * 1
  reply('*Selamat anda mendapatkan item Epic yaitu*\n' + legendary + ' Legendary Crate')
  }
  user11.limit -= 1
  user11.healt -= healt * 1
  user11.exp += exp * 1
  user11.money += uang * 1
  user11.potion += potion * 1
  user11.berlian += diamond * 1
  user11.common += common * 1 
  user11.uncommon += uncommon * 1
  user11.sampah += sampah * 1
  user11.lastadventure = new Date * 1
  } else reply(`Anda sudah berpetualang dan kelelahan, silahkan coba *${adven}* lagi`)
  } else reply(`Minimal 80 health untuk bisa berpetualang, beli nyawa dulu dengan ketik ${prefix}buy potion <jumlah>*\ndan ketik *${prefix}heal*\n\nUntuk mendapat money gratis ketik ${prefix}daily`)
  break
  
  //Rpg Slot
  case 'slot':
  if (!args[0] || isNaN(args[0])) return reply(`Pengunaan:\n${prefix + command} <angka>\n\nContoh :\n${prefix + command} 100\nartinya kamu bertaruh 100 Money.\n\n*JACKPOT:* taruhan kamu digandakan\n*Kurang beruntung:* +1 Money\n*Kalah:* taruhan kamu diambil`)
  var taruhan = parseInt(args[0])
  var user12 = global.db.users[m.sender]
  if (user12.money < 100) return reply('Minimal $100 Untuk Memulai Slot')
  var emojis = ["🏆","🏅","💸"]
  var fa = Math.floor(Math.random() * emojis.length)
  var nd = Math.floor(Math.random() * emojis.length)
  var yy = Math.floor(Math.random() * emojis.length)
  ga = [],
  nt = [],
  en = []
  for (let i = 0; i < 3; i++) {
  ga[i] = emojis[fa]
  fa++
  if (fa == emojis.length) fa = 0
  }
  for (let i = 0; i < 3; i++) {
  nt[i] = emojis[nd]
  nd++
  if (nd == emojis.length) nd = 0
  }
  for (let i = 0; i < 3; i++) {
  en[i] = emojis[yy]
  yy++
  if (yy == emojis.length) yy = 0
  }
  let end
  if (fa == nd && nd == yy) {
  end = `JACKPOT! 🥳 *+${taruhan * 2} Money*` 
  user12.money += taruhan * 2
  } else if (fa == nd || fa == yy || nd == yy) {
  end = `Kurang beruntung 👍 *+1 Money*`
  user12.money += 1
  } else {
  end = `Kamu kalah 😥 *-${taruhan} Money*`
  user12.money -= taruhan
  }
  user12.lastslot = new Date * 1
  let btnslot = [{ buttonId: `slot ${taruhan}`, buttonText: { displayText: 'Putar Lagi 🎰' }, type: 1 },]
  ryuu.sendButtonText(m.chat, btnslot, 
`*[🎰 SLOT]*

${end}

${ga[0]} ${nt[0]} ${en[0]}
${ga[1]} ${nt[1]} ${en[1]}
${ga[2]} ${nt[2]} ${en[2]}
`, global.namaowner, m)
  break

  //Kill
  case 'kill':
  if (!db.chats[m.chat].event) return reply(fiturOff())
  if (!m.isGroup) return reply(mess.group)
  if (global.db.users[m.sender].limit < 1) return reply(rpg.limitEnd)
  kill = `*----- ⌈ QUEST MENU ⌋ -----*\n\n⚔️ List Item :\n1. slime\n2. goblin\n3. devil\n4. demon\n\nPenggunaan Fitur : *${prefix + command} <item>*\nExample : ${prefix + command} slime`
  if (!text) return m.reply(kill)
  let [kills] = args
  if (kills.toLowerCase() == 'slime') {
  if (!db.chats[m.chat].event) return reply(fiturOff())
  if (!m.isGroup) return reply(mess.group)
  if (global.db.users[m.sender].limit < 1) return reply(rpg.limitEnd)
  var user13 = global.db.users[m.sender]
  if (user13.sword < 1) return reply('Beli Pedang Terlebih Dahulu!')
  if (user13.armor < 1) return reply('Beli Armor Terlebih Dahulu!')
  slime = await getBuffer('https://telegra.ph/file/1bb71f43794e38b11b962.jpg')
  rp = randomNomor(75)
  e = randomNomor(15)
  d = randomNomor(3)
  b = randomNomor(50)
  pp = `*Mission Slime Sukses ☑️*\n\n*Kamu Mendapatkan :*\n\n*💎 Diamond* : ${d}\n*⛓️ Besi* : ${b}\n*🪙 Emas* : ${e}\n*💰 Balance* : ${rp}`
  user13.sword -= 1
  user13.berlian += d
  user13.besi += b
  user13.emas += e
  user13.money += rp
  user13.limit -= 1
  let btnslime = [{
  "quickReplyButton": {
  "displayText": "Profile 👦",
  "id": `profile`
  }
  }, {
  "quickReplyButton": {
  "displayText": "Kill Slime Lagi ⚔️",
  "id": 'kill slime'
  }
  }]
  ryuu.send5ButImg(m.chat, pp, `© ${global.namaowner}`, slime, btnslime)
  } else if (kills.toLowerCase() == 'goblin') {
  if (!db.chats[m.chat].event) return reply(fiturOff())
  if (!m.isGroup) return reply(mess.group)
  if (global.db.users[m.sender].limit < 1) return reply(rpg.limitEnd)
  var user14 = global.db.users[m.sender]
  if (user14.sword < 1) return reply('Beli Pedang Terlebih Dahulu!')
  if (user14.armor < 1) return reply('Beli Armor Terlebih Dahulu!')
  goblin = await getBuffer('https://telegra.ph/file/ec2b48b4fa3e3f732ffb4.jpg')
  rp = randomNomor(500)
  e = randomNomor(65)
  d = randomNomor(5)
  b = randomNomor(90)
  pp = `*Mission Goblin Sukses ☑️*\n\n*Kamu Mendapatkan :*\n\n*💎 Diamond* : ${d}\n*⛓️ Besi* : ${b}\n*🪙 Emas* : ${e}\n*💰 Balance* : ${rp}`
  user14.sword -= 1
  user14.berlian += d
  user14.besi += b
  user14.emas += e
  user14.money += rp
  user14.limit -= 1
  let btngoblin = [{
  "quickReplyButton": {
  "displayText": "Profile 👦",
  "id": `profile`
  }
  }, {
  "quickReplyButton": {
  "displayText": "Kill Goblin Lagi ⚔️",
  "id": 'kill goblin'
  }
  }]
  ryuu.send5ButImg(m.chat, pp, `© ${global.namaowner}`, goblin, btngoblin)
  } else if (kills.toLowerCase() == 'devil') {
  if (!db.chats[m.chat].event) return reply(fiturOff())
  if (!m.isGroup) return reply(mess.group)
  if (global.db.users[m.sender].limit < 1) return reply(rpg.limitEnd)
  var user15 = global.db.users[m.sender]
  if (user15.sword < 1) return reply('Beli Pedang Terlebih Dahulu!')
  if (user15.armor < 1) return reply('Beli Armor Terlebih Dahulu!')
  devil = await getBuffer('https://telegra.ph/file/c511d2f3aafc8f570569d.jpg')
  rp = randomNomor(600)
  e = randomNomor(70)
  d = randomNomor(6)
  b = randomNomor(95)
  pp = `*Mission Devil Sukses ☑️*\n\n*Kamu Mendapatkan :*\n\n*💎 Diamond* : ${d}\n*⛓️ Besi* : ${b}\n*🪙 Emas* : ${e}\n*💰 Balance* : ${rp}`
  user15.sword -= 1
  user15.berlian += d
  user15.besi += b
  user15.emas += e
  user15.money += rp
  user15.limit -= 1
  let btndevil = [{
  "quickReplyButton": {
  "displayText": "Profile 👦",
  "id": `profile`
  }
  }, {
  "quickReplyButton": {
  "displayText": "Kill Devil Lagi ⚔️",
  "id": 'kill devil'
  }
  }]
  ryuu.send5ButImg(m.chat, pp, `© ${global.namaowner}`, devil, btndevil)
  } else if (kills.toLowerCase() == 'demon') {
  if (!db.chats[m.chat].event) return reply(fiturOff())
  if (!m.isGroup) return reply(mess.group)
  if (global.db.users[m.sender].limit < 1) return reply(rpg.limitEnd)
  var user16 = global.db.users[m.sender]
  if (user16.sword < 1) return reply('Beli Pedang Terlebih Dahulu!')
  if (user16.armor < 1) return reply('Beli Armor Terlebih Dahulu!')
  demon = await getBuffer('https://telegra.ph/file/ce1a9174231f66912f484.jpg')
  rp = randomNomor(900)
  e = randomNomor(90)
  d = randomNomor(10)
  b = randomNomor(120)
  pp = `*Mission Demon Sukses ☑️*\n\n*Kamu Mendapatkan :*\n\n*💎 Diamond* : ${d}\n*⛓️ Besi* : ${b}\n*🪙 Emas* : ${e}\n*💰 Balance* : ${rp}`
  user16.sword -= 1
  user16.berlian += d
  user16.besi += b
  user16.emas += e
  user16.money += rp
  user16.limit -= 1
  let btndemon = [{
  "quickReplyButton": {
  "displayText": "Profile 👦",
  "id": `profile`
  }
  }, {
  "quickReplyButton": {
  "displayText": "Kill Demon Lagi ⚔️",
  "id": 'kill demon'
  }
  }]
  ryuu.send5ButImg(m.chat, pp, `© ${global.namaowner}`, demon, btndemon)
  }
  break

  //Buy
  case 'buy':
  if (!db.chats[m.chat].event) return reply(fiturOff())
  if (!m.isGroup) return reply(mess.group)
  buy = `*----- ⌈ BUY ITEMS ⌋ -----*\n\n*🛒 List Item :*\n1. limit\n2. sword\n3. armor\n4. busur\n5. anakpanah\n6. kapak\n7. pancing\n8. umpan\n9. alatnambang\n10. potion\n11. makananpet\n\n*Happy Shopping 🛍️*`
  if (!text) return m.reply(buy)
  var user17 = global.db.users[m.sender]
  const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
  let [type, id, idl] = args
  if (type.toLowerCase() == 'limit') {
  if (!id) return reply (`Masukkan Jumlah Nya\n\nExample: ${prefix + command} limit 10`)
  let ane = 150 * id
  if (user17.money < ane) return reply('Balance Kamu Tidak Cukup Untuk Melakukan Pembelian Ini')
  user17.money -= ane
  user17.limit += id
  reply(`Pembeliaan limit sebanyak ${id} berhasil\n\nSisa Balance : ${user17.money}\nSisa Limit : ${user17.limit}`)
  
  } else if (type.toLowerCase() == 'sword') {
  if (!id) return reply (`Masukkan Jumlahnya\nNote: Harga Satu Sword $1000\n\nExample: ${prefix + command} sword 1`)
  let swo = 100 * id
  if (user17.money < 1000) return reply('Balance Kamu Tudak Cukup Untuk Melakukan Pembelian Ini')
  user17.money -= 1000 * id
  user17.sword += 100 * id 
  reply(`Pembelian Sword Sebanyak ${id} Berhasil\n\nSisa Balance : ${user17.money}`)
  
  } else if (type.toLowerCase() == 'armor') {
  if (user17.money < 1000) return reply('Balance Kamu Tidak Cukup Karna Harga Satu Armor Adalah $1000')
  user17.money -= 1000
  user17.armor += 1
  reply(`Pembelian Armor Sukses\n\nSisa Balance : ${user17.money}`)
  
  } else if (type.toLowerCase() == 'busur') {
  if (!id) return reply(`Masukkan Jumlahnya\nNote Harga Satu Busur Panah $1000\n\nExample: ${prefix + command} busur 1`)
  if (user17.money < 1000) return reply('Balance Kamu Tidak Cukup')
  user17.money -= 1000 * id
  user17.panah += id
  reply(`Pembelian Busur Sebanyak ${id} Berhasil\n\nBarang Sekarang: ${user17.panah}\nSisa Balance : ${user17.money}`)
  
  } else if (type.toLowerCase() == 'anakpanah') {
  if (!id) return reply(`Masukkan Jumlahnya\nNote Harga Satu Anak Panah $100\n\nExample: ${prefix + command} anakpanah 1`)
  if (user17.money < 100) return reply('Balance Kamu Tidak Cukup')
  user17.money -= 100 * id
  user17.anakpanah += id
  reply(`Pembelian Anak Panah Sebanyak ${id} Berhasil\n\nBarang Sekarang: ${user17.anakpanah}\nSisa Balance : ${user17.money}`)
  
  } else if (type.toLowerCase() == 'kapak') {
  if (!id) return reply(`Masukkan Jumlahnya\nNote Harga Satu Kapak $1000\n\nExample: ${prefix + command} kapak 1`)
  if (user17.money < 1000) return reply('Balance Kamu Tidak Cukup')
  user17.money -= 1000 * id
  user17.kapak += id
  reply(`Pembelian Kapak Sebanyak ${id} Berhasil\n\nBarang Sekarang: ${user17.kapak}\nSisa Balance : ${user17.money}`)
  
  } else if (type.toLowerCase() == 'pancing') {
  if (user17.money < 1000) return reply('Balance Kamu Tidak Cukup')
  user17.money -= 1000
  user17.pancing += 1
  reply(`Pembelian Pancing Sebanyak ${id} Berhasil\n\nBarang Sekarang: ${user17.pancing}\nSisa Balance : ${user17.money}`)
  
  } else if (type.toLowerCase() == 'umpan') {
  if (!id) return reply(`Masukkan Jumlahnya\nNote Harga Satu Umpan $100\n\nExample: ${prefix + command} umpan 10`)
  if (user17.money < 100) return reply('Balance Kamu Tidak Cukup')
  user17.money -= 100 * id
  user17.umpan += id
  reply(`Pembelian Umpan Sebanyak ${id} Berhasil\n\nBarang Sekarang: ${user17.umpan}\nSisa Balance : ${user17.money}`)
  
  } else if (type.toLowerCase() == 'pickaxe') {
  if (!id) return reply(`Masukkan Jumlahnya\nNote Harga Satu Pick Axe $2500\n\nExample: ${prefix + command} pickaxe 1`)
  if (user17.money < 2500) return reply('Balance Kamu Tidak Cukup')
  user17.money -= 2500 * id
  user17.alat += id
  reply(`Pembelian Alat Tambang Sebanyak ${id} Berhasil\n\nBarang Sekarang: ${user17.alat}\nSisa Balance : ${user17.money}`)
  
  } else if (type.toLowerCase() == 'potion') {
  if (!id) return reply(`Masukkan Jumlahnya\nNote: Harga Satu Potion Adalah $1000\n\nExample: ${prefix + command} potion 1`)
  if (user17.money < 1000) return reply('Balance Kamu Tidak Cukup Untuk Melakukan Pembelian Ini')
  user17.money -= 1000 * id
  user17.potion += id
  reply(`Pembelian Potion Sukses\n\nSisa Balance : ${user17.money}\nJumlah Potion Sekarang: ${user17.potion}`)
  
  } else if (type.toLowerCase() == 'makananpet') {
  if (!id) return reply(`Masukkan Jumlahnya\nNote: Harga Satu Makanan Pet Adalah $500\n\nExample: ${prefix+command} makananpet 1`)
  if (user17.money < 500) return reply('Balance Kamu Tidak Cukup Untuk Melakukan Pembelian Ini')
  user17.money -= 500 * id
  user17.makananpet += id
  reply(`Pembelian Makanan Pet Sukses\n\nSisa Balance : ${user17.money}\nJumlah Makanan Pet Sekarang : ${user17.makananpet}`)
  
  } else if (type.toLowerCase() == 'kucing') {
  if (user17.kucing > 1) return reply('Kamu Sudah Memiliki Pet Kucing')
  if (user17.money < 1000) return reply('Balance Kamu Tidak Cukup Karena Harga 1 Pet Kucing Adalah $1000')
  user17.money -= 1000
  user17.kucing += 1
  reply(`Pembelian Pet Kucing Sukses\n\nSisa Balance : ${user17.money}\nJumlah Pet Kucing Sekarang Adalah : ${user17.kucing}`)
   
  } else if (type.toLowerCase() == 'kuda') {
  if (user17.kuda > 1) return reply('Kamu Sudah Memiliki Pet Kuda')
  if (user17.money < 1000) return reply('Balance Kamu Tidak Cukup Karena Harga 1 Pet Kuda Adalah $3000')
  user17.money -= 1000
  user17.kuda += 1
  reply(`Pembelian Pet Kuda Sukses\n\nSisa Balance : ${user17.money}\nJumlah Pet Kuda Sekarang Adalah : ${user17.kuda}`)
  
  } else if (type.toLowerCase() == 'rubah') {
  if (user17.rubah > 1) return reply('Kamu Sudah Memiliki Pet Kucing')
  if (user17.money < 1000) return reply('Balance Kamu Tidak Cukup Untuk Melakukan Pembelian Ini')
  user17.money -= 1000
  user17.rubah += 1
  reply(`Pembelian Pet Kucing Sukses\n\nSisa Balance : ${user17.money}\nJumlah Pet Kucing Sekarang Adalah : ${user17.rubah}`)
  }
  break

  //Jual
  case 'sell':
  if (!db.chats[m.chat].event) return reply(fiturOff())
  if (!m.isGroup) return reply(mess.group)
  if (global.db.users[m.sender].limit < 1) return reply(rpg.limitEnd)
  if (!text) return m.reply(`*----- ⌈ SELL ITEMS ⌋ -----*\n\n*🛒 List Item :*\n1. ikan\n2. ayam\n3. kelinci\n4. kambing\n5. sapi\n6. besi\n7. emas\n8. diamond\n9. kayu\n\n*Happy Shopping 🛍️*`)
  var user18 = global.db.users[m.sender]
  jualan = await getBuffer('https://telegra.ph/file/3188ee5d0acb995384641.jpg')
  let [jual, sell] = args
  if (jual.toLowerCase() == 'ikan') {
  if (!sell) return reply (`Masukkan Jumlah Nya\nHarga Per Satu Ikan Adalah : $50\n\nExample: ${prefix + command} ikan 10`)
  rp = 50 * sell
  if (user18.ikan < sell) return reply(`Ikan Kamu Tidak Cukup`)
  user18.ikan -= sell
  user18.money += rp
  capti = `*Shop ${global.namabot} 🏪*\n\n*👦 Penjual :* ${pushname}\n*👨 Pembeli :* Admin\n*🏷️ Harga/Ikan :* $5\n*💌 Status :* Sukses\n*🦈 Sisa Ikan :* ${user18.ikan}\n*🏧 Hasil Penjualan : ${rp}*`
  var btnjual = [{
  "quickReplyButton": {
  "displayText": "Profile 👦",
  "id": `profile`
  }
  }]
  ryuu.send5ButImg(m.chat, capti, `© ${global.namaowner}`, jualan, btnjual)
  
  } else if (jual.toLowerCase() == 'ayam') {
  if (!sell) return reply (`Masukkan Jumlah Nya\nHarga Per Satu Ayam Adalah : $70\n\nExample: ${prefix + command} ayam 10`)
  rp = 50 * sell
  if (user18.ayam < sell) return reply(`Ikan Kamu Tidak Cukup`)
  user18.ayam -= sell
  user18.money += rp
  capti = `*Shop ${global.namabot} 🏪*\n\n*👦 Penjual :* ${pushname}\n*👨 Pembeli :* Admin\n*🏷️ Harga/ayam :* $70\n*💌 Status :* Sukses\n*🐔 Sisa Ayam :* ${user18.ayam}\n*🏧 Hasil Penjualan : ${rp}*`
  var btnjual = [{
  "quickReplyButton": {
  "displayText": "Profile 👦",
  "id": `profile`
  }
  }]
  ryuu.send5ButImg(m.chat, capti, `© ${global.namaowner}`, jualan, btnjual)
  
  } else if (jual.toLowerCase() == 'kelinci') {
  if (!sell) return reply (`Masukkan Jumlah Nya\nHarga Per Satu Kelinci Adalah : $150\n\nExample: ${prefix + command} kelinci 10`)
  rp = 150 * sell
  if (user18.kelinci < sell) return reply(`Ikan Kamu Tidak Cukup`)
  user18.kelinci -= sell
  user18.money += rp
  capti = `*Shop ${global.namabot} 🏪*\n\n*👦 Penjual :* ${pushname}\n*👨 Pembeli :* Admin\n*🏷️ Harga/Ikan :* $5\n*💌 Status :* Sukses\n*🐇 Sisa Ikan :* ${user18.kelinci}\n*🏧 Hasil Penjualan : ${rp}*`
  var btnjual = [{
  "quickReplyButton": {
  "displayText": "Profile 👦",
  "id": `profile`
  }
  }]
  ryuu.send5ButImg(m.chat, capti, `© ${global.namaowner}`, jualan, btnjual)

  } else if (jual.toLowerCase() == 'kambing') {
  if (!sell) return reply (`Masukkan Jumlah Nya\nHarga Per Satu Kambing Adalah : $500\n\nExample: ${prefix + command} kambing 10`)
  rp = 500 * sell
  if (user18.kambing < sell) return reply(`Ikan Kamu Tidak Cukup`)
  user18.kambing -= sell
  user18.money += rp
  capti = `*Shop ${global.namabot} 🏪*\n\n*👦 Penjual :* ${pushname}\n*👨 Pembeli :* Admin\n*🏷️ Harga/Ikan :* $5\n*💌 Status :* Sukses\n*🐐 Sisa Ikan :* ${user18.kambing}\n*🏧 Hasil Penjualan : ${rp}*`
  var btnjual = [{
  "quickReplyButton": {
  "displayText": "Profile 👦",
  "id": `profile`
  }
  }]
  ryuu.send5ButImg(m.chat, capti, `© ${global.namaowner}`, jualan, btnjual)
  
  } else if (jual.toLowerCase() == 'sapi') {
  if (!sell) return reply (`Masukkan Jumlah Nya\nHarga Per Satu sapi Adalah : $1500\n\nExample: ${prefix + command} sapi 10`)
  rp = 1500 * sell
  if (user18.sapi < sell) return reply(`Ikan Kamu Tidak Cukup`)
  user18.sapi -= sell
  user18.money += rp
  capti = `*Shop ${global.namabot} 🏪*\n\n*👦 Penjual :* ${pushname}\n*👨 Pembeli :* Admin\n*🏷️ Harga/Ikan :* $5\n*💌 Status :* Sukses\n*🐄 Sisa Ikan :* ${user18.sapi}\n*🏧 Hasil Penjualan : ${rp}*`
  var btnjual = [{
  "quickReplyButton": {
  "displayText": "Profile 👦",
  "id": `profile`
  }
  }]
  ryuu.send5ButImg(m.chat, capti, `© ${global.namaowner}`, jualan, btnjual)
  
  } else if (jual.toLowerCase() == 'besi') {
  if (!sell) return reply (`Masukkan Jumlah Nya\nHarga Per Satu Besi Adalah : $100\n\nExample: ${prefix + command} besi 10`)
  rp = 100 * sell
  if (user18.besi < sell) return reply(`Besi Kamu Tidak Cukup`)
  user18.besi -= sell
  user18.money += rp
  capti = `*Shop ${global.namabot} 🏪*\n\n*👦 Penjual :* ${pushname}\n*👨 Pembeli :* Admin\n*🏷️ Harga/Besi :* $10\n*💌 Status :* Sukses\n*⛓️ Sisa Besi :* ${user18.besi}\n*🏧 Hasil Penjualan : ${rp}*`
  var btnjual = [{
  "quickReplyButton": {
  "displayText": "Profile 👦",
  "id": `profile`
  }
  }]
  ryuu.send5ButImg(m.chat, capti, `© ${global.namaowner}`, jualan, btnjual)
  
  } else if (jual.toLowerCase() == 'emas') {
  if (!sell) return reply (`Masukkan Jumlah Nya\nHarga Per Satu Emas Adalah : $250\n\nExample: ${prefix + command} emas 10`)
  rp = 250 * sell
  if (user18.gold < sell) return reply(`Emas Kamu Tidak Cukup`)
  user18.gold -= sell
  user18.money += rp 
  capti = `*Shop ${global.namabot} 🏪*\n\n*👦 Penjual :* ${pushname}\n*👨 Pembeli :* Admin\n*🏷️ Harga/Emas :* $25\n*💌 Status :* Sukses\n*🪙 Sisa Emas :* ${user18.gold}\n*🏧 Hasil Penjualan : ${rp}*`
  var btnjual = [{
  "quickReplyButton": {
  "displayText": "Profile 👦",
  "id": `profile`
  }
  }]
  ryuu.send5ButImg(m.chat, capti, `© ${global.namaowner}`, jualan, btnjual)
  
  } else if (jual.toLowerCase() == 'diamond') {
  if (!sell) return reply (`Masukkan Jumlah Nya\nHarga Per Satu Ikan Adalah : $700\n\nExample: ${prefix + command} diamond 10`)
  rp = 700 * sell
  if (user18.berlian < sell) return reply(`Diamond Kamu Tidak Cukup`)
  user18.berlian -= sell
  user18.money += rp
  capti = `*Shop ${global.namabot} 🏪*\n\n*👦 Penjual :* ${pushname}\n*👨 Pembeli :* Admin\n*🏷️ Harga/Diamond :* $25\n*💌 Status :* Sukses\n*💎 Sisa Berlian :* ${user18.berlian}\n*🏧 Hasil Penjualan : ${rp}*`
  var btnjual = [{
  "quickReplyButton": {
  "displayText": "Profile 👦",
  "id": `profile`
  }
  }]
  ryuu.send5ButImg(m.chat, capti, `© ${global.namaowner}`, jualan, btnjual)
  
  } else if (jual.toLowerCase() == 'kayu') {
  if (!sell) return reply (`Masukkan Jumlah Nya\nHarga Per Satu Kayu Adalah : $70\n\nExample: ${prefix + command} diamond 10`)
  rp = 70 * sell
  if (user18.kayu < sell) return reply(`Kayu Kamu Tidak Cukup`)
  user18.kayu -= sell
  user18.money += rp
  capti = `*Shop ${global.namabot} 🏪*\n\n*👦 Penjual :* ${pushname}\n*👨 Pembeli :* Admin\n*🏷️ Harga/Kayu :* $20\n*💌 Status :* Sukses\n*🪵 Sisa Kayu :* ${user18.kayu}\n*🏧 Hasil Penjualan : ${rp}*`
  var btnjual = [{
  "quickReplyButton": {
  "displayText": "Profile 👦",
  "id": `profile`
  }
  }]
  ryuu.send5ButImg(m.chat, capti, `© ${global.namaowner}`, jualan, btnjual)
  }
  break
  
  case 'heal':
  if (!db.chats[m.chat].event) return reply(fiturOff())
  if (!m.isGroup) return reply(mess.group)
  var user19 = global.db.users[m.sender]
  if (user19.healt > 99) return reply('Nyawa Kamu Sudah Penuh')
  if (user19.potion < 1) return reply('Potion Kamu Tidak Cukup') 
  user19.potion -= 1
  tod = 80 * 1
  user19.healt += tod
  reply(`*🧪 Use Potion*\n\n*💓 Healt* : +${tod}\n*🧪 Sisa potion* : ${user19.potion}`) 
  break
  
  case 'open':
  if (!db.chats[m.chat].event) return reply(fiturOff())
  if (!m.isGroup) return reply(mess.group)
  if (global.db.users[m.sender].limit < 1) return reply(rpg.limitEnd)
  if (!text) return reply(`${prefix}open <crate name> < 1 | 10 | 100 | 1000 >\n\nContoh penggunaan: *${prefix}open common 10*\n\nlist crate:\n*common*\n*uncommon*\n*mythic*\n*legendary*`)
  var user20 = global.db.users[m.sender]
  let [create, angka] = args
  if (create.toLowerCase() == 'common') {
  if (!angka) return reply(`Hanya support 1, 10, 100, 1000\nContoh penggunaan: *${prefix}open common 10*`)
  if (angka.toLowerCase() == '1') {
  if (user20.common < 1) return reply('Common Kamu Tidak Cukup')
  _cm = `${Math.floor(Math.random() * 50)}`
  _cc = `${Math.floor(Math.random() * 2)}`
  _cp = `${Math.floor(Math.random() * 1)}`
  _ce = `${Math.floor(Math.random() * 100)}`
  _cu = `${Math.floor(Math.random() * 1)}`
  cm = (_cm * 1)
  cc = (_cc * 1)
  cp = (_cp * 1)
  ce = (_ce * 1)
  cu = (_cu * 1)
  reply(`Anda telah membuka *Common crate* dan mendapatkan: 
*💰 Money :* $${cm} 
*✳️ Exp :* ${ce} *exp*
*🧪 Potion :* ${cp} *potion*
*🎁 Common Crate :* ${cc} *Crate*
*📦 Uncommon Crate :* ${cu} Crate`)
  user20.common -= `${angka}`
  user20.money += cm * 1
  user20.exp += ce * 1
  user20.common += cc * 1
  user20.uncommon += cu * 1
  } else if (angka.toLowerCase() == '10') {
  if (user20.common < 1) return reply('Common Kamu Tidak Cukup')
  _cm = `${Math.floor(Math.random() * 500)}`
  _cc = `${Math.floor(Math.random() * 5)}`
  _cp = `${Math.floor(Math.random() * 3)}`
  _ce = `${Math.floor(Math.random() * 700)}`
  _cu = `${Math.floor(Math.random() * 3)}`
  cm = (_cm * 1)
  cc = (_cc * 1)
  cp = (_cp * 1)
  ce = (_ce * 1)
  cu = (_cu * 1)
  reply(`Anda telah membuka *Common crate* dan mendapatkan: 
*💰 Money :* $${cm} 
*✳️ Exp :* ${ce} *exp*
*🧪 Potion :* ${cp} *potion*
*🎁 Common Crate :* ${cc} *Crate*
*📦 Uncommon Crate :* ${cu} Crate`)
  user20.common -= `${angka}`
  user20.money += cm * 1
  user20.exp += ce * 1
  user20.common += cc * 1
  user20.uncommon += cu * 1
  } else if (angka.toLowerCase() == '100') {
  if (user20.common < 1) return reply('Common Kamu Tidak Cukup')
  _cm = `${Math.floor(Math.random() * 5000)}`
  _cc = `${Math.floor(Math.random() * 50)}`
  _cp = `${Math.floor(Math.random() * 20)}`
  _ce = `${Math.floor(Math.random() * 7500)}`
  _cu = `${Math.floor(Math.random() * 30)}`
  cm = (_cm * 1)
  cc = (_cc * 1)
  cp = (_cp * 1)
  ce = (_ce * 1)
  cu = (_cu * 1)
  reply(`Anda telah membuka *Common crate* dan mendapatkan: 
*💰 Money :* $${cm} 
*✳️ Exp :* ${ce} *exp*
*🧪 Potion :* ${cp} *potion*
*🎁 Common Crate :* ${cc} *Crate*
*📦 Uncommon Crate :* ${cu} Crate`)
  user20.common -= `${angka}`
  user20.money += cm * 1
  user20.exp += ce * 1
  user20.common += cc * 1
  user20.uncommon += cu * 1
  } else if (angka.toLowerCase() == '1000') {
  if (user20.common < 1) return reply('Common Kamu Tidak Cukup')
  _cm = `${Math.floor(Math.random() * 50000)}`
  _cc = `${Math.floor(Math.random() * 350)}`
  _cp = `${Math.floor(Math.random() * 100)}`
  _ce = `${Math.floor(Math.random() * 80000)}`
  _cu = `${Math.floor(Math.random() * 200)}`
  cm = (_cm * 1)
  cc = (_cc * 1)
  cp = (_cp * 1)
  ce = (_ce * 1)
  cu = (_cu * 1)
  reply(`Anda telah membuka *Common crate* dan mendapatkan: 
*💰 Money :* $${cm} 
*✳️ Exp :* ${ce} *exp*
*🧪 Potion :* ${cp} *potion*
*🎁 Common Crate :* ${cc} *Crate*
*📦 Uncommon Crate :* ${cu} Crate`)
  user20.common -= `${angka}`
  user20.money += cm * 1
  user20.exp += ce * 1
  user20.common += cc * 1
  user20.uncommon += cu * 1
  }
  } else if (create.toLowerCase() == 'uncommon') {
  if (!angka) return reply(`Hanya support 1, 10, 100, 1000\nContoh penggunaan: *${prefix}open common 10*`)
  if (angka.toLowerCase() == '1') {
  if (user20.uncommon < 1) return reply('Uncommon Kamu Tidak Cukup')
  _ud = `${Math.floor(Math.random() * 2)}`
  _ue = `${Math.floor(Math.random() * 100)}`
  _um = `${Math.floor(Math.random() * 150)}`
  _up = `${Math.floor(Math.random() * 2)}`
  _umc = `${Math.floor(Math.random() * 1)}`
  _uu = `${Math.floor(Math.random() * 2)}`
  _uc = `${Math.floor(Math.random() * 3)}`
  ud = (_ud * 1)
  ue = (_ue * 1)
  um = (_um * 1)
  up = (_up * 1)
  umc = (_umc * 1)
  uu = (_uu * 1)
  uc = (_uc * 1)
  reply(`Anda telah membuka *Uncommon crate* dan mendapatkan: 
*💰 Money :* $${um} 
*✳️ Exp :* ${ue} *exp*
*💎 Diamond :* ${ud} *Diamond*
*🧪 Potion :* ${up} *potion*
*🎁 Common Crate :* ${uc} *Crate*
*📦 Uncommon Crate :* ${uu} Crate`)
  user20.uncommon -= `${angka}`
  user20.money += um * 1
  user20.exp += ue * 1
  user20.berlian += ud * 1
  user20.common += uc * 1
  user20.uncommon += uu * 1
  } else if (angka.toLowerCase() == '10') {
  if (user20.uncommon < 1) return reply('Uncommon Kamu Tidak Cukup')
  _ud = `${Math.floor(Math.random() * 5)}`
  _ue = `${Math.floor(Math.random() * 750)}`
  _um = `${Math.floor(Math.random() * 400)}`
  _up = `${Math.floor(Math.random() * 7)}`
  _umc = `${Math.floor(Math.random() * 2)}`
  _uu = `${Math.floor(Math.random() * 4)}`
  _uc = `${Math.floor(Math.random() * 7)}`
  ud = (_ud * 1)
  ue = (_ue * 1)
  um = (_um * 1)
  up = (_up * 1)
  umc = (_umc * 1)
  uu = (_uu * 1)
  uc = (_uc * 1)
  reply(`Anda telah membuka *Uncommon crate* dan mendapatkan: 
*💰 Money :* $${um} 
*✳️ Exp :* ${ue} *exp*
*💎 Diamond :* ${ud} *Diamond*
*🧪 Potion :* ${up} *potion*
*🎁 Common Crate :* ${uc} *Crate*
*📦 Uncommon Crate :* ${uu} Crate`)
  user20.uncommon -= `${angka}`
  user20.money += um * 1
  user20.exp += ue * 1
  user20.berlian += ud * 1
  user20.common += uc * 1
  user20.uncommon += uu * 1
  } else if (angka.toLowerCase() == '100') {
  if (user20.uncommon < 1) return reply('Uncommon Kamu Tidak Cukup')
  _ud = `${Math.floor(Math.random() * 20)}`
  _ue = `${Math.floor(Math.random() * 8000)}`
  _um = `${Math.floor(Math.random() * 5000)}`
  _up = `${Math.floor(Math.random() * 20)}`
  _umc = `${Math.floor(Math.random() * 10)}`
  _uu = `${Math.floor(Math.random() * 25)}`
  _uc = `${Math.floor(Math.random() * 50)}`
  ud = (_ud * 1)
  ue = (_ue * 1)
  um = (_um * 1)
  up = (_up * 1)
  umc = (_umc * 1)
  uu = (_uu * 1)
  uc = (_uc * 1)
  reply(`Anda telah membuka *Uncommon crate* dan mendapatkan: 
*💰 Money :* $${um} 
*✳️ Exp :* ${ue} *exp*
*💎 Diamond :* ${ud} *Diamond*
*🧪 Potion :* ${up} *potion*
*🎁 Common Crate :* ${uc} *Crate*
*📦 Uncommon Crate :* ${uu} Crate`)
  user20.uncommon -= `${angka}`
  user20.money += um * 1
  user20.exp += ue * 1
  user20.berlian += ud * 1
  user20.common += uc * 1
  user20.uncommon += uu * 1
  } else if (angka.toLowerCase() == '1000') {
  if (user20.uncommon < 1) return reply('Uncommon Kamu Tidak Cukup')
  _ud = `${Math.floor(Math.random() * 50)}`
  _ue = `${Math.floor(Math.random() * 100000)}`
  _um = `${Math.floor(Math.random() * 50000)}`
  _up = `${Math.floor(Math.random() * 100)}`
  _umc = `${Math.floor(Math.random() * 100)}`
  _uu = `${Math.floor(Math.random() * 100)}`
  _uc = `${Math.floor(Math.random() * 200)}`
  ud = (_ud * 1)
  ue = (_ue * 1)
  um = (_um * 1)
  up = (_up * 1)
  umc = (_umc * 1)
  uu = (_uu * 1)
  uc = (_uc * 1)
  reply(`Anda telah membuka *Uncommon crate* dan mendapatkan: 
*💰 Money :* $${um} 
*✳️ Exp :* ${ue} *exp*
*💎 Diamond :* ${ud} *Diamond*
*🧪 Potion :* ${up} *potion*
*🎁 Common Crate :* ${uc} *Crate*
*📦 Uncommon Crate :* ${uu} Crate`)
  user20.uncommon -= `${angka}`
  user20.money += um * 1
  user20.exp += ue * 1
  user20.berlian += ud * 1
  user20.common += uc * 1
  user20.uncommon += uu * 1
  }
  } else if (create.toLowerCase() == 'mythic') {
  if (!angka) return reply(`Hanya support 1, 10, 100, 1000\nContoh penggunaan: *${prefix}open common 10*`)
  if (angka.toLowerCase() == '1') {
  if (user20.common < 1) return reply('Mythic Kamu Tidak Cukup')
  _mm = `${Math.floor(Math.random() * 200)}`
  _me = `${Math.floor(Math.random() * 250)}`
  _mp = `${Math.floor(Math.random() * 3)}`
  _mu = `${Math.floor(Math.random() * 3)}`
  _mc = `${Math.floor(Math.random() * 5)}`
  _ml = `${pickRandom(['0', '0', '1', '0',  '0'])}`
  _md = `${Math.floor(Math.random() * 3)}`
  mm = (_mm * 1)
  mmm = (_mmm * 1)
  me = (_me * 1)
  mp = (_mp * 1)
  mu = (_mu * 1)
  mc = (_mc * 1)
  ml = (_ml * 1)
  md = (_md * 1)
  reply(`Anda telah membuka *Mythic crate* dan mendapatkan: 
*💰 Money :* $${mm}
*✳️ Exp :* ${me} *exp*
*💎 Diamond :* ${md} *Diamond*
*🧪 Potion :* ${mp} *potion*
*🎁 Common Crate :* ${mc} *Crate*
*📦 Uncommon Crate :* ${mu} Crate`)
  user20.mythic -= `${angka}`
  user20.money += um * 1
  user20.exp += ue * 1
  user20.berlian += ud * 1
  user20.common += uc * 1
  user20.uncommon += uu * 1
  } else if (angka.toLowerCase() == '10') {
  if (user20.mythic < 1) return reply('Mythic Kamu Tidak Cukup')
  _mm = `${Math.floor(Math.random() * 2000)}`
  _me = `${Math.floor(Math.random() * 3000)}`
  _mp = `${Math.floor(Math.random() * 6)}`
  _mu = `${Math.floor(Math.random() * 6)}`
  _mc = `${Math.floor(Math.random() * 11)}`
  _md = `${Math.floor(Math.random() * 5)}`
  mm = (_mm * 1)
  me = (_me * 1)
  mp = (_mp * 1)
  mu = (_mu * 1)
  mc = (_mc * 1)
  ml = (_ml * 1)
  md = (_md * 1)
  reply(`Anda telah membuka *Mythic crate* dan mendapatkan: 
*💰 Money :* $${mm}
*✳️ Exp :* ${me} *exp*
*💎 Diamond :* ${md} *Diamond*
*🧪 Potion :* ${mp} *potion*
*🎁 Common Crate :* ${mc} *Crate*
*📦 Uncommon Crate :* ${mu} Crate`)
  user20.mythic -= `${angka}`
  user20.money += um * 1
  user20.exp += ue * 1
  user20.berlian += ud * 1
  user20.common += uc * 1
  user20.uncommon += uu * 1
  } else if (angka.toLowerCase() == '100') {
  if (user20.mythic < 1) return reply('Mythic Kamu Tidak Cukup')
  _mm = `${Math.floor(Math.random() * 25000)}`
  _me = `${Math.floor(Math.random() * 30000)}`
  _mp = `${Math.floor(Math.random() * 50)}`
  _mu = `${Math.floor(Math.random() * 80)}`
  _mc = `${Math.floor(Math.random() * 150)}`
  _md = `${Math.floor(Math.random() * 20)}`
  mm = (_mm * 1)
  me = (_me * 1)
  mp = (_mp * 1)
  mu = (_mu * 1)
  mc = (_mc * 1)
  ml = (_ml * 1)
  md = (_md * 1)
  reply(`Anda telah membuka *Mythic crate* dan mendapatkan: 
*💰 Money :* $${mm}
*✳️ Exp :* ${me} *exp*
*💎 Diamond :* ${md} *Diamond*
*🧪 Potion :* ${mp} *potion*
*🎁 Common Crate :* ${mc} *Crate*
*📦 Uncommon Crate :* ${mu} Crate`)
  user20.mythic -= `${angka}`
  user20.money += um * 1
  user20.exp += ue * 1
  user20.berlian += ud * 1
  user20.common += uc * 1
  user20.uncommon += uu * 1
  } else if (angka.toLowerCase() == '1000') {
  if (user20.mythic < 1) return reply('Mythic Kamu Tidak Cukup')
  _mm = `${Math.floor(Math.random() * 500000)}`
  _me = `${Math.floor(Math.random() * 750000)}`
  _mp = `${Math.floor(Math.random() * 70)}`
  _mu = `${Math.floor(Math.random() * 250)}`
  _mc = `${Math.floor(Math.random() * 750)}`
  _md = `${Math.floor(Math.random() * 50)}`
  mm = (_mm * 1)
  me = (_me * 1)
  mp = (_mp * 1)
  mu = (_mu * 1)
  mc = (_mc * 1)
  ml = (_ml * 1)
  md = (_md * 1)
  reply(`Anda telah membuka *Mythic crate* dan mendapatkan: 
*💰 Money :* $${mm}
*✳️ Exp :* ${me} *exp*
*💎 Diamond :* ${md} *Diamond*
*🧪 Potion :* ${mp} *potion*
*🎁 Common Crate :* ${mc} *Crate*
*📦 Uncommon Crate :* ${mu} Crate`)
  user20.mythic -= `${angka}`
  user20.money += um * 1
  user20.exp += ue * 1
  user20.berlian += ud * 1
  user20.common += uc * 1
  user20.uncommon += uu * 1
  }
  } else if (create.toLowerCase() == 'legendary') {
  if (!angka) return reply(`Hanya support 1, 10, 100, 1000\nContoh penggunaan: *${prefix}open common 10*`)
  if (angka.toLowerCase() == '1') {
  if (user20.legendary < 1) return reply('Legendary Kamu Tidak Cukup')
  _lm = `${Math.floor(Math.random() * 450)}`
  _le = `${Math.floor(Math.random() * 550)}`
  _lp = `${Math.floor(Math.random() * 5)}`
  _lu = `${Math.floor(Math.random() * 7)}`
  _lc = `${Math.floor(Math.random() * 10)}`
  _ld = `${Math.floor(Math.random() * 5)}`
  lm = (_lm * 1)
  le = (_le * 1)
  lp = (_lp * 1) 
  lu = (_lu * 1) 
  lc = (_lc * 1)  
  ld = (_ld * 1) 
  reply(`Anda telah membuka *Legendary crate* dan mendapatkan: 
*💰 Money :* $${lm}
*✳️ Exp :* ${le} *exp*
*💎 Diamond :* ${ld} *Diamond*
*🧪 Potion :* ${lp} *potion*
*🎁 Common Crate :* ${lc} *Crate*
*📦 Uncommon Crate :* ${lu} Crate`)
  user20.legendary -= `${angka}`
  user20.money += um * 1
  user20.exp += ue * 1
  user20.berlian += ud * 1
  user20.common += uc * 1
  user20.uncommon += uu * 1
  } else if (angka.toLowerCase() == '10') {
  if (user20.legendary < 1) return reply('Legendary Kamu Tidak Cukup')
  _lm = `${Math.floor(Math.random() * 10000)}`
  _le = `${Math.floor(Math.random() * 15000)}`
  _lp = `${Math.floor(Math.random() * 30)}`
  _lu = `${Math.floor(Math.random() * 50)}`
  _lc = `${Math.floor(Math.random() * 75)}`
  _ld = `${Math.floor(Math.random() * 16)}`
  lm = (_lm * 1)
  le = (_le * 1)
  lp = (_lp * 1) 
  lu = (_lu * 1) 
  lc = (_lc * 1)  
  ld = (_ld * 1) 
  reply(`Anda telah membuka *Legendary crate* dan mendapatkan: 
*💰 Money :* $${lm}
*✳️ Exp :* ${le} *exp*
*💎 Diamond :* ${ld} *Diamond*
*🧪 Potion :* ${lp} *potion*
*🎁 Common Crate :* ${lc} *Crate*
*📦 Uncommon Crate :* ${lu} Crate`)
  user20.legendary -= `${angka}`
  user20.money += um * 1
  user20.exp += ue * 1
  user20.berlian += ud * 1
  user20.common += uc * 1
  user20.uncommon += uu * 1
  } else if (angka.toLowerCase() == '100') {
  if (user20.legendary < 1) return reply('Legendary Kamu Tidak Cukup')
  _lm = `${Math.floor(Math.random() * 100000)}`
  _le = `${Math.floor(Math.random() * 200000)}`
  _lp = `${Math.floor(Math.random() * 100)}`
  _lu = `${Math.floor(Math.random() * 250)}`
  _lc = `${Math.floor(Math.random() * 750)}`
  _ld = `${Math.floor(Math.random() * 50)}`
  lm = (_lm * 1)
  le = (_le * 1)
  lp = (_lp * 1) 
  lu = (_lu * 1) 
  lc = (_lc * 1)  
  ld = (_ld * 1) 
  reply(`Anda telah membuka *Legendary crate* dan mendapatkan: 
*💰 Money :* $${lm}
*✳️ Exp :* ${le} *exp*
*💎 Diamond :* ${ld} *Diamond*
*🧪 Potion :* ${lp} *potion*
*🎁 Common Crate :* ${lc} *Crate*
*📦 Uncommon Crate :* ${lu} Crate`)
  user20.legendary -= `${angka}`
  user20.money += um * 1
  user20.exp += ue * 1
  user20.berlian += ud * 1
  user20.common += uc * 1
  user20.uncommon += uu * 1
  } else if (angka.toLowerCase() == '1000') {
  if (user20.legendary < 1) return reply('Legendary Kamu Tidak Cukup')
  _lm = `${Math.floor(Math.random() * 2000000)}`
  _le = `${Math.floor(Math.random() * 5000000)}`
  _lp = `${Math.floor(Math.random() * 500)}`
  _lu = `${Math.floor(Math.random() * 1000)}`
  _lc = `${Math.floor(Math.random() * 2500)}`
  _ld = `${Math.floor(Math.random() * 250)}`
  lm = (_lm * 1)
  le = (_le * 1)
  lp = (_lp * 1) 
  lu = (_lu * 1) 
  lc = (_lc * 1)  
  ld = (_ld * 1) 
  reply(`Anda telah membuka *Legendary crate* dan mendapatkan: 
*💰 Money :* $${lm}
*✳️ Exp :* ${le} *exp*
*💎 Diamond :* ${ld} *Diamond*
*🧪 Potion :* ${lp} *potion*
*🎁 Common Crate :* ${lc} *Crate*
*📦 Uncommon Crate :* ${lu} Crate`)
  user20.legendary -= `${angka}`
  user20.money += um * 1
  user20.exp += ue * 1
  user20.berlian += ud * 1
  user20.common += uc * 1
  user20.uncommon += uu * 1
  }
  }
  break
  
  case 'transfer': case 'tf':
  if (!text) return m.reply(`*----- ⌈ TRANSFER ⌋ -----*\n\n📮 List Item :\n1. money\n2. sampah\n3. kayu\n4. makananpet\n5. diamond\n6. gold\n7. besi\n8. batu\n9. common\n10. uncommon\n11. mythic\n12. legendary\n\nPenggunaan : ${prefix + command} <item> <jumlah>\nExample : ${prefix+command} money 99999 @${global.nomerowner}`)
  let who3 = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
  var user21 = global.db.users[m.sender]
  var _user21 = global.db.users[who3]
  let [trans, tf, tff] = args
  if (trans.toLowerCase() == 'money') {
  if (!tf) return reply('Masukkan Jumlahnya')
  if (!tff) return reply('Tag salah satu, atau ketik Nomernya!!')
  if (user21.money < tf) return reply('Balance Kamu Tidak Cukup')
  var prev = user21[trans] * 1
  var _prev = user21[trans] * 1
  user21[trans] -= tf * 1
  _user21[trans] += tf * 1
  ryuu.sendTextWithMentions(m.chat, `Sukses Transfer ${trans} Sebesar ${tf} Kepada ${tff}`, m)
  
  } else if (trans.toLowerCase() == 'sampah') {
  if (!tf) return reply('Masukkan Jumlahnya')
  if (!tff) return reply('Tag salah satu, atau ketik Nomernya!!')
  if (user21.sampah < tf) return reply('Sampah Kamu Tidak Cukup')
  var prev = user21[trans] * 1
  var _prev = user21[trans] * 1
  user21[trans] -= tf * 1
  _user21[trans] += tf * 1
  ryuu.sendTextWithMentions(m.chat, `Sukses Transfer ${trans} Sebesar ${tf} Kepada ${tff}`, m)
  
  } else if (trans.toLowerCase() == 'kayu') {
  if (!tf) return reply('Masukkan Jumlahnya')
  if (!tff) return reply('Tag salah satu, atau ketik Nomernya!!')
  if (user21.kayu < tf) return reply('Balance Kamu Tidak Cukup')
  var prev = user21[trans] * 1
  var _prev = user21[trans] * 1
  user21[trans] -= tf * 1
  _user21[trans] += tf * 1
  ryuu.sendTextWithMentions(m.chat, `Sukses Transfer ${trans} Sebesar ${tf} Kepada ${tff}`, m)
  
  } else if (trans.toLowerCase() == 'makananpet') {
  if (!tf) return reply('Masukkan Jumlahnya')
  if (!tff) return reply('Tag salah satu, atau ketik Nomernya!!')
  if (user21.makananpet < tf) return reply('Balance Kamu Tidak Cukup')
  var prev = user21[trans] * 1
  var _prev = user21[trans] * 1
  user21[trans] -= tf * 1
  _user21[trans] += tf * 1
  ryuu.sendTextWithMentions(m.chat, `Sukses Transfer ${trans} Sebesar ${tf} Kepada ${tff}`, m)
  
  } else if (trans.toLowerCase() == 'diamond') {
  if (!tf) return reply('Masukkan Jumlahnya')
  if (!tff) return reply('Tag salah satu, atau ketik Nomernya!!')
  if (user21.berlian < tf) return reply('Balance Kamu Tidak Cukup')
  var prev = user21[trans] * 1
  var _prev = user21[trans] * 1
  user21[trans] -= tf * 1
  _user21[trans] += tf * 1
  ryuu.sendTextWithMentions(m.chat, `Sukses Transfer ${trans} Sebesar ${tf} Kepada ${tff}`, m)
  
  }  else if (trans.toLowerCase() == 'gold') {
  if (!tf) return reply('Masukkan Jumlahnya')
  if (!tff) return reply('Tag salah satu, atau ketik Nomernya!!')
  if (user21.gold < tf) return reply('Balance Kamu Tidak Cukup')
  var prev = user21[trans] * 1
  var _prev = user21[trans] * 1
  user21[trans] -= tf * 1
  _user21[trans] += tf * 1
  ryuu.sendTextWithMentions(m.chat, `Sukses Transfer ${trans} Sebesar ${tf} Kepada ${tff}`, m)
  
  }  else if (trans.toLowerCase() == 'besi') {
  if (!tf) return reply('Masukkan Jumlahnya')
  if (!tff) return reply('Tag salah satu, atau ketik Nomernya!!')
  if (user21.besi < tf) return reply('Balance Kamu Tidak Cukup')
  var prev = user21[trans] * 1
  var _prev = user21[trans] * 1
  user21[trans] -= tf * 1
  _user21[trans] += tf * 1
  ryuu.sendTextWithMentions(m.chat, `Sukses Transfer ${trans} Sebesar ${tf} Kepada ${tff}`, m)
  
  }  else if (trans.toLowerCase() == 'batu') {
  if (!tf) return reply('Masukkan Jumlahnya')
  if (!tff) return reply('Tag salah satu, atau ketik Nomernya!!')
  if (user21.batu < tf) return reply('Balance Kamu Tidak Cukup')
  var prev = user21[trans] * 1
  var _prev = user21[trans] * 1
  user21[trans] -= tf * 1
  _user21[trans] += tf * 1
  ryuu.sendTextWithMentions(m.chat, `Sukses Transfer ${trans} Sebesar ${tf} Kepada ${tff}`, m)
  
  }  else if (trans.toLowerCase() == 'common') {
  if (!tf) return reply('Masukkan Jumlahnya')
  if (!tff) return reply('Tag salah satu, atau ketik Nomernya!!')
  if (user21.common < tf) return reply('Balance Kamu Tidak Cukup')
  var prev = user21[trans] * 1
  var _prev = user21[trans] * 1
  user21[trans] -= tf * 1
  _user21[trans] += tf * 1
  ryuu.sendTextWithMentions(m.chat, `Sukses Transfer ${trans} Sebesar ${tf} Kepada ${tff}`, m)
  
  }  else if (trans.toLowerCase() == 'uncommon') {
  if (!tf) return reply('Masukkan Jumlahnya')
  if (!tff) return reply('Tag salah satu, atau ketik Nomernya!!')
  if (user21.uncommon < tf) return reply('Balance Kamu Tidak Cukup')
  var prev = user21[trans] * 1
  var _prev = user21[trans] * 1
  user21[trans] -= tf * 1
  _user21[trans] += tf * 1
  ryuu.sendTextWithMentions(m.chat, `Sukses Transfer ${trans} Sebesar ${tf} Kepada ${tff}`, m)
  
  }  else if (trans.toLowerCase() == 'mythic') {
  if (!tf) return reply('Masukkan Jumlahnya')
  if (!tff) return reply('Tag salah satu, atau ketik Nomernya!!')
  if (user21.mythic < tf) return reply('Balance Kamu Tidak Cukup')
  var prev = user21[trans] * 1
  var _prev = user21[trans] * 1
  user21[trans] -= tf * 1
  _user21[trans] += tf * 1
  ryuu.sendTextWithMentions(m.chat, `Sukses Transfer ${trans} Sebesar ${tf} Kepada ${tff}`, m)
  
  }  else if (trans.toLowerCase() == 'legendary') {
  if (!tf) return reply('Masukkan Jumlahnya')
  if (!tff) return reply('Tag salah satu, atau ketik Nomernya!!')
  if (user21.legendary < tf) return reply('Balance Kamu Tidak Cukup')
  var prev = user21[trans] * 1
  var _prev = user21[trans] * 1
  user21[trans] -= tf * 1
  _user21[trans] += tf * 1
  ryuu.sendTextWithMentions(m.chat, `Sukses Transfer ${trans} Sebesar ${tf} Kepada ${tff}`, m)  
  }
  break

  case 'awoawo': case 'benedict': case 'dbfly': case 'dino_kuning': case 'doge': case 'gojosatoru': case 'hope_boy': case 'jisoo': case 'kr_robot': case 'kucing': case 'lonte': case 'manusia_lidi': case 'menjamet': case 'meow': case 'nicholas': case 'patrick': case 'popoci': case 'sponsbob': case 'kawan_sponsbob': case 'tyni':
  telestic = await telesticker(command)
  result = telestic[Math.floor(Math.random() * telestic.length)]
  ryuu.sendImageAsSticker(m.chat, result, m, { packname: global.packname, author: global.author })
  break
  case 'cerpen': case 'ceritapendek':
  reply(mess.wait)
  var data = await fetchJson('https://leyscoders-api.herokuapp.com/api/cerpen?apikey=MIMINGANZ')
  var cerpen = `🙋‍♂️ Request By : ${pushname}\n\n*🎑 Judul :* ${data.result.title}\n*👦 Pengarang :* ${data.result.pengarang}\n*🔖 Kategori :* ${data.result.kategori}\n${readmore}*📖 Story :*\n${data.result.story}`
  ryuu.sendText(m.chat, cerpen, m)
  break
  case 'cersex': case 'cersek': case 'ceritadewasa':
  reply(mess.wait)
  var data = await fetchJson('https://leyscoders-api.herokuapp.com/api/cersex?apikey=MIMINGANZ')
  var cersex = `🙋‍♂️ Request By : ${pushname}\n\n❗ Warning : Dosa Ditanggung Oleh Yang Menggunakan Command Sesudah Membaca Silahkan Mandi Wajib.\n${readmore}\n*📖 Story :*\n${data.result}`
  ryuu.sendText(m.chat, cersex, m)
  break

  case 'menu': case 'help':
  let userm = global.db.users[m.sender]
  let txtmenu = `*${ucapanWaktu1} ${pushname}*\n\n*📰 Limit :* ${isCreator? 'Unlimited Limit' : `${userm.limit}/${global.limitCount}`}\n*🔌 Runtime :* ${runtime(process.uptime())}\n*🏆 Rank :* ${role}\n*✳️ Exp :* ${userm.exp}\n*🎚️ Level :* ${userm.level}\n\n*☃️ For Your Info :* ${global.namabot} Adalah Hasil Recode Ryuuka Team Menggunakan Base Dari Dika Ardnt (Hisoka Morou)\n\n*🥅 Tips :* ${tips}\n`
  imgmenu = global.thumb
  ryuu.send5ButImg(m.chat, txtmenu, `© ${global.namaowner}`, imgmenu, btnsmenu2)
  break
  }
  
  } catch (err) {
  m.reply(util.format(err))
  }
  }
  let file = require.resolve(__filename)
  fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
  })

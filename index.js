require('./settings')
require('./hiruko')
const { default: ryuuConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState(`./${global.sessionName}.json`)
const pino = require('pino')
const fs = require('fs')
const chalk = require('chalk')
const cfonts  = require('cfonts')
const { color, hirukoLog } = require('./lib/color')
const fetch = require('node-fetch')
const FileType = require('file-type')
const { Boom } = require('@hapi/boom')
const PhoneNumber = require('awesome-phonenumber')
const axios = require('axios')
const { uploadImages } = require('./lib/uploadimage')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, getBuffer, generateMessageTag } = require('./lib/myfunc')
const { welkam, goodbye } = require ('./ryudata/welkam.js')
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

const store = makeInMemoryStore({ logger: pino().child({ level: 'fatal', stream: 'store' }) })
   
    async function starthiruko() {
    cfonts.say('HIRUKO', {
	font: 'block',
    gradient: ['red','magenta'],
    align: 'center',
	})
	cfonts.say(`Bot WhatsApp By Ryuuka Team\nSubscribe Ryuuka Botz`, {
	font: 'console',
	align: 'center',
	gradient: ['red', 'magenta']
	})
    let { version, isLatest } = await fetchLatestBaileysVersion()
    const ryuu = ryuuConnect({
    logger: pino({ level: 'silent' }),
    printQRInTerminal: true,
    browser: ['Hiruko Kagetane','Safari','1.0.0'],
    auth: state,
    version
    })
    
    store.bind(ryuu.ev)

    ryuu.ev.on('messages.upsert', async chatUpdate => {
    //console.log(JSON.stringify(chatUpdate, undefined, 2))
    try {
    mek = chatUpdate.messages[0]
    if (!mek.message) return
    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
    if (mek.key && mek.key.remoteJid === 'status@broadcast') return
    if (!ryuu.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
    if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
    m = smsg(ryuu, mek, store)
    require("./hiruko")(ryuu, m, chatUpdate, store)
    } catch (err) {
    console.log(err)
    }
    })
    
    /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
     ryuu.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
     let message = await prepareWAMessageMedia({ image: img }, { upload: ryuu.waUploadToServer })
     var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
     hydratedTemplate: {
     imageMessage: message.imageMessage,
     "hydratedContentText": text,
     "hydratedFooterText": footer,
     "hydratedButtons": but
     }
     }
     }), options)
     ryuu.relayMessage(jid, template.message, { messageId: template.key.id })
     }

    // Group Update
    ryuu.ev.on('groups.update', async pea => {
    //console.log(pea)
    // Get Profile Picture Group
    try {
    ppgc = await ryuu.profilePictureUrl(pea[0].id, 'image')
    } catch {
    ppgc = 'https://shortlink.ryuuarridho.my.id/rg1oT'
    }
    let wm_fatih = { url : ppgc }
    if (pea[0].announce == true) {
    ryuu.send5ButImg(pea[0].id, `*Group Update 🚀*\n\nGroup telah ditutup oleh admin, Sekarang hanya admin yang dapat mengirim pesan !`, global.namaowner, wm_fatih, [])
    } else if(pea[0].announce == false) {
    ryuu.send5ButImg(pea[0].id, `*Group Update 🚀*\n\nGroup telah dibuka oleh admin, Sekarang peserta dapat mengirim pesan !`, global.namaowner, wm_fatih, [])
    } else if (pea[0].restrict == true) {
    ryuu.send5ButImg(pea[0].id, `*Group Update 🚀*\n\nInfo group telah dibatasi, Sekarang hanya admin yang dapat mengedit info group !`, global.namaowner, wm_fatih, [])
    } else if (pea[0].restrict == false) {
    ryuu.send5ButImg(pea[0].id, `*Group Update 🚀*\n\nInfo group telah dibuka, Sekarang peserta dapat mengedit info group !`, global.namaowner, wm_fatih, [])
    } else {
    ryuu.send5ButImg(pea[0].id, `*Group Update 🚀*\n\nGroup Subject telah diganti menjadi *${pea[0].subject}*`, global.namaowner, wm_fatih, [])
    }
    })
    
    
    ryuu.ev.on('group-participants.update', async (anu) => {
    console.log(anu)
    try {
    let metadata = await ryuu.groupMetadata(anu.id)
    let participants = anu.participants
    for (let num of participants) {
    
    // Get Pp Group And User
    try {
    ppuser = await ryuu.profilePictureUrl(num, 'image')
    } catch {
    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
    }
    try {
    ppgroup = await ryuu.profilePictureUrl(anu.id, 'image')
    } catch {
    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
    }
    
    if (anu.action == 'add') {
    tekswell = `Hai Kak @${num.split('@')[0]} 👋\nSelamat Datang Di Grup ${metadata.subject}\n\n`
    let btnwel = [{buttonId: 'Ryuuka', buttonText: {displayText: 'Welcome Kak 👋'}, type: 1},]
    ryuu.sendMessage(anu.id, { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption: tekswell+welkam(), footer: `Whatsapp 📍 ${global.namaowner}`, buttons: btnwel})
    } else if (anu.action == 'remove') {
    teksbye = `Sayonaraa @${num.split("@")[0]} 👋\nKeluar Dari Grup ${metadata.subject}\n\n`
    let btnbye = [{buttonId: 'Ryuuka', buttonText: {displayText: 'Goodbye Kak 👋'}, type: 1},]
    ryuu.sendMessage(anu.id, { image: { url: ppuser }, contextInfo: { mentionedJid: [num] }, caption: teksbye+goodbye(), footer: `Whatsapp 📍 ${global.namaowner}`, buttons: btnbye})
    }
    }
    } catch (err) {
    console.log(err)
    }
    })
    
    //===> SETTINGS
    ryuu.public = true

    ryuu.serializeM = (m) => smsg(ryuu, m, store)

    //CONNECTION ACTIVE
    ryuu.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect } = update
    if (connection === 'close') {
    lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut ? starthiruko() : console.log('Putus Kek Hubungan Lu 🤣')
    }
    console.log('Connecting....', update)
    })

    ryuu.ev.on('creds.update', saveState)
    
    
    //SERIAL
    ryuu.decodeJid = (jid) => {
    if (!jid) return jid
    if (/:\d+@/gi.test(jid)) {
    let decode = jidDecode(jid) || {}
    return decode.user && decode.server && decode.user + '@' + decode.server || jid
    } else return jid
    }
    ryuu.ev.on('contacts.update', update => {
    for (let contact of update) {
    let id = ryuu.decodeJid(contact.id)
    if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
    }
    })
    
    //Get Name User
    ryuu.getName = async (jid, withoutContact  = false) => {
    id = await ryuu.decodeJid(jid)
    withoutContact = ryuu.withoutContact || withoutContact 
    let v
    if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
    v = store.contacts[id] || {}
    if (!(v.name || v.subject)) v = await ryuu.groupMetadata(id) || {}
    resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
    })
    else v = id === '0@s.whatsapp.net' ? {
    id,
    name: 'WhatsApp'
    } : id === ryuu.decodeJid(ryuu.user.id) ?
    ryuu.user :
    (store.contacts[id] || {})
    return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    //Send Contacts More Than 1
    ryuu.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
    list.push({
	displayName: await ryuu.getName(i + '@s.whatsapp.net'),
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await ryuu.getName(i + '@s.whatsapp.net')}\nFN:${await ryuu.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.ADR:;;Indonesia;;;;\nitem2.X-ABLabel:Region\nEND:VCARD`
    })
	}
	ryuu.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }
	
	ryuu.setStatus = (status) => {
     ryuu.query({
     tag: 'iq',
     attrs: {
     to: '@s.whatsapp.net',
     type: 'set',
     xmlns: 'status',
     },
     content: [{
     tag: 'status',
     attrs: {},
     content: Buffer.from(status, 'utf-8')
     }]
     })
     return status
     }

     /** Send Button Text No Media
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    ryuu.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
    let buttonMessage = {
    text,
    footer,
    buttons,
    headerType: 2,
    ...options
    }
    ryuu.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /** Send List Messaage
      *
      *@param {*} jid
      *@param {*} text
      *@param {*} footer
      *@param {*} title
      *@param {*} butText
      *@param [*] sections
      *@param {*} quoted
      */
        ryuu.sendList = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
        let sections = sects
        var listMes = {
        text: text,
        footer: footer,
        title: title,
        buttonText: butText,
        sections
        }
        ryuu.sendMessage(jid, listMes, { quoted: quoted })
        }

    /** Send Button 5 Video
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} Video
     * @param [*] button
     * @param {*} options
     * @returns
     */
     ryuu.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
     let message = await prepareWAMessageMedia({ video: vid }, { upload: ryuu.waUploadToServer })
     var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
     templateMessage: {
     hydratedTemplate: {
     videoMessage: message.videoMessage,
     "hydratedContentText": text,
     "hydratedFooterText": footer,
     "hydratedButtons": but
     }
     }
     }), options)
     ryuu.relayMessage(jid, template.message, { messageId: template.key.id })
     }

    /** Send Button 5 Gif
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} Gif
     * @param [*] button
     * @param {*} options
     * @returns
     */
     ryuu.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], options = {}) =>{
     let message = await prepareWAMessageMedia({ video: gif, gifPlayback: true }, { upload: ryuu.waUploadToServer })
     var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
     templateMessage: {
     hydratedTemplate: {
     videoMessage: message.videoMessage,
     "hydratedContentText": text,
     "hydratedFooterText": footer,
     "hydratedButtons": but
     }
     }
     }), options)
     ryuu.relayMessage(jid, template.message, { messageId: template.key.id })
     }
    
    /** Send List Button
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} butText
     * @param {*} buttons
     * @param {*} quoted
     * @param {*} options
     */
     ryuu.sendList = async (jid, text = '', footer = '', butText = '', buttons = [], quoted = '', options = {}) => {
     let listMessage = {
     text,
     footer,
     butText,
     buttons,
     headerType: 2,
     ...options
     }
     ryuu.sendMessage(jid, listMessage, {quoted, ...options})
     }
     
    /** Send Text No Media
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ryuu.sendText = (jid, text, quoted = '', options) => ryuu.sendMessage(jid, { text: text, ...options }, { quoted })
    
    /** Send Link With Preview
     *
     * @param {*} jid
     * @param {*} link
     * @param {*} text
     * @param {*} quoted
     * @param {*} options
     */
    ryuu.sendLinkPreview = (jid, link, teks, quoted = '', options) => ryuu.sendMessage(jid, { url: link, text: teks, ...options }, { quoted })
    
    /** Send Image No Button
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ryuu.sendImage = async (jid, path, caption = '', quoted = '', options) => {
    let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    return await ryuu.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /** Send Video No Button
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ryuu.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
    let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    return await ryuu.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    ryuu.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
    let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    return await ryuu.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ryuu.sendTextWithMentions = async (jid, text, quoted, options = {}) => ryuu.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ryuu.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author)) {
    buffer = await writeExifImg(buff, options)
    } else {
    buffer = await imageToWebp(buff)
    }

    await ryuu.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
    return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ryuu.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await getBuffer(path) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author)) {
    buffer = await writeExifVid(buff, options)
    } else {
    buffer = await videoToWebp(buff)
    }

    await ryuu.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
    return buffer
    }
	
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    ryuu.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
    let quoted = message.msg ? message.msg : message
    let mime = (message.msg || message).mimetype || ''
    let messageType = mime.split('/')[0].replace('application', 'document') ? mime.split('/')[0].replace('application', 'document') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(quoted, messageType)
    let buffer = Buffer.from([])
    for await(const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk])
    }
	let type = await FileType.fromBuffer(buffer)
    trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
    // save to file
    await fs.writeFileSync(trueFileName, buffer)
    return trueFileName
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    ryuu.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
    let types = await ryuu.getFile(path, true)
    let { mime, ext, res, data, filename } = types
    if (res && res.status !== 200 || file.length <= 65536) {
    try { throw { json: JSON.parse(file.toString()) } }
    catch (e) { if (e.json) throw e.json }
    }
    let type = '', mimetype = mime, pathFile = filename
    if (options.asDocument) type = 'document'
    if (options.asSticker || /webp/.test(mime)) {
    let { writeExif } = require('./lib/exif')
    let media = { mimetype: mime, data }
    pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
    await fs.promises.unlink(filename)
    type = 'sticker'
    mimetype = 'image/webp'
    }
    else if (/image/.test(mime)) type = 'image'
    else if (/video/.test(mime)) type = 'video'
    else if (/audio/.test(mime)) type = 'audio'
    else type = 'document'
    await ryuu.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
    return fs.promises.unlink(pathFile)
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
     ryuu.copyNForward = async (jid, message, forceForward = false, options = {}) => {
     let vtype
     if (options.readViewOnce) {
	 message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
	 vtype = Object.keys(message.message.viewOnceMessage.message)[0]
	 delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
	 delete message.message.viewOnceMessage.message[vtype].viewOnce
	 message.message = {
	 ...message.message.viewOnceMessage.message
	 }
	 }

   let mtype = Object.keys(message.message)[0]
   let content = await generateForwardMessageContent(message, forceForward)
   let ctype = Object.keys(content)[0]
   let context = {}
   if (mtype != "conversation") context = message.message[mtype].contextInfo
   content[ctype].contextInfo = {
   ...context,
   ...content[ctype].contextInfo
   }
   const waMessage = await generateWAMessageFromContent(jid, content, options ? {
   ...content[ctype],
   ...options,
   ...(options.contextInfo ? {
   contextInfo: {
   ...content[ctype].contextInfo,
   ...options.contextInfo
   }
   } : {})
   } : {})
   await ryuu.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
   return waMessage
   }

   ryuu.cMod = (jid, copy, text = '', sender = ryuu.user.id, options = {}) => {
   //let copy = message.toJSON()
   let mtype = Object.keys(copy.message)[0]
   let isEphemeral = mtype === 'ephemeralMessage'
   if (isEphemeral) {
   mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
   }
   let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
   let content = msg[mtype]
   if (typeof content === 'string') msg[mtype] = text || content
   else if (content.caption) content.caption = text || content.caption
   else if (content.text) content.text = text || content.text
   if (typeof content !== 'string') msg[mtype] = {
   ...content,
   ...options
   }
   if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
   else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
   if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
   else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
   copy.key.remoteJid = jid
   copy.key.fromMe = sender === ryuu.user.id

   return proto.WebMessageInfo.fromObject(copy)
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    ryuu.copyNForward = async (jid, message, forceForward = false, options = {}) => {
    let vtype
	if (options.readViewOnce) {
	message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
	vtype = Object.keys(message.message.viewOnceMessage.message)[0]
	delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
	delete message.message.viewOnceMessage.message[vtype].viewOnce
	message.message = {
	...message.message.viewOnceMessage.message
	}
	}

    let mtype = Object.keys(message.message)[0]
    let content = await generateForwardMessageContent(message, forceForward)
    let ctype = Object.keys(content)[0]
	let context = {}
    if (mtype != "conversation") context = message.message[mtype].contextInfo
    content[ctype].contextInfo = {
    ...context,
    ...content[ctype].contextInfo
    }
    const waMessage = await generateWAMessageFromContent(jid, content, options ? {
    ...content[ctype],
    ...options,
    ...(options.contextInfo ? {
    contextInfo: {
    ...content[ctype].contextInfo,
    ...options.contextInfo
    }
    } : {})
    } : {})
    await ryuu.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
    return waMessage
    }

    /** Get File
     * 
     * @param {*} path 
     * @returns 
     */
    ryuu.getFile = async (path) => {
    let res
	let data = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (res = await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : typeof path === 'string' ? path : Buffer.alloc(0)
	if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
	let type = await FileType.fromBuffer(data) || {
	mime: 'application/octet-stream',
	ext: '.bin'
	}

    return {
	res,
	...type,
    data
    }
    }

    return ryuu
    }

    starthiruko()

    let file = require.resolve(__filename)
    fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
    })

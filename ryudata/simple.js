const fs = require('fs')
const chalk = require('chalk')

//SILAHKAN EDIT SESUKA KALIAN

//SIMPLE MENU
exports.simple = (pushname, ucapanWaktu, namabot, prefix) => {
	return`*Halo Kak ${pushname} đ*
*${ucapanWaktu}*

Berikut List Menu Yang Tersedia Di *${global.namabot}*

đ ${prefix}allmenu
đĻ ${prefix}ownermenu
đĨ ${prefix}groupmenu
đĨ ${prefix}downloadmenu
đ ${prefix}searchmenu
âī¸ ${prefix}nulismenu
đ ${prefix}databasemenu
đ ${prefix}telestickermenu
đī¸ ${prefix}rpgmenu
âšī¸ ${prefix}infomenu
đ¯ââī¸ ${prefix}asupanmenu
đ§ ${prefix}cecanmenu
đī¸ ${prefix}voicemenu
đ¸ ${prefix}ephotomenu
đŧī¸ ${prefix}photooxymenu
đŽ ${prefix}funmenu
đ° ${prefix}gamemenu
đĄ ${prefix}randommenu
âŠī¸ ${prefix}animemenu
đ ${prefix}nsfwmenu
đ¨ ${prefix}makermenu
đ¨âđ¨ ${prefix}textpromenu
â ${prefix}othermenu

Gunakan Dengan Bijak đ
`
}

//LIST MENU
exports.list = (pushname, ucapanWaktu, namabot) => {
	return`*Halo Kak ${pushname} đ*
*${ucapanWaktu}*

*Berikut List Menu Yang Tersedia Di ${global.namabot}*

*Jika Menemukan Bug Harap Dimaklumi Dan Laporkan Kepada*
*Owner Atau Creator Agar Segera Di Fix đ*

*Terima Kasih đ*
`
}

//MENU OWNER
exports.sowner = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đĻ OWNER MENU*
â¤ŋâī¸ ${prefix}banned
â¤ŋâī¸ ${prefix}unbanned
â¤ŋâī¸ ${prefix}banchat
â¤ŋâī¸ ${prefix}unbanchat
â¤ŋâī¸ ${prefix}setmenu
â¤ŋâī¸ ${prefix}join [link]
â¤ŋâī¸ ${prefix}leave
â¤ŋâī¸ ${prefix}self
â¤ŋâī¸ ${prefix}public
â¤ŋâī¸ ${prefix}setppbot
â¤ŋâī¸ ${prefix}block @user
â¤ŋâī¸ ${prefix}unblock @user
â¤ŋâī¸ ${prefix}bc
â¤ŋâī¸ ${prefix}bcgc
`
}

//MENU GRUP
exports.sgrup = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đĨ GROUP MENU*
â¤ŋâī¸ ${prefix}antilink
â¤ŋâī¸ ${prefix}antiwame
â¤ŋâī¸ ${prefix}antivirtex
â¤ŋâī¸ ${prefix}nsfw
â¤ŋâī¸ ${prefix}event
â¤ŋâī¸ ${prefix}afk [alasan]
â¤ŋâī¸ ${prefix}tagall
â¤ŋâī¸ ${prefix}hidetag
â¤ŋâī¸ ${prefix}linkgroup
â¤ŋâī¸ ${prefix}revoke
â¤ŋâī¸ ${prefix}ephemeral [option]
â¤ŋâī¸ ${prefix}setppgc
â¤ŋâī¸ ${prefix}setname [text]
â¤ŋâī¸ ${prefix}group [option]
â¤ŋâī¸ ${prefix}add @user
â¤ŋâī¸ ${prefix}kick @user
â¤ŋâī¸ ${prefix}promote @user
â¤ŋâī¸ ${prefix}demote @user
`
}

//MENU DOWNLOAD
exports.sdown = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đĨ DOWNLOAD MENU*
â¤ŋâī¸ ${prefix}tiktok [url]
â¤ŋâī¸ ${prefix}tiktokwm [url]
â¤ŋâī¸ ${prefix}tiktoknowm [url]
â¤ŋâī¸ ${prefix}tiktokaudio [url]
â¤ŋâī¸ ${prefix}instagram [url]
â¤ŋâī¸ ${prefix}twitter [url]
â¤ŋâī¸ ${prefix}facebook [url]
â¤ŋâī¸ ${prefix}ytmp4 [url]
â¤ŋâī¸ ${prefix}ytmp3 [url]
â¤ŋâī¸ ${prefix}play [judul]
â¤ŋâī¸ ${prefix}ytsearch [judul]
â¤ŋâī¸ ${prefix}gitclone
`
}

//MENU SEARCH
exports.ssearch = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đ SEARCH MENU*
â¤ŋâī¸ ${prefix}pinterest [query]
â¤ŋâī¸ ${prefix}pantun
â¤ŋâī¸ ${prefix}google [query]
â¤ŋâī¸ ${prefix}gimage [query]
â¤ŋâī¸ ${prefix}kbbi [query]
â¤ŋâī¸ ${prefix}darkjokes
â¤ŋâī¸ ${prefix}igstalk [username]
â¤ŋâī¸ ${prefix}ghstalk [username]
â¤ŋâī¸ ${prefix}cerpen
â¤ŋâī¸ ${prefix}cersex
`
}

exports.srpg = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đī¸ RPG MENU*
â¤ŋâī¸ ${prefix}profile
â¤ŋâī¸ ${prefix}joinrpg
â¤ŋâī¸ ${prefix}leaderboard
â¤ŋâī¸ ${prefix}daily
â¤ŋâī¸ ${prefix}monthly
â¤ŋâī¸ ${prefix}gajian
â¤ŋâī¸ ${prefix}judi
â¤ŋâī¸ ${prefix}berburu
â¤ŋâī¸ ${prefix}nebang
â¤ŋâī¸ ${prefix}mancing
â¤ŋâī¸ ${prefix}mining
â¤ŋâī¸ ${prefix}adventure
â¤ŋâī¸ ${prefix}transfer
â¤ŋâī¸ ${prefix}kill
â¤ŋâī¸ ${prefix}slot
â¤ŋâī¸ ${prefix}buy
â¤ŋâī¸ ${prefix}sell
â¤ŋâī¸ ${prefix}heal
â¤ŋâī¸ ${prefix}bansos
`
}

//MENU DATABASE
exports.sdatabase = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đ DATABASE MENU*
â¤ŋâī¸ ${prefix}absen
â¤ŋâī¸ ${prefix}hadir
â¤ŋâī¸ ${prefix}tidakhadir
â¤ŋâī¸ ${prefix}cekabsen
â¤ŋâī¸ ${prefix}hapusabsen
â¤ŋâī¸ ${prefix}setcmd [reply sticker/pesan]
â¤ŋâī¸ ${prefix}delcmd [reply sticker/pesan]
â¤ŋâī¸ ${prefix}listcmd
â¤ŋâī¸ ${prefix}lockcmd
â¤ŋâī¸ ${prefix}addmsg
â¤ŋâī¸ ${prefix}getmsg
â¤ŋâī¸ ${prefix}listmsg
â¤ŋâī¸ ${prefix}delmsg
`
}

//MENU INFORMASI
exports.stele = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đ TELEGRAM STICKER*
â¤ŋâī¸ ${prefix}awoawo
â¤ŋâī¸ ${prefix}benedict
â¤ŋâī¸ ${prefix}chat
â¤ŋâī¸ ${prefix}dbfly
â¤ŋâī¸ ${prefix}dino_kuning
â¤ŋâī¸ ${prefix}doge
â¤ŋâī¸ ${prefix}gojosatoru
â¤ŋâī¸ ${prefix}hope_boy
â¤ŋâī¸ ${prefix}jisoo
â¤ŋâī¸ ${prefix}kr_robot
â¤ŋâī¸ ${prefix}kucing
â¤ŋâī¸ ${prefix}lonte
â¤ŋâī¸ ${prefix}manusia_lidi
â¤ŋâī¸ ${prefix}menjamet
â¤ŋâī¸ ${prefix}meow
â¤ŋâī¸ ${prefix}nicholas
â¤ŋâī¸ ${prefix}patrick
â¤ŋâī¸ ${prefix}popoci
â¤ŋâī¸ ${prefix}sponsbob
â¤ŋâī¸ ${prefix}kawan_sponsbob
â¤ŋâī¸ ${prefix}tyni
`
}

//MENU INFORMASI
exports.sinfo = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*âšī¸ī¸ INFORMASI MENU*
â¤ŋâī¸ ${prefix}infogempa
â¤ŋâī¸ ${prefix}covid
â¤ŋâī¸ ${prefix}faktaunik
â¤ŋâī¸ ${prefix}ssweb
`
}

//MENU NULIS
exports.snulis = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*âī¸ NULIS MENU*
â¤ŋâī¸ ${prefix}nulisbiasa
â¤ŋâī¸ ${prefix}nuliskanan
â¤ŋâī¸ ${prefix}nuliskiri
â¤ŋâī¸ ${prefix}foliokanan
â¤ŋâī¸ ${prefix}foliokiri
`
}

//MENU ASUPAN
exports.sasupan = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đ¯ââī¸ ASUPAN MENU*
â¤ŋâī¸ ${prefix}hijaber
â¤ŋâī¸ ${prefix}cecan
â¤ŋâī¸ ${prefix}bocil
â¤ŋâī¸ ${prefix}ukhty
â¤ŋâī¸ ${prefix}gheayubi
â¤ŋâī¸ ${prefix}rikagusriani
â¤ŋâī¸ ${prefix}santuy
`
}

//MENU CECAN
exports.scecan = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đ§ CECAN MENU*
â¤ŋâī¸ ${prefix}china
â¤ŋâī¸ ${prefix}vietnam
â¤ŋâī¸ ${prefix}thailand
â¤ŋâī¸ ${prefix}indonesia
â¤ŋâī¸ ${prefix}korea
â¤ŋâī¸ ${prefix}japan
â¤ŋâī¸ ${prefix}malaysia
`
}

//MENU VOICE
exports.svoice = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đī¸ VOICE CHANGER*
â¤ŋâī¸ ${prefix}bass
â¤ŋâī¸ ${prefix}blown
â¤ŋâī¸ ${prefix}deep
â¤ŋâī¸ ${prefix}earrape
â¤ŋâī¸ ${prefix}fast
â¤ŋâī¸ ${prefix}fat
â¤ŋâī¸ ${prefix}nightcore
â¤ŋâī¸ ${prefix}reverse
â¤ŋâī¸ ${prefix}robot
â¤ŋâī¸ ${prefix}slow
â¤ŋâī¸ ${prefix}tupai
`
}

//MENU EPHOTO
exports.spoto = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đ¸ EPHOTO MENU*
â¤ŋâī¸ ${prefix}3dnature
â¤ŋâī¸ ${prefix}bevel
â¤ŋâī¸ ${prefix}burnpaper
â¤ŋâī¸ ${prefix}quotesgrass
â¤ŋâī¸ ${prefix}stars
â¤ŋâī¸ ${prefix}flaming
â¤ŋâī¸ ${prefix}romance
â¤ŋâī¸ ${prefix}gerbang
â¤ŋâī¸ ${prefix}fur
â¤ŋâī¸ ${prefix}funnycup
`
}

//MENU PHOTOOXY
exports.sphoto = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đŧī¸ PHOTOOXY MENU*
â¤ŋâī¸ ${prefix}3d-underwater  
â¤ŋâī¸ ${prefix}3dtext-pig  
â¤ŋâī¸ ${prefix}3dvalentine-cards  
â¤ŋâī¸ ${prefix}anonymous-neon  
â¤ŋâī¸ ${prefix}advanced-glow  
â¤ŋâī¸ ${prefix}art-shader  
â¤ŋâī¸ ${prefix}angels-wings 
`
}

//CASE FUN MENU
exports.sfun = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đŽ FUN MENU*
â¤ŋâī¸ ${prefix}truth
â¤ŋâī¸ ${prefix}dare
â¤ŋâī¸ ${prefix}bagaimanakah
â¤ŋâī¸ ${prefix}kapankah
â¤ŋâī¸ ${prefix}dimanakah
â¤ŋâī¸ ${prefix}suit [âī¸/â/â]
â¤ŋâī¸ ${prefix}aduayam [đ¤/đ/đĨ/đŖ/đĻ]
â¤ŋâī¸ ${prefix}suitpvp [tag user]
â¤ŋâī¸ ${prefix}ttt
â¤ŋâī¸ ${prefix}delttt
`
}

//GAME MENU
exports.sgame = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đ° GAME MENU*
â¤ŋâī¸ ${prefix}tebak lagu
â¤ŋâī¸ ${prefix}tebak gambar
â¤ŋâī¸ ${prefix}tebak kata
â¤ŋâī¸ ${prefix}tebak kalimat
â¤ŋâī¸ ${prefix}tebak lirik
â¤ŋâī¸ ${prefix}tebak lontong
â¤ŋâī¸ ${prefix}kuismath
`
}

//GAME MENU
exports.srandom = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đĄ RANDOM MENU*
â¤ŋâī¸ ${prefix}darkjokes
â¤ŋâī¸ ${prefix}meme
â¤ŋâī¸ ${prefix}quotes
â¤ŋâī¸ ${prefix}quotes2
â¤ŋâī¸ ${prefix}katabijak
â¤ŋâī¸ ${prefix}katailham
â¤ŋâī¸ ${prefix}fiersabersari
â¤ŋâī¸ ${prefix}katasenja
â¤ŋâī¸ ${prefix}wallgaming
â¤ŋâī¸ ${prefix}wallpentol
â¤ŋâī¸ ${prefix}wallcogan
â¤ŋâī¸ ${prefix}wallcecan
â¤ŋâī¸ ${prefix}wallestetik
â¤ŋâī¸ ${prefix}wallislami
â¤ŋâī¸ ${prefix}wallbkackpink
â¤ŋâī¸ ${prefix}wallpaperanime
`
}

//MENU ANIME
exports.sanime = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*âŠī¸ ANIME MENU*
â¤ŋâī¸ ${prefix}quotesanime
â¤ŋâī¸ ${prefix}waifu
â¤ŋâī¸ ${prefix}loli
â¤ŋâī¸ ${prefix}cry
â¤ŋâī¸ ${prefix}kill
â¤ŋâī¸ ${prefix}hug
â¤ŋâī¸ ${prefix}pat
â¤ŋâī¸ ${prefix}lick
â¤ŋâī¸ ${prefix}kiss
â¤ŋâī¸ ${prefix}bite
â¤ŋâī¸ ${prefix}yeet
â¤ŋâī¸ ${prefix}neko
â¤ŋâī¸ ${prefix}bully
â¤ŋâī¸ ${prefix}bonk
â¤ŋâī¸ ${prefix}wink
â¤ŋâī¸ ${prefix}poke
â¤ŋâī¸ ${prefix}nom
â¤ŋâī¸ ${prefix}slap
â¤ŋâī¸ ${prefix}smile
â¤ŋâī¸ ${prefix}wave
â¤ŋâī¸ ${prefix}awoo
â¤ŋâī¸ ${prefix}blush
â¤ŋâī¸ ${prefix}smug
â¤ŋâī¸ ${prefix}glomp
â¤ŋâī¸ ${prefix}happy
â¤ŋâī¸ ${prefix}dance
â¤ŋâī¸ ${prefix}cringe
â¤ŋâī¸ ${prefix}cuddle
â¤ŋâī¸ ${prefix}highfive
â¤ŋâī¸ ${prefix}shinobu
â¤ŋâī¸ ${prefix}megumin
â¤ŋâī¸ ${prefix}handhold
`
}

//NSFW MENU
exports.snsfw = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đ NSFW MENU*
â¤ŋâī¸ ${prefix}ahegeo
â¤ŋâī¸ ${prefix}ass
â¤ŋâī¸ ${prefix}bdsm
â¤ŋâī¸ ${prefix}blowjob
â¤ŋâī¸ ${prefix}cuckold 
â¤ŋâī¸ ${prefix}cum 
â¤ŋâī¸ ${prefix}ero
â¤ŋâī¸ ${prefix}femdom
â¤ŋâī¸ ${prefix}foot
â¤ŋâī¸ ${prefix}gangbang
â¤ŋâī¸ ${prefix}glasses
â¤ŋâī¸ ${prefix}hentai
â¤ŋâī¸ ${prefix}ahy
â¤ŋâī¸ ${prefix}mstb
â¤ŋâī¸ ${prefix}neko
â¤ŋâī¸ ${prefix}orgy
â¤ŋâī¸ ${prefix}panties
â¤ŋâī¸ ${prefix}pussy
â¤ŋâī¸ ${prefix}yuri
â¤ŋâī¸ ${prefix}zettai
`
}

//MAKER MENU
exports.smaker = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đ¨ MAKER MENU*
â¤ŋâī¸ ${prefix}toimage
â¤ŋâī¸ ${prefix}smeme
â¤ŋâī¸ ${prefix}smeme2
â¤ŋâī¸ ${prefix}sticker
â¤ŋâī¸ ${prefix}tovideo
â¤ŋâī¸ ${prefix}togif
â¤ŋâī¸ ${prefix}tourl
â¤ŋâī¸ ${prefix}emojimix đ+đ
â¤ŋâī¸ ${prefix}readmore
â¤ŋâī¸ ${prefix}ttp [teks]
â¤ŋâī¸ ${prefix}semoji [emoji]
`
}

//TEXTPRO MENU
exports.stextpro = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*đ¨âđ¨ TEXTPRO MENU*
â¤ŋâī¸ ${prefix}serti1 [teks]
â¤ŋâī¸ ${prefix}serti2 [teks]
â¤ŋâī¸ ${prefix}serti3 [teks]
â¤ŋâī¸ ${prefix}blackpink [teks]
â¤ŋâī¸ ${prefix}neon [teks]
â¤ŋâī¸ ${prefix}magma [teks]
â¤ŋâī¸ ${prefix}3dstone [teks]
â¤ŋâī¸ ${prefix}halloween [teks]
â¤ŋâī¸ ${prefix}horror [teks]
â¤ŋâī¸ ${prefix}larva [teks]
â¤ŋâī¸ ${prefix}toxic [teks]
â¤ŋâī¸ ${prefix}marvel [teks|teks]
â¤ŋâī¸ ${prefix}potter [teks]
â¤ŋâī¸ ${prefix}pornhub [teks|teks]
â¤ŋâī¸ ${prefix}tahta [teks]
`
}

//OTHER MENU
exports.sother = (quotes, prefix) => {
	return`*đ Quotes :* ${quotes}

*â OTHER MENU*
â¤ŋâī¸ ${prefix}simi [teks]
â¤ŋâī¸ ${prefix}ping
â¤ŋâī¸ ${prefix}owner
â¤ŋâī¸ ${prefix}creator
â¤ŋâī¸ ${prefix}menu / ${prefix}help / ${prefix}?
â¤ŋâī¸ ${prefix}delete
â¤ŋâī¸ ${prefix}sc
â¤ŋâī¸ ${prefix}tqto
â¤ŋâī¸ ${prefix}donasi
â¤ŋâī¸ ${prefix}rules
â¤ŋâī¸ ${prefix}sewabot
â¤ŋâī¸ ${prefix}listgc
â¤ŋâī¸ ${prefix}liston
â¤ŋâī¸ ${prefix}liston
â¤ŋâī¸ ${prefix}report
â¤ŋâī¸ ${prefix}req
`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

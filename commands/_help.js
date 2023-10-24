
const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1, cmd } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/commands')
    //---------------------------------------------------------------------------
cmd({
            
            alias: ['ko'],
            category: "general",
            react: "💝",
            filename: __filename
        },
        async(Void, citel, text) => {
            await Void.sendPresenceUpdate('recording', citel.chat);
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*❌No Such commands.*");
                else arr.push(`*🍁Command:* ${cmd.pattern}`);
                if (cmd.category) arr.push(`*🧩Category:* ${cmd.category}`);
                if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
                if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
                if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                const vdf = Config.ownername
                let total = await sck1.countDocuments()
                                 let str = `*𝙬𝙚𝙡𝙘𝙤𝙢𝙚 ${citel.pushName},*`
                str +=
                    '```' + `
                    

🧑‍💻 𝙾𝚆𝚗𝚎𝚛:- ${vdf}
✨ commands :- ${commands.length}
⏳ 𝚄𝚙𝚝𝚒𝚖𝚎:- ${runtime(process.uptime())}
⏰ Time:- ${time}
📅 Date:- ${date}


🫅𝗛𝗘𝗟𝗟𝗢 𝗜'𝗠 𝗞𝗜𝗡𝗚-𝗫🫅
 🫴how can I help you

 🧑‍💻  𝗧𝗵𝗲 𝗰𝗿𝗲𝗮𝘁𝗼𝗿 *${vdf}*

` + '```'
                str += `╭───『 ` + fancytext('Commands', 57) + `』──◆`
                for (const category in cmds) {
                    str += `
│  ╭──────◑🫅◑──────«
│  │        ❤️ ${tiny(category)} ❤️
│  ╰┬─────◈🇱🇰◈──────»
│  ┌┤\n`
                    for (const plugins of cmds[category]) {
                        str += `│  │ 💃 ${plugins}\n`
                    }
                    str += `│  ╰────────────◆`
                }

                str += `\n╰───────────⊷\n`
                let buttonMessaged = {
                    image: { url: THUMB_IMAGE },
                    caption: str,
                    footer: tlang().title,
                    headerType: 4
                 };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            alias: ['මෙනූ', 'විධාන','නියොග','menu', 'manimenu'],
            desc: "විධාන ලයිස්තුව",
            react: "🚀"
        },
        async(Void, citel, text) => {
            await Void.sendPresenceUpdate('recording', citel.chat);
            const { commands } = require('../lib');
        
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                const vdf = Config.ownername
                let total = await sck1.countDocuments()
                let str = `
╭━━━━━━━━━━━━━━━━✦⃝❞❨
 ▎✘ *Hellow* *${citel.pushName}*
 ▎        🍁    𝗠𝗘𝗡𝗨……🍁
╰━━━━━━━━━━━━━━━━❞⃟៚
 ▎  ╭─────────────❱❱
 ▎  │
 ▎  │ 🍁⃝🦋║៚ 1 ᴅᴏɴʟᴏᴀᴅᴇʀ
 ▎  │
 ▎  │ 🍁⃝🦋║៚ 2 ꜱᴇᴀʀᴄʜ
 ▎  │
 ▎  │ 🍁⃝🦋║៚ 3 ᴇʜɪ
 ▎  │
 ▎  │ 🍁⃝🦋║៚ 4 ɢʀᴜᴏᴘ
 ▎  │
 ▎  │ 🍁⃝🦋║៚ 5 ɴᴇᴡꜱ
 ▎  │
 ▎  │ 🍁⃝🦋║៚ 6 ᴀɪ
 ▎  │
 ▎  │ 🍁⃝🦋║៚ 7 ᴏᴛʜᴇʀ
 ▎  │
 ▎  │ 🍁⃝🦋║៚ 8 ᴀᴅᴍɪɴ
 ▎  │
 ▎  │ 🍁⃝🦋║៚ 9 ɢᴇᴍᴀꜱ
 ▎  │
 ▎  │ 🍁⃝🦋║៚ 10 ꜰᴜʟʟᴍᴇɴᴜ
 ▎  │
 ▎  ╰───────────────❱❱
 ▎
╰━━━━━━━━━━━━━━━━━✦⃝❞❨

📝 *Reply to number If not, mention your name*.

 🏸 EX:*.1*/ *.download*
` 
              
                let buttonMessaged = {
                    image: { url: THUMB_IMAGE },
                    caption: str,
                    footer: tlang().title,
                    headerType: 4
                 };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            })
//---------------------------------------------------------------------------
cmd({  
  
           pattern: "download ",
            alias: ["1","dm","1️⃣"],
            desc: "Download menu",
            react: "🥁"
        },
        async(Void, citel, text) => {
            await Void.sendPresenceUpdate('recording', citel.chat);
            const { commands } = require('../lib');
        
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                const vdf = Config.ownername
                let total = await sck1.countDocuments()
                let str = `
╭━━━━━━━━━━━━━━━✦⃝❞❨
┃✘ *Hellow* *${citel.pushName}*
┃   🧑‍🎨 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🧑‍🎨
╰━━━━━━━━━━━━━━━━❞⃟៚
┃  ╭─────────────❱❱
┃  │ 
┃  │ 💛⃟🤺⃦៚.𝚊𝚙𝚔
┃  │
┃  │ 💛⃟🤺⃦៚.𝚜𝚘𝚗𝚐
┃  │ 
┃  │ 💛⃟🤺⃦៚.𝚟𝚒𝚍𝚎𝚘
┃  │
┃  │ 💛⃟🤺⃦៚.𝚢𝚝𝚖𝚙3
┃  │ 
┃  │ 💛⃟🤺⃦៚.𝚢𝚝𝚖𝚙4
┃  ││
┃  │ 💛⃟🤺⃦៚.𝚢𝚝𝚍𝚘𝚌
┃  │
┃  │ 💛⃟🤺⃦៚.𝚖𝚍𝚒𝚊𝚏𝚒𝚛𝚎
┃  │
┃  │ 💛⃟🤺⃦៚.𝚑𝚎𝚛𝚘𝚌𝚔
┃  │
┃  │ 💛⃟🤺⃦៚.𝚒𝚗𝚜𝚝𝚊
┃  │
┃  ╰────────────❱❱
┃
╰━━━━━━━━━━━━━━✦⃝❞❨
📝 *For the previous list Apply*

🏈 *.menu*
   ` 
              
                let buttonMessaged = {
                    image: { url: THUMB_IMAGE },
                    caption: str,
                    footer: tlang().title,
                    headerType: 4
                 };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }) 
//---------------------------------------------------------------------------
cmd({  
  
           pattern: "news",
            alias: ["5","nm","5️⃣"],
            desc: "news menu",
            react: "📰", 
        },
        async(Void, citel, text) => {
            await Void.sendPresenceUpdate('recording', citel.chat);
            const { commands } = require('../lib');
        
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                const vdf = Config.ownername
                let total = await sck1.countDocuments()
                let str = `
╭━━━━━━━━━━━━━━━✦⃝❞❨
┃✘ *Hellow* *${citel.pushName}*
┃   📑  𝗡𝗘𝗪𝗦  📑
╰━━━━━━━━━━━━━━❞⃟៚
┃  ╭────────────❱❱
┃  │ 
┃  │ 🧡⃟🤺⃦៚.𝚑𝚒𝚛𝚞
┃  │
┃  │ 🧡⃟🤺⃦៚.𝚎𝚜𝚊𝚗𝚊
┃  │ 
┃  │ 🧡⃟🤺⃦៚.𝚗𝚊𝚜𝚊
┃  │
┃  │ 🧡⃟🤺⃦៚.𝚜𝚒𝚛𝚊𝚜𝚊
┃  │
┃  ╰────────────❱❱
┃
╰━━━━━━━━━━━━━━━✦⃝❞❨
📝 *For the previous list Apply*

🏈 *.menu*
   ` 
              
                let buttonMessaged = {
                    image: { url: THUMB_IMAGE },
                    caption: str,
                    footer: tlang().title,
                    headerType: 4
                 };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }) 
//---------------------------------------------------------------------------
cmd({  
  
           pattern: "ai",
            alias: ["6","am","6️⃣"],
            desc: "news menu",
            react: "🤖", 
        },
        async(Void, citel, text) => {
            await Void.sendPresenceUpdate('recording', citel.chat);
            const { commands } = require('../lib');
        
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                const vdf = Config.ownername
                let total = await sck1.countDocuments()
                let str = `
╭━━━━━━━━━━━━━━━✦⃝❞❨
┃✘ *Hellow* *${citel.pushName}*
┃   🤖  𝗔𝗜  🤖
╰━━━━━━━━━━━━━━❞⃟៚
┃  ╭────────────❱❱
┃  │ 
┃  │ 💕⃟🤺⃦៚.𝚐𝚝𝚙
┃  │
┃  │ 💕⃟🤺⃦៚.𝚐𝚝𝚙2
┃  │ 
┃  │ 💕⃟🤺⃦៚.𝚐𝚝𝚙3
┃  │
┃  │ 💕⃟🤺⃦៚.𝚐𝚝𝚙4
┃  │
┃  ╰────────────❱❱
┃
╰━━━━━━━━━━━━━━━✦⃝❞❨
📝 *For the previous list Apply*

🏈 *.menu*
   ` 
              
                let buttonMessaged = {
                    image: { url: THUMB_IMAGE },
                    caption: str,
                    footer: tlang().title,
                    headerType: 4
                 };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }) 
//---------------------------------------------------------------------------
cmd({  
  
           pattern: "ehi",
            alias: ["3","ei","3️⃣"],
            desc: "Download menu",
            react: "🛩️"
        },
        async(Void, citel, text) => {
            await Void.sendPresenceUpdate('recording', citel.chat);
            const { commands } = require('../lib');
        
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                const vdf = Config.ownername
                let total = await sck1.countDocuments()
                let str = `
╭━━━━━━━━━━━━━━━✦⃝❞❨
┃ ✘ *Hellow* *${citel.pushName}*
┃     🧙‍♂️ 𝗘𝗛𝗜 🧙‍♂️
╰━━━━━━━━━━━━━❞⃟៚
┃  ╭────────────❱❱
┃  │ 
┃  │ 💙⃟🤺⃦៚.𝚎𝚑𝚒1
┃  │
┃  │ 💙⃟🤺⃦៚.𝚎𝚑𝚒2
┃  │ 
┃  │ 💙⃟🤺⃦៚.𝚎𝚑𝚒3
┃  │
┃  │ 💙⃟🤺⃦៚.𝚎𝚑𝚒4
┃  │
┃  │ 💙⃟🤺⃦៚.𝚎𝚑𝚒5
┃  │
┃  │ 💙⃟🤺⃦៚.𝚎𝚑𝚒6
┃  │
┃  ╰─────────────❱❱
┃
╰━━━━━━━━━━━━━━━✦⃝❞❨
📝 *For the previous list Apply*

🏈 *.menu*
   ` 
              
                let buttonMessaged = {
                    image: { url: THUMB_IMAGE },
                    caption: str,
                    footer: tlang().title,
                    headerType: 4
                 };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }) 
    //---------------------------------------------------------------------------
cmd({  
  
           pattern: "grop",
            alias: ["4","gp","4️⃣"],
            desc: "Download menu",
            react: "🛩️"
        },
        async(Void, citel, text) => {
            await Void.sendPresenceUpdate('recording', citel.chat);
            const { commands } = require('../lib');
        
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                const vdf = Config.ownername
                let total = await sck1.countDocuments()
                let str = `
╭━━━━━━━━━━━━━━━✦⃝❞❨
┃✘ *Hellow* *${citel.pushName}*
┃   🐹 𝗚𝗥𝗨𝗢𝗣 🐹
╰━━━━━━━━━━━━━━━❞⃟៚
┃  ╭─────────────❱❱
┃  │ 🩵⃟🤺⃦៚.𝚍𝚎𝚕
┃  │
┃  │ 🩵⃟🤺⃦៚.𝚝𝚊𝚐𝚊𝚕𝚕
┃  │ 
┃  │ 🩵⃟🤺⃦៚.𝚐𝚛𝚘𝚞𝚙
┃  │
┃  │ 🩵⃟🤺⃦៚.𝚋𝚊𝚗
┃  │
┃  │ 🩵⃟🤺⃦៚.𝚐𝚎𝚝𝚓𝚒𝚍𝚜
┃  │
┃  │ 🩵⃟🤺⃦៚.𝚜𝚞𝚙𝚙𝚘𝚛𝚝
┃  │
┃  │ 🩵⃟🤺⃦៚.𝚛𝚊𝚗𝚔
┃  │
┃  │ 🩵⃟🤺⃦៚.𝚜𝚎𝚝𝚠𝚎𝚕𝚕𝚌𝚘𝚖𝚎
┃  │
┃  │ 🩵⃟🤺⃦៚.𝚜𝚎𝚝𝚐𝚘𝚘𝚍𝚋𝚢𝚎
┃  │
┃  │ 🩵⃟🤺⃦៚.𝚊𝚌𝚝
┃  │
┃  ╰─────────────❱❱
┃
╰━━━━━━━━━━━━━━✦⃝❞❨
📝 *For the previous list Apply*

🏈 *.menu*
   ` 
              
                let buttonMessaged = {
                    image: { url: THUMB_IMAGE },
                    caption: str,
                    footer: tlang().title,
                    headerType: 4
                 };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }) 
    //---------------------------------------------------------------------------
cmd({
            alias: ['search','sc','2','2️⃣'],
            desc: "searching",
            react: "🎷"
        },
        async(Void, citel, text) => {
            await Void.sendPresenceUpdate('recording', citel.chat);
            const { commands } = require('../lib');
        
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/KOLKATA')
                    .locale('id')
                const date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                const vdf = Config.ownername
                let total = await sck1.countDocuments()
                let str = `       
*Hellow* *${citel.pushName}*      

╭━━━━━━━━━━━━━━━✦⃝❞❨
┃ ✘ *Hellow* *${citel.pushName}*
┃    🐼 𝗦𝗘𝗔𝗥𝗖𝗛 🐼
╰━━━━━━━━━━━━━━❞⃟៚
┃  ╭────────────❱❱ 
┃  │ ❤️⃟🤺⃦៚.𝚐𝚘𝚘𝚐𝚕𝚎
┃  │ 
┃  │ ❤️⃟🤺⃦៚.𝙸𝚖𝚊𝚐𝚎
┃  │
┃  │ ❤️⃟🤺⃦៚.𝚢𝚝𝚜
┃  │
┃  │ ❤️⃟🤺⃦៚.𝚠𝚎𝚊𝚝𝚑𝚎𝚛
┃  │
┃  │ ❤️⃟🤺⃦៚.𝚗𝚙𝚖
┃  │
┃  │ ❤️⃟🤺⃦៚.𝚜𝚜
┃  │
┃  │ ❤️⃟🤺⃦៚.𝚑𝚘𝚛𝚘
┃  │
┃  │ ❤️⃟🤺⃦៚.𝚖𝚘𝚟𝚒𝚎 
┃  │
┃  │ ❤️⃟🤺⃦៚.𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 
┃  │
┃  ╰─────────────❱❱
┃
╰━━━━━━━━━━━━━━✦⃝❞❨
📝 *For the previous list Apply*

🏈 *.manimenu*
   ` 
              
                let buttonMessaged = {
                    image: { url: THUMB_IMAGE },
                    caption: str,
                    footer: tlang().title,
                    headerType: 4
                 };
                return await Void.sendMessage(citel.chat, buttonMessaged);
            }) 

    //------------------------------------------------
Secktor.cmd({
        pattern: "owner",
        desc: "To find owner number",
        category: "general",
        react: "🧑‍💻",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: 'Touch here.',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=Hii bro,I am ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

Secktor.cmd({
    pattern: "file",
    desc: "to get extact name where that command is in repo.\nSo user can edit that.",
    category: "general",
    react: "💝",
    filename: __filename
},
async(Void, citel, text) => {
 const { commands } = require('../lib');
 let arr = [];
        const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
        if (!cmd) return await citel.reply("*❌No Such commands.*");
        else arr.push(`*🍁Command:* ${cmd.pattern}`);
        if (cmd.category) arr.push(`*🧩Type:* ${cmd.category}`);
        if(cmd.filename) arr.push(`✨FileName: ${cmd.filename}`)
        return citel.reply(arr.join('\n'));


})

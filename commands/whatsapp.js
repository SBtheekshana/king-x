

 const moment = require("moment-timezone")

 const Config = require('../config')

 let { fancytext, tlang, tiny, botpic ,prefix,cmd } = require("../lib");

 let KING_X ;

 

const {updateProfilePicture,forwardMessage, getAdmin} = require("../lib")

///============================================================================================
cmd({ pattern: "ptv", desc: "send ptv Message of video", category: "whatsapp",react: "⚙️",filename: __filename},async(Void, msg, text,{cmdName , isCreator}) => {
   if(!msg.quoted) return await msg.send("*Uhh please, reply to a video Message*")
   let mtype = msg.quoted.mtype 
   if(mtype !== "videoMessage") return await msg.send("*Replied Message is not a video, Idiot.*")
   return await forwardMessage(msg.chat, Void, msg, cmdName )
})////------------------------------------------------------------
cmd({pattern: "#", desc: "Save whatsapp status",category: "whatsapp",react: "⚙️",filename: __filename},async(Void, msg, text,{cmdName , isCreator}) => {
   if(!msg.quoted) return await msg.send("*Uhh Please, reply to whatsapp status*")
   let KING_X_num = await Void.decodeJid(msg.user)
   return await forwardMessage( msg, cmdName )
})//--------------------------------------------------------------------
cmd({pattern: "save",desc: "Save Message to log number",category: "whatsapp",react: "⚙️",filename: __filename},async(Void, msg, text,{cmdName , isCreator}) => {
   if(!isCreator) return await msg.send(tlang().owner)
   if(!msg.quoted) return await msg.send("*Uhh Please, reply to a Message*")
   let KING_X_num = await Void.decodeJid(msg.user)
   return await forwardMessage( msg, cmdName )
})///================================================================================
smd({ on: "text" }, async (Suhail,msg,text)=> {
   if(msg.quoted && msg.text.toLowerCase().includes("send") ){
       let KING_X_num = await Suhail.bot.decodeJid(msg.user)
       if(msg.quoted.sender === sᴜʜᴀɪʟ_ᴍᴅ_num && msg.quoted.chat === 'status@broadcast' ){ return await forwardMessage(msg.chat, Suhail.bot, msg, 'send' ); }
   }
})//==================================================================

smd({pattern: "pp",desc: "Set profile picture",category: "whatsapp",react: "⚙️",use: '<reply to image>', filename: __filename,},
async(Suhail, msg,text,{cmdName , isCreator}) => {
   if(!isCreator) return await msg.send(tlang().owner);if (!msg.quoted) return await msg.reply("*Reply to an image, dear*");
   if(msg.quoted.mtype !='imageMessage') return await msg.reply("*_Uhh please, Reply to an image._*");    
   const KING_X_num = await Suhail.bot.decodeJid(msg.user); return await updateProfilePicture(Suhail , sᴜʜᴀɪʟ_ᴍᴅ_num , msg , 'pp' );
 })
smd({ pattern: "fullpp", desc: "Set full screen profile picture", category: "whatsapp",react: "⚙️", use: '<reply to image>', filename: __filename,},
 async(Suhail, msg,text,{cmdName , isCreator}) => {
   if(!isCreator) return await msg.send(tlang().owner);if (!msg.quoted) return await msg.reply("*Reply to an image, sir*");
   if(msg.quoted.mtype !='imageMessage') return await msg.reply("*_Uhh please, Reply to an image._*");
   const KING_X_num = await Suhail.bot.decodeJid(msg.user); return await updateProfilePicture(Suhail , sᴜʜᴀɪʟ_ᴍᴅ_num , msg , 'fullpp' );    
});




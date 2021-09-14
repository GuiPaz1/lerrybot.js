const Canvas = require("canvas"); 

const Discord = require("discord.js"); 

const db = require("quick.db"); 

const { MessageAttachment } = require("discord.js"); 

const canvacord = require("canvacord"); 

module.exports.info = {
  aliases: ["profile", "perfil"]
}

exports.run = async (client, message, args) => { 

const user = message.mentions.members.last() || message.member; 



let member = message.mentions.users.first() || client.users.cache.find(us => us.id === args[0]) || client.users.cache.find(us => us.username.includes(args[0])) || message.author; 



let min = db.get(`aboutme_${member.id}`) 

if (min === null) { 

min = 'Type )setinfo to change this message'
}

let money = await db.fetch(`money_${member.id}`) || 0

let nome = db.get(`username_${member.id}`) 

if (nome === null) { 

nome = member.username; 

} else { 

nome = `${nome} (${member.username})` 

} 





let perfil1 = await db.fetch(`perfil_${user.id}`); 

if (perfil1 === null) perfil1 = 'https://64.media.tumblr.com/096c90e87f9f892036cec6e7af975c31/734148a093f74868-b0/s540x810/83c9ccac29bc2d15452b7db600877dc0b99856c9.png' 



const canvas = Canvas.createCanvas(850, 500); 

const ctx = canvas.getContext('2d'); 

const background = await Canvas.loadImage(perfil1); 





ctx.drawImage(background, 0, 0, canvas.width, canvas.height); 



ctx.strokeStyle = '#0066FF'; 

ctx.strokeRect(0, 0, canvas.width, canvas.height); 



ctx.textAlign = "left"; 

ctx.font = '40px arial'; 

ctx.fillStyle = "rgb(253, 255, 252)"; 

ctx.fillText(`${nome}`, 190, 60);

ctx.textAlign = "left"; 

ctx.font = '32px arial'; 

ctx.fillStyle = "rgb(253, 255, 252)";

ctx.fillText(`Money: 
${money.toLocaleString()}`, 190, 100)

ctx.textAlign = "left"; 

ctx.font = '32px arial'; 

ctx.fillStyle = "rgb(253, 255, 252)"; 

ctx.fillText(`${min}`, 10, 400); 



ctx.arc(100, 80, 65, 0, Math.PI * 2, true); 

ctx.strokeStyle = "#0066FF"; 

ctx.lineWidth = 6; 

ctx.stroke(); 

ctx.closePath(); 

ctx.clip(); 



const avatar = await Canvas.loadImage(user.user.displayAvatarURL({ format: 'jpg' })); 

ctx.drawImage(avatar, 15, 10, 175, 175); 



const attachment = new Discord.MessageAttachment(canvas.toBuffer(), perfil1); 







message.channel.send(attachment); 

}
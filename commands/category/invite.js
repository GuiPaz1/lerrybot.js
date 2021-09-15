var Discord = require('discord.js')
const fs = require("fs")
const { PREFIX } = require("../../config")
const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "invite",
    description: "invite link of bot",
    usage: "1) m/invite \n2) m/inv",
    aliases: ['i']
},
run: async (bot, message, args) => {
    let prefix;
    if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };

if(message.content.toLowerCase() === `${prefix}invite`){
    var log = new Discord.MessageEmbed()
    .setColor(`#dcf104`)
    .setAuthor(`${bot.user.username} `)
      .setThumbnail(bot.user.displayAvatarURL())   
    .setDescription(`👑 Add me!

📨 [Invite](https://discord.com/oauth2/authorize?client_id=876089120651358229&permissions=8&scope=bot)

<a:manutencaolerry:884478589582581790> [Support](https://discord.gg/hFdeJQRmHF)

<a:discord_gira:884518701016174632> [Owner's Server](https://discord.gg/hefZrYfTc9)`,true)

message.channel.send(log);
}
}
}
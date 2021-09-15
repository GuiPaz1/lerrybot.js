var Discord = require('discord.js')
const fs = require("fs")
const { PREFIX } = require("../../config")
const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "games",
    description: ".",
    usage: "1) m/games [module name]\n2) m/games[command (name or alias)]",
    example: "1) m/g\n2) m/im\n3) m/gm",
    aliases: ['gm']
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

if(message.content.toLowerCase() === `${prefix}games`){
    var log = new Discord.MessageEmbed()
    .setColor(`#060606`)
    .setAuthor("🎮 - Game Commands")
    
    .setThumbnail("https://cdn.discordapp.com/emojis/866363992963153970.gif?v=1")

    .setDescription (`My prefix in this server is \`${prefix}\``)
    
   .addField(`ㅤ`, "`blackjack` | `connectfour` | `duelquiz` | `gunfight` | `horserace` | `memory` | `poker` | `rps` | `russianroulette` | `tictactoe` `trivia`")

   .setImage("https://media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif")
    
   .setTimestamp()
    

message.channel.send(log);
}
}
}



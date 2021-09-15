const Discord = require("discord.js");

module.exports = {
    name: "help com reação by ferinha",
    description: "clique na reação, e a msg será editada :)",
    author: "ferinha heher",

run: async(client, message, args) => { //embed do painel inicial
    let embed = new Discord.MessageEmbed()
    .setTitle(`GuiPaz's Profile'`)
    .setThumbnail(message.author.displayAvatarURL())
    .setDescription(`__**Wallet:**__
:dollar: \`1298\`

__**Bank:**__
:coin: \`0\`

__**Badges:**__
<:bravery:887419287436926976> 👑

__**About me:**__
Discord Bot Dev.`, true)
    .setFooter(`${message.author.tag}`)
    .setColor("#0f1e28")    
    message.channel.send(`${message.author}`, embed).then(msg => {
      })
    }
  }

//by ferinha <3
const Discord = require("discord.js");

module.exports.info = {
  name: "reactrole",
  usage: "em construção",
  parte: "staffs",
  aliases: ["reactrole", "rolereact"]
}

exports.run = async (client, message, args) => {
  if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send("eu preciso de permissão para dar um cargo para alguem!");

  if (!message.member.permissions.has("MANAGE_ROLES")) return message.channel.send("você não tem permissão para usar esse comando!");

  const emojiRole = args[0]

  if (!emojiRole) return message.channel.send("Type the emoji and mention the role")

  if (emojiRole.lenght > 1) return message.channel.send("only one emoji")

  const roleGive = message.mentions.roles.first();

  if (!roleGive) return message.channel.send("Mention the role")

  if(!roleGive === args[1]) return message.channel.send("Please, mention the role after the emoji")

  const msgSend = args.slice(2).join(" ");

  if (!msgSend) return message.channel.send("Send the message")

  if(msgSend.lenght > 100) return message.channel.send("100 words only")

  const embed = new Discord.MessageEmbed()
  .setDescription(msgSend)
  .setTimestamp()
   let msg = await message.channel.send(embed)
        let reactions = [`${emojiRole}`]
        await msg.react(reactions[0])
    let filter = (reaction, user) => reaction.emoji.name || reaction.emoji.id
        const collector = msg.createReactionCollector(filter, { dispose: true })

        collector.on('collect', async (emoji, user) => {
            if(!(emoji.name === reactions[0] || emoji.id === emojiRole.id)) return;
                    let user1 = await msg.guild.members.fetch(user.id)
                    user1.roles.add(roleGive.id)
        })

        collector.on('dispose', async (emoji, user) => {
          let user1 = await msg.guild.members.fetch(user.id)
                    user1.roles.remove(roleGive.id)
        })
}
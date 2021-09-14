const Discord = require("discord.js");
module.exports = {
    name: "clear",
    author: "ferinha",
    servidor: "https://discord.gg/PEdmSZzCAv",


run: async(client, message, args) => {

    let ferinha_author = message.author;
    let ferinha_msg_erro_sem_perm = "You do not have \ `Manage Messages \` permission";
    let ferinha_numeros = args[0];

  if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(`:x: | ${ferinha_author} ${ferinha_msg_erro_sem_perm}.`);

  const ferinha_contador_msg_del = parseInt(args[0], 10);

  let ferinha_msg_erro_msgs_del = "Enter a number between 2-99.";

  if (!ferinha_contador_msg_del || ferinha_contador_msg_del < 2 || ferinha_contador_msg_del > 99) return message.channel.send(`:x: | ${ferinha_author} ${ferinha_msg_erro_msgs_del}`);

  const ferinha_apagando_msg = await message.channel.messages.fetch({
    limit: ferinha_contador_msg_del + 1
  });
  message.channel.bulkDelete(ferinha_apagando_msg);
  let msg_nao_embed = `✅ | ${ferinha_author} deleted \`${ferinha_numeros}\` messages!`;
  let msg_embed = new Discord.MessageEmbed() .setColor("RANDOM") .setDescription(`${ferinha_author} deleted \`${ferinha_numeros}\` messages!`) .setFooter(`Cleaning performed`, "")
  message.channel.send(msg_embed).then(msg => msg.delete({timeout: 90000}))
}};
module.exports.run = async(client, message, args) => {
  const ferinha = await message.channel.send(`**
Calculating.**`);
  ferinha.edit(`**Calculating..**`);
  ferinha.edit(`**Calculating...**`);
    ferinha.edit(`**Calculating.**`);
      ferinha.edit(`**Calculating..**`);
  ferinha.edit(`
\`💻 Server's ping:\` \`${ferinha.createdTimestamp -
      message.createdTimestamp}ms\`
\`⏰ API's ping:\` \`${Math.round(
      client.ws.ping
    )}ms\``);
}
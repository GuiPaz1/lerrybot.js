const { PREFIX, LAVA_HOST, LAVA_PASSWORD, LAVA_PORT  } = require('../../config');
const { MessageEmbed } = require("discord.js")

module.exports = async bot => {
    console.log(`${bot.user.username} is available now!`)
    let totalUsers = bot.guilds.cache.reduce((acc, value) => acc + value.memberCount, 0)
    var activities = [ `${bot.guilds.cache.size} servers`, `${PREFIX}help`, `lerrybot.repl.co`, `discord.io/lerry`], i = 0;
    setInterval(() => bot.user.setActivity(`${activities[i++ % activities.length]}`, { type: "PLAYING" }),10000)
    
};
client.on("ready", () => {
    let ferinha = [
        `${bot.guilds.cache.size} servers`,
        `${PREFIX}help`,
        `lerrybot.repl.co`,
        `discord.io/lerry`
      ],
      fera = 0;
    setInterval( () => client.user.setActivity(`${ferinha[fera++ % ferinha.length]}`, {
          type: "PLAYING" //mais tipos: WATCHING / LISTENING
        }), 1000 * 30); 
    client.user
        .setStatus("online")
        .catch(console.error);
  console.log("Estou pronto(a) para ser utilizado(a)!")
  });
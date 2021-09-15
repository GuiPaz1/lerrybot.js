const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Novo ping em: ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); 

const Discord = require('discord.js')

const client = new Discord.Client()

const fs = require('fs')

const db = require('quick.db');



client.on("guildMemberAdd",  async (member) => {
  let ferinha_autorole = db.get(`ferinha_autorole_${member.guild.id}`);
  if (!ferinha_autorole === null) return;
  member.roles.add(ferinha_autorole)
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();  
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  console.log(`${files.length} pastas.`);
  files.forEach(a => {
    fs.readdir(`./commands/${a}/`, (erro, b) => {
      b.forEach(f => {
   if(!f.endsWith('.js')) return 
    let props = require(`./commands/${a}/${f}`);
    console.log(`loaded: -> ${f} <-`);
    client.commands.set(f.replace(".js", ""), props);
    if(props.info) {
       const aliasesF = props.info.aliases;
      aliasesF.forEach(a => {
        console.log(`Aliase loaded: ${a}`)
        client.aliases.set(a, props)
      })
    }
  });
    });
  });
});


client.on("message", async message => {

    if(message.author.bot) return;
    if (message.channel.type == 'dm') return;
    
    const prefix = ")"
    
    if(!message.content.startsWith(prefix)) return;
    
    const args = message.content.slice(prefix.length).split(' ');
    
    const command = args.shift().toLowerCase();
    
    const file = client.commands.get(command) || client.aliases.get(command)
    
    if(file) return file.run(client, message, args);
    
    message.channel.send(`:x: **| The command ${command} does not exist!**`)
});

client.on("ready", () => {
  let activities = [
      `)help`,
      `lerrybot.repl.co`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "LISTENING"
      }), 1000 * 60); 
  client.user
      .setStatus("dnd")
      .catch(console.error);
console.log("Status Online!")
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type == 'mençao')
    return
  if (message.content == `<@${client.user.id}>` || message.content == `<@!${client.user.id}>`) {
    let Prefix = db.get(`prefix_${message.guild.id}`)
    if (Prefix == null) Prefix = ")";

    return message.channel.send(`Oii! Meu prefixo nesse servidor é \`${Prefix}\`, para ver meus comandos digite \`${Prefix}help\` `).then;
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type == ')ajuda')
    return
  if (message.content == `<@${client.user.id}>` || message.content == `<@!${client.user.id}>`) {
    let Prefix = db.get(`prefix_${message.guild.id}`)
    if (Prefix == null) Prefix = ")";

    return message.channel.send(`Oii! Meu prefixo nesse servidor é \`${Prefix}\`, para ver meus comandos digite \`${Prefix}help\` `).then;
  }
});


client.login(process.env.TOKEN)//
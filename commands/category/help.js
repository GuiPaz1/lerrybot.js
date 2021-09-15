const Discord = require("discord.js");

module.exports = {
    name: "help com reação by ferinha",
    description: "clique na reação, e a msg será editada :)",
    author: "ferinha heher",

run: async(client, message, args) => { //embed do painel inicial
    let embed = new Discord.MessageEmbed()
    .setTitle(`Commands Panel`)
    .setThumbnail(message.author.displayAvatarURL())
    .setDescription(`See my commands:

\n🏡 Home \n💰 Economy \n⚙ Moderation \n🎮 Games \n👑 Setup and Util \n \n [Add me to your server!](https://discord.com/api/oauth2/authorize?client_id=876089120651358229&permissions=8&scope=bot) \n [Support](https://discord.gg/YZBNcdUe3A)`, true)
    .setFooter(`${message.author.tag}`)
    .setColor("#0f1e28")    
    message.channel.send(`${message.author}`, embed).then(msg => {
      msg.react("🏡")
      msg.react("💰")
      msg.react("⚙")
      msg.react("🎮")
      msg.react("👑")

      let filtro0 = (r, u) => r.emoji.name === '🏡' && u.id === message.author.id;
      let filtro1 = (r, u) => r.emoji.name === '💰' && u.id === message.author.id;
      let filtro2 = (r, u) => r.emoji.name === '⚙' && u.id === message.author.id;
      let filtro3 = (r, u) => r.emoji.name === '🎮' && u.id === message.author.id;
      let filtro4 = (r, u) => r.emoji.name === '👑' && u.id === message.author.id;
      

      let coletor0 = msg.createReactionCollector(filtro0);
      let coletor = msg.createReactionCollector(filtro1);
      let coletor2 = msg.createReactionCollector(filtro2);
      let coletor3 = msg.createReactionCollector(filtro3);
      let coletor4 = msg.createReactionCollector(filtro4);

      coletor0.on("collect", c => { //embed do painel inicial (editada)

        let ferinha = new Discord.MessageEmbed()
      .setTitle(`Commands Panel`)
      .setThumbnail(message.author.displayAvatarURL())
      .setDescription(`See my commands:

\n🏡 Home \n💰 Economy \n⚙ Moderation \n🎮 Games \n👑 Setup and Util \n \n [Add me to your server!](https://discord.com/api/oauth2/authorize?client_id=876089120651358229&permissions=8&scope=bot) \n [Support](https://discord.gg/YZBNcdUe3A)`, true)
      .setFooter(`${message.author.tag}`)
      .setColor("#0f1e28")   
        
     
        msg.edit(`${message.author}`, ferinha)
      })


      coletor.on("collect", c => { //embed do painel de utilidade (editada)

        let fera = new Discord.MessageEmbed()
        .setTitle(`💰 Economy`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(`)addmoney
)balance
)beg
)buy
)daily
)deposit
)leaderboard
)pay
)profile
)removemoney
)rob
)roulette
)sell
)setbackground
)setinfo
)slots
)store
)weekly
)withdraw
)work\n⠀`)
        .setColor("#0f1e28")
        

        msg.edit(`${message.author}`, fera)
      })

      coletor2.on("collect", c => { //embed do painel de moderação (editada)

        let fera = new Discord.MessageEmbed()
        .setTitle(`⚙ Moderation`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(`)ban
)channelinfo
)createchat
)createvc
)delchannel
)delrole
)hackban
)kick
)lock
)mute
)purge
)reloadmod
)role
)roleadd
)rolecreate
)roledel
)rolememberinfo
)singlevoicemove
)slowmode
)unban
)unbanall
)undeafen
)unlock
)unmute
)voicekick
)warn
)whois\n⠀`)
        .setColor("#0f1e28")
        

        msg.edit(`${message.author}`, fera)
      })

      coletor3.on("collect", c => { //embed do painel de diversão (editada)

        let ferinha = new Discord.MessageEmbed()
        .setTitle(`🎮 Games`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(`)blackjack
)connectfour
)duelquiz
)gunfight
)horserace
)memory
)poker
)rps
)russianroulette
)tictactoe
)trivia
)snake\n⠀`)
        .setColor("#0f1e28")

        msg.edit(`${message.author}`, ferinha)
      })

      coletor4.on("collect", c => { //embed de outros cmds (editada)

        let ferauwu = new Discord.MessageEmbed()
        .setTitle(`👑 Setup and Util`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`${message.author.tag}`)
        .setDescription(` **Setup**
)disablemodlogchannel
)disablexp
)setmodlogchannel
)setnick
)setprefix
)setverification
)setxp
)verify
)clear
)say

**Util**
)ping
)advice
)affect
)anime
)announce
)applestore
)ascii
)avatar
)beautiful
)binary
)blur
)captcha
)catsay
)clyde
)connect
)country
)covid
)cowsay
)decode
)delete
)docs
)embed
)emojify
)emojiid
)enlarge
)fliptext
)getinvite
)gif
)hug
)imageannounce
)imbd
)jail
)kiss
)level
)linkshorten
)membercount
)meme
)minecraft
)pat
)playstore
)poke
)prefix
)qr
)rip
)scroll
)serverinfo
)serverlist
)slap
)smug
)stats
)stalemoji
)tickle
)toilet
)triggered
)tweet
)uptime
)vaportext
)voicemove
)wasted
)weather
)whatsapp
)wideavatar
)wiki
)wink
)youtubesearch
)zalgo\n⠀`)
        .setColor("#0f1e28")

        msg.edit(`${message.author}`, ferauwu)
      })
    })
  }

}//by ferinha <3
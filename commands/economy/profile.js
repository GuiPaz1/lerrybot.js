const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const inlinereply = require('discord-reply');


const flags = {
    DISCORD_EMPLOYEE: '<a:staff_ferinha:870007622001119275>',
    DISCORD_PARTNER: '<:dboatsDiscordPartner:879901288832311386>',
    BUGHUNTER_LEVEL_1: '<:TCC_IconBugHunterBadge:879901392779739216>',
    BUGHUNTER_LEVEL_2: '<:TCC_IconBugHunterGoldBadge:879901432235573268>',
    HYPESQUAD_EVENTS: '<a:hyper_sq:879899501400301588>',
    HOUSE_BRAVERY: '<:bravery:887419287436926976> ',
    HOUSE_BRILLIANCE: '<:briliance:887419237193371679> ',
    HOUSE_BALANCE: '<:balance:887419323046563850>',
    EARLY_SUPPORTER: '<:zz_earlysupport:879900034785759284>',
    TEAM_USER: 'Team user',
    SYSTEM: 'Sistema',
    VERIFIED_BOT: '<:Bot_Flag:879901889565704222>',
    VERIFIED_DEVELOPER: '<:dev:874717224047374417>',
  MODERATOR: '<:moderator:879955583447486494>',
  DISCORD_NITRO: '<:nitro:880910908879159348>'
};


exports.run = async (bot, message, args) => {

  

  let prefixo_fera = db.get(`ferinha_prefixo_${message.guild.id}`);
  if (prefixo_fera === null) prefixo_fera = ')';

        let user =await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

        const userFlags = user.user.flags.toArray();

        let money = await db.fetch(`money_${user.id}`);

        let bank = await db.fetch(`bank_${user.id}`);

        let premium = await db.fetch(`premium_${user.id}`);

        let sobremim = await db.fetch(`aboutme_${message.author.id}`);

        let xpzin = await db.fetch(`xp_${user.id}`);

        let casado = db.fetch(`casado_${user.id}`)

        if(sobremim === null) sobremim = `use ${prefixo_fera}setinfo, to edit this message.`
        if(bank === null) bank = 0
        if(money === null) money = 0
        if(xpzin === null) xpzin = 0
        if(premium === null) premium = ``
        if(casado ===null) casado = ``

        const embed = new MessageEmbed()
            .setTitle(`${user.user.username}'s Profile'`)
            .setColor(`GREEN`)
            .setFooter('Profile')
            .setTimestamp()
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .setImage("")
            .addFields(
        {
            name: '__Wallet:__',
            value: `:dollar: \`${money}\``,
            inline: false
        },
        {
          name: '__Bank:__',
          value: `:coin: \`${bank}\``,
          inline: false
        },
        {
          name: '__Badges:__',
          value: `${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : ''} ${casado}`,
          inline: false
        },
        {
          name: '__About me:__',
          value: `${sobremim}`,
          inline: false
        },
    )

        await message.lineReply(`${message.author}`, embed)
    }
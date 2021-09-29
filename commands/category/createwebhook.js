const db = require('quick.db');
const Discord = require("discord.js");
const jimp = require("jimp");
const ms = require('parse-ms');
const Canvas = require('canvas');
//Script feito por: Batata Humana 1
exports.run = async (client, message, args) => {


        let canalsetado = db.get(`setlogadm_${message.guild.id}`);
                message.channel.send(`Qual o nome da pessoa?`).then(m2 => { 
                    let cp = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1})
                    .on('collect', c => {
                        nome = c.content
                        
                        message.channel.send(`Qual a foto de perfil?`).then(m3 => {
                            let cd = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1})
                            .on('collect', c => {
                                foto = c.content

                                message.channel.send(`Oque essa pessoa vai dizer?`).then(m3 => {
                                    let vr = message.channel.createMessageCollector(x => x.author.id === message.author.id, {max: 1})
                                    .on('collect', c => {
                                        fala = c.content

                                        let avatar = {avatar: `${foto}`}

                                        message.channel.createWebhook(nome, avatar).then(w => { 
                                            w.send(fala).then((
                                            ) => w.delete())           


                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    }//da os crédit ai nmrl :D
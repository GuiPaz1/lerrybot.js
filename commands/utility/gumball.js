module.exports = {
    name: 'gumball',
    run: async (client, message, args) => {

 let name = ('Gumball');
 let user = message.author       

 let imagens = [
    "https://cdn.discordapp.com/attachments/877078582168522808/877457716153577512/450.png",
 ]

 let imagem = imagens[Math.floor(Math.random() * imagens.length)]

 let avatar = {avatar: imagem}

 let frases = [
    "Quer ser um expectador na vida? Ou quer ser um personagem?",
    "Devemos desfrutar de cada momento da nossa vida, porque ela pode ser muito longa ou muito curta.",
    "Não se preocupe. Você se sairá melhor da próxima vez... depois de uns anos de treino intensivo.",
    "Meu cérebro é incrível, quando eu acho que algo é aborrecido, ele realmente me impede de escutar.",
    "Sinto pena dos personagens secudários...",
    "Meu irmão é um peixe.",
    "Quem será o favorito do papai?",
 ]

 let mensagem = frases[Math.floor(Math.random() * frases.length)]

 message.channel.createWebhook(name, avatar).then(webhook => { 
 webhook.send(mensagem).then(() => webhook.delete())})
    }
}
const db = require('quick.db') // Database

exports.run = async (client, message, args) => {
    let err1 = `You didn't put any message`
    let sucesso = `Great, now you've changed your info!`

    //Vars
    var msg = args.join(' ') // Arguments

    // Erro, ao ver que não há nenhuma mensagem
    if (!msg) {
        return message.channel.send(message.author, {
            embed: {
                title: 'Erro',
                color: 'RED',
                description: err1
            }
        })
    } else {
        await db.set(`aboutme_${message.author.id}`, msg) // Mudando valor da database para a mensagem personalizada
        message.channel.send(message.author, {
            embed: {
                color: 'GREEN',
                title: 'Success!',
                description: success
            }
        })
    }
} 
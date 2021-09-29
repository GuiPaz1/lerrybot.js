module.exports = {
    name: "serverlist",
    description: "Mostra a lista de servidores que o bot está",
    run: async (client, message, args, storage) => {
  
     if (!['797178329312264202', '828343709945823232', '522612040242823169'].includes(message.author.id))
      return message.reply(
        "Apenas os criadores do bot pode utilizar esse comando!")

  message.author.send(`Salve! https://replit.com/@lerrybot/lerrybotjs , tá ai!`)
  message.channel.send(`Foi enviado para seu pv`)    
    }
  }
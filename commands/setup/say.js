exports.run = async(client, message, args) => {

let msg = args.join(" ")

if(!msg) return message.channel.send(`insert something for me to say.`)

message.channel.send(`${msg}\n\n*Message sent by ${message.author}*`)

}
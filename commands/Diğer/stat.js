const Discord = require("discord.js"),
  os = require('os');

exports.run = async (client, message, args) => {
  let embed = new Discord.MessageEmbed()
  
  .setColor("RANDOM")
  .setImage("https://media.discordapp.net/attachments/976914488181784626/976921311156781097/discord_porn-1024x427.jpg?width=960&height=400")
    .addField(
      `<:Info:973975005471834233> ・Sunucu Sayısı:`, `${client.guilds.cache.size}`,
    )
  
    .addField(
      `<:Members:974345579016626246> ・Kullanıcı Sayısı:`, `${client.users.cache.size}`,
    )
  
    .addField(
      `<:Channel:973974124949045248> ・Kanal Sayısı:`, `${client.channels.cache.size}`, 
    )
  
    .addField(
    `<:role_bot:973980012124442634> ・RAM Kullanımı:`, `${Math.trunc((process.memoryUsage().heapUsed) / 1024 / 1000)} MB / ${Math.trunc(os.totalmem() / 1024 / 1000)} MB (${Math.round((Math.round(process.memoryUsage().heapUsed / 1024 / 1024) / Math.round(os.totalmem() / 1024 / 1024)) * 100)}%)`,
   )
  
    .addField(
      `<:js:973977531508195350> ・Kütüphane:`, `Discord.js ${Discord.version}`,
    )
  
    .addField(
      `<a:ayukleniyor:976807798123933747> ・Çalışma Süresi:`, "" + (Math.round(client.uptime / (1000 * 60 * 60))) + " Saat, " + (Math.round(client.uptime / (1000 * 60)) % 60) + " Dakika" + (Math.round(client.uptime / 1000) % 60) + " Saniye" + ""
    )

  message.channel.send(embed);
};

exports.help = {
  name: "stat",
  description: "Botun Statlarını Verir.",
  usage: "stat",
  example: "stat"
};

exports.conf = {
  aliases: [],
  cooldown: 5 // Integer = Saniye
};
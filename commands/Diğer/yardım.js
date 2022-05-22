const Discord = require("discord.js"),
disbut = require("discord-buttons");

exports.run = async (client, message, args) => {
    var help = new Discord.MessageEmbed()
    
    .setImage("https://media.discordapp.net/attachments/952585292907434034/976887583156080711/Help_Menu_Image.gif?width=346&height=183")
    .setThumbnail("https://media.discordapp.net/attachments/952585292907434034/976887583516803162/Help_Menu_Thumbnail.gif?width=413&height=232")
    
    .addField(
      ':underage: NSFW Komut Listesi: ', '`4k` - `anal` - `ass` - `boobs` - `hanal` - `hass` - `hboobs` - `hentai` - `hkitsune` - `hmidriff` - `hneko` - `holo` - `kemonomimi` - `neko` - `pgif`- `pussy`- `yaoi`'
    )
    
    .addField(
      '<:amaviayar:973971617468260442> Diğer Komutlar:', '`yardım` - `stat`'
    )
    
    .addField(
      '<:ainfo:973975005471834233> Ek Bilgiler:', `Mevcut Prefix: ${client.config.prefix}`
    )
    
    .setTimestamp()
    .setFooter(message.author.username, message.author.AvatarURL)

    message.channel.send(help)
};

exports.help = {
  name: "yardım",
  description: "Bottaki Tüm Komutları Gösterir",
  usage: "yardım",
  example: "yardım"
};

exports.conf = {
  aliases: [],
  cooldown: 5 // Integer = Saniye.
};
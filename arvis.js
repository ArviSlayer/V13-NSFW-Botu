const Discord = require("discord.js"),
  nsfwBot = require("./handler/Client.js"),
  client = new nsfwBot(),
  config = require('./config.json');

require("discord-buttons")(client);
require("./handler/Module.js")(client);
require("./handler/Event.js")(client);
client.on("warn", console.warn); // Bu, botunuzda bir sorun olması durumunda sizi loglar aracılığıyla uyaracaktır.
client.on("error", console.error); // Bu, kodlamanızda eksik bir şey varsa loglar aracılığıyla size hata mesajı gönderecektir.

client.login(process.env.TOKEN).catch(console.error);

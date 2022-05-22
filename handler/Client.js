const {
  Client,
  Collection
} = require("discord.js"),
superagent = require('superagent');

module.exports = class TutorialBot extends Client {
  constructor(options) {
    super(options)

    this.commands = new Collection(); // Bu, komutlarınızı saklayacaktır.
    this.cooldowns = new Collection(); // Bu, komutlarınızı cooldown'larla saklayacaktır.
    this.aliases = new Collection(); // Bu, alternatif komutlarınızı saklayacaktır. Örnek: /sunucu -> /sunucubilgi, /guild, /guildbilgi
    this.config = require('../config.json');
    this.superagent = superagent
    this.package = require("../package.json");
    this.recent = new Set();
  }
}
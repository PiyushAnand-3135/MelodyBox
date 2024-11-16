const { execute } = require("./help");

module.exports = {
  name: "ping",
  description: "replies with pong !",
  async execute(client, message, args) {
    message.reply("🏓 Pong !");
  },
};

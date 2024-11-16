const { EmbedBuilder, Embed } = require("discord.js");

module.exports = {
  name: "queue",
  description: "Replies with the current queue",
  async execute(client, message, args) {
    const queue = client.distube.getQueue(message.guild.id);

    if (!queue) {
      message.reply("❌ There is no music playing currently.");
    }

    try {
      const queueEmbed = new EmbedBuilder()
        .setColor(0x00ff00)
        .setTitle("Current Music queue")
        .setDescription("Here are the next few songs in the queue");

      queue.songs.forEach((song, index) => {
        queueEmbed.addFields({
          name: `${index + 1}. ${song.name}`,
          value: `Duration: \`${song.formattedDuration}\``,
          inline: false,
        });
      });

      message.reply({ embeds: [queueEmbed] });
    } catch (error) {
      console.error(error);
      message.reply(
        `❌ An error occurred while fetching the queue: ${error.message}`
      );
    }
  },
};

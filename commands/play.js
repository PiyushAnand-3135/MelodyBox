const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'play',
    description: 'Plays the song by searching or entered URL',
    async execute(client, message, args) {
        const query = args.join(' ');
        
       
        if (!query) {
            return message.reply("🎶 Please specify a song name or URL.");
        }

        
        if (!message.member.voice.channel) {
            return message.reply("🔊 You need to join a voice channel first!");
        }

        try {
            
            const searchingEmbed = new EmbedBuilder()
                .setColor(0x0099ff)  // Light blue color
                .setTitle("🔍 Searching...")
                .setDescription(`Looking for **${query}** 🎶`)
                .setFooter({ text: "Please wait a moment" });

            const searchMessage = await message.reply({ embeds: [searchingEmbed] });

            
            await client.distube.play(message.member.voice.channel, query, {
                textChannel: message.channel,
                member: message.member,
            });

            
            const playingEmbed = new EmbedBuilder()
                .setColor(0x00ff00)  
                .setTitle("🎶 Now Playing")
                .setDescription(`**${query}** is now playing! Enjoy! 🎧`)
                .setFooter({ text: "Requested by " + message.member.displayName });

            await searchMessage.edit({ embeds: [playingEmbed] });

        } catch (error) {
            console.error(error);
            message.reply(`❌ An error occurred: ${error.message}`);
        }
    }
};

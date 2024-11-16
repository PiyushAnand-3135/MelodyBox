const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Shows the help message with available commands',
    execute(client, message, args) {
        const helpEmbed = new EmbedBuilder()
            .setColor(0x0099FF)  // Blue color
            .setTitle('🎉 Help - Bot Commands')
            .setDescription('Here are the available commands:')
            .addFields(
                { name: '!play <song>', value: 'Searches for a song and plays it in a voice channel.' },
                { name: '!stop', value: 'Stops the current song and clears the queue.' },
                { name: '!skip', value: 'Skips the current song.' },
                { name: '!pause', value: 'Pauses the current song.' },
                { name: '!resume', value: 'Resumes the paused song.' }
            )
            .setFooter({ text: 'Use !<command> to interact with the bot.' });

        
        message.reply({ embeds: [helpEmbed] });
    }
};

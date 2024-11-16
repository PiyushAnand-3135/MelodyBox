
    module.exports = {
    name : 'stop',
    description : 'Stops the music playback',
    async execute(client, message, args){
        try{
            client.distube.stop(message.guild.id);
            message.reply('🎶 Music stopped and the queue has been cleared!');
        } catch(error){
            console.error(error);
            message.reply('❌ An error occurred while trying to stop the music.');
        };
    }
}
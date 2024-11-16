module.exports = {
    name: 'resume',
    description: 'resumes the paused song',
    async execute(client, message){
        const queue = client.distube.getQueue(message.guild.id);
        if(!queue) {
            return message.reply(" There's no song playing right now.");
        }
        if(!queue.paused){
            return message.reply("🎵 The song is already playing");
        }

        try{
            await queue.resume();
            message.reply("▶️ The song has been resumed.")
        } catch (error) {
            console.error(error);
            message.reply("❌ An error occurred while resuming the song.");
        }
    }
}
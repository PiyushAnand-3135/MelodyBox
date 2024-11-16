module.exports = {
    name: 'pause',
    description: 'pauses the current playing song',
    async execute(client, message){
        const queue = client.distube.getQueue(message.guild.id);
        if(!queue) {
            return message.reply(" There's no song playing right now.")
        }

        if(queue.paused){
            return message.reply("🎶 The song is already paused.")
        }

        try{
            await queue.pause();
            message.reply("⏸️ The song has been paused.")
        } catch(error){
            console.error(error);
            message.reply("❌ Error pausing song !")
        }
    }
}
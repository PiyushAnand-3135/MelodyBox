module.exports = {
    name: 'skip',
    description: 'skips the current track and move to the next in the queue',
    async execute(client, message , args){
        const queue = client.distube.getQueue(message.guild.id);
        if(!queue){
            return message.reply("❌ There is no music playing to skip.");
        }

        try{
            await queue.skip();
            message.reply("Song⏭️ has been skipped.")
        } catch(error){
            console.error(error);
            message.reply("Error Skipping the song !")
        }
    }
}
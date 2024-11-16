const dotenv = require('dotenv');
const { DisTube } = require('distube');
const {YouTubePlugin} = require('@distube/youtube')
const { Client, GatewayIntentBits, Partials, Collection, EmbedBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

// env config
dotenv.config();


// discord js client
const client = new Client({
    intents: [
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.Guilds
    ],
    partials: [Partials.Channel],
})

client.distube = new DisTube(client, {
    emitNewSongOnly: true,
    plugins: [new YouTubePlugin()]
});

// initialize a collection/map to store all the commands -> organization is better
client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

// map each command by iterating over each one
for (const file of commandFiles) {
    const command = require(path.join(commandsPath, file));
    client.commands.set(command.name, command);
}


// ready event-> bot when online
client.on('ready', () => {
    console.log(`${client.user.tag} is online !`);
});

client.on('messageCreate', async (message) => {
    console.log(`Received message: ${message.content}`);
    const prefix = "!";
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName);

    if(!command){
        return message.reply(`❗ Command not found : ${commandName}`);
    }

    try{
        await command.execute(client, message, args);
    } catch(error){
        console.error(`Error executing ${commandName} : ${error}`);
        message.reply(`Error executing command !`);
    }
})

client.distube.on('playSong', (queue, song) => {
    const playingEmbed = new EmbedBuilder()
        .setColor(0x00ff00)  // Green color
        .setTitle("🎶 Now Playing")
        .setDescription(`**${song.name}** - \`${song.formattedDuration}\` 🎧`) // Song title and duration
        .setURL(song.url)  // Adds a link to the song
        .setFooter({ text: "Requested by " + song.user.username });

    queue.textChannel.send({ embeds: [playingEmbed] });
});

client.login(process.env.BOT_TOKEN);
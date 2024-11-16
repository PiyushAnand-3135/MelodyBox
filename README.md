# 🎶 Discord Music Bot

A simple music bot built using Discord.js and DisTube, which can play songs, pause, resume, skip, and more! This bot allows users to play music directly from YouTube, Spotify, or other sources through simple commands.

## Features

- **Play Music**: Search or directly paste a YouTube URL to play songs.
- **Pause & Resume**: Pause the currently playing song and resume it.
- **Skip Song**: Skip the current song and play the next one in the queue.
- **Queue**: View the current queue and see what songs are coming up next.

## Commands

- `!play [song name or URL]` - Play a song or playlist by name or URL.
- `!pause` - Pause the currently playing song.
- `!resume` - Resume the paused song.
- `!skip` - Skip the current song.
- `!queue` - Show the current song queue.
- `!stop` - Stop the music and clear the queue.

## Requirements

- Node.js (v16.6.0 or higher)
- A Discord Bot Token

## Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/music-bot.git
    cd music-bot
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your bot token:

    ```bash
    BOT_TOKEN=your-discord-bot-token
    ```

4. Start the bot:

    ```bash
    node app.js
    ```

## Usage

Once the bot is running, invite it to your server, join a voice channel, and use the commands to play music!

For example:

- `!play Never Gonna Give You Up`
- `!pause`
- `!resume`
- `!skip`

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This bot is open-source and available under the MIT License.


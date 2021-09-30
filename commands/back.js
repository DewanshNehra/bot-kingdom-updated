const { MessageEmbed } = require("discord.js");
const { TrackUtils } = require("erela.js");

module.exports = {
    name: 'back',
    aliases: ['previous'],
    description: "Goes back to the previous song.",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    
    run: async (client, message, args, { GuildDB }) => {
        let player = await client.Manager.get(message.guild.id);
    
        
        if (!player || !player.playing) return message.channel.send(`No music currently playing ${message.author}... try again ? ❌`);

        if (!player.previousTracks[1]) return message.channel.send(`There was no music played before ${message.author}... try again ? ❌`);

        await player.queue.back();

        message.channel.send(`Playing the **previous** track ✅`);
    },
};

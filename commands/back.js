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
        if (!player) return client.sendTime(message.channel, "❌ | **Nothing is playing right now...**");
        const queue = player.getQueue(message.guild.id);
        
        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author}... try again ? ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`There was no music played before ${message.author}... try again ? ❌`);

        await queue.back();

        message.channel.send(`Playing the **previous** track ✅`);
    },
};

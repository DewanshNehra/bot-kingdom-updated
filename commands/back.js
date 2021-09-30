const { MessageEmbed } = require("discord.js");
const { TrackUtils } = require("erela.js");

module.exports = {
    name: 'back',
    aliases: ['previous'],
    description: "Moves a track to the front of the queue.",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
},
    
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, { GuildDB }) => {
    const player = client.manager.get(message.guild.id);

    if (!player)
      return client.say.ErrorMessage(message, "The bot is currently not playing.");

    if (!client.canModifyQueue(message)) return;

    const track = player.queue.previous;

    if (!track)
      return client.say.WarnMessage(message, "No previous track was found.");

    player.queue.add(track, 0);
    player.stop();

    return client.say.QueueMessage(client, player, "Backed to the previous song.");
  }
};

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
    const player = bot.manager.get(message.guild.id);

    if (!player)
      return bot.say.ErrorMessage(message, "The bot is currently not playing.");

    if (!bot.canModifyQueue(message)) return;

    const track = player.queue.previous;

    if (!track)
      return bot.say.WarnMessage(message, "No previous track was found.");

    player.queue.add(track, 0);
    player.stop();

    return bot.say.QueueMessage(bot, player, "Backed to the previous song.");
  }
};

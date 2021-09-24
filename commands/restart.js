const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "restart",
  description: "Restart the Bot ( use this command is there is any issue with the bot) ",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["rs", "rst"],
  run: async (client, message, args) => {
		if (message.author.id !== '746777830121013349') {
			return message.channel.send('You cannot use this command!');
		}
		await message.channel.send('Restarting bot...give it 2 sec');
		return process.exit();
	},
};
	

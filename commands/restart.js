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
		if (message.author.id === '781530231114563584') {
			return message.channel.send('You cannot use this command!');
		}
		await message.channel.send('Restarting bot...(DONT REPEACT THE CMD AFTER EVERY SEC GIVE A TIME OF 10 MIN B/W EVERY RESTART :)');
	        process.exit()
                
		
	},
};
	

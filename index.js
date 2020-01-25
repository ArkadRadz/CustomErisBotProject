const Eris = require("eris");
const token = require('./token.js');

var bot = new Eris(token.token);

bot.on("ready", () => {
	console.log("Ready!");
});

bot.on("messageCreate", (msg) => {
	if (msg.content === "!Pang") {
		bot.createMessage(msg.channel.id, "Sam jesteś Pang!");
	}
});

bot.connect();

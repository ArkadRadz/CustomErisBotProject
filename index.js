const Eris = require("eris");
const token = require('./token.js');
const gothic = require("./addons/gothic");

// var bot = new Eris(token.token);

const bot = new Eris.CommandClient(token.token, {}, {
    description: "A test bot made with Eris",
    owner: "somebody",
	prefix: "!",
});

bot.on("ready", () => {
	bot.editStatus("Kopalnia w Starym Obozie", {
		name: "Kopię rudę dla Gomeza"
	});
	console.log("Ready!");
});

bot.on("messageCreate", (msg) => {
	if (msg.content === "!Pang") {
		bot.createMessage(msg.channel.id, "Sam jesteś Pang!");
	}
});

const gomezCommand = bot.registerCommand("jg", msg => { // Make an echo command
	return {
		embed: {
			title: "Pocałuj mnie w dupę " + msg.author.username + "!",
			image: {
				url: gothic.link,
			}
		}
	}
});

const diceCommand = bot.registerCommand("kostka", (msg, args) => {
	var min = 1;
	var finalRolls = [];
	args.forEach(element => {
		var random = Math.floor(Math.random() * (+element - +min)) + +min; 
		finalRolls.push(msg.author.username + " wyrzucił dla kostki " + element + " następującą liczbę oczek: " + random);
	});

	return {
		embed: {
			title: finalRolls.length + " rzutów kostką przez @" + msg.author.username,
			author: {
				name: msg.author.username,
				icon_url: msg.author.avatarURL
			},
			description: finalRolls.join('\n')
		}
	}
});

const weatherCommand = bot.registerCommand("pogoda", (msg, args) => {
	var location = args.join(" ");
	return {
		embed: {
			title: "Pogoda w: " + location,
			author: {
				name: msg.author.username,
				icon_url: msg.author.avatarURL
			},
			image: {
				url: "https://pl.wttr.in/" + location + ".png",
			}
		}
	}
})

bot.connect();

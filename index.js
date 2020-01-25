const Eris = require("eris");
const fs = require('fs');

var token = '';

fs.readFile('./token.txt', 'utf-8', (err, data) => {
  if(err) { throw err; }
  token = data;
});

var bot = new Eris(token);

bot.on("ready", () => {
    console.log("Ready!");
});
bot.on("messageCreate", (msg) => {
    if(msg.content === "!ping") {
        bot.createMessage(msg.channel.id, "Pong!");
    }
});
bot.connect();

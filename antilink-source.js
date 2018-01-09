const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("kk");
  client.user.setGame(client.guilds.size + " servers / al!help")
});

client.on("message", (message) => {
  if (message.content.includes("https://")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete(1);
    message.channel.sendMessage("No links here, " + message.author)
  }
  if (message.content.includes("http://")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete(1);
    message.channel.sendMessage("No links here, " + message.author)
  }
  if (message.content.includes("www.")) {
    console.log("deleted " + message.content + " from " + message.author)
    message.delete(1);
    message.channel.sendMessage("No links here, " + message.author)
  }
  if (message.content.includes("al!help")) {
    console.log("help from " + message.author)
    message.channel.sendMessage("Hello, " + message.author + "! My main purpose is to protect your server from unwanted links, but I have commands too!\n**al!invite** - Invite bot to your server\n**al!ping** - Ping-pong\n**al!changelog** - Bot changelog\nMore commands to come in future!")
  }
  if (message.content.startsWith("al!invite")) {
    console.log("invite from " + message.author)
    message.channel.sendMessage("discordapp.com/oauth2/authorize?client_id=395881404027633665&scope=bot&permissions=58368")
  }
  if (message.content.startsWith("al!ping")) {
    console.log("ping from " + message.author)
    message.channel.sendMessage("Pong! " + client.ping + "ms.")
  }
  if (message.content.startsWith("al!changelog")) {
    console.log("changelog from " + message.author)
    message.channel.sendMessage("Hello! I (owner, <@284980083104415746>) will try to post any changes did to bot there.\n```\n04.01.2018\n- [BETA] message when bot joins a server\n03.01.2018\n- Changelog added\n- Some kind of smarter protection\n01.01.2018\n- Unpublic help\n28.12.2017\n- First version.\n```")
  }
});

client.on("guildCreate", guild => {
  console.log("Nowy serwer, " + guild.name)
  client.user.setGame(client.guilds.size + " servers / al!help")
});

client.on("guildDelete", guild => {
  console.log("usuniety, " + guild.name)
  client.user.setGame(client.guilds.size + " servers / al!help")
});

client.login("token");
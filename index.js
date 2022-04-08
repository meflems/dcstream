const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("become admin on Frown Cloud", {
    type: "STREAMING",
    url: "https://frownmc.xyz"
  });
});
 
client.login(process.env.TOKEN);
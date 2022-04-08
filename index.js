const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const updatePresence = async (client, state) => {
    // Set the presence
    const activity = {
        name: 'Frown Cloud',
        type: 'WATCHING',
        details: 'frownmc.xyz',
        state: state,
        timestamps: {
            start: Date.now(),
        },
     };
    client.user.setPresence({
        pid: process.pid,
        activity: activity,
        status: 'online',
    });
  };
});
 
client.login(process.env.TOKEN);
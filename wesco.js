const Discord = require ('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ja sam spreman!');
  });
  
  client.on('message', message => {
  if (message.content === 'ping') {
  message.replay('pong');
  }
    });
    
    //THIS MUST BE THIS WAY
    client.login(process.env.BOT_TOKEN);|
    

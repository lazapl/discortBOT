const { config } = require('dotenv');
const { Client, GatewayIntentBits } = require('discord.js');

config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

const TOKEN = process.env.TOKEN;
client.login(TOKEN);

client.on("ready",()=>{
    console.log("ready")
})

client.on("messageCreate", message => {
    console.log(message.content)
})

client.on("channelCreate", async channel => {
    console.log(`channel created: ${channel.name}`)
})
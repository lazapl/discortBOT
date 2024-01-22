
const { ButtonBuilder, ButtonStyle, IntentsBitField, SlashCommandBuilder, ActionRowBuilder, Client, CDN, ComponentType } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})


client.on("ready",(essa)=> console.log("you're on"))



client.on('messageCreate', async (message)=>{

    if(message.content === 'ping'){

        const agreeButton = new ButtonBuilder()
                .setCustomId("confirm")
                .setLabel('Confirm')
                .setStyle(ButtonStyle.Primary)
        const disagreeButton = new ButtonBuilder()
                .setCustomId("cancel")
                .setLabel('Cancel')
                .setStyle(ButtonStyle.Danger)

        const row = new ActionRowBuilder().addComponents(agreeButton, disagreeButton)

        const reply = await message.reply({content: `You play wipe?`, components: [row]})

        const collector = reply.createMessageComponentCollector({componentType: ComponentType.Button})


        collector.on('collect',(i)=>{
            if(i.customId === 'confirm'){
                i.reply("bardzo dobrze")
            }
            else if(i.customId === 'cancel'){
                i.reply("nie dobrze")
            }
        })
    }

})



client.login("MTE5Njg0MjE2MzkyNTk2MjgxNA.GNwXau.NTiCrCN8jiUt_gQ_GpGLmBcPqpK9EIjcUVQwZQ")
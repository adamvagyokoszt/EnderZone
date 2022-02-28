const { Client, Intents, MessageEmbed, Permissions, CommandInteraction, ReactionUserManager, MessageActionRow, MessageButton, Collection } = require("discord.js")
const client = new Client({ intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.DIRECT_MESSAGE_TYPING,Intents.FLAGS.GUILD_MEMBERS,Intents.FLAGS.GUILD_PRESENCES,Intents.FLAGS.GUILD_MESSAGES] });
const botconfig = require("./botconfig.json");

let clientname = "EnderZone bot"

client.on("ready", async() => {
    console.log(`${client.user.username} sikeresn elindult!`)

    let státuszok = [
        "EnderZone Minecraft szerver"
    ]

    setInterval(function() {
        let status = státuszok[Math.floor(Math.random()* státuszok.length)]

        client.user.setActivity(status, {type: "WATCHING"})
    }, 5000)
})


client.login('OTQ3NDU2OTk2MDYyNDA4NzY2.YhtiFg.FUF18tJB5JprfYcVhzcQ1tHeIa8')

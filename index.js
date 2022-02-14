const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "DIRECT_MESSAGES", "GUILD_BANS", "GUILD_MESSAGES"] }
)

client.login(process.env.token)


client.on("ready", () =>{
    console.log("Bot Online")
})

client.on("messageCreate", (message) => {   
    if (message.content == ".attività") {
        message.channel.send(embed)
        var embed = new Discord.MessageEmbed()
        .setTitle("ATTIVITA!")
        .setDescription("FORZA ENTRATE TUTTI IN GAME!!!")
        .setColor("DARK_BLUE")
        .setAuthor("Sardegna, Italy")
        

        message.channel.send({embeds: [embed] })
    }

    if (message.content == "Ciao"){
        message.channel.send("Ciao, come va?")
    }

})

client.on("messageCreate", message => {
    if (message.content.startsWith(".kick")) {
        var utente = message.mentions.members.first();
        if (!message.member.permissions.has('KICK_MEMBERS')) {
            return message.channel.send('Non hai il permesso');
        }
        if (!utente) {
            return message.channel.send('Non hai menzionato nessun utente');
        }
        if (!utente.kickable) {
            return message.channel.send('Io non ho il permesso');
        }
        utente.kick()
            .then(() => {
                var embed = new Discord.MessageEmbed()
                    .setTitle(`${utente.user.username} kickato`)
                    .setDescription(`Utente kickato da ${message.author.toString()}`)

                message.channel.send({ embeds: [embed] })
            })
    }

    if (message.content.startsWith(".ban")) {
        var utente = message.mentions.members.first();
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.channel.send('Non hai il permesso');
        }
        if (!utente) {
            return message.channel.send('Non hai menzionato nessun utente');
        }
        if (!utente.kickable) {
            return message.channel.send('Io non ho il permesso');
        }
        utente.ban()
            .then(() => {
                var embed = new Discord.MessageEmbed()
                    .setTitle(`${utente.user.username} è stato  Bannato`)
                    .setDescription(`Utente bannato da ${message.author.toString()}`)

                message.channel.send({ embeds: [embed] })
            })
    }
})
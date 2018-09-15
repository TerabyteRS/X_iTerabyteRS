const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");



let prefix = 'X_';



client.on("ready", () => {
   console.log("Estoy listo!");
   client.user.setPresence( {
       status: "online",
       game: {
           name: `-help | Estoy en ${client.guilds.size} servidores, genial!!.`,
           type: "PLAYING"
       }
    });

});

client.on("message", (message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();




if(command === 'help'){
  message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');

  const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Ping', 'Compueba la latencia del BOT', true)
    .addField('Avatar', 'Muestra el avatar de un usuario', true)
    .addField('encuesta', 'Ejemp: X_encuesta {nombre} {edad} {rango} ', true)
    .addField('ServerList', 'Muestra Los Servidores Aliados', true)
    .addField('Invitacion', '[Link de invitacion](https://discord.gg/NTBJ8Tv)', true)
    .setFooter("Version 0.1", client.user.avatarURL)
    .setColor(0x66b3ff)



message.author.send({ embed });
}


if(command === 'avatar'){
  let miembro = message.mentions.users.first()
if (!miembro) {
    const embed = new Discord.RichEmbed()
        .setImage(`${message.author.avatarURL}`)
        .setColor(0x66b3ff)
        .setFooter(`Avatar de ${message.author.tag}`);
    message.channel.send({ embed });

} else {
    const embed = new Discord.RichEmbed()
        .setImage(`${miembro.avatarURL}`)
        .setColor(0x66b3ff)
        .setFooter(`Avatar de ${miembro.tag}`);

    message.channel.send({ embed });

};
}



if(command === 'encuesta'){
  let nombre = args[0];
  let edad = args[1];
  let color = args[2];
  message.channel.send(`Hola ${nombre}, tienes ${edad} años y te gustaria ser ${color}.`);

}

if(command === 'decir'){
  let texto = args.join(" ");
if(!texto) return message.channel.send(`Escriba un contenido pára decir.`);


  message.channel.send(texto);

}

if(command === 'ping'){
  let ping = Math.floor(message.client.ping);
  message.channel.send(":ping_pong: Pong!, "+ ping + "ms");

}
if(command === 'Hola'){
    if (!message.content.startsWith(prefix)) return;
if (message.author.bot) return;
       message.channel.send("Hola que tal?");
  }

  if(message.content.startsWith(prefix + "emblem")){
    const embed = new Discord.RichEmbed()
    .setTitle("Este es su título, puede contener 256 caracteres")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(0x00AE86)
    .setDescription("Este es el cuerpo principal del texto, puede contener 2048 caracteres.")
    .setFooter("Pie de página, puede contener 2048 caracteres", client.user.avatarURL)
    .setImage(message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setTimestamp()
    .setURL("https://github.com/CraterMaik")
    .addField("Este es un título de campo", "Este es un valor de campo puede contener 2048 caracteres.")
    .addField("Campo en línea", "Debajo del campo en línea", true)
    .addBlankField(true)
    .addField("Campo en línea 3", "Puede tener un máximo de 25 campos.", true);

  message.channel.send({embed});
}

if(message.content.startsWith(prefix + "ServerList")){
  const embed = new Discord.RichEmbed()
  .setTitle("Servidores Aliados A Esta Comunidad")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0x00AE86)
  .setDescription("Servidores Aliados A Esta Comunidad Gracias A Este Bot X_iTerabyteRS Las Comunidades Aliadas Dan Creditos A Los Demás.")
  .setFooter("Pie de página, puede contener 2048 caracteres", client.user.avatarURL)
  .setImage(message.author.avatarURL)
  .setThumbnail(message.author.avatarURL)
  .setTimestamp()
  .setURL("https://github.com/CraterMaik")
  .addField("Shinobi Legends", "Discord: https://discord.gg/ZaYkS8E")
  .addField("Boku No Héroe Academia", "Discord: https://discord.gg/R7JeTVt", true)
  .addBlankField(true)
  .addField("Disponible", "Disponible Para Aliar A Otro Servidor", true);

message.channel.send({embed});
}

});

client.login(process.env.TOKEN);

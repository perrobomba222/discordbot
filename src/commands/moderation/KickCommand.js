const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**No puedes usar este comando.**");
    const mentionedMember = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if(!reason) reason = "no reason given "
    const kickEmbed = new Discord.MessageEmbed()
    .setTitle(`Fuiste Kickeado de ${message.guild.name}`)
    .setDescription(`**__Razon__**: ${reason}`)
    .setColor("#5708ab")
    .setTimestamp()
    .setFooter(client.user.tag, client.user.displayAvatarURL())
    .setImage('https://cdn.discordapp.com/attachments/818995849924575234/821488928132562984/Untitled-2.png')
    .setFooter('ohiggins team©')
    .addField('__Oportunidad__', 'Para poder volver a entrar al servidor escribele a Admin#9682',);

    if (!args[0]) return message.channel.send("**Necesitas Mencionar a alguien para kickearlo.**");
    if (!mentionedMember.kickable) return message.channel.send("**Esa persona no esta en el Servidor.**");
    try {
      await mentionedMember.send(kickEmbed);
    } catch (err) {
      console.log(`**No Pude Escribirle a la persona.**`);
    }

    try {
      await mentionedMember.kick(reason);
    } catch (err) {
      console.log(err);
      return message.channel.send("**No pude Kickear a la persona mencionada.**")
    } 
  }
}
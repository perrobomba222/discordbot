const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('ban', 'moderation', []);
  }

 async run(client, message, args) {
///////////////////////////////////////////
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**No tienes permiso para banear.**");
  if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("**Mi rol no tiene permiso para banear.**");
///////////////////////////////////////////
  let reason = args.slice(1).join(" ");
  const mentionedMember = message.mentions.members.first();
///////////////////////////////////////////
  if (!reason) reason = 'No reason given';
  if (!args[0]) return message.channel.send('**Necesitas etiquetar a alguien para banearlo.**');
  if (!mentionedMember) return message.channel.send('**El Usuario mencionado no esta en este servidor.**');
  if (!mentionedMember.bannable) return message.channel.send('**No puedo banear a ese usuario**');
///////////////////////////////////////////
  const banEmbed = new Discord.MessageEmbed()
    .setTitle(`Fuiste baneado de ${message.guild.name}`)
    .setDescription(`Razon del baneo: ${reason}`)
    .setColor("#FF0000")
    .setTimestamp()
    .setImage('https://cdn.discordapp.com/attachments/818995849924575234/821488928132562984/Untitled-2.png')
    .setFooter('ohiggins team©')
    .addField('__Oportunidad__', 'Para el desbaneo escribele a Admin#9682',);

    await mentionedMember.send(banEmbed).catch(err => console.log(err));
    await mentionedMember.ban({
      days: 7,
      reason: reason
    }).catch(err => console.log(err)).then(() => message.channel.send("**Baneado completo**" + mentionedMember.user.tag));
  }
}
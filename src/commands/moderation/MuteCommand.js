const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class MuteCommand extends BaseCommand {
  constructor() {
    super('mute', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('**No tienes permiso para usar este comando.**');
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('**Se necesita el rol de __/MANAGE ROLES/__ para poder usar el comando**');

    let reason = args.slice(1).join(" ");
    const muteRole = message.guild.roles.cache.get('821498127411707925');
    const memberRole = message.guild.roles.cache.get('821395801745915944');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const muteEmbed = new Discord.MessageEmbed()
    .setTitle(`Fuiste muteado de ${reason}`)
    .setDescription(`**__Razon del muteo__**: ${reason}`)
    .setColor('#5708ab')
    .setTimestamp()
    .setImage('https://cdn.discordapp.com/attachments/818995849924575234/821488928132562984/Untitled-2.png')
    .setFooter('ohiggins team©')
    .addField('__Oportunidad__', 'Para el desmuteo escribele a Admin#9682',);

    if (!args[0]) return message.channel.send('**Necesitas etiquetar a alguien para mutearlo**');
    if (!mentionedMember) return message.channel.send('**El usuario etiquetado no esta en el servidor**');
    if (mentionedMember.user.id == message.author.id) return message.channel.send('**No Puedes mutearte a ti mismo**');
    if (mentionedMember.user.id == client.user.id) return message.channel.send('**No puedes mutearme cn mi propio comando .-.**');
    if (!reason) reason = '**Ninguna razon dada**';
    if (mentionedMember.roles.cache.has(muteRole.id)) return message.channel.send('**Este usuario ya esta muteado**')
    if (message.member.roles.highest.position <= mentionedMember.roles.highest.position) return message.channel('**No puedes mutear a alguien de tu mismo rango o mayor rango**')

    await mentionedMember.send(muteEmbed).catch(err => console.log(err));
    await mentionedMember.roles.add(muteRole.id).catch(err => console.log(err).then(message.channel.send('**Hubo un problema dando el rango de muteado**')))
    await mentionedMember.roles.remove(memberRole.id).catch(err => console.log(err).then(message.channel.send('**Hubo un problema removiendo el rol de miembo**')))

  }
}
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class UnmuteCommand extends BaseCommand {
  constructor() {
    super('unmute', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('**No tienes permiso para usar este comando.**');
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('**Se necesita el rol de __/MANAGE ROLS/__ para poder usar el comando**');


    const muteRole = message.guild.roles.cache.get('821498127411707925');
    const memberRole = message.guild.roles.cache.get('821395801745915944');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let reason = args.slice(1).join(" ");
    const unmuteEmbed = new Discord.MessageEmbed()
    .setTitle(`**__Fuiste desmuteado de__** ${message.guild.name}`)
    .setDescription(`Razon del desmuteo: ${reason}`)
    .setColor("#FF0000")
    .setTimestamp()
    .setImage('https://cdn.discordapp.com/attachments/818995849924575234/821488928132562984/Untitled-2.png')
    .setFooter('ohiggins team©');


    if (!args[0]) return message.channel.send('**Necesitas etiquetar a alguien para mutear.**');
    if (!mentionedMember) return message.channel.send('**El miembro etiquetado no esta en el servidor.**');
    if (mentionedMember.user.id == message.author.id) return message.channel.send('**No puedes mutearte a ti mismo .-.**');
    if (mentionedMember.user.id == client.user.id) return message.channel.send('**No puedes mutearme con mi propoo comando!**');
    if (!reason) reason = '**Ninguna razón dada.**';
    if (mentionedMember.roles.cache.has(memberRole.id)) return message.channel.send('**Este usuario ya esta desmuteado.**');
    if (message.member.roles.highest.position <= mentionedMember.roles.highest.position) return message.channel.send('**No puedes desmutear a un rango mayor.**');

    await mentionedMember.send(unmuteEmbed).catch(err => console.log(err));
    await mentionedMember.roles.add(memberRole.id).catch(err => console.log(err). then(message.channel.send('**Hubo un problema dando el rol de muteado.**')));
    await mentionedMember.roles.remove(muteRole.id).catch(err => console.log(err). then(message.channel.send('**Hubo un problema removiendo el rol de Miembro.**')));
  }
}
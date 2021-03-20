const { DiscordAPIError } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super('avatar', 'fun', []);
  }

  async run(client, message, args) {
    let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!mentionedMember) mentionedMember = message.member;

    const embed = new Discord.MessageEmbed()
    .setTitle(`Foto de perfil de ${mentionedMember.user.tag}` )
    .setImage(mentionedMember.user.displayAvatarURL())
    .setFooter('ohiggins team©');

    message.channel.send(embed);
  }
}
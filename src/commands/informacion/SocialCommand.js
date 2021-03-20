const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class SocialCommand extends BaseCommand {
  constructor() {
    super('social', 'informacion', []);
  }

  async run(client, message, args) {
    const youtubeEmbed = new Discord.MessageEmbed()
      .setTitle('Guechuraba')
      .setURL('https://www.youtube.com/channel/UCzf7RBCYIVTQqSXdk8BkxAw')
      .setThumbnail('https://cdn.discordapp.com/attachments/821400883198951446/821803866613874788/1200px-Logo_of_YouTube_2015-2017.svg.png')
      .setColor('#FF0000')
      .addField('__Info__', 'Vayan a ver el canal de Guechuraba')
      .setTimestamp()
      .setFooter('ohiggins team©', 'https://cdn.discordapp.com/attachments/818995849924575234/821488928132562984/Untitled-2.png');

      const twitchEmbed = new Discord.MessageEmbed()
      .setTitle('Perroo_Bombaa')
      .setURL('https://www.twitch.tv/perroo_bomba')
      .setThumbnail('https://cdn.discordapp.com/attachments/821400883198951446/821803610463141958/580b57fcd9996e24bc43c540.png')
      .setColor('#800080')
      .addField('__Info__', 'Vayan a ver el twitch de Perro_Bomba')
      .setTimestamp()
      .setFooter('ohiggins team©', 'https://cdn.discordapp.com/attachments/818995849924575234/821488928132562984/Untitled-2.png');

    await message.channel.send(youtubeEmbed).catch(err => console.log(err));
    await message.channel.send(twitchEmbed).catch(err => console.log(err));


  }
}
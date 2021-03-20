const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class MiembrosCommand extends BaseCommand {
  constructor() {
    super('miembros', 'informacion', []);
  }

  async run(client, message, args) {
    const maxito = new Discord.MessageEmbed()
      .setTitle('Maxito El Wea')
      .setURL('https://www.twitch.tv/maxitoelwea')
      .setThumbnail('https://cdn.discordapp.com/attachments/821400883198951446/821803610463141958/580b57fcd9996e24bc43c540.png')
      .setColor('#572364')
      .addField('__Info__', 'Vayan a ver el canal de **Maxito El Wea**')
      .setTimestamp()
      .setFooter('ohiggins team©', 'https://cdn.discordapp.com/attachments/818995849924575234/821488928132562984/Untitled-2.png')
      .addField('__Link__', 'Presiona el nombre (azul) para ir a su twitch.',);

      const F4b1 = new Discord.MessageEmbed()
      .setTitle('F4b1')
      .setURL('https://www.twitch.tv/gf4b1_')
      .setThumbnail('https://cdn.discordapp.com/attachments/821400883198951446/821803610463141958/580b57fcd9996e24bc43c540.png')
      .setColor('#572364')
      .addField('__Info__', 'Vayan a ver el canal de **F4b1**')
      .setTimestamp()
      .setFooter('ohiggins team©', 'https://cdn.discordapp.com/attachments/818995849924575234/821488928132562984/Untitled-2.png')
      .addField('__Link__', 'Presiona el nombre (azul) para ir a su twitch.',);

    await message.channel.send(F4b1).catch(err => console.log(err));
    await message.channel.send(maxito).catch(err => console.log(err));


  }
}
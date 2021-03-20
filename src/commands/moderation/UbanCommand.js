const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class UbanCommand extends BaseCommand {
  constructor() {
    super('uban', 'moderation', []);
  }

  async run(client, message, args) {
    ///////////////////////////////////////////
      if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**No tienes permiso para banear.**");
      if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("**Mi rol no tiene permiso para banear.**");
    ///////////////////////////////////////////
      let reason = args.slice(1).join(" ");
      let userID = args[0];
    ///////////////////////////////////////////
      if (!reason) reason = 'No reason given';
      if (!args[0]) return message.channel.send('**Necesitas etiquetar a alguien para desbabanearlo.**');
      if (!isNaN(args[0])) return message.channel.send('**La id dada no es un numero.**')
    //////////////////////////////////////////
    message.guild.fechBans().them(async bans => {
      if (bans.size == 0) return message.channel.send('**Este servidor no tiene a nadie baneado.**');
      let bUser = bans.find(b => b.user.id == userID);
      if (!bUser) return message.channel.send('**El id del usuario dada no esta baneada.**')
      await message.guild.members.unban(bUser.user, reason).catch(err => {
        console.log(err);
        return message.channel.send('**Algo salió mal desbaneando el id.**');
      }).then(() => {
        message.channel.send(`**Exitosamente Desbaneado ${arg[0]}**`);
      });
    });
  }
}
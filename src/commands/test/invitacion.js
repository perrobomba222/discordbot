const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
  constructor() {
    super('invitacion', 'Invitacion', []);
  }

  async run(client, message, args) {
    message.channel.send('https://discord.gg/GpWuNhExZ9');
  }
}
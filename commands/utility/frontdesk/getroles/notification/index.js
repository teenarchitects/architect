const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
  config: {
    name: 'notifroles'
  },

  component: true,

  run: async (client, interaction) => {
    const embed = new EmbedBuilder()
    .setColor('#2F3136')
    .setTitle('Notification Roles')
    .setDescription('Do you want to be pinged for important announcements, events, new Discord features? Select your notification roles below!')

    const menu = new SelectMenuBuilder()
    .setCustomId('notifroleselect')
    .setPlaceholder('Select an option')
    .setMinValues(1)
    .setMaxValues(3)
    .addOptions(
      {
        label: 'Announcements',
        description: 'Be notified of important announcements.',
        value: 'announcements',
        emoji: '859424400456679445'
      },
      {
        label: 'Events',
        description: 'Be notified when we host events, podcasts, and streams.',
        value: 'events',
        emoji: '941679946760351794'
      },
      {
        label: 'Everything',
        description: 'Everything above, be notified for new Discord features etc.',
        value: 'everything',
        emoji: '859424401971609600'
      }
    )

    const row = new ActionRowBuilder().addComponents(menu);

    await interaction.reply({
      components: [row],
      embeds: [embed],
      ephemeral: true
    });
    
  }
}
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
  config: {
    name: 'communityroles'
  },

  component: true,

  run: async (client, interaction) => {
    const embed = new EmbedBuilder()
    .setColor('#2F3136')
    .setTitle('Your role')
    .setDescription('What part do you play in other servers? Let others know what you do by selecting the appropriate option below!')

    const menu = new SelectMenuBuilder()
    .setCustomId('comroleselect')
    .setPlaceholder('Select an option')
    .setMinValues(1)
    .setMaxValues(3)
    .addOptions(
      {
        label: 'Community Owner',
        description: 'Do you own a community?',
        value: 'community owner',
        emoji: '859429432380227594'
      },
      {
        label: 'Community Admin',
        description: 'Are you an admin for another community?',
        value: 'community admin',
        emoji: '988409331793948742'
      },
      {
        label: 'Community Mod',
        description: 'Are you a mod for another community?',
        value: 'community mod',
        emoji: '1005388247679119441'
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
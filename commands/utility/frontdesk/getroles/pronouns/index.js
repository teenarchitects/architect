const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
  config: {
    name: 'pronounroles'
  },

  component: true,

  run: async (client, interaction) => {
    const embed = new EmbedBuilder()
    .setColor('#2F3136')
    .setTitle('Pronoun Roles')
    .setDescription('Use the menu below to select what pronouns you\'d like us to display for you.')

    const menu = new SelectMenuBuilder()
    .setCustomId('pronounroleselectmenu')
    .setPlaceholder('Select an option')
    .setMinValues(1)
    .setMaxValues(3)
    .addOptions(
      {
        label: 'He/Him',
        value: 'he/him',
		  emoji: '<:icons_he_him:993850556697292881>'
      },
      {
        label: 'She/Her',
        value: 'she/her',
		  emoji: '<:icons_she_her:993850559851417651>'
      },
      {
        label: 'They/Them',
        value: 'they/them',
		  emoji: '<:icons_they_them:993850567019466792>'
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
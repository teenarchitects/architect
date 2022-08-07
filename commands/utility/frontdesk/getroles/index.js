const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');

module.exports = {
  config: {
    name: 'getroles'
  },

  component: true,

  run: async (client, interaction) => {
    const embed = new EmbedBuilder()
    .setColor('#2F3136')
    .setAuthor({
		name: 'Select your roles',
		iconURL: 'https://us-east-1.tixte.net/uploads/nov.has.rocks/ta-pfp.png'
	})
    .setDescription('Let\'s get your profile looking fire! On this menu we can select from three options, notification roles, pronoun roles and what role you are in servers you manage/own!')

    const nRoles = new ButtonBuilder()
    .setCustomId('notifroles')
    .setEmoji('860123644621226004')
    .setLabel('Notification Roles')
    .setStyle('Secondary')

    const pRoles = new ButtonBuilder()
    .setCustomId('pronounroles')
    .setEmoji('859388127880544296')
    .setLabel('Pronouns Roles')
    .setStyle('Secondary')

    const cRoles = new ButtonBuilder()
    .setCustomId('communityroles')
    .setEmoji('859424401971609600')
    .setLabel('Community Roles')
    .setStyle('Secondary')

    const row = new ActionRowBuilder().addComponents(nRoles, pRoles, cRoles);

    await interaction.reply({
      components: [row],
      embeds: [embed],
      ephemeral: true
    });
  }
}
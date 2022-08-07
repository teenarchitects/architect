const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');

module.exports = {
  config: {
    name: 'viewrules'
  },

  component: true,

  run: async (client, interaction) => {
    const embed = new EmbedBuilder()
    .setColor('#2F3136')
	.setAuthor({
		name: 'Community rules',
		iconURL: 'https://us-east-1.tixte.net/uploads/nov.has.rocks/ta-pfp.png'
	})
    .setDescription('Teenage Architects encourages a fun community where teenagers can chill and release after a long day! However, we have to keep the server fun and safe for everyone.\n\n**1.** All Terms of Service and Community Guidelines apply.\n\
**2.** Keep chats and conversations in English.\n\
**3.** Keep chats and conversations relevant.\n\
**4.** No advertising or self-promotion.\n\
**5.** No toxic behaviour or harassment.\n\
**6.** No DDoS, dox, death or any other threats.\n\
**7.** No slurs and excessive or harmful profanity.\n\
**8.** No spamming in any form.\n\
**9.** No disruptive behaviour in voice chat.\n\
**10.** No evading user blocks, punishments, or bans by using alternating accounts.\n\n• Not every rule will be listed and common sense should be applied throughout your experience. We reserve to punish any user even if the rule isn’t listed above.\n\
For additional information, contact a moderator!\n\
-\n\
Moderators may ask server members to change their Discord tag, status, and about me as they see fit to keep the server safe. **Failure to comply with the requests of a moderator will result in further consequences.**\n\
We consider every report with our utmost concern, and we encourage everyone to report problems as necessary. To maintain our standard of care and support, reports for non-illegal activities must be made within one month of the original incident to be considered. This ensures that Teenage Architects always has the resources to address current problems.')

    const tos = new ButtonBuilder()
    .setStyle('Link')
    .setURL('https://discord.com/terms')
    .setLabel('Discord Terms of Service')

    const guidelines = new ButtonBuilder()
    .setStyle('Link')
    .setURL('https://discord.com/guidelines')
    .setLabel('Discord Community Guidelines')

    const row = new ActionRowBuilder().addComponents(tos, guidelines);

    await interaction.reply({
      embeds: [embed],
      components: [row],
      ephemeral: true
    });
  }
}
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');

module.exports = {
	config: {
	    name: 'booster',
	    description: 'Allows you to customize your own role for boosting',
	    permissions: [{ 
			id: '@everyone', 
			type: 1, 
			permission: false
		}]
	},
	ownerOnly: false,
	  
	run: async (client, interaction) => {
    	const embed = new EmbedBuilder()
		    .setColor('#2F3136')
		    .setAuthor({
				name: 'Select your roles',
				iconURL: 'https://us-east-1.tixte.net/uploads/nov.has.rocks/ta-pfp.png'
			})
		    .setDescription('Edit your custom role!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
		
		const roleNameButton = new ButtonBuilder()
		    .setStyle('Secondary')
		    .setLabel('change role name')
		    .setCustomId('roleName')
		    .setEmoji('866605189029298197')

		const roleColorButton = new ButtonBuilder()
		    .setStyle('Secondary')
		    .setLabel('Change role color')
		    .setCustomId('roleColor')
		    .setEmoji('866605189029298197')

		const roleIconButton = new ButtonBuilder()
		    .setStyle('Secondary')
		    .setLabel('Change role icon')
		    .setCustomId('roleIcon')
		    .setEmoji('866605189029298197')


		const row = new ActionRowBuilder().addComponents(roleNameButton, roleColorButton, roleIconButton);

		await interaction.reply({
		    components: [row],
		    embeds: [embed],
		    ephemeral: true
	    });
	}
}
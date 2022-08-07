const { MessageEmbed, ActionRowBuilder, ButtonBuilder } = require('discord.js');

module.exports = {
  config: {
    name: 'ping',
    description: 'Returns the latency between Discord and Architect',
    permissions: [
      {
        id: '739283148797509734',
        type: '2',
        permissions: false
      }
    ] // MANAGE_MESSAGES or sum if that didnt change
  },

  ownerOnly: false,
  
  run: async (client, interaction) => {
    await interaction.reply({
      content: `Pong! \`${client.ws.ping}\`ms`
    })
  }
}

// slash cmds dont support aliases mb lol
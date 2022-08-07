const {
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    PermissionsBitField
} = require('discord.js');

const embedDescription = "Teenage Architects is a community of high-schoolers that are leading change through building things. We created this space for developers, designers, community managers, and content creators to come together and learn.\n\nWe welcome members with a wide range of experience so that everyone has the opportunity to connect and create great things.\n\nBelow you can review our guidelines and grab some roles for your profile. We encourage you to send a message in <#1003400622671937536> or stop by in <#1003407004519383222>\n\n<:be:1005570217180676186><:ta:1005570220670333028> **Here's some features we're rolling out**\n\n<:dot:1005570224017391666>Everyone who joins prior to us reaching 100 members automatically receives the OG role w/ a hoisted role icon. Our gift for you supporting us early on. \n\n<:dot:1005570224017391666>For a limited time, server boosters can have their own role with the name, color, and icon of their choice. Possibly a bot command to customize this.";

module.exports = {
    config: {
        name: 'frontdesk',
        description: 'test 2',
        permissions: [{
            id: '@everyone',
            type: 'Role',
            permission: false
        }]
    },

    ownerOnly: false,

    run: async (client, interaction) => {
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageGuild)) {
            return await interaction.reply({
                content: 'no',
                ephemeral: true
            });
        }

        const frontdeskEmbed = new EmbedBuilder()
            .setColor('#ff77c0')
            .setAuthor({
                name: 'Welcome to Teenage Architects',
                iconURL: 'https://us-east-1.tixte.net/uploads/nov.has.rocks/ta-pfp.png'
            })
            .setDescription(embedDescription);

        const viewRules = new ButtonBuilder()
            .setStyle('Secondary')
            .setLabel('View Rules')
            .setCustomId('viewrules')
            .setEmoji('860123643756281876')

        const grabRoles = new ButtonBuilder()
            .setStyle('Secondary')
            .setLabel('Get Roles')
            .setCustomId('getroles')
            .setEmoji('866605189029298197')

        const chatWithUs = new ButtonBuilder()
            .setStyle('Link')
            .setLabel('Chat with us')
            .setURL('https://discord.com/channels/1003345544757915708/1003407004519383222')

        const row = new ActionRowBuilder().addComponents(viewRules, grabRoles, chatWithUs);

        await interaction.reply({
            content: 'Frontdesk is being loaded. Feel free to delete this.',
            ephemeral: true
        });

        await interaction.channel.send({
            components: [row],
            embeds: [frontdeskEmbed]
        })
    }
}
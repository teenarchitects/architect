module.exports = async (client, interaction) => {
    if (!interaction.isCommand()) {
        const command = client.components.get(interaction.customId);
        if (!command) return await interaction.reply({
            content: "Command doesn't exist?",
            ephemeral: true
        });

        try {
            await command.run(client, interaction);
        } catch (err) {
            await interaction.reply({
                content: "An error occurred",
                ephemeral: true
            });

            console.log(err);
        }
    } else {
        const command = client.commands.get(interaction.commandName);
        if (!command) return await interaction.reply({
            content: "Command doesn't exist?",
            ephemeral: true
        });

        try {
            await command.run(client, interaction);
        } catch (err) {
            await interaction.reply({
                content: "An error occurred!",
                ephemeral: true
            });

            console.log(err.toString());
        }
    }
}
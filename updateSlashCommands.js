const { REST } = require('@discordjs/rest');
const { Routes, ApplicationCommandPermissionType } = require('discord.js');

const token = process.env['BOT_TOKEN'];

// export the function cus im too lazy
module.exports = async (client, commands) => {
  const parsedCommands = [];

  commands.forEach(cmd => {
    parsedCommands.push(cmd.config);
  });
  
  const clientId = client.user.id;
  const guildId = '1003345544757915708';

  const rest = new REST({ version: '10' }).setToken(token);
  const guild = client.guilds.cache.get(guildId);
  
  try {
    console.log('Refreshing application commands..');

    await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: parsedCommands }
    )
    // ).then(r => {
    //   r.forEach(command => {
    //     console.log(command.id);
        
    //     client.application.commands.permissions.set({
    //      guild: guildId,
    //      command: command.id,
    //      token: token,
    //      permissions: [
    //        {
    //          id: '739283148797509734',
    //          type: ApplicationCommandPermissionType.User,
    //          permission: false,
    //        },
    //     ]})
    //   });
    // });

    console.log('Done');
  } catch (err) {
    console.error(err);
  }

  // await guild.commands.fetch();
  
  // console.log(guild.commands);
  
  // guild.permissions.add({
  //   command: ''
  // })
}
module.exports = async client => {
  console.log(`Client is ready as ${client.user.tag}`);

  require('../updateSlashCommands')(client, client.commands.toJSON());
}


/*
module.exports = {
    name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
}
*/
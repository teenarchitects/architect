module.exports = {
  config: {
    name: 'comroleselect'
  },

  component: true,

  run: async (client, interaction) => {
    const selectedValues = interaction.values;
    const user = interaction.member;

    const roleChecks = [];
    // let message = 'Role(s) added: a0\nRole(s) removed: r0';
    let message = '';

    selectedValues.forEach(async value => {
      const role = interaction.guild.roles.cache.find(x => x.name.toLowerCase() === value);

      const has = user.roles.cache.has(role.id);

      roleChecks.push({
        id: role.id,
        has
      });
    });

    let added = [];
    let removed = [];

    roleChecks.forEach(role => {
      if (!role.has) {
        added.push(role.id);
        user.roles.add(role.id);
      } else {
        removed.push(role.id);
        user.roles.remove(role.id);
      }
    });

    if (added.length) {
      message += `${added.length > 1 ? 'Role(s)' : 'Role'} added: a0`;
    }

    if (added.length) message = message.replace('a0', added.map(x => `<@&${x}>`).join(', '));

    if (removed.length) {
      message += `\n${removed.length > 1 ? 'Role(s)' : 'Role'} removed: r0`;
    }
    
    if (removed.length) message = message.replace('r0', removed.map(x => `<@&${x}>`).join(', '));

    await interaction.update({
      content: message,
      embeds: [],
      components: []
    });
  }
}
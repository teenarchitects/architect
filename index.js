const keepAlive = require('./server.js')();

const {
  Client,
  Collection,
  GatewayIntentBits,
  Partials
} = require('discord.js');
const {
  readdirSync,
  statSync
} = require('fs');

const BOT_TOKEN = process.env['BOT_TOKEN'];

class App {
  constructor() {
    this.client = new Client({
      intents: [GatewayIntentBits.Guilds],
      partials: [Partials.Channel]
    });

    this.client.commands = new Collection();
    this.client.components = new Collection();
  }

  // loadCommands(sourcePath) {
  //   const categories = readdirSync(sourcePath);

  //   categories.forEach(_command => {
  //     const commands = readdirSync(sourcePath + `/${_command}`);

  //     commands.forEach(command => {
  //       const sub = readdirSync(sourcePath + `/${_command}/${command}`);

  //       // so many .foreach sorry
  //       sub.forEach(cmd => {
  //         const f = require(sourcePath + `/${_command}/${command}/${cmd}`);

  //         if (cmd === 'index.js') {
  //           this.client.commands.set(f.config.name, f);
  //         } else {
  //           this.client.interactions.set(cmd.split('.')[0], f);
  //         }
  //       });
  //     });
  //   });
  // }

  loadCommands(path) {
    const children = readdirSync(path);

    children.forEach(child => {
      if (statSync(`${path}/${child}`).isDirectory()) return this.loadCommands(`${path}/${child}`);

      const file = require(`${path}/${child}`);

      if (file.component) {
        this.client.components.set(file.config.name, file);
      } else {
        this.client.commands.set(file.config.name, file);
      }
    });
  }

  loadEvents(sourcePath) {
    const events = readdirSync(sourcePath);

    events.forEach(event => {
      const [name] = event.split('.');
      const file = require(sourcePath + `/${event}`);

      this.client.on(name, file.bind(null, this.client));
    });
  }

  async init() {
    await this.loadEvents('./events');
    await this.loadCommands('./commands');

    this.client.login(BOT_TOKEN);
  }
}


const app = new App();
app.init();
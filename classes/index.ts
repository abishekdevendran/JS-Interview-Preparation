// import every class from the plugins folder and initialize them
import fs from 'fs';
import path from 'path';
import Game from './root';

class PluginLoader {
	constructor() {
		this.loadPlugins();
	}

	loadPlugins() {
		const pluginFiles = fs.readdirSync(path.join(__dirname, './plugins'));
		pluginFiles.forEach((file) => {
			const plugin = require(path.join(__dirname, './plugins', file)).default;
      let pluginInstance = new plugin('A');
			if (pluginInstance instanceof Game) {
				console.log(pluginInstance.info);
			} else {
				console.log('Plugin is not extending Game class');
			}
		});
	}
}

new PluginLoader();

import Game from '../root';

class PluginA extends Game {
  plugin_A_var_1: string;
	constructor(var1: string) {
		super({
			name: 'Plugin A',
			description: 'This is a plugin',
			version: '1.0',
			author: 'John Doe'
		});
    this.plugin_A_var_1 = var1;
    console.log(`Plugin A created with var1: ${this.plugin_A_var_1}`)
	}
}

export default PluginA;

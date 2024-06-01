class Game {
	name: string;
	description: string;
	version: string;
	author: string;
	constructor({
		name,
		description,
		version,
		author
	}: {
		name: string;
		description: string;
		version: string;
		author: string;
	}) {
		this.name = name;
		this.description = description;
		this.version = version;
		this.author = author;
    console.log(`Game ${this.name} created by ${this.author}`)
	}

	get info() {
		return `${this.name} v${this.version} - ${this.description}`;
	}
}

export default Game;

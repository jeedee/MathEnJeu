import Player from "../player";
import Item from "./item";

export default class Banana implements Item {
	readonly name: string = "Banana";
	location: Point;

	constructor(location: Point) {
		this.location = location;
	}

	public use(player: Player): void {
		player.bananaReceive();
	}
}

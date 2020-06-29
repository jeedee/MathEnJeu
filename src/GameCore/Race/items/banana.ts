import Player from "../playerFSM/player";
import Item from "./item";

export default class Banana implements Item {
	readonly type: string = "Banana";
	readonly isForAnsweringQuestion: boolean = false;
	location: Point;

	constructor(location: Point) {
		this.location = location;
	}

	public onPickUp(player: Player): void {
		player.itemPickedUp(this);
	}

	public use(target: Player, from: Player): void {
		target.bananaReceivedFrom(from);
	}
}

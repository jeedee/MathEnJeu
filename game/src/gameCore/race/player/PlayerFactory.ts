import PlayerState from "../../../communication/race/PlayerState";
import User from "../../../server/data/User";
import Inventory from "./Inventory";
import Player from "./Player";
import Status from "./playerStatus/Status";
import StatusFactory from "./playerStatus/StatusFactory";

export default class PlayerFactory {
	public static create(user: User, startLocation: Point, status: Status, inventory: Inventory): Player {
		return new Player(user.userId, startLocation, user.name, status, inventory);
	}

	public static createFromPlayerState(playerState: PlayerState): Player {
		return new Player(
			playerState.id,
			playerState.move.startLocation,
			playerState.name,
			StatusFactory.create(playerState.statusState.statusType, playerState.statusState.statusTimestamp),
			new Inventory(playerState.inventoryState.bananaCount, playerState.inventoryState.bookCount, playerState.inventoryState.crystalBallCount)
		);
	}
}

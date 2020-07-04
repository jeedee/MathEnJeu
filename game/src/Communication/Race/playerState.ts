import { StatusType } from "../../GameCore/Race/player/playerStatus/statusType";
import MoveState from "./moveState";

export default interface PlayerState {
	id: string;
	points: number;
	move: MoveState;
	statusState: StatusState;
	inventoryState: InventoryState;
}

export interface StatusState {
	statusType: StatusType;
	statusTimeStamp: number;
}

export interface InventoryState {
	bananaCount: number;
	crystalBallCount: number;
	bookCount: number;
}

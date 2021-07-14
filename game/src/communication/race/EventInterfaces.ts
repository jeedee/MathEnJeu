import { ItemType } from "../../gameCore/race/items/Item";
import { AnswerDTO } from "./AnswerDTO";
import { PlayerDTO } from "./PlayerDTO";
import { QuestionDTO } from "./QuestionDTO";
import { StartingRaceGridInfo } from "./StartingGridInfo";

//This file contains interfaces to type events that happen between the client and the server for RaceGame.

export interface ItemUsedEvent {
	itemType: ItemType;
	targetPlayerId: string;
	fromPlayerId?: string;
}

export interface MoveRequestEvent {
	playerId: string;
	targetLocation: Point;
}

export interface BookUsedEvent {
	playerId: string;
	targetLocation: Point;
	questionDifficulty: number;
}

export interface GameCreatedEvent {
	gameTime: number;
	gameStartTimeStamp: number;
	grid: StartingRaceGridInfo;
	players: PlayerDTO[];
	isSinglePlayer: boolean;
}

export interface PlayerLeftEvent {
	playerId: string;
}

export interface GameEndEvent {
	players: PlayerDTO[];
}

//Maybe rework targetlocation to put it somewhere else ?
export interface QuestionFoundEvent {
	targetLocation: Point;
	questionDTO: QuestionDTO;
}

export interface QuestionFoundFromBookEvent {
	questionDTO: QuestionDTO;
}

export interface AnswerCorrectedEvent {
	answerIsRight: boolean;
	correctionTimestamp: number;
	targetLocation: Point;
}

export interface QuestionAnsweredEvent {
	playerId: string;
	clientTimestamp: number;
	answerTimestamp: number;
	targetLocation: Point;
	answer: AnswerDTO;
}

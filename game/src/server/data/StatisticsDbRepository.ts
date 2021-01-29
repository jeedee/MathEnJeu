import UserInfo from "../../communication/user/UserInfo";
import StatisticsRepository from "./StatisticsRepository";

export default class StatisticsDbRepository implements StatisticsRepository {
	constructor() {}
	addAnsweredQuestionStats(
		gameId: number,
		player: UserInfo,
		timeWhenAnswered: Date,
		datetimeCreated: Date,
		questionId: number,
		answerText?: string,
		answerId?: number
	): void {
		return;
	}

	async addGameStats(gameDuration: number, gameType: string, startPlayerCount: number, datetimeCreated: Date): Promise<number> {
		return await 9;
	}

	updateEndGameStats(gameId: number, endPlayercount: number, datetimeEnded: Date): void {
		return;
	}
}

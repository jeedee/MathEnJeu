import { Question } from "../../gameCore/race/question/Question";

export default interface QuestionRepository {
	getQuestionsIdByDifficulty(language: string, schoolGradeId: number, difficulty: number): Promise<number[]>;
	getQuestionById(questionId: number, language: string, schoolGradeId: number): Promise<Question>;
	addQuestionError(questionId: number, languageShortName: string, errorDescription: string, username?: string): void;
}

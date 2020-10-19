import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export const playAgain = actionCreator("PLAY_AGAIN");
export const computeScore = actionCreator<{
  answer: string;
  correctAnswer: string;
}>("COMPUTE_SCORE");
// quiz game
export const setQuizQuestion = actionCreator<{ quizData: string }>(
  "SET_QUIZ_QUESTION"
);
export const incrementRightAnswers = actionCreator("INCREMENT_RIGHT_ANSWERS");
export const updateCurrentQuestion = actionCreator("UPDATE_CURRENT_QUESTION");
export const markCategorySelected = actionCreator("MARK_CATEGORY_SELECTED");
export const resetGame = actionCreator("RESET_GAME");

import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export const playAgain = actionCreator("PLAY_AGAIN");
export const computeScore = actionCreator<{
  answer: string;
  correctAnswer: string;
}>("COMPUTE_SCORE");

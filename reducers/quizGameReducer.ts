import { Action } from "redux";
import { isType } from "typescript-fsa";
import * as actions from "../actions/quizAction";

export const initialQuizGame = {
  quizData: null,
  rightAnswers: 0,
  currentQuestion: 0,
  categorySelected: false,
};

export const quizGameReducer = (
  state = initialQuizGame,
  action: Action = actions.resetGame
) => {
  if (isType(action, actions.setQuizQuestion)) {
    return {
      ...state,
      quizData: action.payload.quizData,
    };
  }

  if (isType(action, actions.incrementRightAnswers)) {
    return {
      ...state,
      rightAnswers: state.rightAnswers + 1,
    };
  }

  if (isType(action, actions.updateCurrentQuestion)) {
    return {
      ...state,
      currentQuestion: state.currentQuestion + 1,
    };
  }

  if (isType(action, actions.markCategorySelected)) {
    return {
      ...state,
      categorySelected: true,
    };
  }

  return state;
};

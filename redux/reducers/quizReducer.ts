import { initQuiz, QuestionBank, Quiz } from "../models/questionModel";
import { Action } from "redux";
import { isType } from "typescript-fsa";
import * as actions from "../actions/quizAction";

export type QuizState = Quiz;

export const initialQuiz = initQuiz;

export const quizReducer = (state: QuizState = initialQuiz, action: Action) => {
  if (isType(action, actions.playAgain)) {
    return {
      ...state,
      questionBank: QuestionBank,
      score: 0,
      responses: 0,
    };
  }

  if (isType(action, actions.computeScore)) {
    if (action.payload.answer === action.payload.correctAnswer) {
      return {
        ...state,
        score: state.score + 1,
        responses: state.responses < 4 ? state.responses + 1 : 4,
      };
    } else {
      return {
        ...state,
        responses: state.responses < 4 ? state.responses + 1 : 4,
      };
    }
  }
  return state;
};

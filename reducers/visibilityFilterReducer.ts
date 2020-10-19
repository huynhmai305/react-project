import * as actions from "../actions/todoAction";
import { Action } from "redux";
import { isType } from "typescript-fsa";

export const visibilityFilterReducer = (
  state = actions.visibilityFilters.SHOW_ALL,
  action: Action
) => {
  if (isType(action, actions.setVisibilityFilter)) {
    return action.payload;
  }
  return state;
};

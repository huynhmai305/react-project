import { Action} from "redux";
import {isType} from "typescript-fsa";
import * as actions from "../actions/userAction";
import {initUser, User} from "../models/userModel";

export type UserState = User

export const initialUser: UserState = initUser

export const userReducer = (
  state: UserState = initialUser,
  action: Action
) => {
  if (isType(action, actions.setUser)) {
    return {...state, ...action.payload}
  }
  return state
}

import actionCreatorFactory from "typescript-fsa";
import { User } from "../models/userModel";

const actionCreator = actionCreatorFactory();

export const setUser = actionCreator<User>("SET_USER");

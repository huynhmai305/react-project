import { Action } from "redux";
import { isType } from "typescript-fsa";
import * as actions from "../actions/categoryAction";
import { CategoryList } from "../models/categoryModel";

export type CategoriesState = CategoryList;

export const initialCategories: CategoriesState = [];

export const categoriesReducer = (
  state: CategoriesState = initialCategories,
  action: Action
) => {
  if (isType(action, actions.setCategories)) {
    return [...action.payload];
  }
  if (isType(action, actions.addCategory)) {
    return [
      ...state,
      {
        id: `cate_${state.length++}`,
        name: action.payload.name,
        total_product: 0,
      },
    ];
  }
  if (isType(action, actions.updateCategory)) {
    return state.map((category) =>
      category.id === action.payload.id
        ? { ...category, name: action.payload.name }
        : category
    );
  }
  if (isType(action, actions.deleteCategory)) {
    return state.filter((category) => category.id !== action.payload.id);
  }
  if (isType(action, actions.updateTotalProduct)) {
    return state.map((category) =>
      category.id === action.payload.id
        ? { ...category, total_product: category.total_product++ }
        : category
    );
  }
  return state;
};

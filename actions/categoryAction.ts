import actionCreatorFactory from "typescript-fsa";
import { CategoryList } from "../models/categoryModel";

const actionCreator = actionCreatorFactory();

export const setCategories = actionCreator<CategoryList>("SET_CATEGORIES");
export const addCategory = actionCreator<{ name: string }>("ADD_CATEGORY");
export const updateCategory = actionCreator<{ id: number; name: string }>(
  "UPDATE_CATEGORY"
);
export const deleteCategory = actionCreator<{ id: number }>("DELETE_CATEGORY");
export const updateTotalProduct = actionCreator<{ id: number }>(
  "UPDATE_TOTAL_PRODUCT"
);

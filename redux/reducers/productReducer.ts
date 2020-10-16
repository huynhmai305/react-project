import { initProducts, Product } from "../models/productModel";
import { Action } from "redux";
import { isType } from "typescript-fsa";
import * as actions from "../actions/productAction";

export type ProductsState = Product[];

export const initialProducts: ProductsState = initProducts;

export const productReducer = (
  state: ProductsState = initialProducts,
  action: Action
) => {
  if (isType(action, actions.getListProduct)) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return state;
};

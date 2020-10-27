import { Product } from "../models/productModel";
import { Action } from "redux";
import { isType } from "typescript-fsa";
import * as actions from "../actions/productAction";

export type ProductsState = Product[];

export const initialProducts: ProductsState = [];

export const productReducer = (
  state: ProductsState = initialProducts,
  action: Action
) => {
  if (isType(action, actions.setListProduct)) {
    return [action.payload];
  }
  if (isType(action, actions.addProduct)) {
    return [
      ...state,
      {
        id: action.payload.newId,
        productName: action.payload.newProduct.productName,
        price: action.payload.newProduct.price,
        image: action.payload.newProduct.image,
        description: action.payload.newProduct.description,
        category: action.payload.newProduct.category,
      },
    ];
  }
  if (isType(action, actions.updateProduct)) {
    return state.map((product) =>
      product.id === action.payload.id
        ? {
            ...product,
            productName: action.payload.product.productName,
            price: action.payload.product.price,
            image: action.payload.product.image,
            description: action.payload.product.description,
            category: action.payload.product.category,
          }
        : product
    );
  }
  if (isType(action, actions.deleteProduct)) {
    return state.filter((product) => product.id !== action.payload.id);
  }
  return state;
};

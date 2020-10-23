import { actionCreatorFactory } from "typescript-fsa";
import { Product } from "../models/productModel";

const actionCreator = actionCreatorFactory();

export const setListProduct = actionCreator<Product[]>("SET_LIST_PRODUCTS");
export const addProduct = actionCreator<Product>("ADD_PRODUCT");
export const updateProduct = actionCreator<{ product: Product; id: string }>(
  "UPDATE_PRODUCT"
);
export const deleteProduct = actionCreator<{ id: string }>("DELETE_PRODUCT");

import { actionCreatorFactory } from "typescript-fsa";
import { Product } from "../models/productModel";

const actionCreator = actionCreatorFactory();

export const getListProduct = actionCreator<Product[]>("GET_ALL_PRODUCTS");

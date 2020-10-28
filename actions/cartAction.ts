import actionCreatorFactory from "typescript-fsa";
import { Product } from "../models/productModel";
import { CartItem, CartList } from "../models/cartModel";

const actionCreator = actionCreatorFactory("cart");
export const setCart = actionCreator<CartList>("SET_CART");

export const addCart = actionCreator<{ product: Product }>("ADD_CART");

export const increaseQuantity = actionCreator<CartItem>("INCREASE_QUANTITY");

export const decreaseQuantity = actionCreator<CartItem>("DECREASE_QUANTITY");

export const deleteCart = actionCreator<CartItem>("DELETE_CART");

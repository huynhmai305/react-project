import { CartList } from "../models/cartModel";
import { Action } from "redux";
import { isType } from "typescript-fsa";
import * as actions from "../actions/cartAction";

export type CartState = CartList;

export const initialCart = {
  cartList: [],
  total: 0,
  quantity: 0,
};

export const cartReducer = (state: CartState = initialCart, action: Action) => {
  if (isType(action, actions.setCart)) {
    return {
      ...state,
      ...action.payload,
    };
  }

  if (isType(action, actions.addCart)) {
    return {
      ...state,
      cartList: [
        ...state.cartList,
        {
          id: state.cartList.length++,
          product: action.payload.product,
          quantity: 1,
        },
      ],
      quantity: state.quantity + 1,
      total: state.total + action.payload.product.price,
    };
  }

  if (isType(action, actions.deleteCart)) {
    return {
      ...state,
      // remove cartItem of product with cartItemId
      cartList: state.cartList.filter((item) => item.id !== action.payload.id),
      // minus price delete products
      total:
        state.total - action.payload.product.price * action.payload.quantity,
      quantity: state.quantity - action.payload.quantity, //minus quantity delete products
    };
  }

  if (isType(action, actions.increaseQuantity)) {
    return {
      ...state,
      // increase quantity for cartItem
      cartList: state.cartList.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
      quantity: state.quantity + 1, // increase quantity cart
      total: state.total + action.payload.product.price, // plus price of cartItem
    };
  }

  if (isType(action, actions.decreaseQuantity)) {
    return {
      ...state,
      cartList: state.cartList.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
      quantity: state.quantity - 1,
      total: state.total - action.payload.product.price,
    };
  }
  return state;
};

import { Product } from "./productModel";

export type CartItem = {
  id?: number;
  product?: Product;
  quantity?: number;
};

export type CartList = {
  cartList?: CartItem[];
  total?: number;
  quantity?: number;
};

export const initCartList = {
  cartList: [],
  total: 0,
  quantity: 0,
};

export interface CartItemProps {
  cart: CartItem;
}

export interface CartListProps {
  cartList: CartItem[];
  totalCart: number;
}

export interface PaypalButtonProps {
  totalAmount: any;
}

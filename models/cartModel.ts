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

export interface CartItemProps {
  cart: CartItem;
}

export interface CartListProps {
  cartList: CartItem[];
  totalCart: number;
}

export interface PaypalButtonProps {
  total: any;
}

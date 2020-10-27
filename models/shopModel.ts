import { User } from "./userModel";

export interface ListShopProps {
  shopList: User[];
}

export interface FormShopProps {
  handleClose: () => void;
  show: boolean;
}

import { User } from "../../models/userModel";
import React from "react";

const ShopItem = (props: User) => {
  return <div>Information shop {props.name}</div>;
};

export default ShopItem;

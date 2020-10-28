import React from "react";
import { Card } from "react-bootstrap";
import CartItem from "./CartItem";
import { isEmpty } from "lodash";
import { CartListProps } from "../../models/cartModel";

const CartList = (props: CartListProps) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <h5 className="mb-4">
          Cart (<span>{props.totalCart}</span> items)
        </h5>
        {!isEmpty(props.cartList) &&
          props.cartList.map((item, key) => (
            <div key={key}>
              <CartItem cart={item} />
              <hr className="mb-4" />
            </div>
          ))}
        <p className="text-primary mb-0">
          <i className="fas fa-info-circle mr-1" />
          Do not delay the purchase, adding items to your cart does not mean
          booking them.
        </p>
      </Card.Body>
    </Card>
  );
};

export default CartList;

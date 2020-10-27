import React from "react";
import { Card } from "react-bootstrap";
import CartItem from "./CartItem";
import { productListProps } from "../../models/productModel";
import { isEmpty } from "lodash";

const CartList = (props: productListProps) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <h5 className="mb-4">
          Cart (<span>2</span> items)
        </h5>
        {!isEmpty(props.productList) &&
          props.productList.map((item, key) => (
            <CartItem product={item} key={key} />
          ))}
        <hr className="mb-4" />
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

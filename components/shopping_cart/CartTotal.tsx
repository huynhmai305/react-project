import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import PaypalButton from "./PaypalButton";

const CartTotal = () => {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <Card className="mb-3">
      <Card.Body>
        <h5 className="mb-3">The total amount of</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
            Temporary amount
            <span>${cart.total || 0}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center px-0">
            Shipping
            <span>Free</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
            <div>
              <strong>The total amount of</strong>
              <strong>
                <p className="mb-0">(including VAT 10%)</p>
              </strong>
            </div>
            <span>
              <strong>${cart.total ? (cart.total * 1.1).toFixed(2) : 0}</strong>
            </span>
          </li>
        </ul>
        {cart.total && <PaypalButton total={(cart.total * 1.1).toFixed(2)} />}
      </Card.Body>
    </Card>
  );
};

export default CartTotal;

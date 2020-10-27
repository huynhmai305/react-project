import React from "react";
import { Button, Card } from "react-bootstrap";

const CartTotal = () => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <h5 className="mb-3">The total amount of</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
            Temporary amount
            <span>$25.98</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center px-0">
            Shipping
            <span>Free</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
            <div>
              <strong>The total amount of</strong>
              <strong>
                <p className="mb-0">(including VAT)</p>
              </strong>
            </div>
            <span>
              <strong>$53.98</strong>
            </span>
          </li>
        </ul>
        <Button className="btn btn-primary btn-block waves-effect waves-light">
          go to checkout
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CartTotal;

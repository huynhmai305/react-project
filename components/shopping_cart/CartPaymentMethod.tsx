import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import React from "react";

const CartPaymentMethod = () => {
  return (
    <Card>
      <Card.Body>
        <h5 className="mb-4">We accept</h5>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="paypal">Pay by Paypal</Tooltip>}
        >
          <i className="fab fa-paypal text-primary fa-2x mr-2" />
        </OverlayTrigger>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="money">Pay on delivery</Tooltip>}
        >
          <i className="fas fa-money-bill-alt fa-2x text-success" />
        </OverlayTrigger>
      </Card.Body>
    </Card>
  );
};

export default CartPaymentMethod;

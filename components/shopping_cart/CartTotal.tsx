import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { PayPalButton } from "react-paypal-button-v2";

const CartTotal = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const [error, setError] = useState(null);

  const handleSuccess = async (details, data) => {
    alert("Transaction completed by " + details.payer.name.given_name);
    // @todo: save db
    return fetch("/paypal-transaction-complete", {
      method: "post",
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    });
  };

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
        {cart.total && (
          <div>
            <PayPalButton
              amount={(cart.total * 1.1).toFixed(2)}
              onSuccess={handleSuccess}
              onError={(error: any) => setError(error)}
              // options={{
              //   clientId: process.env.CLIENT_SANDBOX_ID,
              // }}
            />
            {error && (
              <span className="text-danger">
                Error Occurred in processing payment! Please try again.
              </span>
            )}
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default CartTotal;

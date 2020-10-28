import React from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { PaypalButtonProps } from "../../models/cartModel";

const PaypalButton = (props: PaypalButtonProps) => {
  const handleCheckoutPayPal = async () => {
    await Swal.fire(`Checkout by Paypal ${props.total}`);
  };

  return (
    <Button
      className="btn btn-primary btn-block waves-effect waves-light"
      onClick={handleCheckoutPayPal}
    >
      Go to checkout Paypal
    </Button>
  );
};

export default PaypalButton;

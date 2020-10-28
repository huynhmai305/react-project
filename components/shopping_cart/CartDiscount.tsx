import { Accordion, Card, FormControl } from "react-bootstrap";
import React, { useState } from "react";
import styles from "../styles/Cart.module.scss";

const CartDiscount = () => {
  const [discount, setDiscount] = useState<string>("");

  const handleDiscount = async (e) => {
    setDiscount(e.target.value);
    // @todo
  };

  return (
    <Card>
      <Card.Body className="p-0">
        <Accordion>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="discount"
            className={`d-flex justify-content-between ${styles.discountCollapse}`}
          >
            Add a discount code (optional)
            <i className="fas fa-chevron-down pt-1" />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="discount">
            <Card.Body>
              <FormControl
                value={discount}
                type="text"
                id="discount-code"
                className="form-control font-weight-light"
                placeholder="Enter discount code"
                onChange={handleDiscount}
              />
            </Card.Body>
          </Accordion.Collapse>
        </Accordion>
      </Card.Body>
    </Card>
  );
};

export default CartDiscount;

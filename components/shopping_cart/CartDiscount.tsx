import { Card, FormControl } from "react-bootstrap";
import Link from "next/link";
import React from "react";

const CartDiscount = () => {
  return (
    <Card>
      <Card.Body>
        <Link href="#collapseExample1">
          <a
            className="dark-grey-text d-flex justify-content-between"
            data-toggle="collapse"
            aria-expanded="false"
            aria-controls="collapseExample1"
          >
            Add a discount code (optional)
            <span>
              <i className="fas fa-chevron-down pt-1" />
            </span>
          </a>
        </Link>
        <div className="collapse" id="collapseExample1">
          <div className="mt-3">
            <div className="md-form md-outline mb-0">
              <FormControl
                type="text"
                id="discount-code1"
                className="form-control font-weight-light"
                placeholder="Enter discount code"
              />
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CartDiscount;

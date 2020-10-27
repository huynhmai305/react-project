import React from "react";
import { Button, Col, FormControl, Image, Row } from "react-bootstrap";
import Link from "next/link";
import styles from "../styles/Cart.module.scss";
import { productProps } from "../../models/productModel";

const CartItem = (props: productProps) => {
  return (
    <Row className="mb-4">
      <Col lg={3} md={5} xl={3}>
        <div className="view zoom overlay z-depth-1 rounded mb-3">
          <Image src={props.product.image} fluid className="w-70" />
          <Link href={"#!"}>
            <div className="mask waves-effect waves-light">
              <Image src={props.product.image} fluid className="w-100" />
              <div className="mask rgba-black-slight waves-effect waves-light" />
            </div>
          </Link>
        </div>
      </Col>
      <Col md={7} lg={9} xl={9}>
        <div>
          <div className="d-flex justify-content-between">
            <div>
              <h5>{props.product.productName}</h5>
              <p className="mb-3 text-muted text-uppercase small">
                {props.product.description}
              </p>
            </div>
            <div>
              <div className="def-number-input number-input safari_only mb-0 w-100">
                <Button>
                  <i className="fas fa-minus" />
                </Button>
                <FormControl
                  className={styles.quantity}
                  min="0"
                  name="quantity"
                  value="1"
                  type="number"
                />
                <Button>
                  <i className="fas fa-plus" />
                </Button>
              </div>
              <small
                id="passwordHelpBlock"
                className="form-text text-muted text-center"
              >
                (Note, 1 piece)
              </small>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Button
                href={"#!"}
                className="card-link-secondary small text-uppercase mr-3"
                variant="outline-info"
              >
                <i className="fas fa-trash-alt mr-1" /> Remove item
              </Button>
              <Button
                href={"#!"}
                className="card-link-secondary small text-uppercase"
                variant="outline-info"
              >
                <i className="fas fa-heart mr-1" /> Move to wish list
              </Button>
            </div>
            <p className="mb-0">
              <span>
                <strong id="summary">{props.product.price}</strong>
              </span>
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default CartItem;

import React from "react";
import {
  Button,
  Col,
  FormControl,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import { CartItemProps } from "../../models/cartModel";
import { useDispatch } from "react-redux";
import * as action from "../../actions/cartAction";

const CartItem = (props: CartItemProps) => {
  const dispatch = useDispatch();

  const handleMinusItem = async () => {
    // if quantity item only 1, minus quantity so delete
    if (props.cart.quantity === 1) return await handleRemoveItem();
    return dispatch(action.decreaseQuantity(props.cart));
  };

  const handlePlusItem = async () => {
    return dispatch(action.increaseQuantity(props.cart));
  };

  const handleRemoveItem = async () => {
    return dispatch(action.deleteCart(props.cart));
  };

  return (
    <Row className="mb-4">
      <Col lg={3} md={5} xl={3}>
        <div className="view zoom overlay z-depth-1 rounded mb-3">
          <Image src={props.cart.product.image} fluid className="w-70" />
          {/*<Link href={"#!"}>*/}
          {/*  <div className="mask waves-effect waves-light">*/}
          {/*    <Image src={props.cart.product.image} fluid className="w-100" />*/}
          {/*    <div className="mask rgba-black-slight waves-effect waves-light" />*/}
          {/*  </div>*/}
          {/*</Link>*/}
        </div>
      </Col>
      <Col md={7} lg={9} xl={9}>
        <div>
          <div className="d-flex justify-content-between">
            <div>
              <h5>{props.cart.product.productName}</h5>
              <p className="mb-3 text-muted text-uppercase small">
                {props.cart.product.description}
              </p>
            </div>
            <div>
              <div className="def-number-input number-input safari_only mb-0 w-100">
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <Button onClick={handleMinusItem}>
                      <i className="fas fa-minus" />
                    </Button>
                  </InputGroup.Prepend>
                  <FormControl
                    style={{ width: "100px" }}
                    className="quantity"
                    min="0"
                    name="quantity"
                    value={props.cart.quantity || 1}
                    type="number"
                  />
                  <InputGroup.Prepend>
                    <Button onClick={handlePlusItem}>
                      <i className="fas fa-plus" />
                    </Button>
                  </InputGroup.Prepend>
                </InputGroup>
              </div>
              <small
                id="passwordHelpBlock"
                className="form-text text-muted text-center"
              >
                (Note, {props.cart.quantity || 1} piece)
              </small>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <Button
                onClick={handleRemoveItem}
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
                <strong id="summary">${props.cart.product.price}</strong>
              </span>
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default CartItem;

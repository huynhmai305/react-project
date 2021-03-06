import React, {useEffect} from "react";
import Layout from "../layouts/Layout";
import { Card, Col, Row } from "react-bootstrap";
import CardList from "./CartList";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import CartTotal from "./CartTotal";
import CartDiscount from "./CartDiscount";
import CartPaymentMethod from "./CartPaymentMethod";
import { setShoppingCart } from "../../api/cart";

const ContainerShoppingCart = () => {
  const cart = useSelector((state: RootState) => state.cart);

  const saveShoppingCart = async () => {
    await setShoppingCart(cart);
  };

  useEffect(() => {
    saveShoppingCart();
  }, [cart]);

  return (
    <Layout>
      <section className="p-5">
        <Row>
          <Col lg={8}>
            <CardList cartList={cart.cartList} totalCart={cart.quantity} />
            <Card className="mb-3">
              <Card.Body>
                <h5 className="mb-4">Expected shipping delivery</h5>
                <p className="mb-0">Thu., 12.03. - Mon., 16.03.</p>
              </Card.Body>
            </Card>
            <CartPaymentMethod />
          </Col>
          <Col lg={4}>
            <CartTotal />
            <CartDiscount />
          </Col>
        </Row>
      </section>
    </Layout>
  );
};

export default ContainerShoppingCart;

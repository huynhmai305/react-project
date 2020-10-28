import React, { useEffect } from "react";
import { productProps } from "../../models/productModel";
import { Badge, Button, Image } from "react-bootstrap";
import styles from "../styles/ProductList.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addCart, increaseQuantity } from "../../actions/cartAction";
import { RootState } from "../../reducers";
import { isEmpty } from "lodash";
import { setShoppingCart } from "../../api/cart";

const ProductItem = (props: productProps) => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleAddCart = async (product) => {
    // check product is existed in cart
    const checkItemInCart = cart.cartList.filter(
      (item) => item.product.id === product.id
    );
    // if existed, increase quantity item in cart
    if (!isEmpty(checkItemInCart))
      return dispatch(increaseQuantity(checkItemInCart[0]));
    // if not existed, add new
    return dispatch(
      addCart({ product: { ...product, price: parseInt(product.price) } })
    );
  };

  const saveShoppingCart = async () => {
    await setShoppingCart(cart);
  };

  useEffect(() => {
    saveShoppingCart();
  }, [cart]);

  return (
    <div className={styles.product}>
      <h2 className={styles.product__title}>{props.product.productName}</h2>
      <p className={styles.product__description}>{props.product.description}</p>
      <Image
        src={props.product.image || "/images/baby-husky.jpg"}
        alt=""
        className={styles.product__image}
      />
      <div className={styles.product__price_button_container}>
        <Badge className={styles.product__price} variant="light">
          ${props.product.price}
        </Badge>
        <Button
          variant="info"
          onClick={() => handleAddCart(props.product)}
          className={`${styles.product__button}`}
        >
          <i className="fas fa-cart-plus fa-2x" />
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;

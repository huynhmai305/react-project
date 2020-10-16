import React from "react";
import { productProps } from "../../redux/models/productModel";
import { Badge, Button, Image } from "react-bootstrap";
import styles from "../styles/ProductList.module.scss";

const ProductItem = (props: productProps) => {
  return (
    <div className={styles.product}>
      <h2 className={styles.product__title}>{props.product.name}</h2>
      <p className={styles.product__description}>{props.product.description}</p>
      <Image
        src={props.product.image}
        alt=""
        className={styles.product__image}
      />
      <div className={styles.product__price_button_container}>
        <Badge className={styles.product__price} variant="light">
          ${props.product.price.toFixed(2)}
        </Badge>
        <Button
          className={`${styles.snipcart_add_item} ${styles.product__button}`}
          data-item-id={props.product.id}
          data-item-name={props.product.name}
          data-item-price={props.product.price}
          data-item-url={props.product.url}
          data-item-image={props.product.image}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductItem;

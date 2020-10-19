import React from "react";
import ProductItem from "./ProductItem";
import { productListProps } from "../../models/productModel";

const ProductList = (props: productListProps) => {
  return (
    <div className="product_list">
      {props.productList.map((product, index) => (
        <ProductItem key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

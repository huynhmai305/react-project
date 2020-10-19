import React from "react";
import Layout from "../layouts/Layout";
import ProductList from "./ProductList";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

const ProductLayout = () => {
  const products = useSelector((state: RootState) => state.productList);

  return (
    <Layout>
      <div className="p-5">
        <ProductList productList={products} />
      </div>
    </Layout>
  );
};

export default ProductLayout;

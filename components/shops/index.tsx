import Layout from "../layouts/Layout";
import React from "react";
import ListShop from "./ListShop";

const ShopIndex = () => {
  return (
    <Layout>
      <div className="p-5">
        <ListShop />
      </div>
    </Layout>
  );
};

export default ShopIndex;

import React, { useEffect, useState } from "react";
import TableProducts from "./TableProducts";
import { getListProductsAll } from "../../api/products";
import Layout from "../layouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { setListProduct } from "../../actions/productAction";
import styles from "../styles/ProductList.module.scss";

const ProductsAll = () => {
  const user = useSelector((state: RootState) => state.user);
  const [list, setList] = useState([]);
  const dispatch = useDispatch();

  const getListProductAll = async () => {
    const rs: any = await getListProductsAll();
    setList(rs);
    dispatch(setListProduct(rs));
  };

  useEffect(() => {
    getListProductAll();
  }, [user.id]);

  return (
    <Layout>
      <div className={styles.product_all}>
        <TableProducts productList={list} />
      </div>
    </Layout>
  );
};

export default ProductsAll;

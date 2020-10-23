import React, { useEffect, useState } from "react";
import TableProducts from "./TableProducts";
import { getListProductsAll } from "../../pages/api/products";
import Layout from "../layouts/Layout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { setListProduct } from "../../actions/productAction";

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
      <div className="w-80 pt-2">
        <TableProducts productList={list} />
      </div>
    </Layout>
  );
};

export default ProductsAll;

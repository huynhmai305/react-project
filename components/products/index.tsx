import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { getListProductsAll } from "../../api/products";
import { setListProduct } from "../../actions/productAction";

const ProductLayout = () => {
  const user = useSelector((state: RootState) => state.user);
  const products = useSelector((state: RootState) => state.productList);
  const [list, setList] = useState([]);
  const dispatch = useDispatch();

  const getListProductAll = async () => {
    const rs: any = await getListProductsAll();
    dispatch(setListProduct(rs));
  };

  useEffect(() => {
    getListProductAll();
  }, [user.id]);

  useEffect(() => {
    setList(products);
  }, [products]);

  return (
    <div className="p-5">
      <ProductList productList={list} />
    </div>
  );
};

export default ProductLayout;

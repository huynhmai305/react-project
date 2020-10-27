import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import TableProducts from "./TableProducts";
import { addProduct, getListProductsShop } from "../../api/products";
import { isEmpty } from "lodash";
import { Button } from "react-bootstrap";
import styles from "../styles/ProductList.module.scss";
import FormProduct from "./FormProduct";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import * as action from "../../actions/productAction";
import Swal from "sweetalert2";

const ProductShop = () => {
  const user = useSelector((state: RootState) => state.user);
  const products = useSelector((state: RootState) => state.productList);
  const [list, setList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShowForm(false);
  const handleShow = () => setShowForm(true);

  const getProductsShop = async () => {
    const rs: any = await getListProductsShop(user.id);
    if (isEmpty(rs)) return;
    dispatch(action.setListProduct(rs));
  };

  const addNewProduct = async (product) => {
    const rs: any = await addProduct(product, user.id);
    dispatch(action.addProduct({ newProduct: product, newId: rs }));
    handleClose();
    await Swal.fire({
      text: "Create new product successfully!",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    getProductsShop();
  }, [user.id]);

  useEffect(() => {
    setList(products);
  }, [products]);

  return (
    <Layout>
      <div className={styles.productShop}>
        <div className="text-right mb-3">
          <Button onClick={handleShow}>
            <i className="fas fa-plus" /> <span>New product</span>
          </Button>
        </div>
        <TableProducts productList={list} shopId={user.id} />
        <FormProduct
          handleClose={handleClose}
          show={showForm}
          handleAction={addNewProduct}
        />
      </div>
    </Layout>
  );
};

export default ProductShop;

import React, { useState } from "react";
import { productListProps } from "../../models/productModel";
import { Button, Image, Table } from "react-bootstrap";
import styles from "../styles/ProductList.module.scss";
import FormProduct from "./FormProduct";
import { deletedProduct, updateProduct } from "../../api/products";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import * as action from "../../actions/productAction";

const TableProducts = (props: productListProps) => {
  const [showForm, setShowForm] = useState(false);
  const [productProps, setProductProps] = useState();
  const dispatch = useDispatch();

  const handleClose = () => setShowForm(false);
  const handleShow = () => setShowForm(true);

  const updateProductShop = async (product, productId) => {
    await updateProduct(product, props.shopId, productId);
    dispatch(action.updateProduct({ product, id: productId }));
    handleClose();
    await Swal.fire({
      text: `Update product ${productId} successfully!`,
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleDeleteProduct = async (productId) => {
    Swal.fire({
      text: `Are you sure delete product ${productId}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      confirmButtonColor: "#dc3545",
    }).then(async (result) => {
      if (result.value) {
        await deletedProduct(props.shopId, productId);
        await dispatch(action.deleteProduct({ id: productId }));
        await Swal.fire({
          text: `Deleted ${productId} successfully!`,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleEdit = async (product) => {
    setProductProps(product);
    handleShow();
  };

  return (
    <Table striped bordered hover className={styles.productShop__table}>
      <thead>
        <tr>
          <th>#</th>
          <th>Product name</th>
          <th>Image</th>
          <th>Price</th>
          <th>Category</th>
          <th>Description</th>
          {props?.shopId ? <th /> : null}
        </tr>
      </thead>
      <tbody>
        {props.productList &&
          props.productList.map((product, key) => (
            <tr key={key}>
              <td>{product?.id}</td>
              <td>{product?.productName}</td>
              <td className="text-center">
                <Image src={product?.image} style={{ width: "100px" }} />
              </td>
              <td>{product?.price}</td>
              <td>{product?.category?.label}</td>
              <td>{product?.description}</td>
              {props?.shopId && (
                <td className="text-center">
                  <Button
                    variant="success"
                    onClick={() => handleEdit(product)}
                    className="mr-2"
                  >
                    <i className="fas fa-edit" />
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <i className="fas fa-trash-alt" />
                  </Button>
                </td>
              )}
            </tr>
          ))}
      </tbody>
      <FormProduct
        handleClose={handleClose}
        show={showForm}
        handleAction={updateProductShop}
        product={productProps}
      />
    </Table>
  );
};

export default TableProducts;

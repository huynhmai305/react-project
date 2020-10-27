import React from "react";
import { Button, Table } from "react-bootstrap";
import styles from "../styles/ProductList.module.scss";
import { ListShopProps } from "../../models/shopModel";

const TableShop = (props: ListShopProps) => {
  // const handleDeleteShop = async (shopId) => {
  //   Swal.fire({
  //     text: `Are you sure delete product ${shopId}`,
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonText: "Yes, delete it!",
  //     confirmButtonColor: "#dc3545",
  //   }).then(async (result) => {
  //     if (result.value) {
  //       await deletedShop(shopId);
  //       await dispatch(action.deleteShop({ id: shopId }));
  //       await Swal.fire({
  //         text: `Deleted ${shopId} successfully!`,
  //         icon: "success",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     }
  //   });
  // };

  return (
    <Table striped bordered hover className={styles.productShop__table}>
      <thead>
        <tr>
          <th>#</th>
          <th>Shop name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Tax</th>
          <th>Address</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {props.shopList &&
          props.shopList.map((shop, key) => (
            <tr key={key}>
              <td>{shop?.id}</td>
              <td>{shop?.name}</td>
              <td>{shop?.email}</td>
              <td>{shop?.phone}</td>
              <td>{shop?.tax}</td>
              <td>{shop?.address}</td>
              <td className="text-center">
                <Button variant="success" href={`shops/${shop?.id}`}>
                  <i className="fas fa-eye" /> Detail
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default TableShop;

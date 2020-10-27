import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import TableProducts from "../products/TableProducts";
import { useRouter } from "next/router";
import { getListProductsShop } from "../../api/products";
import { isEmpty } from "lodash";
import styles from "../styles/Profile.module.scss";
import { Spinner } from "react-bootstrap";

const ShopDetailProduct = () => {
  const [listProductShop, setListProductShop] = useState([]);
  const [shopId, setShopId] = useState<string | any>("");
  const router = useRouter();

  const getProductShop = async () => {
    if (!shopId) return;
    const rs = await getListProductsShop(shopId);
    if (isEmpty(rs)) return;
    setListProductShop(rs);
  };

  useEffect(() => {
    const { shopId } = router.query;
    if (!shopId) return;
    setShopId(shopId);
  }, [router.query]);

  useEffect(() => {
    getProductShop();
  }, [shopId]);

  return (
    <Layout>
      <div className={`p-5 ${styles.wrapperTableShop}`}>
        {!isEmpty(listProductShop) ? (
          <TableProducts productList={listProductShop} shopId={shopId} />
        ) : (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
      </div>
    </Layout>
  );
};

export default ShopDetailProduct;

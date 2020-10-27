import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import TableShop from "./TableShop";
import { isEmpty } from "lodash";
import { getListShop } from "../../api/auth";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import styles from "../styles/Profile.module.scss";
import FormShop from "./FormShop";

const ListShop = () => {
  const user = useSelector((state: RootState) => state.user);
  const [list, setList] = useState([]);
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleShow = () => setShowForm(true);
  const handleClose = () => setShowForm(false);

  const getList = async () => {
    const rs: any = await getListShop();
    if (isEmpty(rs)) return;
    setList(rs);
  };

  useEffect(() => {
    getList();
  }, [user.id]);

  return (
    <div>
      <div className="text-right mb-3">
        <Button onClick={handleShow}>
          <i className="fas fa-plus" /> <span>Add shop</span>
        </Button>
      </div>
      <div className={styles.wrapperTableShop}>
        <TableShop shopList={list} />
      </div>
      <FormShop handleClose={handleClose} show={showForm} />
    </div>
  );
};

export default ListShop;

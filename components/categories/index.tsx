import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import { Button } from "react-bootstrap";
import TableCategories from "./TableCategories";
import { addCategory, getCategories } from "../../api/categories";
import { isEmpty } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../actions/categoryAction";
import { RootState } from "../../reducers";
import FormCategory from "./FormCategory";
import styles from "../styles/Categories.module.scss";

const CategoriesList = () => {
  const user = useSelector((state: RootState) => state.user);
  const categories = useSelector((state: RootState) => state.categories);
  const [listCategories, setListCategories] = useState([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const dispatch = useDispatch();

  const handleAddCategory = async (category) => {
    dispatch(action.addCategory(category));
    await addCategory(category);
    handleClose();
  };

  const getCategoriesList = async () => {
    const rs: any = await getCategories();
    if (isEmpty(rs)) return;
    dispatch(action.setCategories(rs));
  };

  useEffect(() => {
    getCategoriesList();
  }, [user.id]);

  useEffect(() => {
    setListCategories(categories);
  }, [categories]);

  return (
    <Layout>
      <div className="pt-3">
        <div className="text-right mb-3">
          <Button onClick={handleShow}>
            <i className="fas fa-plus" /> <span>Add category</span>
          </Button>
        </div>
        <div className={styles.wrapperTable}>
          <TableCategories categories={listCategories} />
        </div>
        <FormCategory
          handleAction={handleAddCategory}
          handleClose={handleClose}
          show={showModal}
        />
      </div>
    </Layout>
  );
};

export default CategoriesList;

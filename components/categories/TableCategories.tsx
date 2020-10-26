import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { CategoryTableProps } from "../../models/categoryModel";
import { deletedCategory, updateCategory } from "../../api/categories";
import { useDispatch } from "react-redux";
import * as action from "../../actions/categoryAction";
import FormCategory from "./FormCategory";

const TableCategories = (props: CategoryTableProps) => {
  const dispatch = useDispatch();
  const [categoryProps, setCategoryProps] = useState({});
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleEdit = async (category) => {
    setCategoryProps(category);
    handleShow();
  };

  const handleUpdate = async (category) => {
    await updateCategory(category);
    dispatch(action.updateCategory({ id: category.id, name: category.name }));
    handleClose();
  };

  const handleDelete = async (categoryId) => {
    await deletedCategory(categoryId);
    dispatch(action.deleteCategory({ id: categoryId }));
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Category name</th>
          <th>Total product</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {props.categories &&
          props.categories.map((category, key) => (
            <tr key={key}>
              <td>{category?.id}</td>
              <td>{category?.name}</td>
              <td>{category?.total_product}</td>
              <td>
                <Button
                  variant="success"
                  onClick={() => handleEdit(category)}
                  className="mr-2"
                >
                  <i className="fas fa-edit" />
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(category.id)}
                >
                  <i className="fas fa-trash-alt" />
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
      <FormCategory
        handleAction={handleUpdate}
        handleClose={handleClose}
        show={showModal}
        category={categoryProps}
      />
    </Table>
  );
};

export default TableCategories;

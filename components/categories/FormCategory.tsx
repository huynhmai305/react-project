import { FormCategoryProps } from "../../models/categoryModel";
import { Button, Form, Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";

const FormCategory = (props: FormCategoryProps) => {
  const [name, setName] = useState<string>("");

  const handleActionForm = async () => {
    if (props?.category) {
      props.handleAction({ ...props.category, name });
    } else {
      props.handleAction({ name, total_product: 0 });
    }
  };

  useEffect(() => {
    if (props?.category) {
      setName(props.category.name);
    }
  }, [props.category]);

  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {props?.category ? "Edit category" : "New category"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label>Category name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter category name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleActionForm}>
          {props?.category ? "Edit" : "Add"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormCategory;

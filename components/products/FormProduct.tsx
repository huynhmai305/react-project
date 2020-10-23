import { Button, Col, Form, Image, Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import firebase from "firebase";
import Select from "react-select";

interface Props {
  show: boolean;
  handleClose: () => void;
  handleAction: (product: {}, productId?: string) => void;
  product?: any;
}

const FormProduct = (props: Props) => {
  const [productName, setProductName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [imageName, setImageName] = useState<string>("");

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const handleImage = async (img) => {
    setImageName(img.name);
    const metadata = {
      contentType: "image/jpeg",
    };
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef
      .child(`images/${new Date().getTime()}_${img.name}`)
      .put(img, metadata);

    uploadTask.on("state_changed", () => {
      try {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImage(downloadURL);
        });
      } catch (error) {
        console.log(error);
      }
    });
  };

  const handleActionForm = async () => {
    if (props?.product) {
      await props.handleAction(
        { productName, price, description, image },
        props.product.id
      );
    } else {
      await props.handleAction({ productName, price, description, image });
    }
    setImageName("");
  };

  useEffect(() => {
    if (props?.product) {
      setProductName(props.product.productName);
      setPrice(props.product.price);
      setDescription(props.product.description);
      setImage(props.product.image);
    }
  }, [props.product]);

  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      backdrop="static"
      keyboard={false}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {props?.product ? "Edit product" : "New product"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label>Product name</Form.Label>
          <Form.Control
            type="product_name"
            placeholder="Enter product name"
            autoFocus
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Category</Form.Label>
            <Select
              placeholder="Select category"
              options={options}
              value={category}
              onChange={(cate) => setCategory(cate)}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price"
              autoFocus
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter description"
            autoFocus
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Image src={image} style={{ width: "150px" }} />
        </Form.Group>
        <Form.Group>
          <Form.File
            name="image"
            autoFocus
            required
            label={imageName || "Product image"}
            onChange={(e) => handleImage(e.target.files[0])}
            custom
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleActionForm}>
          {props?.product ? "Edit" : "Add"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormProduct;

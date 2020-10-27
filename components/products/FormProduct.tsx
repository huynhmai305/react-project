import { Button, Col, Form, Image, Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import firebase from "firebase";
import Select from "react-select";
import {
  formProductProps,
  optionCategoriesList,
} from "../../models/productModel";
import { getCategories } from "../../api/categories";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

const FormProduct = (props: formProductProps) => {
  const user = useSelector((state: RootState) => state.user);
  const [productName, setProductName] = useState<string>("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [category, setCategory] = useState({});
  const [imageName, setImageName] = useState<string>("");
  const [options, setOptions] = useState<optionCategoriesList>([]);
  const [errors, setErrors] = useState<any>({});

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

  const validateFormProduct = (values) => {
    const errorsForm: any = {};
    if (!values.productName) {
      errorsForm.productName = "Please enter product name";
    }
    if (!values.price) {
      errorsForm.price = "Please enter product price";
    }
    if (isEmpty(values.category)) {
      errorsForm.category = "Please select product category";
    }
    return errorsForm;
  };

  const handleActionForm = async () => {
    const errors = validateFormProduct({ productName, price, category });
    if (!isEmpty(errors)) {
      return setErrors(errors);
    }
    if (props?.product) {
      await props.handleAction(
        { productName, price, description, image, category },
        props.product?.id
      );
    } else {
      await props.handleAction({
        productName,
        price,
        description,
        image,
        category,
      });
    }
    setImageName("");
    setErrors({});
  };

  const getOptionCategories = async () => {
    const categories: any = await getCategories();
    if (isEmpty(categories)) return;
    const rs = [];
    for (const option of categories) {
      rs.push({ value: option.id, label: option.name });
    }
    setOptions(rs);
  };

  useEffect(() => {
    getOptionCategories();
  }, [user.id]);

  useEffect(() => {
    if (props?.product) {
      setProductName(props.product.productName);
      setPrice(props.product.price);
      setDescription(props.product.description);
      setImage(props.product.image);
      setCategory(props.product.category);
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
          <span className="text-danger">{errors?.productName}</span>
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
            <span className="text-danger">{errors?.category}</span>
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price"
              autoFocus
              required
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value))}
            />
            <span className="text-danger">{errors?.price}</span>
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

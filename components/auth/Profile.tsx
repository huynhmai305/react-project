import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import { Button, Col, Form, FormGroup, Image } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import styles from "../styles/Profile.module.scss";
import { isEmpty } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { setUser } from "../../actions/userAction";
import { updateProfile } from "../../pages/api/auth";
import firebase from "firebase";

const MyProfile = () => {
  const user = useSelector((state: RootState) => state.user);
  const [avatar, setAvatar] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [tax, setTax] = useState<string>("");
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [imageName, setImageName] = useState<string>("");
  const dispatch = useDispatch();

  const validateUpdateProfile = (values) => {
    const errorsProfile: any = {};
    if (values.phone.length > 0 && values.phone.length !== 11) {
      errorsProfile.phone = "Invalid phone, ex: +84 987 654 321";
    }
    return errorsProfile;
  };

  const handleAvatar = async (img) => {
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
          setAvatar(downloadURL);
        });
      } catch (error) {
        console.log(error);
      }
    });
  };

  const updateProfileUser = async () => {
    setLoading(true);
    const errors = await validateUpdateProfile({ name, phone, tax, address });
    if (!isEmpty(errors)) {
      setLoading(false);
      return setErrors(errors);
    }
    const values = { name, phone, tax, address, avatar };
    await dispatch(setUser(values));
    await updateProfile(values);
    return setLoading(false);
  };

  useEffect(() => {
    if (user) {
      setAvatar(user?.photoURL);
      setName(user?.name);
      setPhone(user?.phone);
      setTax(user?.tax);
      setAddress(user?.address);
    }
  }, [user.name, user.photoURL, user.phone, user.tax, user.address]);

  return (
    <Layout>
      <div className={styles.wrapperProfiles}>
        <Form onSubmit={updateProfile}>
          <FormGroup className="text-center">
            {avatar ? (
              <Image src={avatar} thumbnail style={{ width: "200px" }} />
            ) : (
              <i className="fas fa-user-alt fa-3x default-user text-secondary" />
            )}
          </FormGroup>
          <Form.Group>
            <Form.File
              name="image"
              autoFocus
              required
              label={imageName || "Product image"}
              onChange={(e) => handleAvatar(e.target.files[0])}
              custom
            />
          </Form.Group>
          <Form.Group>
            <Form.File
              className="position-relative"
              required
              name="file"
              label="File"
              isInvalid={!!errors.file}
              feedback={errors.file}
              feedbackTooltip
            />
          </Form.Group>
          <FormGroup>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="text-danger">{errors?.name}</span>
          </FormGroup>
          <Form.Row>
            <FormGroup as={Col}>
              <Form.Label>Phone</Form.Label>
              <PhoneInput
                country={"vn"}
                placeholder="Enter phone number"
                value={phone}
                onChange={(phone) => setPhone(phone)}
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
                }}
              />
              <span className="text-danger">{errors?.phone}</span>
            </FormGroup>
            <FormGroup as={Col}>
              <Form.Label>Tax</Form.Label>
              <Form.Control
                type="text"
                name="tax"
                className="form-control"
                placeholder="Enter tax code"
                value={tax}
                onChange={(e) => setTax(e.target.value)}
              />
              <span className="text-danger">{errors?.tax}</span>
            </FormGroup>
          </Form.Row>
          <FormGroup>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              className="form-control"
              placeholder="Enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <span className="text-danger">{errors?.address}</span>
          </FormGroup>
          <FormGroup>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              className="form-control"
              value={user?.email}
              disabled
            />
          </FormGroup>
          <FormGroup>
            <Button
              onClick={updateProfileUser}
              className="btn-primary btn-block"
              disabled={loading}
            >
              Update profile
            </Button>
          </FormGroup>
        </Form>
      </div>
    </Layout>
  );
};

export default MyProfile;

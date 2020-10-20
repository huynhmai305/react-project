import React, {useState} from "react";
import Layout from "../layouts/Layout";
import {Button, Col, Form, FormGroup} from "react-bootstrap";
import PhoneInput from "react-phone-input-2";
import styles from "../styles/Profile.module.scss";
import { isEmpty } from "lodash";

const MyProfile = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [name, setName] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [tax, setTax] = useState<string>();
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  const validateUpdateProfile = (values) => {
    const errorsProfile: any = {};
    if (!values.name) errorsProfile.name = "Please enter name";
    if (!values.password) {
      errorsProfile.password = "Please enter password";
    } else if (values.password.length < 6) {
      errorsProfile.password = "Minimum be 6 characters or more";
    }
    if (!values.phone) {
      errorsProfile.phone = "Please enter phone";
    } else if (values.phone.length !== 10) {
      errorsProfile.phone = "Invalid phone, phone must 10 character";
    }
    return errorsProfile;
  };

  const updateProfile = async () => {
    const errors = await validateUpdateProfile({
      name,
      phone,
      tax,
      address,
      password,
    });
    if (!isEmpty(errors)) {
      setLoading(false);
      setErrors(errors);
    }
  };

  return (
    <Layout>
      <div className={styles.wrapperProfiles}>
        <Form onSubmit={updateProfile}>
          <FormGroup>
            <Form.Label>Shop name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter shop name"
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
                onChange={(phone) => setPhone(phone.replace("84", "0"))}
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
              onChange={(e) => setAddress(e.target.value)}
            />
            <span className="text-danger">{errors?.address}</span>
          </FormGroup>
          <Form.Row>
            <FormGroup as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                className="form-control"
                value={email}
                disabled
              />
            </FormGroup>
            <FormGroup as={Col}>
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="text-danger">{errors?.password}</span>
            </FormGroup>
          </Form.Row>
          <FormGroup>
            <Button
              type="submit"
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

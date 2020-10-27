import React, { useState } from "react";
import { Button, Form, FormGroup, Modal } from "react-bootstrap";
import { FormShopProps } from "../../models/shopModel";
import { addShopEmailPassword } from "../../api/auth";
import { translateError } from "../../lib/translateError";
import PhoneInput from "react-phone-input-2";
import { isEmpty } from "lodash";

const FormShop = (props: FormShopProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  const validateShop = (values) => {
    const errorsForm: any = {};
    if (!values.email) {
      errorsForm.email = "Please enter email";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errorsForm.email = "Invalid email address";
    }
    if (!values.password) {
      errorsForm.password = "Please enter password";
    } else if (values.password.length < 6) {
      errorsForm.password = "Minimum be 6 characters or more";
    }
    if (!values.phone) {
      errorsForm.phone = "Please enter phone";
    } else if (values.phone.length !== 10) {
      errorsForm.phone = "Invalid phone, phone must 10 character";
    }
    return errorsForm;
  };

  const handleActionShop = async () => {
    setLoading(true);
    const errorsShop = await validateShop({ email, password, phone });
    if (!isEmpty(errorsShop)) {
      setLoading(false);
      return setErrors(errorsShop);
    }
    const result: any = await addShopEmailPassword(email, password);
    if (result?.error) {
      setLoading(false);
      return setErrors({ response: translateError(result.error) });
    }
    setLoading(false);
    setErrors({});
    props.handleClose();
  };

  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      backdrop="static"
      keyboard={false}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>New shop</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormGroup>
            <span className="text-danger">{errors?.response}</span>
          </FormGroup>
          <FormGroup>
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
          <FormGroup>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="text-danger">{errors?.email}</span>
          </FormGroup>
          <FormGroup>
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
          <FormGroup>
            <Button
              className="btn-primary btn-block"
              onClick={handleActionShop}
              disabled={loading}
            >
              Add
            </Button>
          </FormGroup>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormShop;

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { Button, Form, FormGroup } from "react-bootstrap";
import { FormSignInProps } from "../../models/authModel";
import { signUpWithEmailPassword } from "../../pages/api/auth";
import { isEmpty } from "lodash";
import { translateError } from "../../lib/translateError";

const SignUpForm = (props: FormSignInProps) => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  const validateSignUp = (values) => {
    const errorsSignUp: any = {};
    if (!values.email) {
      errorsSignUp.email = "Please enter email";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errorsSignUp.email = "Invalid email address";
    }
    if (!values.password) {
      errorsSignUp.password = "Please enter password";
    } else if (values.password.length < 6) {
      errorsSignUp.password = "Minimum be 6 characters or more";
    }
    if (!values.phone) {
      errorsSignUp.phone = "Please enter phone";
    } else if (values.phone.length !== 10) {
      errorsSignUp.phone = "Invalid phone, phone must 10 character";
    }
    return errorsSignUp;
  };

  const signUpEmailPassword = async () => {
    setLoading(true);
    const errors = await validateSignUp({ email, password, phone });
    if (!isEmpty(errors)) {
      setLoading(false);
      return setErrors(errors);
    }
    const result: any = await signUpWithEmailPassword(email, password);
    if (result?.error) {
      setLoading(false);
      return setErrors(translateError(result.error));
    }
    setLoading(false);
    setErrors({});
    props.showSignUp(false);
  };

  return (
    <Form>
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
          onClick={signUpEmailPassword}
          disabled={loading}
        >
          Sign up
        </Button>
      </FormGroup>
    </Form>
  );
};

export default SignUpForm;

import React, { useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import styles from "../../styles/Home.module.scss";
import {
  getProfileUser,
  signInWithEmailPassword,
  signInWithGoogle,
} from "../../pages/api/auth";
import { setUser } from "../../actions/userAction";
import { useDispatch } from "react-redux";
import { FormSignInProps } from "../../models/authModel";
import { isEmpty } from "lodash";
import { translateError } from "../../lib/translateError";

const SignInForm = (props: FormSignInProps) => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const validateSignIn = (values) => {
    const errorsSignIn: any = {};
    if (!values.email) {
      errorsSignIn.email = "Please enter email";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errorsSignIn.email = "Invalid email address";
    }
    if (!values.password) {
      errorsSignIn.password = "Please enter password";
    } else if (values.password.length < 6) {
      errorsSignIn.password = "Minimum be 6 characters or more";
    }
    return errorsSignIn;
  };

  const signInEmailPassword = async () => {
    setLoading(true);
    const errors = validateSignIn({ email, password });
    if (!isEmpty(errors)) {
      setLoading(false);
      return setErrors(errors);
    }
    const result = await signInWithEmailPassword(email, password);
    if (result?.error) {
      setLoading(false);
      return setErrors({ response: translateError(result.error) });
    }
    setLoading(false);
    const user = await getProfileUser();
    dispatch(setUser(user));
    props.onHide();
  };

  const signInGoogle = async () => {
    props.onHide();
    const user = await signInWithGoogle();
    if (user) {
      await dispatch(setUser(user));
    }
  };

  return (
    <Form>
      <FormGroup>
        <span className="text-danger">{errors?.response}</span>
      </FormGroup>
      <FormGroup>
        {errors?.response}
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
          onClick={signInEmailPassword}
          disabled={loading}
        >
          Sign in
        </Button>
        <Button className="btn-dark btn-block" onClick={signInGoogle}>
          Sign in with Google
          <i className={`fab fa-google ${styles.icon_google} ml-1`} />
        </Button>
      </FormGroup>
      <p className="forgot-password text-right">
        Forgot <a href="#">password</a> or{" "}
        <a href="#" onClick={() => props.showSignUp(true)}>
          sign up?
        </a>
      </p>
    </Form>
  );
};

export default SignInForm;

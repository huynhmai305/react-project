import React from "react";
import { Button, Modal } from "react-bootstrap";
import { signInWithGoogle } from "../../pages/api/auth";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { setUser } from "../../actions/userAction";
import PropTypes from "prop-types";

const ModalSignInGoogle = ({ show, onHide }) => {
  const dispatch = useDispatch();

  const signInGoogle = async () => {
    onHide();
    const user = await signInWithGoogle();
    if (user) {
      await dispatch(setUser(user));
      await Router.push("/todos");
    }
  };

  return (
    <>
      <Modal show={show} onHide={onHide} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Sign In </Modal.Title>
        </Modal.Header>
        <Modal.Body>Sign in with google, let go !</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={signInGoogle}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ModalSignInGoogle.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default ModalSignInGoogle;

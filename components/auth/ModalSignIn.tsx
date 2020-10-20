import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const ModalSignIn = ({ show, onHide }) => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const handleShowSignUpForm = async (show: boolean) => {
    setShowSignUpForm(show);
  };

  const handleCloseModal = async () => {
    setShowSignUpForm(false);
    await onHide();
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign In </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!showSignUpForm ? (
            <SignInForm onHide={onHide} showSignUp={handleShowSignUpForm} />
          ) : (
            <SignUpForm onHide={onHide} showSignUp={handleShowSignUpForm} />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

ModalSignIn.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default ModalSignIn;

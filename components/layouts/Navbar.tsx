import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  Button,
  Dropdown,
  ButtonGroup,
  Image,
} from "react-bootstrap";
import ModalSignInGoogle from "../auth/modalSignInGoogle";
import styles from "../../styles/Home.module.scss";
import firebase from "firebase";
import { firebaseConfig } from "../../database/firebase";
import { signOut } from "../../pages/api/auth";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers/rootReducer";
import { setUser } from "../../redux/actions/userAction";
import { initialUser } from "../../redux/reducers/userReducer";

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logOut = async () => {
    await signOut();
    await dispatch(setUser(initialUser));
    await Router.push("/");
  };

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  });

  return (
    <Navbar variant="light" className={styles.navbar} fixed="top">
      <Navbar.Brand href="#home">Mai Shop</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        {/*<FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
        {user.id ? (
          <Dropdown as={ButtonGroup}>
            <Button variant="outline-light">
              {user.id ? (
                <Image
                  src={user.photoURL}
                  className={styles.avatar}
                  roundedCircle
                />
              ) : (
                <i className="fas fa-user-alt fa-2x" />
              )}
            </Button>
            <Dropdown.Toggle split variant="light" />
            <Dropdown.Menu className={styles.dropdown_navigator}>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={logOut}>
                <i className="fas fa-sign-out-alt" /> Log out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Button variant="dark" onClick={handleShow}>
            <i className="fas fa-sign-in-alt" /> Sign In Google
            <i className={`fab fa-google ${styles.icon_google} ml-1`} />
          </Button>
        )}
        <ModalSignInGoogle show={show} onHide={handleClose} />
      </Form>
    </Navbar>
  );
};

export default Sidebar;

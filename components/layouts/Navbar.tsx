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
import { firebaseConfig } from "../../lib/firebase";
import { signOut } from "../../pages/api/auth";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { setUser } from "../../actions/userAction";
import { initialUser } from "../../reducers/userReducer";
import Link from "next/link";

const Sidebar = () => {
  const [show, setShow] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("");
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSelect = (eventKey) => {
    setActiveTab(eventKey);
  };
  const logOut = async () => {
    await signOut();
    await dispatch(setUser(initialUser));
    await Router.push("/");
  };

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    setActiveTab(Router.pathname);
  }, []);

  return (
    <Navbar bg="dark" variant="dark" className={styles.navbar} fixed="top">
      <Navbar.Brand href="/">Shop</Navbar.Brand>
      <Nav className="mr-auto" onSelect={handleSelect}>
        <Link href={"/todos"} passHref>
          <Nav.Link className={activeTab === "/todos" ? "active" : ""}>
            Todos
          </Nav.Link>
        </Link>
        <Link href={"/products"} passHref>
          <Nav.Link className={activeTab === "/products" ? "active" : ""}>
            Products
          </Nav.Link>
        </Link>
        <Link href={"/lessons"} passHref>
          <Nav.Link className={activeTab === "/lessons" ? "active" : ""}>
            Lessons Quiz app
          </Nav.Link>
        </Link>
        <Link href={"/posts"} passHref>
          <Nav.Link className={activeTab === "/posts" ? "active" : ""}>
            Posts
          </Nav.Link>
        </Link>
      </Nav>
      <Form inline>
        {/*<FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
        {user.id ? (
          <Dropdown as={ButtonGroup}>
            <Button variant="outline-info">
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
            <Dropdown.Toggle split variant="outline-info" />
            <Dropdown.Menu className={styles.dropdown_navigator}>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={logOut}>
                <i className="fas fa-sign-out-alt" /> Log out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Button variant="outline-info" onClick={handleShow}>
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

import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  Button,
  Dropdown,
  ButtonGroup,
  Image,
  Badge,
  NavLink,
} from "react-bootstrap";
import ModalSignIn from "../auth/ModalSignIn";
import styles from "../../styles/Home.module.scss";
import firebase from "firebase";
import { firebaseConfig } from "../../lib/firebase";
import { signOut } from "../../api/auth";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { setUser } from "../../actions/userAction";
import { initialUser } from "../../reducers/userReducer";
import Link from "next/link";
import { Role } from "../../models/userModel";
import { setListTodo } from "../../actions/todoAction";
import { initTodoList } from "../../models/todoModel";
import { setListProduct } from "../../actions/productAction";
import { setCategories } from "../../actions/categoryAction";
import { initCartList } from "../../models/cartModel";
import { setCart } from "../../actions/cartAction";

const Sidebar = () => {
  const [show, setShow] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("");
  const user = useSelector((state: RootState) => state.user);
  const totalCart = useSelector((state: RootState) => state.cart.quantity);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSelect = (eventKey) => {
    setActiveTab(eventKey);
  };
  const logOut = async () => {
    await signOut();
    // convert default redux
    dispatch(setUser(initialUser));
    dispatch(setListTodo(initTodoList));
    dispatch(setListProduct([]));
    dispatch(setCategories([]));
    dispatch(setCart(initCartList));
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
      <Link href={"/"} passHref>
        <Navbar.Brand className="text-info">
          <i className="fas fa-shopping-cart" />
          Shopping cart
        </Navbar.Brand>
      </Link>
      {user.id && user.role === Role.admin && (
        <Nav className="mr-auto" onSelect={handleSelect}>
          <Link href={"/shops"} passHref>
            <Nav.Link className={activeTab === "/shops" ? "active" : ""}>
              Shops List
            </Nav.Link>
          </Link>
          <Link href={"/categories"} passHref>
            <Nav.Link className={activeTab === "/categories" ? "active" : ""}>
              Categories list
            </Nav.Link>
          </Link>
          <Link href={"/products/all"} passHref>
            <Nav.Link className={activeTab === "/products/all" ? "active" : ""}>
              Products List
            </Nav.Link>
          </Link>
          <Link href={"/todos"} passHref>
            <Nav.Link
              className={activeTab === "/todos" ? "active" : ""}
              disabled
            >
              Todos
            </Nav.Link>
          </Link>
          <Link href={"/lessons"} passHref>
            <Nav.Link
              className={activeTab === "/lessons" ? "active" : ""}
              disabled
            >
              Lessons Quiz app
            </Nav.Link>
          </Link>
        </Nav>
      )}
      {user.id && user.role === Role.shop && (
        <Nav className="mr-auto" onSelect={handleSelect}>
          <Link href={"/products/[shopId]"} as={"/products/list"} passHref>
            <Nav.Link className={activeTab === "/products/list" ? "active" : ""}>
              My products
            </Nav.Link>
          </Link>
        </Nav>
      )}
      <Form inline className="ml-auto">
        {user.id && user.role === Role.customer && (
          <Nav>
            <Link href={"/shopping-cart"} passHref>
              <NavLink>
                <div className="mr-5 text-light">
                  <i className="fas fa-cart-arrow-down fa-2x" />
                  {totalCart > 0 && (
                    <Badge variant="danger" pill>
                      {totalCart}
                    </Badge>
                  )}
                </div>
              </NavLink>
            </Link>
          </Nav>
        )}
        {user.id ? (
          <Dropdown as={ButtonGroup}>
            <Button variant="outline-info" href={"/profile"}>
              {user.photoURL ? (
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
          <div className="nav navbar-nav ml-auto">
            <Button variant="outline-info" onClick={handleShow}>
              <i className="fas fa-sign-in-alt" /> Sign In
            </Button>
          </div>
        )}
        <ModalSignIn show={show} onHide={handleClose} />
      </Form>
    </Navbar>
  );
};

export default Sidebar;

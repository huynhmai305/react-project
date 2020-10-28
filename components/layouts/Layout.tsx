import styles from "../../styles/Home.module.scss";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Navbar";
import { getProfileUser } from "../../api/auth";
import { setUser } from "../../actions/userAction";
import firebase from "firebase";
import { firebaseConfig } from "../../lib/firebase";
import { isEmpty } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { Role } from "../../models/userModel";
import { getShoppingCart } from "../../api/cart";
import { setCart } from "../../actions/cartAction";

const Layout = ({ children }) => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const getUserLayout = async () => {
    const user = await getProfileUser();
    if (!isEmpty(user)) {
      dispatch(setUser(user));
    }
  };

  const getCartCustomer = async () => {
    if (user.role !== Role.customer) return;
    const cart: any = await getShoppingCart();
    if (!isEmpty(cart)) return dispatch(setCart(cart));
  };

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        await getUserLayout();
      }
    });
  });

  useEffect(() => {
    getCartCustomer();
  }, [user.role]);

  return (
    <div className={styles.container}>
      <Header />
      <header>
        <Sidebar />
      </header>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;

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
import { useDispatch } from "react-redux";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  const getUserLayout = async () => {
    const user = await getProfileUser();
    if (!isEmpty(user)) {
      dispatch(setUser(user));
    }
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

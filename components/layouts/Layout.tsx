import styles from "../../styles/Home.module.scss";
import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        { children }
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element
}

export default Layout

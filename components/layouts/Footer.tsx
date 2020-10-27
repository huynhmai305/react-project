import * as React from "react";
import styles from "../../styles/Home.module.scss";

const Footer = () => {
  return (
    <div className="text-center bg-dark text-light">
      <footer className={styles.footer}>
        <span>Copyright © Huynh Mai</span>
      </footer>
    </div>
  );
};

export default Footer;

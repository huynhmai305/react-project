import React, {useEffect} from "react";
import Layout from "../components/layouts/Layout";
import firebase from "firebase";
import {firebaseConfig} from "../database/firebase";
import {Image} from "react-bootstrap";
import styles from '../styles/Home.module.scss'

const Index = () => {
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  })

  return (
    <Layout>
      <div>
        {/*<h1>Welcome to my app !</h1>*/}
        <Image src="/images/background.png" className={styles.background_image} />
      </div>
    </Layout>
  )
}

export default Index

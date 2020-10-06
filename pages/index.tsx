import React, {useEffect} from "react";
import Layout from "../components/layouts/Layout";
import firebase from "firebase";
import {firebaseConfig} from "../database/firebase";

const Index = () => {
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  })

  return (
    <Layout>
      <div>
        <h1>Welcome to my app !</h1>
        <br />
      </div>
    </Layout>
  )
}

export default Index

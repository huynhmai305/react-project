import React, { useEffect } from "react";
import firebase from "firebase";
import { firebaseConfig } from "../lib/firebase";
import Main from "../components/layouts/Main";

const Index = () => {
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  });

  return (
    <Main />
  )
};

export default Index;

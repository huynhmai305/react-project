import React, { useEffect } from "react";
import Layout from "../components/layouts/Layout";
import firebase from "firebase";
import { firebaseConfig } from "../lib/firebase";
import CarouselHome from "../components/layouts/Carousel";
import ProductLayout from "../components/products";

const Index = () => {
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  });

  return (
    <Layout>
      <div>
        <CarouselHome />
        <ProductLayout />
      </div>
    </Layout>
  );
};

export default Index;

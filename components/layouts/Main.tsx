import React from "react";
import Layout from "./Layout";
import CarouselHome from "./Carousel";
import ProductLayout from "../products";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { Role } from "../../models/userModel";
import MainAdmin from "./MainAdmin";
import MainShop from "./MainShop";
import MainCustomer from "./MainCustomer";

export const RenderMain = ({ role }) => {
  switch (role) {
    case Role.admin:
      return <MainAdmin />;
    case Role.shop:
      return <MainShop />;
    case Role.customer:
      return <MainCustomer />;
    default:
      return;
  }
}

const Main = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <Layout>
      <div>
        {user.id ? <RenderMain role={user.role} /> : (<div><CarouselHome /></div>)}
      </div>
    </Layout>
  )
};

export default Main;

import Head from "next/head";
import React from "react";

const Header = () => {
  return (
    <Head>
      <title>Shop</title>
      <link rel="icon" href={"/favicon.ico"} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};

export default Header;

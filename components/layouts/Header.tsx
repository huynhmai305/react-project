import Head from "next/head";
import React from "react";

const Header = () => {
  return (
    <Head>
      <title>Shop</title>
      <link rel="icon" href={"/favicon.ico"} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script
        src={`https://www.paypal.com/sdk/js?debug=true&client-id=${process.env.CLIENT_SANDBOX_ID}"`}
      />
    </Head>
  );
};

export default Header;

import React from "react";
import Layout from "../components/layouts/Layout";
import Link from "next/link";

const Index = () => {
  return (
    <Layout>
      <div>
        <h1>Welcome to my app !</h1>
        <Link href={'/todos'}><a>Todo list here</a></Link>
      </div>
    </Layout>
  )
}

export default Index

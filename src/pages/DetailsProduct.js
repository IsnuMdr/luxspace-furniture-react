import React from "react";
import Header from "partials/Header";
import BreadCrumb from "components/BreadCrumb";
import Sitemap from "partials/Sitemap";
import Footer from "partials/Footer";
import Product from "partials/Details/Product";
import Suggestion from "partials/Details/Suggestion";

export default function DetailsProduct() {
  return (
    <>
      <Header theme="black" />
      <BreadCrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/91231", name: "Office Room" },
          { url: "/categories/91231/products/7888", name: "Details" },
        ]}
      />
      <Product />
      <Suggestion />
      <Sitemap />
      <Footer />
    </>
  );
}

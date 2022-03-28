import React from "react";
import Header from "partials/Header";
import BreadCrumb from "components/BreadCrumb";
import Footer from "partials/Footer";
import ShoppingCart from "partials/Cart/ShoppingCart";
import ShippingDetails from "partials/Cart/ShippingDetails";
import Documents from "partials/Documents";

export default function Cart() {
  return (
    <Documents>
      <Header theme="black" />
      <BreadCrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />
      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>
      <Footer />
    </Documents>
  );
}

import React from "react";
import Header from "partials/Header";
import Sitemap from "partials/Sitemap";
import PageErrorMessage from "partials/PageErrorMessage";
import Footer from "partials/Footer";

export default function NotFound() {
  return (
    <section>
      <Header />
      <PageErrorMessage />
      <Sitemap />
      <Footer />
    </section>
  );
}

import React from "react";
import Header from "partials/Header";
import Sitemap from "partials/Sitemap";
import PageErrorMessage from "partials/PageErrorMessage";
import Footer from "partials/Footer";
import Documents from "partials/Documents";

export default function NotFound() {
  return (
    <Documents>
      <Header />
      <PageErrorMessage />
      <Sitemap />
      <Footer />
    </Documents>
  );
}

import React from "react";
import Header from "partials/Header";
import Hero from "partials/HomePage/Hero";
import BrowseRoom from "partials/HomePage/BrowseRoom";
import JustArrived from "partials/HomePage/JustArrived";
import Clients from "partials/Clients";
import Sitemap from "partials/Sitemap";
import Footer from "partials/Footer";
import useScrollAnchor from "helpers/hooks/useScrollAnchor";
import useModalDOM from "helpers/hooks/useModalDOM";

export default function HomePage() {
  useScrollAnchor();
  useModalDOM();
  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}

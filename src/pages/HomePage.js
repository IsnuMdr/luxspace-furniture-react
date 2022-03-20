import React from "react";
import Header from "partials/Header";
import Hero from "partials/Hero";
import BrowseRoom from "partials/HomePage/BrowseRoom";
import JustArrived from "partials/HomePage/JustArrived";
import Clients from "partials/Clients";
import Sitemap from "partials/Sitemap";
import Footer from "partials/Footer";

export default function HomePage() {
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

import React from "react";
import Header from "partials/Header";
import Hero from "partials/HomePage/Hero";
import BrowseRoom from "partials/HomePage/BrowseRoom";
import JustArrived from "partials/HomePage/JustArrived";
import Clients from "partials/Clients";
import Sitemap from "partials/Sitemap";
import Footer from "partials/Footer";
import Documents from "partials/Documents";

export default function HomePage() {
  return (
    <Documents>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </Documents>
  );
}

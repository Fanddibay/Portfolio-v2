import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./components/navbar";
import Hero from "./components/header";
import Work from "./components/work";
import Showcase from "./components/showcase";
import WebProject from "./components/webProject";
import ContactUs from "./components/contactUs";
import Footer from "./components/footer";
import Scroll from "./atoms/scrollToUp";

import "./index.css";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Nav />
    <Hero />
    <Work />
    <Showcase />
    <WebProject />
    <ContactUs />
    <Scroll />

    <Footer />
  </React.StrictMode>
);

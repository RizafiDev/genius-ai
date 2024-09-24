import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Nav from "./Nav.jsx";
import Header from "./Header.jsx";
import Sponsor from "./Sponsor.jsx";
import Features from "./Features.jsx";
import Services from "./Services.jsx";
import Pricing from "./Pricing.jsx";
import Tagline from "./Tagline.jsx";
import Footer from "./Footer.jsx";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Nav />
    <Header />
    <Sponsor />
    <Features />
    <Services />
    <Pricing />
    <Tagline />
    <Footer />
  </StrictMode>
);

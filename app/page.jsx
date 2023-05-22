"use client";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Brandings from "./components/sections/Brandings";
import Portifolio from "./components/sections/Portifolio";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/footer/Footer";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services/>
      <Brandings/>
      <Portifolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  );
}

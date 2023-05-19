"use client";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Brandings from "./components/sections/Brandings";
import Portifolio from "./components/sections/Portifolio";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services/>
      <Brandings/>
      <Portifolio/>
    </>
  );
}

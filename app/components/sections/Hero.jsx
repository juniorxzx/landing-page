import React from "react";

import { motion } from "framer-motion";
import Container from "../Container";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex justify-center items-center relative">
      <Container>
        <img
          src="/images/Hero/vector.svg"
          alt="Foto"
          className="absolute bottom-0 left-0"
        />
        <img
          src="/images/Hero/polygon.svg"
          alt="Foto"
          className="absolute bottom-0 right-0 h-[879px]"
        />
        <img
          src="/images/Hero/star.svg"
          alt="Foto"
          className="absolute bottom-[190px]"
        />
        <img
          src="/images/Hero/stars.svg"
          alt="Foto"
          className="absolute right-[30%] top-[30%]"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
          }}
          className="relative gap-3 text-center"
        >
          <h1 className="text-6xl font-semibold">Lunna</h1>
          <span className="text-2xl font-semibold ">
            Deixe a Lunna iluminar o caminho da sua marca com estratégias
            estelares.
          </span>
          <div className="md:flex py-3 hidden justify-center text-purple-500">
            <h1 className="my-0 mx-[18px] tracking-[2px] text-[20px] font-medium">
              BRANDING
            </h1>
            <span className="text-6xl leading-[0px]">.</span>
            <h1 className="my-0 mx-[18px] tracking-[2px] text-[20px] font-medium">
              WEBSITES
            </h1>
            <span className="text-6xl leading-[0px]">.</span>
            <h1 className="my-0 mx-[18px] tracking-[2px] text-[20px] font-medium">
              DIGITAL MARKETING
            </h1>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;

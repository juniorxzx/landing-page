import React from "react";
import Container from "../Container";

const Brandings = () => {
  return (
    <section
      id="home"
      className="md:h-[100%] flex justify-center items-center relative mt-4 bg-[url('/images/Brandings/vector5.svg')] bg-no-repeat bg-left-bottom"
    >
      <Container>
        <img
          src="/images/Brandings/stars.svg"
          alt="star"
          className="absolute -z-30 right-4"
        />

        <div className="text-center">
          <h1 className="text-4xl font-semibold">
            Mais de <span className="text-purple-500">115 projetos</span> de
            sonho de clientes que criamos este ano
          </h1>
          <h3>Estas marcas já colaboram conosco </h3>
        </div>
        <div className="mt-4 flex-col justify-center items-center flex md:flex-row md:justify-between bg-slate-300 bg-opacity-80 p-4 rounded-lg shadow-md">
          <img
            src="/images/Brandings/vitta.png"
            alt="vitta"
            className="w-[150px]"
          />

          <img
            src="/images/Brandings/imma.png"
            alt="imma"
            className="w-[150px]"
          />
          <img
            src="/images/Brandings/bild.svg"
            alt="bild"
            className="w-[150px]"
          />
        </div>

      
      </Container>
    </section>
  );
};

export default Brandings;

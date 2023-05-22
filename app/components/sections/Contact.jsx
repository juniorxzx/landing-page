import React from "react";
import Container from "../Container";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-[100%] flex justify-center items-center"
    >
      <Container className={"w-[100%] h-[100%] mt-10"}>
        <div className="flex flex-col justify-center items-center w-[100%] h-[100%] rounded-lg shadow-lg py-10 md:py-12 px-2 md:px-6 bg-[url('/images/ContactBg.svg')] bg-no-repeat bg-cover bg-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold">
              Pronto para realizar seu sonho?
            </h1>
            <span className="text-4xl">
              vamos ajudá-lo a fazer isso acontecer
            </span>
          </div>
          <div>
            <button className="bg-purple-500 py-2 px-8 mt-8 rounded-xl">Contato</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;

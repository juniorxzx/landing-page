import React from "react";

import Container from "../Container";

const About = () => {
  return (
    <section
      id="about"
      className="md:h-[100%] flex justify-center items-center"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="justify text-lg gap-2">
            <h1 className="text-purple-500 py-2 font-bold text-2xl">
              Nossa história
            </h1>
            <p className="py-2">
              Somos uma constelação de ideias e estratégias criativas que guiam
              nossos clientes em direção ao sucesso. Acreditamos que assim como
              a lua influencia as marés e o movimento das pessoas, nossa equipe
              de profissionais influencia positivamente a imagem e resultados de
              cada empresa que atendemos.
            </p>
            <p className="py-2">
              Em nosso universo, valorizamos a criatividade, o comprometimento,
              a inovação e a transparência, sempre buscando o equilíbrio
              perfeito entre a estratégia e a emoção. E é com essa mentalidade
              que fazemos da Lunna um diferencial no mercado, guiando nossos
              clientes para voos ainda mais altos.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img src="/images/About/about.png" alt="About" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;

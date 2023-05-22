import React from "react";
import Container from "../Container";
import Card from "../Card";

const Testimonials = () => {
  const testimonials = [
    {
      img: "https://source.unsplash.com/random/?girl",
      name: "Miriam",
      coment: "Eu amei trabalhar com essa empresa, aprendi muito!",
    },
    {
      img: "https://source.unsplash.com/random/?man",
      name: "Alex Johnson",
      coment: "✌️",
    },
    {
      img: "https://source.unsplash.com/random/?woman",
      name: "Jane Smith",
      coment:
        "Empresa muito boa, entregou os projetos antes do prazo, super recomendo",
    },
  ];

  return (
    <section
      id="testimonials"
      className="md:h-[100%]  flex justify-center items-center relative"
    >
      <Container>
        <img src="/images/Hero/stars.svg" alt="star" className="absolute top-[10%] left-[10%] -z-30"/>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-20 h-[100%]">
          <div className="flex items-center justify-center">
            <h1 className="text-[30px] md:text-[50px] text-purple-500">
              Pessoas que escolheram a Lunna, deixaram um pouco sobre o que
              acharam de trabalhar conosco
            </h1>
          </div>
          <div className="relative h-full place-items-center">
            <Card className="shadow-md p-4 rounded-xl h-[150px] min-w-[200px] ">
              <div className="flex gap-2 items-center my-4">
                <img
                  src="https://source.unsplash.com/random/?girl"
                  alt="Miriam"
                  className="w-8 h-8 rounded-full"
                />
                <h1 className="text-purple-500">Miriam </h1>
              </div>
              <span>Eu amei trabalhar com essa empresa, aprendi muito!</span>
            </Card>
            <Card className="shadow-md p-4 h-[150px] min-w-[200px] rounded-xl">
              <div className="flex gap-2 items-center my-4">
                <img
                  src="https://source.unsplash.com/random/?man"
                  alt="Miriam"
                  className="w-8 h-8 rounded-full"
                />
                <h1 className="text-purple-500">Luan Muratori </h1>
              </div>
              <span>Como dono, não posso falar mal né 🏳️‍🌈🥰🍻🤪💅</span>
            </Card>
            <Card className="shadow-md p-4 rounded-xl h-[150px] min-w-[200px] ">
              <div className="flex gap-2 items-center my-4">
                <img
                  src="https://source.unsplash.com/random/?boy"
                  alt="Miriam"
                  className="w-8 h-8 rounded-full"
                />
                <h1 className="text-purple-500">Guilhereme Santiago </h1>
              </div>
              <span>Sou amigo do dono e vim deixar um comentário positivo porque ele pediu</span>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;

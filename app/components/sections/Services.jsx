import React from "react";
import Container from "../Container";


const Services = () => {
  const services = [
    { img: "/images/Services/vector1.svg", title: "Produção de Conteúdo" },
    { img: "/images/Services/vector2.svg", title: "Gestão de Redes Sociais" },
    { img: "/images/Services/vector3.svg", title: "Criação de sites" },
    { img: "/images/Services/vector3.svg", title: "Gestão de tráfego" },
  ];

  return (
    <section
      id="services"
      className="md:h-[100%] relative flex justify-center items-center"
    >
      <Container>
        <img
          src="/images/Services/cloud.svg"
          alt="Foto"
          className="absolute top-0 -left-[4%] w-[280px] -z-30"
        />

        <img
          src="/images/Services/cloud.svg"
          alt="Foto"
          className="absolute bottom-[200px] left-[30%] -z-30"
        />

        <img
          src="/images/Services/cloud.svg"
          alt="Foto"
          className="absolute bottom-[1%] -left-[4%] w-[230px] -z-30"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="">
            <h1 className="text-[60px]">
              Nosso serviço é realizar o sonho do cliente
            </h1>
            <p>
              Nos envolvemos em criatividade digital para resolver problemas de
              negócios
            </p>
          </div>

          <div className="grid grid-cols-2 ">
            {services.map((item, i) => (
              <div key={i} className="p-2">
                <img src={item.img} alt={item.title} className="object-contain"/>

                <h1 className="mt-2 p-2 bg-purple-500 rounded-lg">{item.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;

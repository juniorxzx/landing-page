import React, { useRef, useState, useEffect } from "react";
import Container from "../Container";
import { motion } from "framer-motion";

const Portifolio = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  const imgs = [
    { img: "https://source.unsplash.com/random/?jungle" },
    { img: "https://source.unsplash.com/random/?sky" },
    { img: "https://source.unsplash.com/random/?atlas" },
  ];
  return (
    <section
      id="services"
      className="md:h-[100%] relative flex justify-center items-center"
    >
      <Container>
        <div className="grid grid-cols-1 items-center">
          <h1 className="text-purple-500 py-2 font-bold text-2xl flex ">
            Os projetos mais curtidos na vitrine
          </h1>

          <div className="items-center justify-center flex ">
            <motion.div
              className="cursor-grab overflow-hidden "
              ref={carousel}
              whileTap={{ cursor: "grabbing" }}
            >
              <motion.div
                className="flex"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
              >
                {imgs.map((item, i) => (
                  <div className="min-h-[300px] min-w-[200px] " key={i}>
                    <img
                      src={item.img}
                      alt="foto"
                      className="rounded-xl p-2 w-full h-[100%]  pointer-events-none "
                    />
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Portifolio;

"use client";
import React, { useCallback, useState } from "react";
import { BiMenu } from "react-icons/bi";
import DarkMode from "./DarkMode";
import { Link } from "react-scroll";
const Menu = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setOpen((value) => !value);
  }, []);
  return (
    <div className="">
      <div className="hidden md:flex gap-3 ">
        <ul className="flex gap-3 font-semibold items-center dark:text-white text-xl">
          <li className="hover:text-purple-300 cursor-pointer">
            {" "}
            <Link
              to="services"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Serviços
            </Link>
          </li>
          <li className="hover:text-purple-300 cursor-pointer">
            {" "}
            <Link
              to="portifolio"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Portfólio
            </Link>
          </li>
          <li className="hover:text-purple-300 cursor-pointer">
            <Link
              to="testimonial"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Depoimentos
            </Link>
          </li>

          {/* <li className="cursor-pointer">
            <DarkMode />
          </li> */}
        </ul>
    
      </div>
      <div className="flex md:hidden">
        <div className="" onClick={toggleOpen}>
          <BiMenu size={28} />
        </div>

        {open && (
          <div
            className="
            absolute  
            w-[40vw]
            md:w-3/4
            right-0
            top-12 
            shadow
            p-2
            rounded-md
           bg-white 
           flex 
           items-center 
           justify-center"
          >
            <ul className="flex flex-col uppercase gap-3 font-semibold">
              <li className="hover:text-purple-300 cursor-pointer">
                <Link
                  to="about"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Sobre nós
                </Link>
              </li>
              <li className="hover:text-purple-300 cursor-pointer">
                <Link
                  to="services"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Services
                </Link>
              </li>
              <li className="hover:text-purple-300 cursor-pointer">
                <Link
                  to="team"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Time
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;

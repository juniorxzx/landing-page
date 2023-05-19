"use client";
import React, { useEffect, useState } from "react";
import Container from "../Container";
import Logo from "./Logo";
import Menu from "./Menu";
import { Link } from "react-scroll";

const Navbar = () => {
  const [border, setBorder] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setBorder("border-b-[1px] shadow-sm bg-white");
      } else {
        setBorder("");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed w-full  dark:bg-gray-950 z-10 ${border} transition-all `}
    >
      <div className={`py-4`}>
        <Container>
          <div
            className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
          >
            <Logo />
            <Menu />
        
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;

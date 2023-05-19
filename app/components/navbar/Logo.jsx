"use client";
import { Link } from "react-scroll";

const Logo = () => {


  return (
    <Link
      to="home"
      activeClass="active"
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      <img
        className="cursor-pointer"
        src="/images/Avatar2.png"
        height="100"
        width="100"
        alt="Logo"
      />
    </Link>
  );
};

export default Logo;

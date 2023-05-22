import React from "react";
import Container from "../Container";

const Footer = () => {
  return (
    <footer className="h-[200px]  mt-10">
      <div className=" py-4 h-[100%]">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} lunna. Todos
            os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

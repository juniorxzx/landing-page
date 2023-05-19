import React from "react";

const Card = ({ image, title, content }) => {
  return (
    <div className="flex flex-col shadow-sm border p-2 rounded-2xl w-[200px]">
      <div className="flex flex-col justify-center items-center rounded-full" >
        <img src={image} alt={title} />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1>{title}</h1>
        <span>{content}</span>
      </div>
    </div>
  );
};

export default Card;

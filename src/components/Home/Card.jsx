import React from "react";

const Card = ({
  title,
  description,
  button,
  buttonbg,
  buttonhover,
  cardbg,
  link,
}) => {
  return (
    <div
      className={`w-[500px] h-40 rounded shadow-lg ${cardbg} flex flex-col items-start py-5 px-5`}
    >
      <h1 className="font-bold text-2xl">{title}</h1>
      <p className="my-3 text-sm">{description}</p>
      <a
        href={`${link}`}
        className={`my-2 ${buttonbg} hover:${buttonhover} text-white w-auto h-auto rounded px-4 py-2 transition-colors duration-300`}
      >
        {button}
      </a>
    </div>
  );
};

export default Card;

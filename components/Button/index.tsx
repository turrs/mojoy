import React from 'react';

type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="bg-purple w-full h-full flex items-center justify-center  rounded-xl drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
      <p className="text-white font-semibold  text-xl md:text-3xl">{text}</p>
    </button>
  );
};

export default Button;

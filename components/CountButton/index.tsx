import Image from 'next/image';
import React from 'react';

type CountButtonProps = {};

const CountButton = (props: CountButtonProps) => {
  return (
    <div className="flex justify-center items-center">
      <div className=" relative w-6 h-6 xl:w-7 xl:h-7">
        <Image
          alt="increase"
          layout="fill"
          objectFit="cover"
          src="./increase.svg"
        />
      </div>
      <div className="lg:px-4 px-2">
        <p className="sm:text-xl text-sm font-semibold">1</p>
      </div>
      <div className=" relative w-6 h-6 xl:w-7 xl:h-7">
        <Image
          alt="decrease"
          layout="fill"
          objectFit="cover"
          src="./decrease.svg"
        />
      </div>
    </div>
  );
};

export default CountButton;

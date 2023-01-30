import Image from 'next/image';
import React from 'react';
import CountButton from '../CountButton';

type ListOrderProps = {};

const ListOrder = (props: ListOrderProps) => {
  return (
    <div className="flex w-full  ">
      <div className="relative w-64 md:w-96 h-full">
        <Image
          src="/coffe.png"
          alt="menu"
          className="rounded-xl "
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-2 relative w-full xl:p-4">
        <div>
          <p className="sm:text-xl text-sm font-semibold">Hot Cappucino</p>
        </div>
        <div>
          <p className="sm:text-xl text-xs font-semibold text-purple">18.000</p>
        </div>
        <div className="absolute bottom-0 right-0 p-2 xl:p-4 ">
          <CountButton />
        </div>
      </div>
    </div>
  );
};

export default ListOrder;

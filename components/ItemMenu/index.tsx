import Image from 'next/image';
import React from 'react';
import Button from '../Button';

type ItemMenuProps = {};

const ItemMenu = (props: ItemMenuProps) => {
  return (
    <div className="w-full h-full rounded-xl sm:p-0 p-2 bg-white rounded-xl drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
      <div className="sm:h-64 h-44 w-full  relative ">
        <Image
          src="/coffe.png"
          alt="menu"
          className="rounded-xl "
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-2 flex flex-col items-center sm:items-start justify-center sm:justify-start ">
        <div>
          <p className="sm:text-xl text-sm font-semibold">Hot Cappucino</p>
        </div>
        <div className="py-2">
          <p className="sm:text-xl text-xs font-semibold text-purple">18.000</p>
        </div>
        <div className="sm:w-32 w-24 pb-2">
          <Button text="Tambah" />
        </div>
      </div>
    </div>
  );
};

export default ItemMenu;

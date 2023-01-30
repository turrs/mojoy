import React from 'react';
import Button from '../Button';
import ListOrder from '../ListOrder';

type PaymentProps = {};

const Payment = (props: PaymentProps) => {
  return (
    <div className="py-12  px-3.5 h-full bg-sidebar">
      <div className="relative h-full flex flex-col">
        <div>
          <p className="font-semibold text-xl text-purple">Current Order</p>
        </div>
        <div className="py-2">
          <div className="flex bg-white rounded-xl w-full h-36 drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)] ">
            <ListOrder />
          </div>
        </div>
        <div className="py-2">
          <div className="flex bg-white rounded-xl w-full h-36 drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)] ">
            <ListOrder />
          </div>
        </div>
        <div className="py-2">
          <div className="flex bg-white rounded-xl w-full h-36 drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)] ">
            <ListOrder />
          </div>
        </div>
        <div className="absolute bottom-0 w-full ">
          <div className="bg-white rounded-xl p-4 ">
            <p className="sm:text-xl text-xs font-semibold text-purple">
              18.000
            </p>
          </div>
          <div className="w-full h-12 my-7 ">
            <Button text="Bayar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

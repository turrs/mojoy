import React from 'react';
import ListOrder from '../ListOrder';

type PaymentProps = {};

const Payment = (props: PaymentProps) => {
  return (
    <div className="py-12 px-3.5 bg-sidebar">
      <div className="flex flex-col">
        <div>
          <p className="font-semibold text-xl text-purple">Current Order</p>
        </div>
        <div className="flex bg-white rounded-xl w-full h-36 py-2.5">
          <ListOrder />
        </div>
      </div>
    </div>
  );
};

export default Payment;

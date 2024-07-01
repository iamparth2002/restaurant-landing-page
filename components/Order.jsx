import React from 'react';
import Food from './sub-component/Food';

const Order = () => {
  return (
    <div className="p-5 flex flex-col items-center mt-10 space-y-5 mb-10">
      <h1 className="text-4xl font-semibold text-center">How To Order?</h1>

      <div className="flex flex-wrap items-center justify-center gap-16 pt-10">
        <div className="flex flex-col gap-2">
          <div className="p-4 bg-primary text-white rounded-2x flex-1/2 rounded-2xl w-1/3 font-semibold ">01</div>


          <Food img={'location.png'} title={'Pick your Location'} />

        </div>
        <div className="flex flex-col gap-2">
          <div className="p-4 bg-primary text-white rounded-2x flex-1/2 rounded-2xl w-1/3 font-semibold ">02</div>


          <Food img={'pray.png'} title={'Choose your meal'} />


        </div>
        <div className="flex flex-col gap-2">
          <div className="p-4 bg-primary text-white rounded-2x flex-1/2 rounded-2xl w-1/3 font-semibold ">03</div>


          <Food img={'burger.png'} title={'Add other things'} />


        </div>
        <div className="flex flex-col gap-2">
          <div className="p-4 bg-primary text-white rounded-2x flex-1/2 rounded-2xl w-1/3 font-semibold ">04</div>


          <Food img={'house.png'} title={'Order On its way'} />

        </div>

       
      </div>
    </div>
  );
};

export default Order;

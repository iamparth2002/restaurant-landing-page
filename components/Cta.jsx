import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Cta = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-10 gap-10 md:p-20 bg-[#FFEFEC] w-full">
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-4xl">Subscribe to Our Newsletter!</h1>
        <p>
          Find Local Restaurants and delivery by entering your delivery address.
        </p>
      </div>

      <div className="flex border rounded-full outline-none w-96 bg-white py-2 px-2">
        <Input
          className="rounded-full border-none bg-inherit"
          placeholder="Enter you delievery address"
        />
        <Button className="rounded-full p-5">Send Now</Button>
      </div>
    </div>
  );
};

export default Cta;

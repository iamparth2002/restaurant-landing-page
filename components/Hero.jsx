import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className=" flex flex-col py-4 gap-5 md:py-20 items-center md:gap-0 md:flex-row  px-5">
      <div className="flex-1 flex flex-col justify-center space-y-4">
        <h1 className="font-bold text-6xl">
          You Favourite Food Delivery Partner
        </h1>
        <h3 className='text-left'>
          The Food at your doorstep.Why Starve when you have us
          <br />
          You Hunger Partner.Straight out of the oven to your doorstep.
        </h3>
        <div className="flex border rounded-full outline-none w-96 bg-[#F6F6F6]">
          <Input
            className="rounded-full border-none bg-inherit"
            placeholder="Enter you delievery address"
          />
          <Button className="rounded-full p-5">Order Now</Button>
        </div>
        <div className='flex gap-5 pt-3'>
          <div className=' flex items-center gap-2 bg-[#F4F4F4] py-2 px-4 rounded-xl'>
            <img src="/Logo.png" alt="" />
            <p>Download on the<br/><span className='font-semibold text-base'>App Store</span> </p>
          </div>
          <div className=' flex items-center gap-2 bg-[#F4F4F4] py-2 px-4 rounded-xl'>
            <img src="/google.png" alt="" />
            <p>Get it on<br/><span className='font-semibold text-base'>Google Play</span> </p>
          </div>
          
        </div>
      </div>
      <div className="flex-1 flex justify-end bg-[#F2EBDA] pt-5 px-5 rounded-3xl h-96 w-96 ">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;

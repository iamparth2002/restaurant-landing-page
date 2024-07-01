import React from 'react';
import Food from './sub-component/Food';

const About = () => {
  return (
    <div className="p-5 flex flex-col items-center mt-10 space-y-5">
      <h1 className="text-4xl font-semibold text-center">
        More than <span className="text-primary">10,000</span> Dishes<br></br>{' '}
        to Order!
      </h1>
      <p className="text-center">
        Welcome to the biggest Network of Food Ordering and Delivery
      </p>
      <div className="flex flex-wrap gap-8">
        <Food img={'Pizza.png'} title={'Pizza'} />
        <Food img={'burger.png'} title={'Burger'} />
        <Food img={'sushi.png'} title={'Sushi'} />
        {/* <div className=" bg-[#FAFAFA] inline-block p-5 rounded-2xl place-content-end">
          <h2 className=" text-center font-semibold">
            Find deals, free delivery andd more from our restaurant partners.
          </h2>
          <img src="/Illustrations.png" alt="" className="" />
        </div> */}
      </div>

      <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 pt-10">
        <p className="md:w-1/2 flex flex-col gap-4">
          <img src="/Vector.png" alt="" className="w-10" />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          consectetur vitae consequatur at quibusdam praesentium quas repellat,
          repudiandae, ipsum facilis dicta accusantium nulla eaque modi voluptas
          laudantium atque.
        </p>
        <div className='flex gap-4'>
          <Food img={'pastry.png'} title={'Desserts'} className="flex-1" />
          <Food img={'noodles.png'} title={'Pasta'} className="flex-1" />
          <Food img={'salad.png'} title={'Salad'} className="flex-1" />
        </div>
      </div>
    </div>
  );
};

export default About;

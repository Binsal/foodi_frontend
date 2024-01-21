import React from 'react'

const Menu = () => {
  return (
    <div>
    <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
    <div className="py-48 flex flex-col  items-center justify-center gap-8">

      <div className="text-center px-4 space-y-7">
      <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
          For the Love of Delicious <span className="text-green">Food</span>
        </h2>
        <p className="text-[#4A4A4A] text-xl md:w-4/5 mx-auto">
          Come with family & feel the joy of mouthwatering food such as Greek Salad, Lasagne, Butternut 
          Pumpkin, Tokusen Wagyu, Olives Rellenas and more for a moderate cost
        </p>
        <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full">
          Order Now
        </button>
      </div>
    </div>
    </div>

    <div className="section-container">

    </div>
  </div>
  );
};

export default Menu;

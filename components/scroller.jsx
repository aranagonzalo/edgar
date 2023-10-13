"use client";

import React, { useEffect, useState } from 'react';

const Scroller = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsAnimated(true);
    }
  }, []);

  return (
    <div className='w-full mx-auto justify-center flex text-center flex-col lg:pt-4 pt-14 pb-14'>
      <h3 className="text-3xl text-gray-500 font-extrabold py-2">Trabajamos con una gran variedad de marcas</h3>
      <p className="text-lg text-gray-400 font-normal pb-12">Encuentra el equipo que se ajuste a tus necesidades.</p>
      <div className={`scroller lg:w-[800px] md:w-[600px] w-[80%] mx-auto text-3xl font-extrabold text-gray-300 outline-black outline-2 outline ${isAnimated ? 'overflow-hidden mask' : 'overflow-auto'}`}>
            <ul className={`flex gap-2 ${isAnimated ? 'flex-nowrap animated-scroll__inner' : 'flex-wrap'}`}>
              <li>Lenovo</li>
              <li>IBM</li>
              <li>Microsoft</li>
              <li>ASUS</li>
              <li>HP</li>
              <li>Acer</li>
              <li>Lenovo</li>
              <li>IBM</li>
              <li>Microsoft</li>
              <li>ASUS</li>
              <li>HP</li>
              <li>Acer</li>
            </ul>
        </div>
    </div>
  );
};

export default Scroller;

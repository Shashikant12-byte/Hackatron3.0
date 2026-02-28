import React, { useState, useEffect } from 'react';
import stars from '../../assets/images/discord/stars.svg';
import './Hackatron2.css';
import Glimpse from "./Glimpse";


const Hackatron2 = () => {
  const [selectedTrack, setSelectedTrack] = useState(1);
  const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });


  useEffect(() => {

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 60; // Adjust the multiplier for sensitivity
      const y = (e.clientY / innerHeight - 0.5) * 60; // Adjust the multiplier for sensitivity
      setBgPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (

    <section id='sc0' className="max-[768px]:pt-[30px] pt-[80px] relative mb-10 px-5 bg-no-repeat"
    // style={{
    //     backgroundImage: `url(${stars})`,
    //     backgroundPosition: `${50}% calc(50% - ${bgPosition.y}px)`,
    //     backgroundSize: 'cover',
    // }}
    >
      {/* <img src={stars} className=" z-0 absolute pointer-events-none w-screen sm:opacity-60 opacity-80"></img> */}

      {/* <img src={stars} className=" z-0 absolute pointer-events-none w-screen sm:opacity-60 opacity-80"></img>
            <div className='text-white max-w-[1280px] 3xl:max-w-[2000px] md:mx-8 lg:mx-12 xl:mx-auto relative'>
                <h1 className='py-6 md:text-left text-2xl md:text-4xl xl:text-5xl 3xl:text-7xl text-[#9E9E9E]'>$ tar -xf <span className='text-white'>Hackatron 2.0<span className='text-red'></span></span>.tar.gz</h1>
                <div className='grid gallery place-content-center relative'>




                    <div className='sc0-text text-white text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-5xl opacity-80 sm:opacity-70 -translate-y-[4vw] ml-4'>
                        <h2>GLIMPSES OF </h2>
                        <h2 className='text-4xl sm:text-7xl lg:text-8xl 2xl:text-8xl 
                                       font-bold tracking-wider
                                       text-white
                                       drop-shadow-[0_0_20px_rgba(255,0,0,0.6)]'>Hackatron<span className='text-red'>2.0</span></h2>
                     <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">  */}

      {/* Left Image
  <div className="flex justify-center">
    <div className="p-[2px] rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500">
      <img
        src="/group.jpg"
        alt="Hackathon Group"
        className="rounded-2xl w-full max-w-md 
                   hover:scale-105 transition duration-500"
      />
    </div>
  </div> */}

      {/* Center Stats
  <div className="text-center space-y-4">
    <h2 className="text-6xl md:text-8xl font-extrabold 
                   bg-gradient-to-r from-purple-400 to-pink-500 
                   bg-clip-text text-transparent">
      500+
    </h2>
    <p className="text-3xl text-purple-400">
      Hackers
    </p>
  </div> */}

      {/* Right Image
  <div className="flex justify-center">
    <div className="p-[2px] rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500">
      <img
        src="/trophy.jpg"
        alt="Trophy"
        className="rounded-2xl w-full max-w-xs 
                   hover:scale-105 transition duration-500"
      />
    </div>
  </div> */}

      {/* </div> */}

      {/* Partners
<div className="mt-20 text-left">
  <h3 className="text-5xl md:text-6xl font-bold text-purple-500">
    10+
  </h3>
  <p className="text-2xl text-purple-400 mt-2">
    Partners
  </p>
</div>
                    
                     */}
      <Glimpse />
      {/* </div>
                </div>
            </div> */}
    </section>

  );
};

export default Hackatron2;

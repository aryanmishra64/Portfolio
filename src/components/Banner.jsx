import React, { useEffect, useRef } from 'react';
import Typed from "typed.js";
import picture from '../assets/pic.png';
import bannerBackground from '../assets/banner_wallpaper.svg';
import { CIcon } from '@coreui/icons-react';
import { cibLeetcode } from '@coreui/icons';

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Competitive Programmer"],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="bg-dark text-white min-h-screen flex flex-col md:flex-row items-center justify-between px-5 md:px-20 py-10 relative overflow-hidden">
      {/* Add the background stars */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark to-black overflow-hidden">
        {/* Glowing patches */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-glow rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-1/4 h-1/4 bg-glow rounded-full blur-3xl opacity-30 animate-pulse"></div>

       
        
      </div>

      {/* Main content */}
      <div className="relative w-full md:w-1/2 z-10 space-y-5">
        <h3 className="text-3xl font-semibold">Hi, I am</h3>
        <h1 className="text-5xl font-bold">Aryan Mishra</h1>
        <h2 className="text-3xl">
          And I am a <span className="font-bold" ref={el}></span>
        </h2>
        <p>
          Hi, I'm Aryan Mishra, a passionate full-stack web developer and competitive programmer currently pursuing Electronics and Communication Engineering at IIIT Bhopal. I thrive on solving problems, building dynamic web solutions, and contributing to team projects. With a love for collaboration and a drive to learn, I aim to grow in a dynamic environment where I can innovate and make a meaningful impact.
        </p>
        <div className="flex space-x-5">
          <a
            href="https://leetcode.com/u/Aryan_64/"
            className="hover:bg-orange-600 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800"
          >
            <CIcon icon={cibLeetcode} />
          </a>

          <a
            href="https://github.com/aryanmishra64"
            className="hover:bg-orange-600 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800"
          >
            <i className="fa-brands text-4xl fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/aryan-mishra-640751247/"
            className="hover:bg-orange-600 border cursor-pointer px-3 py-4 w-16 h-16 rounded-full flex justify-center items-center bg-gray-800"
          >
            <i className="fa-brands text-4xl fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Profile Picture */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative">
  {/* Rotating circular overlay */}
  
  
  {/* Pulsating image */}
  <img
    className="rounded-full shadow-lg w-64 h-64 object-cover animate-pulse"
    src={picture}
    alt="Aryan Mishra"
  />
</div>
    </div>
  );
};

export default Banner;

import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import favicon from '/Users/marknguyen/Documents/GitHub/ScarletHacks2024/src/pics/2hawkmemoji.png'; 


const Introtext = () => {
  return (
    <motion.div 
    id="home" 
    className="relative w-full h-screen justify-center bg-black">
      <motion.h1 className="md:text-9xl text-7xl text-white font-semibold w-full bottom-1/2 mx-auto absolute z-10 text-center mb-2">
        <span className='text-red-600'>Scarlet</span>Hacks
      </motion.h1>

      

      <motion.nav
        initial={{ scale: 1, x: 0, width: 90 }} // Initial hidden state
        animate={{ scale: 1, x: 0, width: "80%" }} // Animate with controls
        transition={{ duration: 1.5, delay: .5 }} // Adjust the transition duration
        className='relative top-1/2 rounded-3xl mx-auto z-50 overflow-hidden bg-zinc-900 shadow-lg max-w-[225px]'
      >
        <motion.ul className='font-base w-[225px] cursor-pointer overflow-hidden flex-column flex justify-between  rounded-3xl p-2'>

          <li className=' rounded-xl  hover:text-black w-1/4 p-0 ml-3'>
            <Link to="home" className='' smooth={true} duration={1000}>
              <img src={favicon} alt="Home"/>
            </Link>
          </li>

          <motion.li 
          initial={{ opacity: "0%" }} // Initial hidden state
          animate={{ opacity: "100%" }} // Animate with controls
          transition={{ duration: 1, delay: 1 }} // Adjust the transition duration
          className=' text-zinc-500 py-1  w-3/4 rounded-xl hover:text-zinc-100 '>  
            <Link to="aboutme" className='text-3xl ' smooth={true} duration={5000}>
              Sign Up
            </Link>
          </motion.li>

        </motion.ul>
      </motion.nav>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        className='relative w-full z-50 top-3/4'>
        <span className='hover:text-zinc-100 text-4xl text-zinc-500 bg-zinc-900 cursor-pointer rounded-3xl py-2 px-4 shadow-lg'>
          <Link to="contact" smooth={true} duration={6000} spy={true}>
            ↓
          </Link>
        </span>
      </motion.div>

    </motion.div>
  );
};

export default Introtext;

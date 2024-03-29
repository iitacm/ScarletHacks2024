import React, { useEffect, useState,useRef } from 'react';
import { Link } from 'react-scroll';
import { motion, useAnimation, useDragControls, } from 'framer-motion'; // Import useAnimation
import favicon from '/Users/marknguyen/Documents/GitHub/ScarletHacks2024/src/pics/2hawkmemoji.png'; 


const Navbarstatic = () => {

  const [isSticky, setIsSticky] = useState(false);
  const controls = useAnimation(); // Create animation controls
  const drag = useDragControls()
  const constraintsRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      // Adjust this threshold to control when the Navbar becomes sticky
      const scrollThreshold = 1500; // Change this value as needed

      if (window.scrollY > scrollThreshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Animate the Navbar's opacity and y position when it becomes sticky
    controls.start({ opacity: isSticky ? 1 : 0, scale: isSticky ? 1 : 1 , y: isSticky ? 0 : -100});
  }, [isSticky, controls]);


  return (
    <>
     <motion.div 

    ref={constraintsRef}
    className='fixed top-5  right-5 left-auto w-14 h-14 flex z-[10000] justify-center'>
    <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: .5}}
        className='relative w-full top-[5px] '>
        <span className='hover:text-zinc-100 text-4xl text-zinc-500 bg-zinc-900 cursor-pointer rounded-3xl py-1 px-3 shadow-lg'>
          <Link to="home" smooth={true} duration={3000} spy={true}>
          ↑
          </Link>
        </span>
      </motion.div>

      </motion.div>


    <motion.div 
    ref={constraintsRef}
    className='fixed top-5 left-5 right-auto w-14 h-14 flex z-[10000] justify-center'>
      <motion.nav
      initial={{opacity:0, width: 56}} // Initial hidden state
      animate={controls} // Animate with controls
      transition={{ duration: .5 }}
      whileHover={{x:200, width: 450}}
      className= 'fixed w-auto mx-auto  overflow-hidden rounded-3xl bg-zinc-900 shadow-2xl sm:visible invisible'
      >
        <motion.ul 
        className='font-base w-[450px] cursor-pointer overflow-hidden  flex-column flex justify-between mx-auto py-2'>

        <li className=' block rounded-xl w-[40px] hover:text-black p-1 ml-2'>
            <Link to="home" smooth={true} duration={3000}>
              <img src={favicon} className='object-scale-down' alt="Home"/>
            </Link>
          </li>

          <motion.li 
          className='block text-zinc-500 p-1 mr-1 rounded-xl hover:text-zinc-100 '>  
            <Link to="aboutme" className='text-xl whitespace-nowrap' smooth={true} duration={2000}>
              Sign Up
            </Link>
          </motion.li>
          <li className='block text-zinc-500 p-1 mr-1 rounded-xl hover:text-zinc-100'>
            <Link to="experience" className=' text-xl' smooth="true" duration={2000}>
              Schedule
            </Link>
          </li>
          <li className='block text-zinc-500 p-1 mr-2 rounded-xl hover:text-zinc-100'>
            <Link to="portfolio" className=' text-xl' smooth="true" duration={2000}>
              Pictures
            </Link>
          </li>
          <li className='block text-zinc-500  mr-8 p-1 rounded-xl hover:text-zinc-100'>
            <Link to="contact" className=' text-xl' smooth="true" duration={2000}>
              Contact
            </Link>
          </li>
        </motion.ul>
      </motion.nav>

      {/* <motion.nav
      animate={controls} // Animate with controls
      initial={{opacity:0, width: 50, height: 50}} // Initial hidden state
      whileHover={{width: 120, x:50, height: 190}}
      transition={{ duration: .3 }}

      className= 'fixed w-auto mx-auto  overflow-hidden rounded-2xl bg-gray-100 shadow-xl sm:invisible'
      >
        <motion.ul 
        className='font-base w-[450px] cursor-pointer overflow-hidden justify-between text-left py-0'>
          <li className='block ml-3 rounded-xl hover:text-black '>
            <p to = "home" className='text-5xl'  smooth="true" duration={1000}>
              ➮
            </p>
          </li>
          <li className='block text-gray-600 ml-3 rounded-xl hover:text-black '>
            <Link to = "home" className='text-xl'  smooth="true" duration={1000}>
              Top
            </Link>
          </li>
        <li className='block text-gray-600 ml-3 rounded-xl hover:text-black '>
            <Link to="aboutme" className=' text-xl' smooth="true" duration={1000}>
              About
            </Link>
          </li>
          <li className='block text-gray-600 ml-3 rounded-xl hover:text-black'>
            <Link to="experience" className=' text-xl' smooth="true" duration={1000}>
              Schedule
            </Link>
          </li>
          <li className='block text-gray-600 ml-3 rounded-xl hover:text-black'>
            <Link to="portfolio" className=' text-xl' smooth="true" duration={1000}>
              Pictures
            </Link>
          </li>
          <li className='block text-gray-600 ml-3 mb-4 rounded-xl hover:text-black'>
            <Link to="contact" className=' text-xl' smooth="true" duration={1000}>
              Contact
            </Link>
          </li>
        </motion.ul>
      </motion.nav> */}

<motion.nav
      initial={{opacity:0, width: 56}} // Initial hidden state
      animate={controls} // Animate with controls
      transition={{ duration: .5 }}
      whileHover={{x:200, width: 450}}
      className= 'fixed w-auto mx-auto  overflow-hidden rounded-3xl bg-zinc-900 shadow-2xl sm:invisible visible'
      >
        <motion.ul 
        className='font-base w-[450px] cursor-pointer overflow-hidden  flex-column flex justify-between mx-auto py-2'>

        <li className=' block rounded-xl w-[40px] hover:text-black p-1 ml-2'>
            <Link to="home" smooth={true} duration={3000}>
              <img src={favicon} className='object-scale-down' alt="Home"/>
            </Link>
          </li>

          <motion.li 
          className='block text-zinc-500 p-1 mr-1 rounded-xl hover:text-zinc-100 '>  
            <Link to="aboutme" className='text-xl whitespace-nowrap' smooth={true} duration={2000}>
              Sign Up
            </Link>
          </motion.li>
          <li className='block text-zinc-500 p-1 mr-1 rounded-xl hover:text-zinc-100'>
            <Link to="experience" className=' text-xl' smooth="true" duration={2000}>
              Schedule
            </Link>
          </li>
          <li className='block text-zinc-500 p-1 mr-2 rounded-xl hover:text-zinc-100'>
            <Link to="portfolio" className=' text-xl' smooth="true" duration={2000}>
              Pictures
            </Link>
          </li>
          <li className='block text-zinc-500  mr-8 p-1 rounded-xl hover:text-zinc-100'>
            <Link to="contact" className=' text-xl' smooth="true" duration={2000}>
              Contact
            </Link>
          </li>
        </motion.ul>
      </motion.nav>

    </motion.div>

    </>

  );
};

export default Navbarstatic;

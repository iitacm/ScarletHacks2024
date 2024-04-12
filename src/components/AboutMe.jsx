import React, {useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const links = [
    { name: 'RSVP Link', href: 'https://docs.google.com/forms/d/e/1FAIpQLSdtNY3fA92BiqBV6ZgsAH66gu601WNiJzuhofuPGzIKfcnT8g/viewform' },
    {name:'Instagram', href:'https://www.instagram.com/acm_iit/?hl=en'},
    {name:'Linktree', href:'https://linktr.ee/acm.iit'}
  ] 
  const stats = [
    { name: 'Nintendo Switch Lite', value: '🥇 Prize' },
    { name: 'Holy Stone GPS Drone', value: '🥈 Prize' },
    { name: 'Keychron K4', value: '🥉 Prize' },

  

  ]

  
  export default function AboutMe() {
    
    const { ref, inView } = useInView({
      triggerOnce: true, // Trigger the animation only once
      threshold: .9,
    });
  
    const controls = useAnimation();

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1, // Adjust the duration as needed
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

    return (
      <>
      <div  
      id = "aboutme"
 className='h-32'>

      </div>
      <motion.div
      className="relative md:max-w-max sm:w-5/6 w-11/12 backdrop-blur-xl mx-auto rounded-3xl overflow-hidden py-16" >
      <div className='h-16'>
      <motion.p q
      initial={{ x: 0, y:100, opacity: 0 }}
      animate={{ x: 0, y:-25, opacity: 1 }}
      transition={{ duration: 2.1 }}
      className=" relative grid grid-cols-3 w-5/6 lg:gap-24 gap-4 mx-auto z-0">
              {links.map((link) => (
                <motion.a key={link.name} href={link.href} target="_blank"
                whileHover={{ y:-10}}
                whileTap={{backgroundColor:'whitesmoke', color:'black'}}
                className="block text-white hover:backdrop-blur-3xl hover:border md:text-2xl text-lg rounded-xl md:w-36 mx-auto">
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </motion.a>
              ))}
        
        </motion.p>

      </div>
    
        {/* <video
          src="aestheticb.mp4"
          alt="aesthetic"
          className="absolute inset-0 h-full blur-none -z-10 w-full object-cover object-right md:object-center"
          autoPlay
          loop
          muted
        /> */}
      
        
        <div className="mx-auto max-w-6xl px-6 lg:px-8 lg:ml-200  float-center mt-0 ">
        
          <div className="mx-auto max-w-6xl">
            <motion.h2
            ref={ref}
            initial="hidden"
            animate={controls}
            exit="hidden" // Use the same exit variant as initial
            variants={fadeInVariants} 
            className="text-4xl font-200 tracking-tight text-white sm:text-6xl text-center">
              IIT's <b>Premiere Hackathon</b>
              </motion.h2>
            <motion.p 
             className=" overflow-hidden w-5/6 mx-auto md:text-4xl text-2xl font-normal leading-7 text-white text-center py-8">
              Join us on April 14 for the largest computing event this semester. Bring your own Computer, team up and meet new hackers, and best of all have fun being creative! All levels of coders are welcome (yes even the non-cs majors!)
            </motion.p>
          </div>

          <div className=" rounded-3xl mt-8 md:w-5/6 w-full  mx-auto ">
            <dl className="  grid lg:gap-x-44 sm:gap-x-10 gap-x-5 gap-y-px grid-cols-3 grid-cols-3 grid-row-1">
              {stats.map((stat,index) => (
                <div key={index} className="flex  flex-col-reverse text-center text-center">
                  <dt className="md:text-base whitespace-nowrap text-sm md:leading-7 leading-1 text-white">{stat.name}{stat.name2}{stat.name3}{stat.name4}{stat.name5}</dt>
                  <dd className="md:text-2xl text-sm font-bold sm:leading-9 tracking-tight text-white ">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </motion.div>
      </>
    )
  }
  

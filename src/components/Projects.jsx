import React from 'react';
import { motion } from 'framer-motion';


const projectsData = [
  
  // {
  //   title: 'Project 1',
  //   description: 'Description of Project 1...',
  //   technologies: 'React, Tailwind CSS',
  //   imageUrl: './public/aero.png',
  // },

  {
    title:'Computational Mechanics',
    date: 'Aug, 2022',
    description: 'This project aims to create an engaging educational tool that visualizes and explains the principles of aerodynamics in a fun, easy, and interactive manner, promoting a deeper understanding of how air influences the motion of a ball.',
    awards: '1st place<br />Class<br />Trajectory<br />Competition',
    technologies: 'Python,<br />VPython,<br />Glowscript,<br />Math',
    imageUrl: 'peopletalk.jpg',
    github: 'https://glowscript.org/#/user/ahernandez53/folder/MyPrograms/program/website2',
    live: 'https://glowscript.org/#/user/ahernandez53/folder/MyPrograms/program/website2'
  },

  {
    title:'Computational Mechanics',
    date: 'Aug, 2022',
    description: 'This project aims to create an engaging educational tool that visualizes and explains the principles of aerodynamics in a fun, easy, and interactive manner, promoting a deeper understanding of how air influences the motion of a ball.',
    awards: '1st place<br />Class<br />Trajectory<br />Competition',
    technologies: 'Python,<br />VPython,<br />Glowscript,<br />Math',
    imageUrl: 'checkin.jpg',
    github: 'https://glowscript.org/#/user/ahernandez53/folder/MyPrograms/program/website2',
    live: 'https://glowscript.org/#/user/ahernandez53/folder/MyPrograms/program/website2'
  },

  {
    title:'Computational Mechanics',
    date: 'Aug, 2022',
    description: 'This project aims to create an engaging educational tool that visualizes and explains the principles of aerodynamics in a fun, easy, and interactive manner, promoting a deeper understanding of how air influences the motion of a ball.',
    awards: '1st place<br />Class<br />Trajectory<br />Competition',
    technologies: 'Python,<br />VPython,<br />Glowscript,<br />Math',
    imageUrl: 'damien.jpg',
    github: 'https://glowscript.org/#/user/ahernandez53/folder/MyPrograms/program/website2',
    live: 'https://glowscript.org/#/user/ahernandez53/folder/MyPrograms/program/website2'
  },

  {
    title:'Computational Mechanics',
    date: 'Aug, 2022',
    description: 'This project aims to create an engaging educational tool that visualizes and explains the principles of aerodynamics in a fun, easy, and interactive manner, promoting a deeper understanding of how air influences the motion of a ball.',
    awards: '1st place<br />Class<br />Trajectory<br />Competition',
    technologies: 'Python,<br />VPython,<br />Glowscript,<br />Math',
    imageUrl: 'focuspeople.jpg',
    github: 'https://glowscript.org/#/user/ahernandez53/folder/MyPrograms/program/website2',
    live: 'https://glowscript.org/#/user/ahernandez53/folder/MyPrograms/program/website2'
  },

  {
    title: '3D Braille Generator ',
    date: 'July, 2023',
    awards: 'Associated<br />with the MSI<br />Accessiblity<br />Effort',
    description: 'This project involves the development of a application that translates text input into a 3D .stl file format, allowing for tactile Braille representations through 3D printing technology. The objective is to enhance accessibility of information in museum exhibits.',
    technologies: 'C,<br />C#,<br />Terminal,<br />STL',
    imageUrl: 'xboxpeople.jpg',
    github: 'https://github.com/Axelh04/brailleSTL_generator',
  },

  {
    title: 'SweetDeals',
    date: 'Oct, 2022',
    description: 'Develop a user-friendly mobile trick or treating marketplace using Flutter, hosted on Heroku, with compatibility for both iOS and Android platforms. This platform will enable seamless and enjoyable Halloween festivities for users of all devices.',
    awards: 'MLH<br />DemonHacks<br />Hackathon<br />Project',
    technologies: 'Flutter,<br />Dart,<br />Heroku,<br />Firebase',
    imageUrl: 'prizespeople.jpg',
    live: 'https://devpost.com/software/test-ida1un',
    github: 'https://github.com/Dodhon/DemonHacks2022/tree/Frontend'

  }
  
  
];

const Projects = () => {
  return (
    <div  className = "relative overflow-hidden shadow-inner bg-zinc-900 ltr mt-0 z-50 ">
      <div 
      id="portfolio"
      className='h-24'
      >

      </div>

    <motion.h1  className="text-5xl font-bold text-zinc-100 text-center mt-0 mb-24 ">📸Pictures</motion.h1>

    <div className="overflow-x-scroll snap-x snap-mandatory  p-0 whitespace-nowrap">

    <div className="inline-block w-9/12"></div>
    
      {projectsData.map((project, index) => (
        <motion.div
          key={index}
          className="inline-block w-1/2 md:max-h-[500px] top-0 md:mr-20 mr-8 snap-center snap-always mb-44 "
            >

            <div className='relative rounded-3xl shadow-2xl  py-0 mb-4 mt-4'>
            <motion.img
                  initial={{scale:1}} // Initial hidden state
                  transition={{ duration: .25 }}
                  whileHover={{scale:1.05}}
                  src={project.imageUrl}s
                  className=' object-cover rounded-3xl  mx-auto'
              /> 
            </div>


          {/* <div className='md:w-7/12 w-full md:float-left relative md:-mx-4'>
          


          <div className=" bg-gray-100 w-full rounded-3xl sm:h-20 h-min py-5 mb-4 shadow-inner whitespace-normal  ">    
          <h3 className=" sm:text-3xl text-2xl font-bold  mx-auto text-gray-600" dangerouslySetInnerHTML = {{__html:project.title}}></h3>
          </div>
        
      
    
          
          <div className='lg:max-h-[301px] relative md:bg-gray-100 rounded-3xl md:shadow-inner md:overflow-hidden py-0 mb-4'>
            <img
                  src={project.imageUrl}
                  className=' max-h-[301px] relative mx-auto'
              /> 
            </div>

          

            </div>   
          
          
          <div className='md:w-5/12 md:float-right relative w-full'>

          <div className=" bg-gray-100 text-gray-600 h-20 w-full rounded-3xl py-7 mb-4 shadow-inner whitespace-normal ">
          <p className="text-xl font-semibold ">{project.date}</p>
          </div>

          <div className=" bg-gray-100 text-gray-600 py-4 px-7 w-full max-h-min rounded-3xl mb-4 shadow-inner whitespace-normal">
            <p className="md:line-clamp-4 hover:line-clamp-none line-clamp-none   text-xl text-center font-semibold">{project.description}</p> 
          </div>

          <div className="bg-gray-100 text-gray-600 max-h-min py-4 w-1/2 ml-4 float-right rounded-3xl shadow-inner whitespace-normal  ">
            <p className="text-xl mx-auto w-1/2 font-semibold " dangerouslySetInnerHTML = {{__html:project.technologies}}></p>
          </div>

          <div className=" bg-gray-100 text-gray-600 max-h-min py-4 w-auto rounded-3xl shadow-inner whitespace-normal overflow-hidden ">
         <p className=" line-clamp-4 hover:line-clamp-none text-xl mx-auto w-3/4 font-semibold  " dangerouslySetInnerHTML = {{__html:project.awards}}></p>
          </div>

          

          </div>
          
          <div className='mx-auto  w-2/12'>

          <motion.div 
           whileHover={{ y:-10}}
          className=' w-4/12 mt-20 float-right'>
          <a            
          href={project.live} target="_blank" >
            <img src="export.png" className="w-full" alt="Export" />
            </a>
            </motion.div>
          <motion.div 
          whileHover={{ y:-10}}
          className=" w-4/12 mt-20 float-left ">
        <a href={project.github} target="_blank" >
        <img src="GitHub.png" className="w-full " alt="GitHub" />
        </a>
        </motion.div>

        
              </div> */}
            


          



        </motion.div>
      ))}
      <div className="inline-block w-1/2"></div>
    </div>
    </div> 
  );
};

export default Projects;

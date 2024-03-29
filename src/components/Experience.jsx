import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  // {
  //   companyName: 'Software and Engineering Mentor',
  //   date: 'Sep 2023 - Present',
  //   location: 'Mentor | Chicago, IL',
  //   description: '• Elevated the engineering lab, as a leader of its mentor program through a software engineering focus<br />• Mastery in laser cutting, and 3D printing software for Human Computer Interaction (HCI) development<br />• Mentored groups of at least 20 students weekly in electrical, software, and computer engineering.',
  //   imageUrl: 'klpng.png', // Replace with your image URL
  // },
  {
    companyName: '📋✅ Registration and Check-in',
    date: '1:00 - 1:30PM',
    location: 'Internship | Chicago, IL',
    description: '• Participants arrive, register, and get settled in. Organizers provide any necessary information and distribute materials.',
    imageUrl: 'msipng.png', // Replace with your image URL
  },
  {
    companyName: '🗣️📣 Open Ceremony',
    date: '1:30 - 2:00PM',
    description: '•Welcome speech by organizers, introduction of sponsors and judges, overview of rules and guidelines, and explanation of the hackathon theme or challenges.',
    imageUrl: 'nasapng.png', // Replace with your image URL
  },
  {
    companyName: '👨‍💻👩‍💻 Begin Hacking!',
    date: '2:00PM - ',
    location: 'Executive Board | Chicago, IL',
    description: '• Start working on your projects! (9 hours to complete) <br> • Mentors and organizers are available for assistance. Snacks and refreshments are provided throughout the session.</br>',
    imageUrl: 'shpe.png', // Replace with your image URL
  },
  {
    companyName: '😋🍴 Dinner Break',
    date: '5:00 - 6:00PM',
    location: 'Executive Board | Chicago, IL',
    description: '• Take a break to enjoy a provided dinner! <br> •  This is also a good opportunity for networking and socializing with other participants. </br>',
    imageUrl: 'shpe.png', // Replace with your image URL
  },
  {
    companyName: '⌛️😅 Project Deadline',
    date: '- 11:00PM',
    location: 'Executive Board | Chicago, IL',
    description: '•  Put your final touches on their projects, prepare presentations, and ensure everything is ready for judging.',
    imageUrl: 'shpe.png', // Replace with your image URL
  },
  {
    companyName: '👑🥳 Winners Announcement',
    date: '11:00 pm - 11:30 pm',
    location: 'Executive Board | Chicago, IL',
    description: '• ACM will announce the winners of the hackathon! <br> • Prizes are distributed, and participants celebrate their achievements. </br>',
    imageUrl: 'shpe.png', // Replace with your image URL
  },
  {
    companyName: '👥👋 Networking and Wrap-up',
    date: '11:30 pm - 12:00 pm',
    description: '• Please clean up after yourself and thank you for attending Illinois Institute of Technology Premiere Hackathon!',
    imageUrl: 'shpe.png', // Replace with your image URL
  },

  // Add more experiences as needed
];

const Experience = () => {
  return (
    <motion.div
    
     id="experience"  className=" bg-black shadow-inner bg-opacity-100 backdrop-filter-md relative mt-20 z-50 py-20">
     
      <motion.h1 className="text-5xl font-bold text-center mb-32 text-gray-100 ">📆Schedule</motion.h1>
      <div 
      style={{ borderRadius: '50px' }}
      className="flex flex-wrap justify-center md:w-1/2 w-5/6 mx-auto   overflow-hidden mb-20">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="   bg-zinc-900 shadow-sm overflow-hidden  py-4 mb-1 w-full"
            style={{ borderRadius: '0px' }}
          >
            <div className="flex justify-center">
              {/* <div className="md:w-1/3">
                <img
                  src={experience.imageUrl}
                  alt={experience.companyName}
                  className=" relative w-3/4 mx-auto sm:top-1/2 sm:-my-8 lg:py-0 py-10"
                />
              </div> */}
              <div className="p-3 text-left w-5/6  sm:ml-0 ml-10 ">  
              <p className="text-base text-gray-300 mb-1">{experience.date}</p>
                <h2 className="text-2xl text-gray-300 font-semibold mb-1">{experience.companyName}</h2>               
                 {/* <p className="text-base text-gray-300 mb-2">{experience.location}</p> */}
                <p className="text-gray-300 text-sm mb-0 mr-10" dangerouslySetInnerHTML = {{__html:experience.description}}></p>
                {/* Additional content */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;

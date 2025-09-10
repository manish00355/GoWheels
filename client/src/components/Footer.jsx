import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'motion/react'
import Logo from '../assets/logo4-removebg-preview.png'

const Footer = () => {
     const linkSections = [
        {
            title: "Quick Links",
            links: ["Home", "Cars", "Offers & Deals","List Your car", "Contact Us", "FAQs"]
        },
        {
            title: "Need Help?",
            links: ["Booking Information", "cancelation & Refund Policy", "Payment Methods", "Track your Rides", "Contact Us"]
        },
        {
            title: "Follow Us",
            links: ["Instagram", "Twitter", "Facebook", "YouTube"]
        },
       
    ];
  return (
        <motion.div 
        initial={{opacity:0 , y:30}}
        whileInView={{opacity:1,y:0}}
        transition={{duartion:0.6}}
        className="px-6 md:px-16 lg:px-24 xl:px-24 mt-60 text-sm text-gray-500">
            <motion.div
            initial={{opacity:0,y:20}}
            whileInView={{opacity:1,y:0}}
            transition={{duartion:0.6 , delay:0.2}}

            className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                <motion.div>
                    <motion.img 
                      initial={{opacity:0}}
                   whileInView={{opacity:1}}
                 transition={{duartion:0.6 , delay:0.3}}
                    className="w-[160px] h-auto md:w-[200px] lg:w-[220px] object-contain" 
                 src={Logo} 
                    alt="GoWheels Logo" />


                    <motion.p
                      initial={{opacity:0}}
                   whileInView={{opacity:1}}
                 transition={{duartion:0.6 , delay:0.3}}
                    className="max-w-[410px] mt-6 font-medium text-lg">Premium car rental service with a wide selection of luxury and everydaay vehicles for all your driving needs.</motion.p>
                </motion.div>
                <motion.div
                  initial={{opacity:0,y:10}}
                   whileInView={{opacity:1,y:0}}
                 transition={{duartion:0.6 , delay:0.6}} 
                 className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {linkSections.map((section, index) => (
                        <motion.div 
                       initial={{opacity:0,y:10}}
                   whileInView={{opacity:1,y:0}}
                 transition={{duartion:0.6 , delay:0.6}} 
                        key={index}>
                            <motion.h3 
                            
                           initial={{opacity:0,y:10}}
                   whileInView={{opacity:1,y:0}}
                 transition={{duartion:0.6 , delay:0.6}} 
                            className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</motion.h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href="#" className="hover:underline transition">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            {/* pending */}
            <motion.p
              initial={{opacity:0,y:10}}
                   whileInView={{opacity:1,y:0}}
                 transition={{duartion:0.6 , delay:0.6}} className="py-4 text-center text-sm md:text-base text-gray-500/80">
                Copyright 2025 © <a href="http://localhost:5173/"> | GoWheels  </a>     |  All Right Reserved.
            </motion.p>
            <motion.p 
                  initial={{opacity:0}}
                   whileInView={{opacity:1}}
                 transition={{duartion:0.6 , delay:0.3}}
            className="py-4 text-center text-sm md:text-base text-gray-500/80 -mt-5">Made with ❤️ by <a href="https://www.linkedin.com/in/manish-kumar-a53548249/ " className='font-semibold'>Manish Kumar</a></motion.p>
        </motion.div>
  )
}

export default Footer

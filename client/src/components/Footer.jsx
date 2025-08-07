import React from 'react'
import { assets } from '../assets/assets'

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
        <div className="px-6 md:px-16 lg:px-24 xl:px-24 mt-60 text-sm text-gray-500">
            <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                <div>
                    <img className="w-34 md:w-32" src={assets.logo} alt="dummyLogo" />
                    <p className="max-w-[410px] mt-6 font-medium text-lg">Premium car rental service with a wide selection of luxury and everydaay vehicles for all your driving needs.</p>
                </div>
                <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                    {linkSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">{section.title}</h3>
                            <ul className="text-sm space-y-1">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href="#" className="hover:underline transition">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            {/* pending */}
            <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
                Copyright 2025 © <a href="http://localhost:5173/"> | GoWheels  </a>     |  All Right Reserved.
            </p>
            <p className="py-4 text-center text-sm md:text-base text-gray-500/80 -mt-5">Made with ❤️ by <a href="https://www.linkedin.com/in/manish-kumar-a53548249/ " className='font-semibold'>Manish Kumar</a></p>
        </div>
  )
}

export default Footer

import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets';
import {motion} from 'motion/react'

const Testimonial = () => {
     const testimonials = [
        {  name: "Emma Rodriguez", 
            location: "Barcelona, Spain",
             image:assets.testimonial_image_1,
             testimonial: "I booked a car last-minute and GoWheels delivered beyond expectations. The car was spotless and the pickup process was seamless. Highly recommended!" },

              {  name: "Ashutosh Singh", 
            location: "Jammu ,India",
             image:assets.testimonial_image_2,
             testimonial: "GoWheels made my weekend trip stress-free. Great pricing, no hidden charges, and the car performed perfectly. Will definitely use again." },

              {  name: "Kanav Gupta", 
            location: "Kanpur, India",
             image:assets.testimonial_image_1,
             testimonial: "I've used GoWheels multiple times now, and they never disappoint. Cars are always in great condition, and the process is quick." },

        
       
    ];
     
  return (
    <div className=" py-28 px-6 md:px-16 lg:px-24 xl:px-44">


        <Title title="What Our Customers Say About GoWheels" subtitle="Discover why thousands trust GoWheels for their travel needs.From smooth rides to top-notch service — hear it from our customers. Real stories, honest feedback, and unforgettable journeys. Your next great ride starts with their words"/>

            {/* <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl md:text-[40px] font-bold">Customer Testimonials</h1>
                <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-[696px]">Hear what our users say about us. We're always looking for ways to improve. If you have a positive experience with us, leave a review.</p>
            </div> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                    initial={{opacity:0,y:40}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:0.6 ,delay:index*0.2 ,ease:'easeOut'}}
                    viewport={{once:true ,amount:0.3}}
                    key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">

                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className=" text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                            <img key={index} src={assets.star_icon}/>
                               
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
                    </motion.div>
                ))}
            </div>
        </div>
  )
}

export default Testimonial

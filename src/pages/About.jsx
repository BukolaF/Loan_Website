import React from 'react';
import {Navbar, Footer} from '../components';
import { Features } from '../constant';


export const About = () => {
  return (
    <>
      <Navbar />
        <div className='my-6 container mx-auto relative'>
          <div className='max-w-[1240px] mt-[56px] w-full mx-auto flex flex-col'>
            <h1 className='font-semibold text-blue-950  text-4xl lg:text-6xl mt-6 mb-6 text-center'>About Us
            </h1>          
        <h1 className='p-2  mt-6 text-2xl text-black'>We are dedicated to empowering hardworking individuals and businesses as your dedicated financial partner. Whether you are in the formal or informal sector, we have the right type of convenient loan for you.</h1>     

        <div className='bg-blue-200 my-32'>

      <p className='flex justify-center font-extrabold text-blue-600 md:text-5xl sm:text-4xl text-2xl mt-6 py-10'>What makes us Different</p>
      <Features/>
      </div>
      </div>
      </div>
      <Footer />
      </>
  )
}


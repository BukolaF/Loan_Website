import React from 'react';
import { Link } from 'react-router-dom';


export const Hero = () => {
  return (
    <div className='text-blue-600'>
        <div className='max-w-[900px] mt-[56px] w-full mx-auto text-center flex flex-col'>
        <p className='font-bold p-2 text-3xl uppercase'>Quick loan service</p>
        <h1 className='text-blue-950 md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Start Creating Your Dream with Us.</h1>
        <div>
            <p className='text-gray-700 md:text-5xl sm:text-4xl text-lg mt-6'>Short term loans tailored for your needs</p>
            <div>
           <Link to='loans' className=" md:text-lg mx-20 my-20 sm:text-lg text-lg mt-6 hover:bg-gray-700 mt-10 text-lg bg-blue-950 mx-16 px-6 py-6 text-white flex justify-center items-center">Learn more </Link>
        </div>
        </div>
    </div>
    </div>
  )
}


import React, { useRef } from 'react'
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer, Navbar, SignUpform } from '../components';
import { Link } from 'react-router-dom'; 





export const SignUp = () => {
  
  
  const form = useRef();

  
  


  return (
    <>
    <Navbar />
    <div className='w-full bg-gray-300 py-6 mb-10' >
        <div className=' sm:max-w-xl lg:max-w-screen-xl md:w-4/12 mt-8 mb-5 py-10 px-10 rounded-lg border border-neutral-100 shadow bg-gray-400 h-auto mx-auto'>
        <h2 className='text-3xl text-center text-black font-bold mb-6 sm:text-4xl'>Create Account</h2>
     <SignUpform form={form} ToastContainer={ToastContainer}/>
        <div className='flex md:flex-row flex-col flex-wrap items-center justify-center md:justify-between mt-8 px-4 py-4'>
          <div className='flex items-center justify-center flex-nowrap'>
        <label className='font-semibold text-white mr-2 whitespace-nowrap text-sm'>Already have an account?</label>
        <Link to='/login'  className='flex items-center text-red-200 justify-center gap-2 font-medium transition bg-red-950 border-r-2 rounded disabled:cursor-not-allowed disabled:opacity-40 hover:text-white hover:underline whitespace-nowrap text-lg'>Click here to Login  </Link>
    </div>
    </div>
    </div>
    </div>
    < Footer />
    </>
  )
}

import React, { useState } from 'react'
import { Footer, Navbar } from '../components';
import {IoMdEyeOff, IoMdEye} from 'react-icons/io';
import {MdLock, MdEmail } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useForm} from 'react-hook-form'

export const Login = () => {

  const passwordToggle = () =>{
    setOpenEye(!openEye)
  }
  
  const [openEye, setOpenEye] = useState(false);

const navigate = useNavigate();

const {register, handleSubmit, formState:{errors}} = useForm();

  const onSubmit = async (data) => {  
    try{ 
        const response =  await axios.get('http://localhost:5000/users/', register )
        response.data.map(user =>{
        if (user.email === data.email || user.password === data.password || data.role === 'Admin'){
          alert('login succesful')
            navigate('/admin')
         } else if (user.email === data.email || user.password === data.password || data.role === 'Registered User'){
          alert('login succesful')
          navigate('/userDashboard')
        }
      })}catch(err) {
           alert(`failed:` +err.message);
      }}

  return (
    <>
      <Navbar />
      <div className='flex-1 bg-gray-300 py-6 my-20' >
        <div className='md:w-4/12 w-11/12 mt-8 mb-5 py-4 rounded-lg border border-neutral-100 shadow bg-gray-400 h-auto mx-auto'>
        <h2 className='text-3xl text-center text-black uppercase font-bold my-6 sm:text-4xl'>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='relative h-full p-4'>
        <div className="flex justify-around text-center" >
        <div>
            <label className=' text-black' htmlFor='role'>choose a role:</label>
            <select className='ml-2' name='role' size={1} {...register("role",{required: true})}>
            <option className=' text-black' selected></option>
            <option className=' text-black' >Registered User</option>
            <option className='text-black' >Admin</option>
            </select>
        </div>
        <error className='text-red-500 font-semibold'>{errors.role?.type === "required" && "please select your role"}</error>

        </div>
          <div className='flex flex-row py-4 flex-col'>
            <div className='flex justify-between items-center'>
              <div>
                <span className='text-red-600 text-md mr-1'>*</span>
                <label>Your Email</label>
                </div>
                </div>
        <div className='flex flex-col'>
          <div className='flex-row flex items-center relative'>
            <div className='absolute left-4 bottom-3'>
              <MdEmail className='text-gray-400' />
            </div>
            <input type='email' name='email' className='h-12 w-full mt-2 border rounded-md outline-none focus:border-2 bg-gray-600 px-12' placeholder='Type here'  {...register("email",{required: true, pattern:/^[A-Za-z0-9_.+-]+@[A-Za-z0-9]+\.[a-zA-z0-9-.]+$/i})} />
          </div>
          <span className='text-red-500 font-semibold'>{errors.email?.type === "required" && "Email is required"} </span>
            <span className='text-red-500 font-semibold'>{errors.email?.type === "pattern" && "Email is invalid"}</span>
          </div>
          </div>
          <div className='flex flex-row py-4 flex-col'>
            <div className='flex justify-between items-center'>
              <div>
                <span className='text-red-600 text-md mr-1'>*</span>
                <label>Password</label>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='flex-row flex items-center relative'>
                <div className='absolute left-4 bottom-3'>
                  <MdLock className='text-gray-400 ' />
                </div>
                <input type={!openEye? 'password' : 'text'} name='password' className='h-12 w-full mt-2 border rounded-md outline-none focus:border-2 bg-gray-600 px-12' placeholder='Type here' {...register("password",{required: true, minLength:8})} />
                {openEye ?  <IoMdEye className='cursor-pointer absolute right-2 top-6' onClick={passwordToggle} />  : <IoMdEyeOff className='cursor-pointer absolute right-2 top-6' onClick={passwordToggle} /> }
              </div>
              <span className='text-red-500 font-semibold'>{errors.password?.type === "minLength" && "Password must be at least 8 characters"}</span>
            <span className='text-red-500 font-semibold'>{errors.password?.type === "required" && "Password is required"}</span>
            </div>
          </div>
      <button type='submit' className='flex items-center justify-center gap-2 font-medium transition rounded border focus:outline-none focus-visible:ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-40 border-transparent bg-red-950 text-white hover:bg-red-600 focus:ring focus:ring-neutral-600 active:bg-red-600 disabled:bg-red-100 p-3 text-lg tracking-normal w-full mt-4 mb-4'>Login</button>

        </form>
        <div className='flex md:flex-row flex-col flex-wrap items-center justify-center md:justify-between mt-8 px-4 py-4'>
          <div className='flex items-center justify-center flex-nowrap'>
            <label className='font-semibold text-white mr-2 whitespace-nowrap text-sm'>No account?</label>
            <Link to='/signup'  className='flex items-center text-red-200 justify-center gap-2 font-medium transition bg-red-950 border-r-2 rounded  hover:text-white hover:underline whitespace-nowrap text-lg'>Sign up here  </Link>
          </div>
          <Link to='/passwordreset' className='flex items-center justify-center gap-2 font-semibold transition focus:outline-none focus-visible:ring focus-visible:ring-offset-1  border-transparent hover:text-red-500 hover:underline hover:underline-offset-4 focus:ring focus:ring-neutral-700 text-gray-600 underline whitespace-nowrap mt-3 md:mt-0'>Forgot password</Link>
        </div>
        </div>
      </div>
      <Footer />
    </>
  )
}


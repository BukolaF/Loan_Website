import React, { useState } from 'react'
import { Footer, Navbar } from '../components';
import {IoMdEyeOff, IoMdEye} from 'react-icons/io';
import {MdLock, MdEmail } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Login = () => {

  const passwordToggle = () =>{
    setOpenEye(!openEye)
  }

  const [openEye, setOpenEye] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
})

    const[errors, setErrors] = useState({})
    const [validForm, setValidForm] =useState(true)

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault()

    let isvalidForm = true;
    let validationErrors = {}

    if(loginData.email === "" || loginData.email === null){
        isvalidForm = false;
        validationErrors.email = "Email is required"
    } else if(/^[A-Za-z]\._-[0-9]*[@][A-Za-z]*[.][a-z]{2,4}$/.test(loginData.email)){
      isvalidForm = false;
      validationErrors.email = "email is not valid"
  }
  if(loginData.password === "" || loginData.password === null){
      isvalidForm = false;
      validationErrors.password = "password is required"

  }else if(loginData.password.length < 8){
      isvalidForm = false;
      validationErrors.password = "password is invalid"
  }
        
          axios.get('http://localhost:4000/users')
            .then(result =>{
                result.data.map(user => {
                  if (user.email === loginData.email){
                    if(user.password === loginData.password){
                      alert('login succesful')
                      navigate('/UserDashboard')
                    } else{
                      isvalidForm = false;
                      validationErrors.password = 'wrong password';
                    }
                  } else if(loginData.email !== ""){
                    isvalidForm = false;
                    validationErrors.email = 'wrong email' 
                  }
            })
            setErrors(validationErrors);
            setValidForm(isvalidForm)

        })
        .catch(err =>{
            alert(`failed:` +err.message)
        });

}

    

  return (
    <>
      <Navbar />
      <div className='flex-1 bg-gray-300 py-6 my-20' >
        <div className='md:w-4/12 w-11/12 mt-8 mb-5 py-4 rounded-lg border border-neutral-100 shadow bg-gray-400 h-auto mx-auto'>
        <h2 className='text-3xl text-center text-black uppercase font-bold my-6 sm:text-4xl'>Login</h2>
        <form onSubmit={handleLogin} className='relative h-full p-4'>
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
            <input onChange={(e)=> setLoginData({...loginData, email: e.target.value})} type='email' name='email' className='h-12 w-full mt-2 border rounded-md outline-none focus:border-2 bg-gray-600 px-12' placeholder='Type here' />
          </div>
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
                <input type={!openEye? 'password' : 'text'}  onChange={(e)=> setLoginData({...loginData, password: e.target.value})}  name='password' className='h-12 w-full mt-2 border rounded-md outline-none focus:border-2 bg-gray-600 px-12' placeholder='Type here' />
                {openEye ?  <IoMdEye className='cursor-pointer absolute right-2 top-6' onClick={passwordToggle} />  : <IoMdEyeOff className='cursor-pointer absolute right-2 top-6' onClick={passwordToggle} /> }
              </div>
            </div>
          </div>
      <button type='submit' className='flex items-center justify-center gap-2 font-medium transition rounded border focus:outline-none focus-visible:ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-40 border-transparent bg-red-950 text-white hover:bg-red-600 focus:ring focus:ring-neutral-600 active:bg-red-600 disabled:bg-red-100 p-3 text-lg tracking-normal w-full mt-4 mb-4'>Login</button>
      {validForm ? <span></span> : <span className='text-red-500 font-normal'>{errors.email} {errors.password} </span>}

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


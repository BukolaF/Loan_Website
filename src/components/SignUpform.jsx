import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'




export const SignUpform = ({form, setSignUpData, ToastContainer, signUpData}) => {
  
     
    const[errors, setErrors] = useState({});
    const [validForm, setValidForm] =useState(true);
    
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        let isvalidForm = true;
        let validationErrors = {}
    
    
        if(signUpData.fname === "" || signUpData.fname === null){
            isvalidForm = false;
            validationErrors.fname = "First name is required;"
        }
        if(signUpData.lname === "" || signUpData.lname === null){
            isvalidForm = false;
            validationErrors.lname = "Last name is required;"
        }
        if(signUpData.address === "" || signUpData.address === null){
            isvalidForm = false;
            validationErrors.address = "Address is required;"
        }
        if(signUpData.email === "" || signUpData.email === null){
            isvalidForm = false;
            validationErrors.email = "email is required;"
        }else if(/^[A-Za-z]\._-[0-9]*[@][A-Za-z]*[.][a-z]{2,4}$/.test(signUpData.email)){
            isvalidForm = false;
            validationErrors.email = "email is not valid;"
        }
        if(signUpData.password === "" || signUpData.password === null){
            isvalidForm = false;
            validationErrors.password = "password is required;"
            }else if(signUpData.password.length < 8){
            isvalidForm = false;
           validationErrors.password = "password must be at least 8 characters;"
        }
          if(signUpData.cpassword !== signUpData.password){
            isvalidForm = false;
            validationErrors.cpassword = "passwords must match;"
        
        }
        
        setErrors(validationErrors);
        setValidForm(isvalidForm)

    
        if(Object.keys(validationErrors).length === 0){
            axios.post('http://localhost:4000/users', signUpData)
            .then(result =>{
                toast.success('Registered successfully');
                    navigate('/login');
            console.log(result.data)
        })
        .catch(err =>{
            toast.success(`failed:` +err.message)
        });
    
      }
    }
  
    return (
    <>
 <form ref={form} onSubmit={handleSubmit} className='mx-auto max-w-xl gap-8 sm:mt-[20px]' noValidate=''>
      <div className="grid grid-cols-2 gap-[16px]">
        <div>
            <label className='block text-black tracking-6 text-[18px] font-bold mb-2 mt-8' htmlFor='fname'>First Name</label>
            <input className='w-full px-3 py-2 border rounded-lg bg-gray-300 focus:border-gray-500'  name='fname' onChange={(e)=> setSignUpData({...signUpData, fname: e.target.value})} placeholder='Sweet'  type='text'  />
        </div>
        <div>
            <label className='block text-black tracking-6 text-[18px] font-bold mb-2 mt-8' htmlFor='lname'>Last Name</label>
            <input className='w-full px-3 py-2 border rounded-lg bg-gray-300 focus:border-gray-500'  name='lname' onChange={(e)=> setSignUpData({...signUpData, lname: e.target.value})} placeholder='Heart'  type='text' />
        </div>
        </div>
        <div className="grid grid-cols-2 gap-[16px]">
        <div>
            <label className='block text-black tracking-6 text-[18px] font-bold mb-2 mt-8' htmlFor='email'>Email</label>
           <input className='w-full px-3 py-2 border rounded-lg bg-gray-300 focus:border-gray-500' name='email' onChange={(e)=> setSignUpData({...signUpData, email: e.target.value})} placeholder='Bold@example.com'  type='email' />
        </div>
        <div>
            <label className='block text-black tracking-6 text-[18px] font-bold mb-2 mt-8' htmlFor='text'>Address</label>
           <input className='w-full px-3 py-2 border rounded-lg bg-gray-300 focus:border-gray-500' name='address' onChange={(e)=> setSignUpData({...signUpData, address: e.target.value})} placeholder=''  type='text' />
        </div>
        </div>
      <div className="grid grid-cols-2 gap-[16px]">
        <div>
            <label className='block text-black tracking-6 text-[18px] font-bold mb-2 mt-8' htmlFor='password'>Password</label>
            <input className='w-full px-3 py-2 border rounded-lg bg-gray-300 focus:border-gray-500' name='password' onChange={(e)=> setSignUpData({...signUpData, password: e.target.value})} placeholder='Type password here..'  type='password' />
        </div>
        <div>
            <label className='block text-black tracking-6 text-[18px] font-semibold mb-2 mt-8' htmlFor='password'>Confirm Password</label>
           <input className='w-full px-3 py-2 border rounded-lg bg-gray-300 focus:border-gray-500' name='cpassword' onChange={(e)=> setSignUpData({...signUpData, cpassword: e.target.value})} placeholder='Retype password'  type='password' />
        </div>
        </div>
        <div className='flex justify-center '>
        <button type='submit' className='bg-gray-700 mt-8 text-white font-semibold px-4 py-2 rounded-lg hover:bg-white hover:text-black focus:outline-white'> Sign Up 
          <ToastContainer />
          </button>
          </div>
          {validForm ? <span></span> : <span className='text-red-500 font-normal'>{errors.fname} {errors.lname} {errors.email} {errors.address} {errors.password} {errors.cpassword} </span>}
        </form>
    </>
  )
}

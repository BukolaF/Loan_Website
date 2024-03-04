import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import {useForm} from'react-hook-form';
import {toast } from 'react-toastify';




export const SignUpform = ({form, ToastContainer}) => {
    
   const navigate = useNavigate()

  const {register, formState:{errors}, handleSubmit} = useForm();
  // const [error, setError] = useState()

  const onSubmit = async  (data) =>{
    
         try { 
          const response = await axios.post('http://localhost:5000/users', data)
            toast.success('Registered successfully');
            navigate('/login')
          }catch(err) {
           toast.error(`failed:` +err.message);
          }
}
  
       
      
              
  
    return (
    <>
 <form ref={form} onSubmit={handleSubmit(onSubmit)} className='mx-auto max-w-xl gap-8 sm:mt-[20px]' noValidate=''>
  
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
      <div className="grid grid-cols-2 gap-[16px]">
        <div>
            <label className='block text-black tracking-6 text-[18px] font-bold mb-2 mt-8' htmlFor='fname'>First Name</label>
            <input className='w-full px-3 py-2 border rounded-lg bg-gray-300 focus:border-gray-500'  name='firstname' placeholder='Sweet'  type='text' {...register("firstname",{required: true})} />
            <error className='text-red-500 font-semibold'>{errors.firstname?.type === "required" && "FirstName is required"}</error>
        </div>
        <div>
            <label className='block text-black tracking-6 text-[18px] font-bold mb-2 mt-8' htmlFor='lname'>Last Name</label>
            <input className='w-full px-3 py-2 border rounded-lg bg-gray-300 focus:border-gray-500'  name='lastname' placeholder='Heart'  type='text' {...register("lastname",{required: true})} />
            <error className='text-red-500 font-semibold'>{errors.lastname?.type === "required" && "LastName is required"}</error>
        </div>
        </div>
        <div className="grid grid-cols-2 gap-[16px]">
        <div>
            <label className='block text-black tracking-6 text-[18px] font-bold mb-2 mt-8' htmlFor='email'>Email</label>
           <input className='w-full px-3 py-2 border rounded-lg bg-gray-300 focus:border-gray-500' name='email' placeholder='Bold@example.com'  type='email' {...register("email",{required: true, pattern:/^[A-Za-z0-9_.+-]+@[A-Za-z0-9]+\.[a-zA-z0-9-.]+$/i})} />
           <error className='text-red-500 font-semibold'>{errors.email?.type === "required" && "Email is required"}</error>
           <error className='text-red-500 font-semibold'>{errors.email?.type === "pattern" && "Email is invalid"}</error>
        </div>
        <div>
            <label className='block text-black tracking-6 text-[18px] font-bold mb-2 mt-8' htmlFor='text'>Address</label>
           <input className='w-full px-3 py-2 border rounded-lg bg-gray-300 focus:border-gray-500' name='address'  placeholder=''  type='text' {...register("address",{required: true})} />
           <error className='text-red-500 font-semibold'>{errors.address?.type === "required" && "Address is required"}</error>
        </div>
        </div>
      <div className="grid grid-cols-2 gap-[16px]">
        <div>
            <label className='block text-black tracking-6 text-[18px] font-bold mb-2 mt-8' htmlFor='password'>Password</label>
            <input className='w-full px-3 py-2 border rounded-lg bg-gray-300 focus:border-gray-500' name='password' placeholder='Type password here..'  type='password' {...register("password",{required: true, minLength:8, maxLength:12,})} />
            <error className='text-red-500 font-semibold'>{errors.password?.type === "minLength" && "Password must be at least 8 characters"}</error>
            <error className='text-red-500 font-semibold'>{errors.password?.type === "maxLength" && "Password must mot be more than 12 chracters"}</error>
            <error className='text-red-500 font-semibold'>{errors.password?.type === "required" && "Password is required"}</error>
        </div>
        <div>
            <label className='block text-black tracking-6 text-[18px] font-semibold mb-2 mt-8' htmlFor='number'>Phone Number</label>
           <input className='w-full px-3 py-2 border rounded-lg bg-gray-300 focus:border-gray-500' name='number'  placeholder='Enter your PhoneNumber'  type='number' {...register("number",{required:true, minLength:11, maxLength: 11,})} />
           <error className='text-red-500 font-semibold'>{errors.number?.type === "required" && "Phone number is required"}</error>
           <error className='text-red-500 font-semibold'>{errors.number?.type === "minLength" && "11 digit number is required"}</error>
        </div>
        </div>
        <div className='flex justify-center '>
        <button type='submit' className='bg-gray-700 mt-8 text-white font-semibold px-4 py-2 rounded-lg hover:bg-white hover:text-black focus:outline-white'> Sign Up 
          <ToastContainer />
          </button>
          </div>
        </form>
    </>
  )
}

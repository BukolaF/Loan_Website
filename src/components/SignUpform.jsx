import React from 'react'

export const SignUpform = ({form, sendEmail, isLoading, ToastContainer}) => {
  return (
    <>
 <form ref={form} onSubmit={sendEmail} className='mx-auto max-w-xl gap-8 sm:mt-[20px]' noValidate=''>
      <div className="grid grid-cols-2 gap-[16px]">
        <div>
            <label className='block text-black tracking-6 text-[18px] font-bold mb-2 mt-8' htmlFor='name'>Name</label>
            <input className='w-full px-3 py-2 border rounded-lg bg-gray-300 focus:border-gray-500' name='name' placeholder='Sweet Sour' required type='text' />
        </div>
        <div>
            <label className='block text-black tracking-6 text-[18px] font-bold mb-2 mt-8' htmlFor='email'>Email</label>
           <input className='w-full px-3 py-2 border rounded-lg bg-gray-300 focus:border-gray-500' name='email' placeholder='Bold@example.com' required type='email' />
        </div>
        </div>
      <div className="grid grid-cols-2 gap-[16px]">
        <div>
            <label className='block text-black tracking-6 text-[18px] font-bold mb-2 mt-8' htmlFor='password'>Password</label>
            <input className='w-full px-3 py-2 border rounded-lg bg-gray-300 focus:border-gray-500' name='password' placeholder='Type password here..' required type='password' />
        </div>
        <div>
            <label className='block text-black tracking-6 text-[18px] font-semibold mb-2 mt-8' htmlFor='password'>Confirm Password</label>
           <input className='w-full px-3 py-2 border rounded-lg bg-gray-300 focus:border-gray-500' name='password' placeholder='Retype password' required type='password' />
        </div>
        </div>
        <div className='flex justify-center '>
          <button type='submit' disabled={isLoading} className='bg-gray-700 mt-8 text-white font-semibold px-4 py-2 rounded-lg hover:bg-white hover:text-black focus:outline-white'>{isLoading? "Loading..": "Send Message"} 
          <ToastContainer />
          </button>
          </div>
        </form>
    </>
  )
}

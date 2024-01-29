import React from 'react';


export const UserDashboard = () => {
  return (
    <>
    <div className='flex'>
      <div className={`w-72 h-screen bg-blue-500 relative`}>
        <img src="./src/components/assets/control.png" alt='' className='absolute cursor-pointer rounded-full text-white-200 right-3 top-9 w-7 border-2' /> 
       </div>
      <div className='p-7 text 2xl font-semibold flex-1 h-screen'>
        <h1>Home Page</h1>
      </div>
    </div>
    </>
  )
}

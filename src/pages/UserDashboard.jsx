import React  from 'react';
import { UserDashboardMenu } from '../components/UserDashboardMenu';


export const UserDashboard = () => {


  const menu =[
      {path:"/apply", link: "Loan Applications"},
      {path: "/history", link: "Loan History"},
      {path: "/settings", link: "User Profile"},
      {path: "/newform", link: "New User Form"},

    ]

  return (
   <div className='flex'>
    <UserDashboardMenu />

      <div className=' p-7 text 2xl font-semibold'>
        <h1 className=' flex text-2xl text-start text-blue-700 font-bold mb-6 sm:text-3xl'> 
          Welcome to your No 1 loaning platform</h1>

        <p className='font-bold p-2 text-xl text-blue-400 text-center'>Click on any of the self-service options on your dashboard to get started</p>
        <h2>Did You know....</h2>
        </div>

 </div> 
  )
}

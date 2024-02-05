import React from 'react'
import {AdminDashboardMenu} from '../components/AdminDashboardMenu'


export const Admin = () => {



    const mainmenu =[
        {path:"/applications", link: "Loans Applications"},
        {path: "/verifications", link: "Verifications"},
        {path: "/adminprofile", link: "Admin Profile"},
        {path: "/clients", link: "Clients"},

      ]

  return (
    <div className='flex'>
         <AdminDashboardMenu />
    
          <div className=' p-7 text 2xl font-semibold'>
            <h1 className=' flex text-2xl text-start text-blue-700 font-bold mb-6 sm:text-3xl'> 
              Welcome to your No 1 loaning platform</h1>
    
            <p className='font-bold p-2 text-xl text-blue-400 text-center'>Click on any of the self-service options on your dashboard to get started</p>
            </div>
    
     </div> 

  )
}

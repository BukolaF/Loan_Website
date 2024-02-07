import React from 'react'
import { NavLink} from 'react-router-dom'




export const DashboardMenu = ({icon, to, name, active }) => {
     
   
   

  return (
        <li className={`flex items-center font-bold text-white py-2 px-3 my-1 rounded-md cursor-pointer transition-colors gap-1 overflow-hidden ${
          active?"bg-gradient-to-tr from-blue-200 to-indigo-200 text-blue-500": "hover:bg-indigo-300 text-blue-600"
        }`}>
         <NavLink className='flex py-4' to={to}>{icon}
         <span className='w-52 ml-3'>{name}</span></NavLink>
         </li>
  )  
}

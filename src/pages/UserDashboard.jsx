import React, { useState } from 'react';
import classNames from 'classnames';
import {GiTakeMyMoney} from 'react-icons/gi';
import {ImMenu} from 'react-icons/im'
import {CgProfile, CgLogOut} from 'react-icons/cg'
import {MdArrowBackIos, MdHistory} from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom';

export const UserDashboard = () => {

  const [opennav, setOpennav] = useState(true);

  const menu =[
    {path:"/apply", link: "Loan Applications"},
    {path: "/history", link: "Loan History"},
    {path: "/settings", link: "My Profile"},
  ]

  return (
   <div className='flex'>
    <div className={classNames("bg-blue-900 text-gray-600 shadow-xl z-[999] w-[20rem] max-w-[20rem] h-screen overflow-hidden md:relative", {opennav: "w-[20rem]", "w-[6rem]":!opennav})}>

       <div onClick={() => setOpennav(!opennav)} > 
       <MdArrowBackIos size={25}  className={classNames('absolute cursor-pointer text-blue-300 h-fit w-fit z-50 left-6 top-3', {opennav: "x-0 y-0 rotate-0", "x-10 y-200 rotate-180":!opennav})} />
      <h1 className='pl-5 flex my-16 mx-8 text-2xl font-medium text-blue-700 border-b border-blue-300  whitespace-pre'>Secured<span className='text-blue-500'>Loans</span> <GiTakeMyMoney className='h-8 w-8' size={20}/></h1>
      <ul className='font-bold text-white text-sm flex flex-col gap-1 overflow-hidden'>
      <li>
        <NavLink to='/apply' className={"link flex flex-col justify-between items-center px-6 py-4 hover:text-gray-400 md:relative"}>
          <ImMenu size={23} className='min-w-max'/>
          Loan Applications
          </NavLink> </li>
      <li>
        <NavLink to='/history' className={"link flex flex-col px-6 py-6 justify-between items-center hover:text-gray-400 md:relative"}>
          <MdHistory size={20} className='h-6 w-6'/>
          Loan History
          </NavLink> </li>
      <li>
        <NavLink to='/settings' className={"link flex flex-col px-6 py-6 justify-between items-center hover:text-gray-400 md:relative"}>
          <CgProfile size={23} className='h-6 w-6'/>
          Profile
          </NavLink> </li>
    </ul>

   <button type='button' className='flex bg-gray-400 text-red-800 mt-24 ml-20 font-semibold px-4 py-4 rounded-lg hover:bg-white'> <Link to='/login'>
    <CgLogOut size={20} />Log Out</Link> </button>
      </div>
     
     </div>

      <div className=' p-7 text 2xl font-semibold'>
        <h1 className=' flex text-2xl text-start text-blue-700 font-bold mb-6 sm:text-3xl'> 
          Welcome to your No 1 loaning platform</h1>

        <p className='font-bold p-2 text-xl text-blue-400 text-center'>Click on any of the self-service options on your dashboard to get started</p>
        </div>

 </div>
  )
}

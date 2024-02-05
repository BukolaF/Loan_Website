import React, { useState } from 'react'
import { NavLink, Link} from 'react-router-dom'
import {ImMenu} from 'react-icons/im'
import {GiTakeMyMoney} from 'react-icons/gi';
import {SiGoogleforms} from 'react-icons/si';
import {MdArrowBackIos, MdHistory} from 'react-icons/md'
import {CgProfile, CgLogOut} from 'react-icons/cg'
import classNames from 'classnames';


export const UserDashboardMenu = () => {
    const [opennav, setOpennav] = useState(true);

    

  return (
    <div className={classNames("bg-blue-900 text-gray-600 shadow-xl z-[999] w-[20rem] max-w-[20rem] h-screen overflow-hidden md:relative", {opennav: "w-[20rem]", "w-[6rem]":!opennav})}>

    <div className=''> 
       <MdArrowBackIos size={25} onClick={() => setOpennav(!opennav)}   className={classNames('absolute cursor-pointer text-blue-300 h-fit w-fit z-50 left-6 top-3', {opennav: "x-0 y-0 rotate-0", "x-10 y-200 rotate-180":!opennav})} />
      <h1 className='pl-6 flex mt-14 mb-8 mx-4 text-2xl font-medium text-blue-700  whitespace-pre'>Secured<span className='text-blue-500'>Loans</span> <GiTakeMyMoney className='h-8 w-8' size={20}/></h1>
     <div className='mt-8 border-b border-blue-300 '></div>
        <ul className='font-bold text-gray-400 text-sm flex flex-col gap-1 overflow-hidden'>
      <li>
        <NavLink to={'/apply'} className={"link flex flex-col justify-between items-center px-6 py-4 hover:text-white md:relative"}>
          <ImMenu size={23} className='min-w-max'/>
          Loan Applications
          </NavLink> </li>
      <li>
        <NavLink to={'/history'} className={"link flex flex-col px-6 py-6 justify-between items-center hover:text-white md:relative"}>
          <MdHistory size={20} className='h-6 w-6'/>
          Loan History
          </NavLink> </li>
      <li>
        <NavLink to={'/settings'} className={"link flex flex-col px-6 py-6 justify-between items-center hover:text-white md:relative"}>
          <CgProfile size={23} className='h-6 w-6'/>
         User Profile
          </NavLink> </li>
        <li>
        <NavLink to={'/newform'} className={"link flex flex-col px-6 py-6 justify-between items-center hover:text-white md:relative"}>
          <SiGoogleforms size={23} className='h-6 w-6'/>
          New Application
          </NavLink> </li>
    </ul>
    </div>
    <div className="my-16 border-b border-blue-300">    </div>
    
    <button type='button' className=' bg-blue-950 bg-gray-400 text-red-800  hover:bg-white flex flex-col rounded-xl px-4 py-4 ml-16 justify-between items-center'> <Link to='/login'>
     <CgLogOut size={20} />Log Out</Link> </button>
       </div>
  )
}

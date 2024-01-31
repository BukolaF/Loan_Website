import React, { useState } from 'react';
import classNames from 'classnames';
import {GiTakeMyMoney} from 'react-icons/gi';
import {MdKeyboardDoubleArrowLeft} from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom';

export const UserDashboard = () => {

  const [opennav, setOpennav] = useState(true);

  const menu =[
    {path:"/apply", link: "Loan Application"},
    {path: "/history", link: "Repayment History"},
    {path: "/settings", link: "Profile"},
  ]

  return (
   <div className='flex'>
    <div className={classNames("bg-blue-900 text-gray-600 shadow-xl z-[999] w-[16rem] max-w-[16rem] h-screen overflow-hidden md:relative", {opennav: "w-16", "w-64":!opennav})}>
       <div  > 
       <MdKeyboardDoubleArrowLeft size={25} onClick={() => setOpennav(!opennav)} className={classNames('absolute cursor-pointer text-blue-500 h-fit w-fit right-2 top-3', {opennav: "x-0 y-0 rotate-0", "x-10 y-200 rotate-180":!opennav})} />
      {/* <h1 className=' flex my-10 mx-4 text-3xl font-medium text-blue-700 border-b border-blue-300 whitespace-pre'>Secured<span className='text-blue-500'>Loans</span> <GiTakeMyMoney className='h-8 w-8' size={20}/></h1> */}
      {/* <div>
      {menu.map(({path,link}) => <li key={link} className='p-8 font-extrabold text-white' >
        <NavLink to={path}>{link}</NavLink> </li>)}
    </div> */}

   {/* <button type='button' className='bg-gray-400 text-red-800 mt-48 ml-16 font-semibold px-6 py-4 rounded-lg hover:bg-white hover:text-black'> <Link to='/login'>Log Out</Link> </button> */}
      </div>
      </div>




      <div className='p-7 text 2xl font-semibold'>
        <h1>Home Page</h1>
      </div>
 </div>

  )
}

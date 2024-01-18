import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {GiTakeMyMoney} from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import {IoMdCloseCircle} from 'react-icons/io'


const Navbar = () => {

  const navItems =[
    {path: "/loans", link: "Loans"},
    {path: "/about", link: "About"},
    {path: "/login", link: "Login"},
    {path: "/contact", link: "Contact"},
  ]
  const [showNav, setShowNav] = useState(false);


  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 py-4 text-blue-800'>
        <h1 className=' flex w-full text-3xl font-bold text-blue-700'>Secured<span className='text-blue-500'>Loans</span> <GiTakeMyMoney className='h-8 w-8' size={20}/></h1>
        <ul className='hidden md:flex'>
        {navItems.map(({path,link}) => <li className='p-8'>
        <NavLink to={path}>{link}</NavLink> </li>)}
</ul>
        <button onClick={() => setShowNav(!showNav)} className='block md:hidden self-center nav-link'>
          {showNav ? <AiOutlineMenu size={20} /> : <AiOutlineClose className='outline-none mr-2 bg-blue-600 ml-auto ' size={20}/>}
          
          </button>  
          <div className={!showNav ? 'fixed left-0 top-0 w-[70%] h-full border-r border-r-blue-200 bg-blue-300 ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <h1 className='flex w-full text-3xl font-bold text-blue-700 m-4 pt-6'>Secured<span className='text-blue-500'>Loans</span> <GiTakeMyMoney className='h-8 w-8' size={20} />     
          <IoMdCloseCircle onClick={()=>{setShowNav(!showNav)}} className='flex justify-center' />
                </h1>
          <ul className=' pt-10 uppercase'>
          {navItems.map(({path, link}) => <li className='p-8 border-b border-blue-900 '>
        <NavLink to={path}>{link}</NavLink> </li>)}
        </ul> 
          </div>
        </div>
  )
}

export default Navbar



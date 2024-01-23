import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {GiTakeMyMoney} from 'react-icons/gi';
import {IoMdCloseCircle} from 'react-icons/io'
import { NavItems } from '../components';


 export const Navbar = () => {

  const [showNav, setShowNav] = useState(false);


  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-8 py-4 text-blue-800'>
        <h1 className=' flex w-full text-3xl font-bold text-blue-700'>Secured<span className='text-blue-500'>Loans</span> <GiTakeMyMoney className='h-8 w-8' size={20}/></h1>
        <ul className='hidden md:flex'>
        <NavItems />
</ul>
        <button onClick={() => setShowNav(!showNav)} className='block md:hidden  nav-link'>
          {showNav ? <AiOutlineMenu size={20} /> : <AiOutlineClose className='outline-none mr-2 bg-blue-600 ml-auto ' size={20}/>}
          
          </button>  
          <div className={!showNav ? 'lg:hidden fixed left-0 top-0 z-[100] w-[70%] h-full overflow-y-auto border-r border-r-blue-800 bg-blue-300 transition-left duration-500 ease left-0' : 'fixed left-[-100%]'}>
          <h1 className='flex w-full text-3xl font-bold text-blue-700 m-4 pt-6'>Secured<span className='text-blue-500'>Loans</span> <GiTakeMyMoney className='h-8 w-8' size={20} />     
          <IoMdCloseCircle onClick={()=>{setShowNav(!showNav)}} className='flex justify-center' />
                </h1>
          <ul className=' pt-10 uppercase'>
          <NavItems className='p-8 border-b border-blue-900' />
        </ul> 
          </div>
        </div>
  )
}




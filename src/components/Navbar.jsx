import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {GiTakeMyMoney} from 'react-icons/gi';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-blue-800'>
        <h1 className=' flex gap-2.5 w-full text-3xl font-bold text-blue-700'>SecuredLoans <GiTakeMyMoney className='h-8 w-8' size={20} /> </h1>
        <ul className='hidden md:flex'>
          <li className='p-8'>loans</li>
          <li className='p-8'>About</li> 
          <li className='p-8'>Login</li>
          <li className='p-8'>Contact</li>
        </ul> 
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu  size={20}/>}
          
          </div>  
          <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-blue-200 bg-blue-300 ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <h1 className='flex gap-2.5 w-full text-3xl font-bold text-blue-700 m-4 pt-6'>SecuredLoans <GiTakeMyMoney className='h-8 w-8' size={20} /> </h1>
          <ul className=' pt-10 uppercase'>
            <li className='p-8 border-b border-blue-900'>loans</li>
            <li className='p-8 border-b border-blue-900'>About</li>
            <li className='p-8 border-b border-blue-900'>Login</li>
            <li className='p-8 border-b border-blue-900'>Contact</li>
        </ul> 
          </div>
        </div>
  )
}

export default Navbar



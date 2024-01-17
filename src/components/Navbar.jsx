import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {GiTakeMyMoney} from 'react-icons/gi';


const Navbar = () => {
  const navlinks = ['Loan','About','Login','Contact'];
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-blue-800'>
        <h1 className=' flex gap-2.5 w-full text-3xl font-bold text-blue-700'>SecuredLoans <GiTakeMyMoney className='h-8 w-8' size={20} /> </h1>
        <ul className='hidden md:flex'>
        {navlinks.map((link) => 
              <li key={link} className="p-8"> {link}</li>)}
</ul>
        <div onClick={handleNav} className='block md:hidden'>
          {showNav ? <AiOutlineMenu size={20} /> : <AiOutlineClose  size={20}/>}
          
          </div>  
          <div className={!showNav ? 'fixed left-0 top-0 w-[70%] h-full border-r border-r-blue-200 bg-blue-300 ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <h1 className='flex gap-2.5 w-full text-3xl font-bold text-blue-700 m-4 pt-6'>SecuredLoans <GiTakeMyMoney className='h-8 w-8' size={20} /> </h1>
          <ul className=' pt-10 uppercase'>
            {navlinks.map((link) => 
              <li key={link} className="p-8 border-b border-blue-900"> {link}</li>)}
        </ul> 
          </div>
        </div>
  )
}

export default Navbar



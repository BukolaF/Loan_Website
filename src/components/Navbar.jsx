import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {GiTakeMyMoney} from 'react-icons/gi';
import { NavItems } from '../components';
import classNames from 'classnames';


 export const Navbar = () => {

  const [showNav, setShowNav] = useState(false);
  // const nav = classNames('fixed left-[-100%]', {'lg:hidden fixed left-0 top-0 z-[100] w-[70%] h-full overflow-y-auto border-r border-r-blue-800 bg-blue-300 transition-all ease-out duration-500': !showNav});


  return (

    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-8 py-4 text-blue-600'>       
     <h1 className=' flex w-full text-3xl font-bold text-blue-700'>Secured<span className='text-blue-500'>Loans</span> <GiTakeMyMoney className='h-8 w-8' size={20}/></h1>

        <ul className='hidden md:flex '>
        <NavItems />
</ul>
        <button onClick={() => setShowNav(!showNav)} className= 'block md:hidden nav-link'>
          {!showNav ? <AiOutlineMenu size={20} /> : <AiOutlineClose className='outline-none mr-2 ml-auto ' size={20}/>}
          </button>  

        
         <div className={classNames(
          "lg:hidden w-[70%] pt-4 h-screen fixed top-0 z-[100] overflow-y:auto border-r border-r-blue-500 bg-blue-300 transition-left duration-700 ease",
          { "left-0": showNav, "left-[-80%]": !showNav }
        )}>
          <h1 className='flex w-full text-3xl font-bold text-blue-700 m-4 pt-6'>Secured<span className='text-blue-500'>Loans</span> <GiTakeMyMoney className='h-8 w-8' size={20} />   </h1>
          <ul className=' pt-10 uppercase'>
          <NavItems className='p-8 border-b-4 border-blue-900' />
        </ul> 
          </div>
        </div>
  )
}




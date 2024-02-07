import React, { useState }  from 'react'
import {GiTakeMyMoney} from 'react-icons/gi';
import {MdHistory, MdArrowBackIos} from 'react-icons/md'
import {ImMenu} from 'react-icons/im';
import {CgProfile, CgLogOut} from 'react-icons/cg';
import {IoMdPeople} from 'react-icons/io';
import classNames from 'classnames';
import { DashboardMenu } from '../components';
import { Link } from 'react-router-dom';



export const Admin = () => {


      const [opennav, setOpennav] = useState(true)

  

    

      return (
       <div className='flex'>
        <div className={classNames("bg-blue-950 flex flex-col text-gray-600 shadow-xl z-[999] w-[20rem] max-w-[20rem] h-screen overflow-hidden md:relative", {opennav: "w-[20rem]", "w-[6rem]":!opennav})}>
    
    <div className=''> 
       <MdArrowBackIos size={25} onClick={() => setOpennav(!opennav)}   className={classNames('absolute cursor-pointer text-blue-300 h-fit w-fit z-50 left-6 top-3', {opennav: "x-0 y-0 rotate-0", "x-10 y-200 rotate-180":!opennav})} />
      <h1 className='pl-6 flex mt-14 mb-8 mx-4 text-2xl font-medium text-blue-700  whitespace-pre'>Secured<span className='text-blue-500'>Loans</span> <GiTakeMyMoney className='h-8 w-8' size={20}/></h1>
     <div className='mt-8 border-b border-blue-300 '></div>
    
     <DashboardMenu icon={<ImMenu size={20} className='h-6 w-6'/>} name={'Loan Applications'} to={'/newloanapplications'}/>
     <DashboardMenu icon={<IoMdPeople size={20} className='h-6 w-6'/>} name={'Clients'} to={'/clients'}/>
     <DashboardMenu icon={<CgProfile size={20} className='h-6 w-6'/>} name={'Admin Profile'} to={'/adminprofile'}/>
     <DashboardMenu icon={<MdHistory size={20} className='h-6 w-6'/>} name={'Loan History'} to={'/allloans'}/>
    
     <div className="my-16 border-b border-blue-300">    </div>
        
        <button type='button' className=' bg-blue-950 bg-gray-400 text-red-800  hover:bg-white flex flex-col rounded-xl px-4 py-4 ml-16 justify-between items-center'> <Link to='/login'>
         <CgLogOut size={20} />Log Out</Link> </button>
          
    </div>
     </div> 
     <div className=' p-7 text 2xl font-semibold'>
            <h1 className=' flex text-2xl text-start text-blue-700 font-bold mb-6 sm:text-3xl'> 
              Welcome to your No 1 loaning platform</h1>
    
            <p className='font-bold p-2 text-xl text-blue-400 text-center'>Click on any of the self-service options on your dashboard to get started</p>
            <h2>Did You know....</h2>
            </div>
     </div>
      )
    }
    
import React, { useState } from 'react'
import {MdHistory, MdArrowBackIos} from 'react-icons/md'
import {CgProfile, CgLogOut} from 'react-icons/cg'
import {ImMenu} from 'react-icons/im'
import {SiGoogleforms} from 'react-icons/si'
import { DashboardMenu } from '../components';
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import {GiTakeMyMoney} from 'react-icons/gi';


export const UserDashboard = () => {

     const [opennav, setOpennav] = useState(true)

  

    

  return (
   <div className='flex'>
    <div className={classNames("bg-blue-950 text-gray-600 shadow-xl z-[999] w-[20rem] max-w-[20rem] h-screen overflow-hidden  overflow-hidden md:relative", {opennav: "w-[20rem]", "w-[6rem]":!opennav})}>

<div className=''> 
   <MdArrowBackIos size={25} onClick={() => setOpennav(!opennav)}   className={classNames('absolute cursor-pointer text-blue-300 h-fit w-fit z-50 left-6 top-3', {opennav: "x-0 y-0 rotate-0", "x-10 y-200 rotate-180":!opennav})} />
  <h1 className='pl-6 flex mt-14 mb-8 mx-4 text-2xl font-medium text-blue-700  whitespace-pre'>Secured<span className='text-blue-500'>Loans</span> <GiTakeMyMoney className='h-8 w-8' size={20}/></h1>
 <div className='mt-8 border-b border-blue-300 '></div>

 <DashboardMenu  icon={<ImMenu size={20} className='h-6 w-6'/>} name={'Loan Applications'} to={'/loanapplications'}  />

 <DashboardMenu icon={<MdHistory size={20} className='h-6 w-6'/>} name={'Loan History'} to={'/loanhistory'}/>
 <DashboardMenu icon={<CgProfile size={20} className='h-6 w-6'/>} name={'Profile'} to={'/userprofile'}/>
 <DashboardMenu icon={<SiGoogleforms size={20} className='h-6 w-6'/>} name={'New Application'} to={'/newuserform'}/>

 <div className="my-16 border-b border-blue-300">    </div>
    
    <button type='button' className=' bg-blue-950 bg-gray-400 text-red-800  hover:bg-white flex flex-col rounded-xl px-4 py-4 ml-16 justify-between items-center'> <Link to='/login'>
     <CgLogOut size={20} />Log Out</Link> </button>
      
</div>
 </div> 
 
 </div>
  )
}

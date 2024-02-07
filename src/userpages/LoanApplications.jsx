import React from 'react'
import { LoanTypes } from '../constant'
import { Link } from 'react-router-dom'
import { UserDashboard } from '../pages'

export const LoanApplications = () => {

  return (
    <div className='flex'>
      <UserDashboard />
      <div className='flex flex-col w-full bg-blue-200'>
      <h2 className="text-base mt-10 font-semibold leading-7 text-blue-700 mx-10 ">Looking to apply for a New Loan? </h2>
      <p className="mt-1 ml-6 mb-5 text-sm leading-6 text-red-700">Before clicking on apply, Read the details below </p>
<LoanTypes />
<div className="mt-4 flex items-center justify-end gap-x-6">

     <Link to={'/newform'}> <button type="button" className="text-base mt-44 font-semibold leading-6 text-blue-700 mx-10">
          Click here to apply
        </button></Link>
      <Link to={'/history'}> <button type="button" className="text-base mt-44 font-semibold leading-6 text-blue-700 mx-10">
        Click here to view your loan history
        </button></Link>
      </div>
</div>
    </div>
  )
}

import React from 'react'
import  {LoanHistoryData}  from '../constant';
import  {LoanStatus}  from '../utility';
import { UserDashboard } from './UserDashboard';

export const LoanHistory = () => {

  
  return (
    <div className='flex'>
      <UserDashboard />
      <div className='flex flex-col gap-4 w-full'>
      <div className='bg-blue-200 px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1'>
      <h2 className="text-base font-semibold leading-7 text-blue-700 justify-center text-center uppercase">Loan History</h2>
      <div className='mt-3'>
        <table className='w-full text-gray-800 '>
          <thead className='border-solid border-4 border-gray-500'>
            <tr>
              <td className='border-solid border-4 border-gray-500 text-center border-b-4 p-2'>ID</td>
              <td className='border-solid border-4 border-gray-500 text-center border-b-4 p-2'>Title</td>
              <td className='border-solid border-4 border-gray-500 text-center border-b-4 p-2'>Duration</td>
              <td className='border-solid border-4 border-gray-500 text-center border-b-4 p-2'>Amount</td>
              <td className='border-solid border-4 border-gray-500 text-center border-b-4 p-2'>Date of Application</td>
              <td className='border-solid border-4 border-gray-500 text-center border-b-4 p-2'>Application ID</td>
              <td className='border-solid border-4 border-gray-500 text-center border-b-4 p-2'>Date of Disbursement </td>
              <td className='border-solid border-4 border-gray-500 text-center border-b-4 p-2'>{LoanStatus.Status}</td>
            </tr>
          </thead>
          <tbody> 
            <LoanHistoryData />
          </tbody>
        </table>
      </div>
      </div>
      </div>

    </div>
  )
}

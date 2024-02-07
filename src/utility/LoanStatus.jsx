import React from 'react'

export const LoanStatus = (status) => {
    switch (status) {
        case "PAID":
  return (
    <h1 className='capitalize py-2 px-6 rounded-md text-teal-100 font-bold bg-teal-700'>
        {status}
    </h1>
  )
  case "ACTIVE":
  return (
    <h1 className='capitalize py-2 px-6 rounded-md font-bold bg-green-500 text-green-200'>
        {status}
    </h1>
  )
  case "DECLINED":
  return (
    <h1 className='capitalize py-2 px-6 rounded-md font-bold bg-orange-600 text-orange-200'>
        {status}
    </h1>
  )
  case "APPROVED":
  return (
    <h1 className='capitalize py-2 px-6 rounded-md font-bold bg-lime-950 text-lime-200'>
        {status}
    </h1>
  )
  case "PENDING":
  return (
    <h1 className='capitalize py-2 px-6 rounded-md font-bold bg-yellow-500 text-yellow-200'>
        {status}
    </h1>
  )
  default:
    return(
        <h1 className='capitalize py-2 px-6 rounded-md font-bold bg-gray-500 text-gray-200' >
    {status}
        </h1>
    )
}
}
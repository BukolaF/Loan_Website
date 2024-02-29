import React from 'react'
import { Footer, Navbar} from '../components'
import { LoanTypes } from '../constant'

export const Loans = () => {
  return (
    <div>
      <Navbar />
      <div className=' flex justify-center  text-center mx-auto max-w-7xl px-6 lg:px-8 mt-10'>
        <div className='mx-auto lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight pt-10 text-blue-950 sm:text-4xl'> Loan Packages</h2>
          <p className='mt-8 text-lg leading-8 text-gray-800'>SecuredLoans has one of the most innovative digital short-term loan products available in Lagos, Nigeria. The process is fast, convenient, and simple.</p>
        </div>
      </div>
  <LoanTypes />
    <Footer />
    </div>

  )
}

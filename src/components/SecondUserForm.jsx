import React from 'react'

export const SecondUserForm = ({handlePrev, handleSubmit, form, ToastContainer, isLoading}) => {

   

  return (
        <div className='ml-10 w-full bg-blue-200'>
        <form ref={form}>
        <div className="border-b border-gray-900/10 pb-12 flex flex-col w-full justify-center text-center items-center">
          <h2 className="text-base mt-4 font-semibold leading-7 text-blue-700 mx-10 text-center">Bank Information</h2>
          <p className="mt-1 text-sm leading-6 text-red-400">Use a permanent address where you can receive mail.</p>
          <div className="mt-4 grid grid-cols-1 gap-x-36 gap-y-8 sm:grid-cols-6 items-center">
          <div className="sm:col-span-3">
              <label htmlFor="salary-amount" className="block text-sm font-medium leading-6 text-blue-700">
                Salary amount
              </label>
              <div className="mt-2">
                <input
                  type='number'
                  id="salary"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 mx-10 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-100 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
              </div>
              <div className="sm:col-span-3">
              <label htmlFor="bank-name" className="block text-sm font-medium leading-6 text-blue-700">
                Bank Name 
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="bank-name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 mx-10 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-100 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
              </div>
              <div className="sm:col-span-3">
              <label htmlFor="account" className="block text-sm font-medium leading-6 text-blue-700">
                 Account Number
              </label>
              <div className="mt-6">
                <input
                  type="text"
                  id="account"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 mx-10 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-100 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
              </div>
              
              <div className="sm:col-span-3">
              <label htmlFor="loan-interest" className="block text-sm font-medium leading-6 text-blue-700">
                Interest               
                </label>
              <div className="mt-6">
                <input
                  type="text"
                  id="interest"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 mx-10 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-100 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
              </div>
    </div>
    <h2 className="text-base mt-4 font-semibold leading-7 text-blue-700 mx-10 text-center">Loan Information</h2>
          <p className="mt-1 text-sm leading-6 text-red-400">Use a permanent address where you can receive mail.</p>
          <div className="mt-4 grid grid-cols-1 gap-x-36 gap-y-8 sm:grid-cols-6 items-center">
          <div className="sm:col-span-3">
              <label htmlFor="loan-amount" className="block text-sm font-medium leading-6 text-blue-700">
                Loan amount
              </label>
              <div className="mt-2">
                <input
                  type='number'
                  id="amount"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 mx-10 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-100 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
              </div>
              <div className="sm:col-span-3">
              <label htmlFor="loan-interest" className="block text-sm font-medium leading-6 text-blue-700">
                Interest               
                </label>
              <div className="mt-6">
                <input
                  type="text"
                  id="interest"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 mx-10 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-100 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
              </div>
              <div className="sm:col-span-3">
              <label htmlFor="loan-tenor" className="block text-sm font-medium leading-6 text-blue-700">
                Tenor               
                </label>
              <div className="mt-6">
                <input
                  type="text"
                  id="tenor"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 mx-10 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-100 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
              </div>
              </div>
    </div>
    <div className="mt-10 flex items-center justify-end gap-x-6">
        <button onClick={handlePrev} type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Previous
        </button>
        <button onClick={handleSubmit}
          type="submit"
          disabled={isLoading}
          className="rounded-md bg-blue-800 px-4 py-2 mr-6 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
        >
          {isLoading? "Loading..": "Submit"} 
          <ToastContainer />

        </button>
        </div>
    </form>
    </div>
  )
}

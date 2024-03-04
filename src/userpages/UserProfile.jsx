import React from 'react'
import { UserDashboard } from '../pages'

export const UserProfile = () => {
  return (
    <div className='flex bg-blue-200'>
  <UserDashboard />
      <form>
      <div className="border-b border-gray-900/10 pb-12 flex flex-col w-full justify-center text-center items-center">
          <h2 className="text-base mt-4 font-semibold leading-7 text-blue-700 mx-10 text-center">Personal Information</h2>
          <p className="mt-1 text-sm leading-6 text-red-400">Use a permanent address where you can receive mail.</p>

          <div className="mt-4 grid grid-cols-1 gap-x-36 gap-y-8 sm:grid-cols-6 items-center">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-blue-700">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={"Hannah"}
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md px-2 mx-10 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-100 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-blue-700">
                Last name
              </label>
              <div className="mt-2">
                <input
                value={"Samuel"}
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 mx-10 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-100 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-blue-700">
                Email address
              </label>
              <div className="mt-6">
                <input
                value={"bukolaojoye2@gmail.com"}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 px-2 mx-10 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-100 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
        <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-blue-700">
          Phone number
          </label>
              <div className="mt-6">
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  required
                  size={11}
                  className="block w-full rounded-md border-0 py-1.5 px-2 mx-10 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-100 placeholder:text-blue-100 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-blue-700">
                Street address
              </label>
              <div className="mt-6">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 mx-10 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-100 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
              </div>

          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12 px-8">
          <h2 className="text-base font-semibold leading-7 text-blue-700">Notifications</h2>
          

          <div className="mt-8 space-y-10">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
              <div className="mt-6 space-y-4">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      type="checkbox"
                      required
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                    />
                  </div>
                  
                  <div className="text-sm leading-6">
                    <label htmlFor="candidates" className="font-medium text-gray-900">
                      Offers
                    </label>
                    <p className="text-gray-500">Get notified when of a new loan offer.</p>
                  </div>
                </div>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                     required
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="offers" className="font-medium text-gray-900">
                      Applications
                      </label>
                    <p className="text-gray-500">Get notified when a loan application has been accepted or rejected.</p>
                  </div>
                </div>
              </div>
            </fieldset>
           
          </div>
        </div>

      <div className="mt-10 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-blue-800 px-4 py-2 mr-6 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
        >
          Save
        </button>
      </div>
    </form>
    </div>

  )
}

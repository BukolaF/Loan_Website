import React from 'react';
import 'react-toastify/dist/ReactToastify.css';



export const FirstUserForm = ({handleNext, handlePrev}) => {



  return (
    <div className='ml-10 w-full bg-blue-200'>
    <form>
        <div className='border-b border-gray-900/10 pb-12 flex flex-col w-full justify-center text-center items-center'>
          <h2 className="text-base mt-4 font-semibold leading-7 text-blue-700 mx-10 text-center">Applicant Information</h2>
        <p className="mt-1 max-w-2xl flex justify-center items-center font-semibold leading-6 text-blue-500" >Personal details.</p>
          <div className="mt-4 grid grid-cols-1 gap-x-36 gap-y-8 sm:grid-cols-6 items-center">
            <div className="sm:col-span-3">
              <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-blue-700">
                Full name (as it is on your bank account)
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={""}
                  name="full-name"
                  id="full-name"
                  className="block w-full rounded-md px-2 mx-10 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-100 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
              
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="bvn" className="block text-sm font-medium leading-6 text-blue-700">
                BVN
              </label>
              <div className="mt-2">
                <input
                value={""}
                  type="number"
                  name="bvn"
                  id="bvn"
                required                  
                size={12}
                  className="block w-full rounded-md border-0 mx-10 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-100 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-blue-700">
                Email
              </label>
              <div className="mt-6">
                <input
                value="bukolaojoye2@gmail.com"
                  id="email"
                  name="email"
                  type="email"
                    readOnly                 
            className="block w-full rounded-md border-0 py-1.5 px-2 mx-10 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-100 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-blue-700">
                Street address
              </label>
              <div className="mt-6">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 mx-10 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-100 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
              </div>
            <div className="sm:col-span-2">
              <label htmlFor="local-govt" className="block text-sm font-medium leading-6 text-blue-700">Local government
              <div className="mt-6">
                <select required className="block w-full rounded-md border-0 py-1.5 px-2 mx-10 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-100 placeholder:text-blue-100 sm:text-sm sm:leading-6">
                <option value="Alimosho">Alimosho</option>
                <option value="Ikeja">Ikeja</option>
                <option value="Yaba">Yaba</option>
                <option value="Gbagada">Gbagada</option>
                  </select>
              </div>
              </label>
            </div>
            <div className="sm:col-span-2">
        <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-blue-700">
          ZIP / Postal code
          </label>
              <div className="mt-6">
                <input
                  type="text"
                  name="postal-code"
                  id="postal-code"
                size={6}                 
                required
                  className="block w-full rounded-md border-0 py-1.5 px-2 mx-10 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-100 placeholder:text-blue-100 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
            <label htmlFor="loan-type" className="block text-sm font-medium leading-6 text-blue-700">Loan type
              <div className="mt-6">
                <select required className="block w-full rounded-md border-0 py-1.5 px-2 mx-10 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-100 placeholder:text-blue-100 sm:text-sm sm:leading-6">
                <option value="Personal">Personal</option>
                <option value="Business">Business</option>
                <option value="Instant">Instant</option>
                <option value="selected"></option>
                  </select>
              </div>
              </label>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="occupation" className="block text-sm font-medium leading-6 text-blue-700">
                Occupation              </label>
              <div className="mt-2">
                <input
                  type="text"
                  value={""}
                  name="occupation"
                  id="occupation"
                  className="block w-full rounded-md px-2 mx-10 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-100 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
              
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="field" className="block text-sm font-medium leading-6 text-blue-700">
                    Field of occupation</label>
              <div className="mt-2">
                <input
                  type="text"
                  value={""}
                  name="field"
                  id="field"
                    required
                  className="block w-full rounded-md px-2 mx-10 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-100 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
              
            </div>
            <div className="sm:col-span-3">
            <label htmlFor="experience" className="block text-sm font-medium leading-6 text-blue-700">Years of work experience
              <div className="mt-6">
                <select required className="block w-full rounded-md border-0 py-1.5 px-2 mx-10 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-100 placeholder:text-blue-100 sm:text-sm sm:leading-6">
                <option value="2-4">2-4</option>
                <option value="5-8">5-8</option>
                <option value="9-12">9-12</option>
                <option value="more than 12">13 years and above</option>
                <option value="selected"></option>
                  </select>
              </div>
              </label>
              
            </div>
            <div className="sm:col-span-3">
            <label htmlFor="application" className="block text-sm font-medium leading-6 text-blue-700">Have you previously applied for loan
              <div className="mt-6">
                <select required className="block w-full rounded-md border-0 py-1.5 px-2 mx-10 text-gray-900 shadow-sm ring-1 ring-inset ring-blue-100 placeholder:text-blue-100 sm:text-sm sm:leading-6">
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="selected"></option>
                  </select>
              </div>
              </label>
              
            </div> 

          </div>
        </div>

      <div className="mt-10 flex items-center justify-end gap-x-6">
        <button onClick={handlePrev} type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Previous
        </button>
        <button onClick={handleNext}
          type="button"
          className="rounded-md bg-blue-800 px-4 py-2 mr-6 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
        >
          Next
        </button>
        </div>
      </form>  

    </div>
  )
}

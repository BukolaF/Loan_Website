import React from 'react';
import {Link} from 'react-router-dom';
import personal_image_logo from '../Assets/personal_image_logo.jpeg';
import business_image_logo from '../Assets/personal_image_logo.jpeg';
import cooperative_image_logo from '../Assets/personal_image_logo.jpeg'

const lists = [
    {
    id: 1,
    title: 'Instant Loan',
    description:'Available to all salary earners',
    amount: '50,000 to 500,000',
    duration: '9 months',
    requirement: 'Upload proof of employment, a government ID and proof of address',
      imageUrl: personal_image_logo    
},
    {
        id: 2,
        title: 'Personal Loan',
        description:'Available to small business owners and Entrepreneurs',
        amount: '600,000 to  1 million',
        duration: '6 months',
        requirement: 'Upload Basic requirement including CAC of business',
          imageUrl: business_image_logo
        },
    
        {
            id: 3,
            title: 'Business Loan',
            description: 'Available to large business owners',
            amount: '2 million to 10 million',
            duration: '3 months',
            requirement: 'Upload Basic requirement inluding CAC of business and bank statement',
              imageUrl: cooperative_image_logo
            }
    
]
export const LoanTypes = () => {
  return (
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 pt-12">
          <ul role="listbox" className="grid gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-y-16 xl:col-span-3">
          {lists.map((list) => (
            <li key={list.id}>
              <div className="flex items-center gap-x-6 gap-y-10">
                <img className="h-20 w-20 rounded-full" src={list.imageUrl} alt="" />
                <div className='px-2 pb-20'>
                  <h3 className="text-base font-extrabold text-xl leading-7 tracking-tight text-gray-900">
                  <Link to='/login'>{list.title}</Link></h3>
                  <h2 className="text-medium font-semibold leading-6 text-blue-800">{list.description}</h2>
                  <h2 className="text-medium font-semibold leading-6 text-blue-800">{list.amount}</h2>
                  <p className="text-medium font-semibold leading-6 text-blue-800">{list.duration}</p>
                  <p className="text-medium font-semibold leading-6 text-blue-800">{list.requirement}</p>

                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
  )
}

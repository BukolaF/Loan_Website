import React from 'react'
import {FaTwitter, FaInstagram, FaFacebook, FaWhatsapp} from 'react-icons/fa';

 export const Footer = () => {
  return (
    <div className='w-[100%] lg:px-2 mt-2 bg-blue-950 text-gray-300 py-2 px-2'>
        <div className=' container flex flex-row items-center mx-auto md: px-8 py-16 justify-center '>
            <div className='py-8 md:pt-2'>
                <p className='font-extrabold text-3xl uppercase'>For any Enquiries: </p>
                <p className='py-4 font-bold'>send an email to support@securedloans.com</p>
                <p className='py-4 font-bold'> call +234 801 2345 678</p>
                </div>
                </div>
             <div className='flex flex-row max-w-[1400px] items-center px-2 py-4 mx-auto justify-center sm:flex-row text-center text-gray-400' >
               <div className='flex text-center  sm:w-[300px] pt-4 text-3xl gap-10'>
                <FaInstagram />
                <FaFacebook />
                <FaTwitter/>
                <FaWhatsapp/>
                </div>  
                </div> 
                </div>

  )
}

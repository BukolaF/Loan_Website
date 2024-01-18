import React from 'react'
import {FaTwitter, FaInstagram, FaFacebook, FaWhatsapp} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full mt-2 bg-blue-950 text-gray-300 py-2 px-2'>
        <div className='mx-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 border-b-2 border-b-blue-950 px-4 py-8'>
           <div>
            <h6 className='font-bold uppercase pt-2'>Solutions</h6>
            <ul>
               <li className='py-1'>About Us</li> 
               <li className='py-1'>Sign In</li> 
               <li className='py-1'>FAQs</li>  
            </ul>
            </div> 
            <div>
                <h6 className='font-bold uppercase pt-2'>Legal</h6>
                    <ul>
                    <li className='py-1'>Privacy Policy</li> 
                    <li className='py-1'>Terms & Condition</li> 
                    <li className='py-1'>Testimonials</li> 
                    </ul>
            </div>
            <div className='col-span-2 py-8 md:pt-2'>
                <p className='font-bold uppercase'>Contact Us: </p>
                <p py-4>support@securedloans.com</p>
                <p py-4>+234 801 2345 678</p>
                </div>
             <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-400' >
               <div className='flex justify-between items-center sm:w-[300px] pt-4 text-3xl ml-32 gap-4'>
                <FaInstagram />
                <FaFacebook />
                <FaTwitter/>
                <FaWhatsapp/>
                </div>  
                </div> 
        </div>
    </div>
  )
}

export default Footer
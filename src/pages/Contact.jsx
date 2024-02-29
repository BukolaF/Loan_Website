import React, { useRef, useState } from 'react';
import {Footer, ContactForm, Navbar} from '../components';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Contact = () => {

  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

function sendEmail(e){
  e.preventDefault();

  setIsLoading(true);

  emailjs.sendForm('service_o55f3lt', 'template_k1idses', form.current, '1VeUppVafEyKSwu7t')
      .then((result) => {
          console.log(result.text);
          toast.success("Message sent successfully")
      }, (error) => {
          console.log(error.text);
          toast.error("Error sending message")
      })
      .finally(() => {
        setIsLoading(false)
      })
      e.target.reset();
  };

  return (
    <>
      <Navbar />
      <div className='w-full px-2 lg:px-0 text-black'>
        <div className='pb-8 px-4 pt-16 mx-auto sm:max-w-xl lg:max-w-screen-xl md:px-24 lg:px-56 bg-slate-900 rounded-lg my-20 shadow-md'>
      <h2 className='text-3xl text-center text-white font-bold mb-6 sm:text-4xl'>Contact Us!</h2>
      <p className='font-bold p-2 text-xl text-white text-center'>Leave a message and we will get back to you</p>
      <ContactForm  form ={form} isLoading={isLoading} sendEmail={sendEmail} ToastContainer={ToastContainer} />
      </div>
      <Footer />
      </div>
    </>
  )
}


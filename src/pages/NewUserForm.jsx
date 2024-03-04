import React, { useState, useRef} from 'react'
import { UserDashboard } from './UserDashboard'
import { FirstUserForm, SecondUserForm } from '../components';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const NewUserForm = () => {

const [page, setPage] = useState(0);

const formList = ["First UserForm", "Second UserForm", "Third UserForm"];
const formLength = formList.length;

const handlePrev = () =>{
  setPage(page === 0 ? formLength-1: page - 1 );
}

const handleNext = () =>{
setPage(page === formLength-1 ? 0 : page +1);
}


const form = useRef();
const [isLoading, setIsLoading] = useState(false);

function handleSubmit(e){
e.preventDefault();

setIsLoading(true);

emailjs.sendForm('service_oyaz87n', 'template_uiatuno', form.current, '1VeUppVafEyKSwu7t')
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

const handleform = () =>{
  switch(page) {
    case 0: {
      return <FirstUserForm handleNext={handleNext} handlePrev={handlePrev}></FirstUserForm>;
    }
    case 1: {
      return <SecondUserForm handlePrev={handlePrev} handleSubmit={handleSubmit} form ={form} isLoading={isLoading} ToastContainer={ToastContainer}></SecondUserForm>;  
    }
    default: return null;
  }
}

  return (
    <div className='flex bg-blue-200'>
      <UserDashboard />
<div>
  {handleform()}

  {/* <div>
  <button onClick={handlePrev}>Prev</button>
</div>
<div>
  <button onClick={handleNext}>Next</button>
</div> */}
</div>
  </div>
  
  )
}

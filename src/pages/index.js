import React from 'react'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Loans from './Loans'
import Login from './Login'

const index = () => {
  return (
    <div>
        <About />
        <Contact />
        <Home />
        <Loans />
        <Login />
    </div>
  )
}

export {About,Contact, Home, Loans, Login};
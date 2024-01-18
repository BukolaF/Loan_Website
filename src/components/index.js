import React from 'react'
import Hero from './Hero'
import Footer from './Footer'
import Navbar from './Navbar'

const index = () => {
  return (
    <div>
        <Footer />
        <Hero />
        <Navbar />

    </div>
  )
}

export {Hero, Footer, Navbar};
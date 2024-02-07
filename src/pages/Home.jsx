import React from 'react';
import {Hero, Navbar, Footer} from '../components/';
import { Features } from '../constant';




export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features/>
      <Footer />
    </>
  )
}


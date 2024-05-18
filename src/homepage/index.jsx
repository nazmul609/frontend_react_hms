import React from 'react'
import LandingPage from './LandingPage'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function HomePage() {
  return (
    <div className='w-full h-screen bg-slate-50'>
        <LandingPage/>
        <Footer/>
    </div>
  )
}

export default HomePage
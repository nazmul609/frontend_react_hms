import React from 'react'
import LandingPage from '../components/LandingPage'
import Navbar from '../components/Navbar'


function HomePage() {
  return (
    <div className='w-full h-screen bg-slate-50'>
        <Navbar/>
        <LandingPage/>
        
    </div>
  )
}

export default HomePage
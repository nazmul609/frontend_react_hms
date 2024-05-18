
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppointmentBooking from './components/Appointment';
import FindDoctor from './components/FindDoctor';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import PatientProfile from './components/PatientProfile';
import HomePage from './homepage';
import DoctorProfilePage from './components/DoctorProfile';
import AdminProfilePage from './components/AdminProfile';
import Footer from './components/Footer';




function App() {
  return (
    <BrowserRouter>
      <div className='w-full h-screen'>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<HomePage />} /> 

          {/* <Route path="/about-us" element={<AboutUs />} /> 
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} /> 
           */}
          
          <Route path="/patient" element={<PatientProfile/>} />
          <Route path="/doctor" element={<DoctorProfilePage/>} />
          <Route path="/admin" element={<AdminProfilePage/>} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/find-doctor" element={<FindDoctor/>} />
          <Route path="/appointment-booking" element={<AppointmentBooking/>} />  
          
        </Routes>
        
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

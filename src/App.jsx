
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './homepage';
import AppointmentBooking from './components/Appointment';
import FindDoctor from './components/FindDoctor';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';

import Login from './components/Login';
import SignupComponent from './components/Register';

import PatientProfile from './dashboard/PatientProfile';
import DoctorProfilePage from './dashboard/DoctorProfile';
import AdminPage from './dashboard/AdminProfile';

import UpdatePatientInfoPage from './info/PatientUpdateForm';
import PatientDetailsPage from './info/PatientDetails';
import UpdateDoctorInfoPage from './info/DoctorUpdateForm';
import DoctorDetailsPage from './info/DoctorDetails';


function App() {
  return (
    <BrowserRouter>
      <div className='w-full h-screen'>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/services" element={<Services/>} />
          <Route path="/contact-us" element={<ContactUs />} /> 
          <Route path="/about-us" element={<AboutUs />} /> 
          
          <Route path="/find-doctor" element={<FindDoctor/>} />
          <Route path="/appointment-booking/:doctorId" element={<AppointmentBooking/>} />  

          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<SignupComponent />} /> 

          <Route path="/patient/:patientId" element={<PatientProfile />} />
          <Route path="/doctor/:doctorId" element={<DoctorProfilePage/>} />
          <Route path="/admin/:userId" element={<AdminPage/>} />

          <Route path="/patient-details/:patientId" element={<PatientDetailsPage/>}/>
          <Route path="/patient-update/:userId" element={<UpdatePatientInfoPage/>} /> 
          <Route path="/doctor-details/:doctorId" element={<DoctorDetailsPage/>}/>
          <Route path="/doctor-update/:userId" element={<UpdateDoctorInfoPage/>} />
          
        </Routes>
        
        
      </div>
    </BrowserRouter>
  );
}

export default App;




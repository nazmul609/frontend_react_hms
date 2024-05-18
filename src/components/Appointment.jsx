import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function AppointmentBooking() {
  const { doctorId } = useParams();
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [bookingMessage, setBookingMessage] = useState("");
  const userId = localStorage.getItem('userId');

  const handleDateChange = (event) => {
    setAppointmentDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setAppointmentTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const serialNo = Math.floor(Math.random() * 1000); 
    const appointmentData = {
      serialNo,
      patientId: userId,
      doctorId: parseInt(doctorId),
      appointmentStatus: 'pending',
      appointmentDate,
      appointmentTime
    };

    const refreshToken = localStorage.getItem('token');
    fetch('http://localhost:8080/appointment/addAppointment', {
      method: 'POST',
      headers: {
         Authorization: `Bearer ${refreshToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(appointmentData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to book appointment');
      }
      // booking success
      setBookingMessage("Your appointment request has been submitted. It is currently in pending state. Thank you.");
    })
    .catch(error => {
      console.error('Error booking appointment:', error);
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center mt-10">Book Appointment</h1>
      {bookingMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">{bookingMessage}</span>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-4">
          <label htmlFor="appointmentDate" className="mb-2">Appointment Date:</label>
          <input
            type="date"
            id="appointmentDate"
            value={appointmentDate}
            onChange={handleDateChange}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="appointmentTime" className="mb-2">Appointment Time:</label>
          <input
            type="time"
            id="appointmentTime"
            value={appointmentTime}
            onChange={handleTimeChange}
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <button type="submit" className="px-4 py-2 text-white rounded-md bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default AppointmentBooking;

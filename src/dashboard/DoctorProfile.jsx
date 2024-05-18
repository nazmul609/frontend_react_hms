import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-8 px-4 bg-blue-200 mt-20">
      <h1 className="text-4xl font-bold text-blue-800">Doctor's Dashboard</h1>
    </header>
  );
};



const DoctorProfile = () => {
  const [doctorInfo, setDoctorInfo] = useState(null);
  const { doctorId } = useParams(); 
  const d_id = parseInt(doctorId);
  const refreshToken = localStorage.getItem('token');

  useEffect(() => {
    
    fetch(`http://localhost:8080/doctor/getDoctorBydoctorId/${d_id}`, {
      headers: {
        Authorization: `Bearer ${refreshToken}`
      }
    })
    .then(response => response.json())
    .then(data => setDoctorInfo(data))
    .catch(error => console.error('Error fetching doctor details:', error));
  }, []);

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    
    fetch(`http://localhost:8080/appointment/getAppointmentBydoctorId/${d_id}`, {
      headers: {
        Authorization: `Bearer ${refreshToken}`
      }
    })
    .then(response => response.json())
    .then(data => setAppointments(data))
    .catch(error => console.error('Error fetching appointments:', error));
  }, []);

  const getRowColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-200';
      case 'approved':
        return 'bg-green-200';
      case 'canceled':
        return 'bg-red-200';
      default:
        return '';
    }
  };

  return (
    <section className="mt-8  shadow rounded-lg overflow-hidden px-4 py-4">
      <div className=" bg-orange-100 shadow rounded-lg overflow-hidden px-4 py-4">
      {doctorInfo ? (
        <div className="grid grid-cols-1 gap-4 mt-4 ">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Email:</span>
            <span className="text-gray-500">{localStorage.getItem('email')}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Specialization:</span>
            <span className="text-gray-500">{doctorInfo.speciality}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Designation</span>
            <span className="text-gray-500">{doctorInfo.designation}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Contact:</span>
            <span className="text-gray-500">{doctorInfo.contactNo}</span>
          </div>
          <Link to={`/doctor-update/${doctorId}`} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
            Edit Information
          </Link>
        </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Appointments</h2>
        <table className="mt-8 w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Serial No</th>
              <th className="px-4 py-2">Patient ID</th>
              <th className="px-4 py-2">Appointment Date</th>
              <th className="px-4 py-2">Appointment Time</th>
              <th className="px-4 py-2">Appointment Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(appointment => (
              <tr key={appointment.serialNo} className={getRowColor(appointment.appointmentStatus)}>
                <td className="border px-4 py-2">{appointment.serialNo}</td>
                <td className="border px-4 py-2">{appointment.patientId}</td>
                <td className="border px-4 py-2">{appointment.appointmentDate}</td>
                <td className="border px-4 py-2">{appointment.appointmentTime}</td>
                <td className={"border px-4 py-2"}> {appointment.appointmentStatus}</td>
                <td className="border px-4 py-2">
                  <Link to={`/patient-details/${appointment.patientId}`} className="text-blue-500 hover:underline">View Patient</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

const Support = () => {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-yellow-800">Support</h2>
      <div className="mt-4">
        <p className="text-gray-700">
          For any questions or concerns, please contact our support team at:
        </p>
        <a href="mailto:support@example.com" className="text-blue-500 underline">
          support@example.com
        </a>
      </div>
    </section>
  );
};
const DoctorDashboard = () => {


  return (
    <div className="container mx-auto px-4 py-4">
      <Header />
      <DoctorProfile />
      <Support/>
    </div>
  );
};

export default DoctorDashboard;

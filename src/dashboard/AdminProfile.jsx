import React, { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';

const AdminPage = () => {
  // Dummy data for stats
  const totalAppointments = 100;
  const totalDoctors = 50;
  const totalPatients = 400;

  return (
    <div className="container mx-auto px-4 py-4">
      <header className="flex justify-between items-center py-8 px-4 bg-blue-200 mt-20">
        <h1 className="text-4xl font-bold text-blue-800">Admin Panel</h1>
      </header>

      <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-4">
        <StatBox title="Total Appointments" value={totalAppointments} color="bg-green-100" />
        <StatBox title="Total Doctors" value={totalDoctors} color="bg-purple-100" />
        <StatBox title="Total Patients" value={totalPatients} color="bg-red-100" />
      </section>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 ">Manage Appointments</h2>
        <AppointmentTable />
      </div>


      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 ">Manage Doctors</h2>
        <DoctorTable />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 ">Manage Patients</h2>
        <PatientTable />
      </div>
      <div className="mt-8">
        <Support />
      </div>
    </div>
  );
};

const StatBox = ({ title, value, color }) => {
  return (
    <div className={`bg-white shadow rounded-lg overflow-hidden px-4 py-4 ${color}`}>
      <h3 className="text-xl font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
};



const PatientTable = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const refreshToken = localStorage.getItem('token');
      fetch('http://localhost:8080/patient/allPatient',{
        headers: {
          Authorization: `Bearer ${refreshToken}`
        }
      })
      .then(response => response.json())
      .then(data => setPatients(data))
      .catch(error => console.error('Error fetching patient data:', error));
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left">
        <thead>
          <tr className="font-semibold text-gray-700 bg-gray-200 dark:text-gray-400">
            <th className="px-6 py-4">Patient ID</th>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Email</th>
            <th className="px-6 py-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.id} className="text-gray-700 border-b border-gray-200 hover:bg-gray-100">
              <td className="px-6 py-4">{patient.id}</td>
              <td className="px-6 py-4">{patient.firstName}</td>
              <td className="px-6 py-4">{patient.email}</td>
              <td className="px-6 py-4">
                <Link to={`/patient-details/${patient.id}`} className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded mr-2">View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const DoctorTable = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const refreshToken = localStorage.getItem('token');
    fetch('http://localhost:8080/doctor/allDoctors', {
        headers: {
          Authorization: `Bearer ${refreshToken}`
        }
      })
      .then(response => response.json())
      .then(data => setDoctors(data))
      .catch(error => console.error('Error fetching doctor data:', error));
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left">
        <thead>
          <tr className="font-semibold text-gray-700 bg-gray-200 dark:text-gray-400">
            <th className="px-6 py-4">Doctor ID</th>
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Department</th>
            <th className="px-6 py-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map(doctor => (
            <tr key={doctor.id} className="text-gray-700 border-b border-gray-200 hover:bg-gray-100">
              <td className="px-6 py-4">{doctor.id}</td>
              <td className="px-6 py-4">{doctor.firstName}</td>
              <td className="px-6 py-4">{doctor.department}</td>
              <td className="px-6 py-4">
                <Link to={`/doctor-details/${doctor.id}`} className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded mr-2">View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


const AppointmentTable = () => {
  const [appointments, setAppointments] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState({});
  const refreshToken = localStorage.getItem('token');

  useEffect(() => {
    fetch('http://localhost:8080/appointment/allAppointments', {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setAppointments(data))
      .catch((error) => console.error('Error fetching appointments:', error));
  }, []);

  const updateStatus = (appointment, newStatus) => {
    const updatedAppointment = {
      appointmentId: appointment.appointmentId,
      patientId: appointment.patientId,
      doctorId: appointment.doctorId,
      serialNo: appointment.serialNo,
      appointmentStatus: newStatus,
      appointmentDate: appointment.appointmentDate,
      appointmentTime: appointment.appointmentTime,
    };

    fetch(`http://localhost:8080/appointment/updateStatus`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${refreshToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedAppointment),
    })
      .then((response) => {
        if (response.ok) {
          setAppointments((prevAppointments) =>
            prevAppointments.map((appt) =>
              appt.appointmentId === appointment.appointmentId ? { ...appt, appointmentStatus: newStatus } : appt
            )
          );
          setDisabledButtons((prevDisabled) => ({
            ...prevDisabled,
            [appointment.appointmentId]: true,
          }));
        } else {
          console.error('Error updating appointment status:', response.statusText);
        }
      })
      .catch((error) => console.error('Error updating appointment status:', error));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-200';
      case 'booked':
        return 'bg-green-200';
      case 'canceled':
        return 'bg-red-200';
      default:
        return '';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left">
        <thead>
          <tr className="font-semibold text-gray-700 bg-gray-200 dark:text-gray-400">
            <th className="px-6 py-4">Appt. ID</th>
            <th className="px-6 py-4">Doctor ID</th> 
            <th className="px-6 py-4">Patient ID</th>
            <th className="px-6 py-4">Appt. Date</th>
            <th className="px-6 py-4">Appt. Time</th>
            <th className="px-6 py-4">Appt. Status</th>
            <th className="px-6 py-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr
              key={appointment.appointmentId}
              className={`${getStatusColor(appointment.appointmentStatus)} text-gray-700 border-b border-gray-200 hover:bg-gray-100`}
            >
              <td className="px-6 py-4">{appointment.appointmentId}</td>
              <td className="px-6 py-4">{appointment.doctorId}</td>
              <td className="px-6 py-4">{appointment.patientId}</td>
              <td className="px-6 py-4">{appointment.appointmentDate}</td>
              <td className="px-6 py-4">{appointment.appointmentTime}</td>
              <td className="px-6 py-4">{appointment.appointmentStatus}</td>
              <td className="px-6 py-4">
              <button
                className={`bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded mr-2 ${
                  appointment.appointmentStatus !== 'pending' ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={() => updateStatus(appointment, 'booked')}
                disabled={disabledButtons[appointment.appointmentId] || appointment.appointmentStatus !== 'pending'}
              >
                Approve
              </button>
              <button
                className={`bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded mr-2 ${
                  appointment.appointmentStatus !== 'pending' ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={() => updateStatus(appointment, 'canceled')}
                disabled={disabledButtons[appointment.appointmentId] || appointment.appointmentStatus !== 'pending'}
              >
                Cancel
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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

export default AdminPage;

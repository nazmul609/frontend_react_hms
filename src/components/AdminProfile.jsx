import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-8 px-4 bg-gray-100 mt-20">
      <h1 className="text-4xl font-bold text-gray-700">Welcome Admin*</h1>
      <h2 className="text-xl font-semibold text-gray-700">Admin Profile</h2>
    </header>
  );
};

const AdminProfile = () => {
  // Dummy admin data
  const admin = {
    name: 'Admin Name',
    email: 'admin@example.com',
    role: 'Administrator',
  };

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-gray-700 bg-gray-100">Admin Profile</h2>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {/* Display admin profile details */}
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Name:</span>
          <span className="text-gray-500">{admin.name}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Email:</span>
          <span className="text-gray-500">{admin.email}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Role:</span>
          <span className="text-gray-500">{admin.role}</span>
        </div>
      </div>
    </section>
  );
};

const AppointmentDetails = () => {
  // Dummy appointment details
  const appointmentDetails = {
    totalAppointments: 50,
    pendingAppointments: 10,
    completedAppointments: 30,
    cancelledAppointments: 10,
  };

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-gray-700 bg-gray-100">Appointment Details</h2>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {/* Display appointment details */}
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Total Appointments:</span>
          <span className="text-gray-500">{appointmentDetails.totalAppointments}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Pending Appointments:</span>
          <span className="text-gray-500">{appointmentDetails.pendingAppointments}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Completed Appointments:</span>
          <span className="text-gray-500">{appointmentDetails.completedAppointments}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Cancelled Appointments:</span>
          <span className="text-gray-500">{appointmentDetails.cancelledAppointments}</span>
        </div>
      </div>
    </section>
  );
};

const ManageDoctors = () => {
  // Dummy doctor list
  const doctors = [
    { id: 1, name: 'Doctor 1' },
    { id: 2, name: 'Doctor 2' },
    { id: 3, name: 'Doctor 3' },
  ];

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-gray-700 bg-gray-100">Manage Doctors</h2>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {/* Display list of doctors */}
        {doctors.map(doctor => (
          <div key={doctor.id} className="text-blue-500 hover:underline">
            <span>{doctor.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const ManagePatients = () => {
  // Dummy patient list
  const patients = [
    { id: 1, name: 'Patient 1' },
    { id: 2, name: 'Patient 2' },
    { id: 3, name: 'Patient 3' },
  ];

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-gray-700 bg-gray-100">Manage Patients</h2>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {/* Display list of patients */}
        {patients.map(patient => (
          <div key={patient.id} className="text-blue-500 hover:underline">
            <span>{patient.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const ManageAppointments = () => {
  // Dummy appointment list
  const appointments = [
    { id: 1, date: '2024-05-01', time: '10:00 AM', doctor: 'Doctor 1', patient: 'Patient 1' },
    { id: 2, date: '2024-05-02', time: '11:00 AM', doctor: 'Doctor 2', patient: 'Patient 2' },
    { id: 3, date: '2024-05-03', time: '12:00 PM', doctor: 'Doctor 3', patient: 'Patient 3' },
  ];

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-gray-700 bg-gray-100">Manage Appointments</h2>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {/* Display list of appointments */}
        {appointments.map(appointment => (
          <div key={appointment.id}>
            <span>Date: {appointment.date}</span>
            <span>Time: {appointment.time}</span>
            <span>Doctor: {appointment.doctor}</span>
            <span>Patient: {appointment.patient}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const AdminProfilePage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <Header />
      <AdminProfile />
      <AppointmentDetails />
      <ManageDoctors />
      <ManagePatients />
      <ManageAppointments />
    </div>
  );
};

export default AdminProfilePage;

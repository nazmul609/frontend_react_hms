import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-8 px-4 bg-blue-200 mt-20">
      <h1 className="text-4xl font-bold text-blue-800">Doctor's Profile</h1>
      <LogoutButton />
    </header>
  );
};

const DoctorProfile = () => {
  return (
    <section className="mt-8 bg-green-100 shadow rounded-lg overflow-hidden px-4 py-4">
      
      <div className="grid grid-cols-1 gap-4 mt-4">
        {/* Add doctor profile details here */}
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Name:</span>
          <span className="text-gray-500">Dr. John Doe</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Specialization:</span>
          <span className="text-gray-500">Cardiologist</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Location:</span>
          <span className="text-gray-500">City Hospital, New York</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Contact:</span>
          <span className="text-gray-500">(555) 123-4567</span>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Edit Information
        </button>
      </div>
    </section>
  );
};

const AppointmentList = () => {
  const appointments = [
    { id: 1, patientName: 'Patient 1', date: '2024-05-01', time: '10:00 AM', status: 'Pending' },
    { id: 2, patientName: 'Patient 2', date: '2024-05-05', time: '11:00 AM', status: 'Completed' },
    { id: 3, patientName: 'Patient 3', date: '2024-05-15', time: '12:00 PM', status: 'Pending' },
  ];

  return (
    <section className="mt-8 bg-gray-100 shadow rounded-lg overflow-hidden px-4 py-4">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Appointment List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-sm font-semibold text-gray-700 bg-gray-200 dark:text-gray-400">
              <th className="px-4 py-2">Patient Name</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(appointment => (
              <tr key={appointment.id} className="text-gray-700 border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-2">{appointment.patientName}</td>
                <td className="px-4 py-2">{appointment.date}</td>
                <td className="px-4 py-2">{appointment.time}</td>
                <td className="px-4 py-2">{appointment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};



const StatsBox = () => {
  // Dummy data for stats
  const totalPatients = 50;
  const dueAppointments = 10;
  const totalAppointments = 100;

  return (
    <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
      <StatBox title="Total Patients" value={totalPatients} />
      <StatBox title="Due Appointments" value={dueAppointments} />
      <StatBox title="Total Appointments" value={totalAppointments} />
    </section>
  );
};

const StatBox = ({ title, value }) => {
  return (
    <div className=" bg-green-300 shadow rounded-lg overflow-hidden px-4 py-4">
      <h3 className="text-xl font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
};

const LogoutButton = () => {
  const handleLogout = () => {
    // Implement logout functionality
    console.log('Logged out');
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
    >
      Logout
    </button>
  );
};

const DoctorDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <Header />
      <DoctorProfile />
      <StatsBox />
      <AppointmentList />
      
    </div>
  );
};

export default DoctorDashboard;

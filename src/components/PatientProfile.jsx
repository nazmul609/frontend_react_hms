import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-8 px-4 bg-gray-100 mt-20">
      <h1 className="text-4xl font-bold text-gray-700">Hello User*</h1>
      <h2 className="text-xl font-semibold text-gray-700">My Appointments</h2>
    </header>
  );
};

const QuickLinks = () => {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-gray-700">Quick Links</h2>
      <div className="flex gap-4 mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Schedule Appointment
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">
          Message Doctor
        </button>
        
      </div>
    </section>
  );
};

const TableHeader = () => {
  return (
    <tr className="text-xs font-semibold text-gray-700 bg-gray-100 dark:text-gray-400">
      <th className="px-6 py-4 whitespace-nowrap">Apt. No.</th>
      <th className="px-6 py-4 whitespace-nowrap">Apt. Date</th>
      <th className="px-6 py-4 whitespace-nowrap">Apt. Time</th>
      <th className="px-6 py-4 whitespace-nowrap">Status</th>
      <th className="px-6 py-4 whitespace-nowrap">Action</th>
    </tr>
  );
};

const AppointmentRow = ({ appointment }) => {
  const { aptNumber, aptDate, aptTime, status, action } = appointment;
  return (
    <tr className="text-gray-700 border-b border-gray-200 hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap">{aptNumber}</td>
      <td className="px-6 py-4 whitespace-nowrap">{aptDate}</td>
      <td className="px-6 py-4 whitespace-nowrap">{aptTime}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`text-gray-700 px-2 py-1 rounded-full ${
            status === 'Booked' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
          }`}
        >
          {status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <button className="text-indigo-500 hover:text-indigo-700">{action}</button>
      </td>
    </tr>
  );
};

const AppointmentsTable = () => {
  const appointments = [
    { aptNumber: '752195', aptDate: '04 May, 2024', aptTime: '10:00 AM', status: 'Booked', action: 'View' },
    { aptNumber: 'asd5662', aptDate: '29 May, 2024', aptTime: '11:00 AM', status: 'Completed', action: 'View' },
    { aptNumber: 'wer9234', aptDate: '17 May, 2024', aptTime: '7:00 PM', status: 'Cancelled', action: 'View' },
  ];

  return (
    <section className="mt-8 bg-white shadow rounded-lg overflow-x-auto px-4 py-4">
      <table className="min-w-full text-left">
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <AppointmentRow key={appointment.aptNumber} appointment={appointment} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

const MyProfile = () => {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-gray-700 bg-gray-100">My Profile</h2>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {/* Add profile details here */}
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Email:</span>
          <span className="text-gray-500">abc@example.com</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-700">Phone Number:</span>
          <span className="text-gray-500">(555) 555-5555</span>
        </div>
       
      </div>
    </section>
  );
};

const ChangePassword = () => {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-gray-700">Change Password</h2>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {/* Add password change form here */}
        <input
          type="password"
          placeholder="Current Password"
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="New Password"
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Change Password
        </button>
      </div>
    </section>
  );
};

const Support = () => {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-gray-700">Support</h2>
      <div className="mt-4">
        {/* Add support content here */}
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

const Logout = () => {
  return (
    <section className="mt-8 flex justify-end">
      <button className="text-red-500 hover:text-red-700">Log Out</button>
    </section>
  );
};

const AppointmentsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <Header />
      <QuickLinks />
      <AppointmentsTable />
      <MyProfile />
      <ChangePassword />
      <Support />
      <Logout />
    </div>
  );
};

export default AppointmentsPage;
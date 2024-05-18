import React from 'react';

const AdminPage = () => {
  // Dummy data for stats
  const totalAppointments = 500;
  const totalDepartments = 10;
  const totalDoctors = 50;
  const totalPatients = 1000;

  return (
    <div className="container mx-auto px-4 py-4">
      <header className="flex justify-between items-center py-8 px-4 bg-blue-200 mt-20">
        <h1 className="text-4xl font-bold text-blue-800">Admin Panel</h1>
        <LogoutButton />
      </header>

      <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-4">
        <StatBox title="Total Appointments" value={totalAppointments} color="bg-green-100" />
        <StatBox title="Total Departments" value={totalDepartments} color="bg-yellow-100" />
        <StatBox title="Total Doctors" value={totalDoctors} color="bg-purple-100" />
        <StatBox title="Total Patients" value={totalPatients} color="bg-red-100" />
      </section>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Departments</h2>
        <TableViewEdit />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 ">Manage Doctors</h2>
        <TableViewEdit />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 ">Manage Patients</h2>
        <TableViewEdit />
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

const TableViewEdit = () => {
  // Dummy data for table view
  const data = [
    { id: 1, name: 'Department 1', description: 'Description 1' },
    { id: 2, name: 'Department 2', description: 'Description 2' },
    { id: 3, name: 'Department 3', description: 'Description 3' },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="font-semibold text-gray-700 bg-gray-200 dark:text-gray-400">
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Description</th>
            <th className="px-6 py-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id} className="text-gray-700 border-b border-gray-200 hover:bg-gray-100">
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">{item.description}</td>
              <td className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded mr-2">View</button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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

export default AdminPage;

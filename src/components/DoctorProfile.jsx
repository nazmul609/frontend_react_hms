import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center py-8 px-4 bg-gray-100 mt-20">
      <h1 className="text-4xl font-bold text-gray-700">Welcome Doctor*</h1>
      <h2 className="text-xl font-semibold text-gray-700">Doctor's Profile</h2>
    </header>
  );
};

const DoctorProfile = () => {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-gray-700 bg-gray-100">Doctor's Profile</h2>
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
      </div>
    </section>
  );
};

const PatientList = () => {
  // Dummy patient data
  const patients = [
    { id: 1, name: 'Patient 1' },
    { id: 2, name: 'Patient 2' },
    { id: 3, name: 'Patient 3' },
  ];

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-gray-700 bg-gray-100">Patient List</h2>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {/* Render patient list */}
        {patients.map(patient => (
          <div key={patient.id} className="text-blue-500 hover:underline">
            <a href={`/patient/${patient.id}`}>{patient.name}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

const Calendar = () => {
  // Dummy data for events
  const events = [
    { id: 1, title: 'Event 1', date: '2024-05-01' },
    { id: 2, title: 'Event 2', date: '2024-05-05' },
    { id: 3, title: 'Event 3', date: '2024-05-15' },
  ];

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-gray-700 bg-gray-100">Schedule</h2>
      <div className="mt-4">
        {/* Render calendar */}
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 31 }, (_, index) => index + 1).map(day => (
            <div key={day} className="border border-gray-300 px-4 py-2 text-gray-700">
              <span className="font-semibold">{day}</span>
              {events.map(event => {
                const eventDate = new Date(event.date);
                if (eventDate.getDate() === day) {
                  return (
                    <div key={event.id}>
                      <div className="text-sm">{event.title}</div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Diagnostics = () => {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold text-gray-700">Diagnostics</h2>
      <div className="mt-4">
        {/* Add diagnostic content here */}
        <p className="text-gray-700">Doctor's diagnostic information goes here.</p>
      </div>
    </section>
  );
};

const DoctorProfilePage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <Header />
      <DoctorProfile />
      <PatientList />
      <Calendar />
      <Diagnostics />
    </div>
  );
};

export default DoctorProfilePage;

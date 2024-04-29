import React, { useState } from 'react';

// Sample patient data 
const samplePatientData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '123-456-7890',
  appointments: [
    {
      id: 1,
      doctorName: 'Dr. Jane Smith',
      date: '2024-05-01',
      time: '10:00 AM',
      status: 'Upcoming',
    },
    // More appointments...
  ],
  prescriptions: [
    {
      id: 1,
      medication: 'Med A',
      dosage: '1 tablet daily',
      refills: 2,
    },
    // More prescriptions...
  ],
  doctors: [
    { name: 'Dr. Jane Smith', specialty: 'Cardiology' },
    // More doctors...
  ],
};

function PatientDashboard() {
  const [patientData] = useState(samplePatientData);

  // Function to handle editing patient profile
  const handleEditProfile = () => {
    // Logic to handle editing profile
    console.log('Edit profile button clicked');
  };

  // Function to handle viewing appointments
  const handleViewAppointments = () => {
    // Logic to navigate to appointment history or display modal
    console.log('View appointments button clicked');
  };

  // Function to handle canceling an appointment
  const handleCancelAppointment = (appointmentId) => {
    // Logic to cancel appointment
    console.log('Cancel appointment with ID:', appointmentId);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mt-20 mb-6 text-center ">Patient Dashboard</h1>

      {/* Welcome Message */}
      <p className="text-lg mb-4">Welcome, {patientData.name}!</p>

      {/* Patient Profile */}
      <div className="bg-white rounded-md shadow-md p-4 mb-6">
        <h2 className="text-xl font-medium mb-2">Patient Profile</h2>
        <ul className="list-disc space-y-2">
          <li>Name: {patientData.name}</li>
          <li>Email: {patientData.email}</li>
          <li>Phone: {patientData.phone}</li>
        </ul>
        <button
          className="inline-flex items-center px-4 py-2 text-xs font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={handleEditProfile}
        >
          Edit Profile
        </button>
      </div>

      {/* Book Appointment */}
      <button
        className="inline-flex items-center px-4 py-2 text-xs font-medium text-center text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mb-6"
        onClick={() => console.log('Book appointment button clicked')}
      >
        Book Appointment
      </button>

      {/* My Appointments */}
      <div className="bg-white rounded-md shadow-md p-4 mb-6">
        <h2 className="text-xl font-medium mb-2">My Appointments</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="font-semibold">Doctor</div>
          <div className="font-semibold">Date</div>
          <div className="font-semibold">Time</div>
          <div className="font-semibold">Status</div>
          {patientData.appointments.map((appointment) => (
            <React.Fragment key={appointment.id}>
              <div>{appointment.doctorName}</div>
              <div>{appointment.date}</div>
              <div>{appointment.time}</div>
              <div>{appointment.status}</div>
              <div>
                {/* Action button to cancel appointment */}
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md"
                  onClick={() => handleCancelAppointment(appointment.id)}
                >
                  Cancel
                </button>
              </div>
            </React.Fragment>
          ))}
        </div>
        <button
          className="inline-flex items-center px-4 py-2 mt-4 text-xs font-medium text-center text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={handleViewAppointments}
        >
          View Appointments
        </button>
      </div>

      {/* Prescriptions */}
      <div className="bg-white rounded-md shadow-md p-4 mb-6">
        <h2 className="text-xl font-medium mb-2">Prescriptions</h2>
        {patientData.prescriptions.length > 0 ? (
          <ul className="space-y-4">
            {patientData.prescriptions.map((prescription) => (
              <li key={prescription.id} className="border-b border-gray-200 pb-4">
                <p className="font-medium">Medication: {prescription.medication}</p>
                <p>Dosage: {prescription.dosage}</p>
                <p>Refills: {prescription.refills}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No prescriptions found.</p>
        )}
      </div>

      {/* Doctor List */}
      <div className="bg-white rounded-md shadow-md p-4">
        <h2 className="text-xl font-medium mb-2">Doctor List</h2>
        {patientData.doctors.length > 0 ? (
          <ul className="space-y-4">
            {patientData.doctors.map((doctor, index) => (
              <li key={index} className="border-b border-gray-200 pb-4">
                <p className="font-medium">Doctor Name: {doctor.name}</p>
                <p>Specialty: {doctor.specialty}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No doctors found.</p>
        )}
      </div>
    </div>
  );
}

export default PatientDashboard;

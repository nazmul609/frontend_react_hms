import React, { useState } from 'react';

const doctors = [
  { id: 10, name: "Dr. John Smith", specialty: "Cardiology" },
  { id: 21, name: "Dr. Jane Doe", specialty: "Dermatology" },
  { id: 33, name: "Dr. Jo Willock", specialty: "Cardiology" },
];

function AppointmentBooking() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [appointmentTime, setAppointmentTime] = useState("");
  const [patientInfo, setPatientInfo] = useState({
    name: "",
    contactNumber: "",
    notes: ""
  });
  const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);

  const handleDoctorSelect = (doctorId) => {
    setSelectedDoctor(doctors.find((doctor) => doctor.id === parseInt(doctorId)));
  };

  const handleDateChange = (event) => {
    setAppointmentDate(new Date(event.target.value));
  };

  const handleTimeChange = (event) => {
    setAppointmentTime(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPatientInfo((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedDoctor) {
      alert('Please select a doctor.');
      return;
    }

    if (!appointmentDate) {
      alert('Please select an appointment date.');
      return;
    }

    if (!appointmentTime) {
      alert('Please select an appointment time.');
      return;
    }

    const appointmentData = {
      serialNo: 52, 
      patientId: 67,
      doctorId: selectedDoctor.id,
      appointmentStatus: "booked",
      appointmentDate: appointmentDate.toISOString().slice(0, 10),
      appointmentTime: appointmentTime
    };

    try {
      const response = await fetch('http://localhost:8080/appointment/addAppointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(appointmentData)
      });

      if (response.ok) {
        setIsAppointmentBooked(true);

        setSelectedDoctor(null);
        setAppointmentDate(new Date());
        setAppointmentTime("");
        setPatientInfo({
          name: "",
          contactNumber: "",
          notes: ""
        });
      } else {
        console.error('Failed to book appointment');
      }
    } catch (error) {
      console.error('Failed to book appointment:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center mt-10">Book an Appointment</h1>
      {isAppointmentBooked ? (
        <div className="text-center">
          <p className="text-green-600 font-semibold mb-4">Appointment booked successfully!</p>
          {selectedDoctor && (
            <p>
              Appointment booked with Dr. {selectedDoctor.name} on {appointmentDate.toLocaleDateString()} at {appointmentTime}.
            </p>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="doctor" className="block mb-2 text-sm font-medium">
              Select Doctor:
            </label>
            <select
              id="doctor"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={selectedDoctor ? selectedDoctor.id : ""} 
              onChange={(e) => handleDoctorSelect(e.target.value)}
            >
              <option value="">Select a Doctor</option>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name} - {doctor.specialty}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block mb-2 text-sm font-medium">
              Appointment Date:
            </label>
            <input
              id="date"
              type="date"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={appointmentDate.toISOString().slice(0, 10)} 
              onChange={handleDateChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block mb-2 text-sm font-medium">
              Appointment Time:
            </label>
            <input
              id="time"
              type="time"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={appointmentTime}
              onChange={handleTimeChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Your Name:
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={patientInfo.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contactNumber" className="block mb-2 text-sm font-medium">
              Contact Number:
            </label>
            <input
              id="contactNumber"
              type="tel"
              name="contactNumber"
              value={patientInfo.contactNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="notes" className="block mb-2 text-sm font-medium">
              Additional Notes:
            </label>
            <textarea
              id="notes"
              name="notes"
              value={patientInfo.notes}
              onChange={handleInputChange}
              rows="3"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            ></textarea>
          </div>
          <button type="submit" className="block px-4 py-2 text-white rounded-md bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Book Appointment
          </button>
        </form>
      )}
    </div>
  );
}

export default AppointmentBooking;

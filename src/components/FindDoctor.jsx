import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

// const doctors = [
//   { id: 1, firstName: "Dr. John Smith", speciality: "Cardiology", contactNo: "555-555-5555", gender: "Male", img: "https://cdn.pixabay.com/photo/2024/03/25/18/35/ai-generated-8655322_640.png" },
//   { id: 2, firstName: "Dr. Jane Doe", speciality: "Dermatology", contactNo: "555-555-5556", gender: "Female", img: "https://cdn.pixabay.com/photo/2024/04/14/03/21/doctor-8694738_640.jpg" },
//   { id: 3, firstName: "Dr. Jo Willock", speciality: "Cardiology", contactNo: "555-555-5555", gender: "Male", img: "https://cdn.pixabay.com/photo/2024/03/25/18/35/ai-generated-8655322_640.png" },
//   // ... more doctors
// ];

function FindDoctor() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8063/doctor/allDoctors')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setDoctors(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedGender, setSelectedGender] = useState("all");

    const filteredDoctors = doctors.filter((doctor) => {
      return doctor.firstName.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedGender === "all" || doctor.gender === selectedGender);
    });

    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };

    const handleGenderFilterChange = (event) => {
      setSelectedGender(event.target.value);
    };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center mt-10">Find a Doctor</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search Doctors"
          className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select
          className="ml-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={selectedGender}
          onChange={handleGenderFilterChange}
        >
          <option value="all">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> 
        {filteredDoctors.map((doctor) => (
          <div key={doctor.doctorId} className="shadow-md rounded-md overflow-hidden bg-white">
            <img className="w-full h-auto object-cover" src="https://cdn.pixabay.com/photo/2024/03/25/18/35/ai-generated-8655322_640.png" alt="Doctor" /> 
            <div className="p-4">
              <h3 className="text-lg font-medium">{doctor.firstName} {doctor.lastName}</h3>
              <p className="text-gray-600">{doctor.speciality}</p>
              <p className="text-gray-600">Phone: {doctor.contactNo}</p>
            </div>
            
            <Link to="/appointment-booking" className="block px-4 py-2 text-white rounded-b-md bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Book Appointment
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FindDoctor;
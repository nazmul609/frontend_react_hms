import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'; 

// const doctors = [
//   { id: 1, name: "Dr. John Smith", specialty: "Cardiology", phone: "555-555-5555", gender: "Male", img: "https://cdn.pixabay.com/photo/2024/03/25/18/35/ai-generated-8655322_640.png" },
//   { id: 2, name: "Dr. Jane Doe", specialty: "Dermatology", phone: "555-555-5556", gender: "Female", img: "https://cdn.pixabay.com/photo/2024/04/14/03/21/doctor-8694738_640.jpg" },
//   { id: 3, name: "Dr. Jo Willock", specialty: "Cardiology", phone: "555-555-5555", gender: "Male", img: "https://cdn.pixabay.com/photo/2024/03/25/18/35/ai-generated-8655322_640.png" },
//   // ... more doctors
// ];

function FindDoctor() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGender, setSelectedGender] = useState("all");
  const [doctors, setDoctors] = useState([]); 

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await fetch('/doctor/allDoctors'); // API Endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch doctors');
      }
      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };


  const filteredDoctors = doctors.filter((doctor) => {
    return doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
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
      <h1 className="text-3xl font-bold mb-4 text-center mt-20">Find a Doctor</h1>
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
          <div key={doctor.id} className="shadow-md rounded-md overflow-hidden bg-white">
            <img className="w-full h-auto object-cover" src={doctor.img} alt="Doctor" /> 
            <div className="p-4">
              <h3 className="text-lg font-medium">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.specialty}</p>
              <p className="text-gray-600">Phone: {doctor.phone}</p>
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

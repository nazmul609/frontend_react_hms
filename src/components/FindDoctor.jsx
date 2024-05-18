import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

function FindDoctor() {
  const [doctors, setDoctors] = useState([]);
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  useEffect(() => {
    if (isLoggedIn) {
      const refreshToken = localStorage.getItem('token');
      fetch('http://localhost:8080/doctor/allDoctors', {
        headers: {
          Authorization: `Bearer ${refreshToken}`
        }
      })
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
    }
  }, [isLoggedIn]);

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
      {isLoggedIn ? (
        <>
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
              <div key={doctor.id} className="shadow-md rounded-md overflow-hidden bg-white">
                <img className="w-full h-auto object-cover" src="https://cdn.pixabay.com/photo/2024/03/25/18/35/ai-generated-8655322_640.png" alt="Doctor" /> 
                <div className="p-4">
                  <h3 className="text-lg font-medium">{doctor.firstName} {doctor.lastName}</h3>
                  <p className="text-gray-600">Doctor Id: {doctor.id}</p>
                  <p className="text-gray-600">{doctor.speciality}</p>
                  <p className="text-gray-600">Phone: {doctor.contactNo}</p>

                </div>
                
                <div className="flex justify-between items-center px-4 pb-2">
                    <Link to={`/appointment-booking/${doctor.id}`} className="block w-1/2 mr-2 px-4 py-2 text-white rounded-b-md bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Book Appointment
                    </Link>

                    <Link to={`/doctor-details/${doctor.id}`} className="block w-1/2 ml-2 px-4 py-2 text-white rounded-b-md bg-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                      View Details
                    </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Please log in to view this content. 
          <Link to="/login" className="text-indigo-600 hover:underline"> Login here</Link>
        </p>
      )}
    </div>
  );
}

export default FindDoctor;

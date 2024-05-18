import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DoctorDetailsPage = () => {
  const { doctorId } = useParams();
  const parsedDoctorId = parseInt(doctorId); // Parse the doctorId to an integer
 
  const [doctorDetails, setDoctorDetails] = useState(null);

  useEffect(() => {
    // Fetch doctor details using the ID
    const refreshToken = localStorage.getItem('token');
    fetch(`http://localhost:8080/doctor/getDoctorBydoctorId/${parsedDoctorId}`, {
      headers: {
        Authorization: `Bearer ${refreshToken}`
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch doctor details');
      }
      return response.json();
    })
    .then(data => {
      setDoctorDetails(data);
    })
    .catch(error => {
      console.error('Error fetching doctor details:', error);
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-center mt-10">Doctor Details</h2>
      {doctorDetails ? (
        <table className="mx-auto border-collapse border border-gray-500">
          <tbody>
            <tr>
              <td className="font-medium border border-gray-500 px-4 py-2">Doctor ID:</td>
              <td className="border border-gray-500 px-4 py-2">{parsedDoctorId}</td>
            </tr>
            <tr>
              <td className="font-medium border border-gray-500 px-4 py-2">First Name:</td>
              <td className="border border-gray-500 px-4 py-2">{doctorDetails.firstName}</td>
            </tr>
            <tr>
              <td className="font-medium border border-gray-500 px-4 py-2">Last Name:</td>
              <td className="border border-gray-500 px-4 py-2">{doctorDetails.lastName}</td>
            </tr>
            <tr>
              <td className="font-medium border border-gray-500 px-4 py-2">Department:</td>
              <td className="border border-gray-500 px-4 py-2">{doctorDetails.department}</td>
            </tr>
            <tr>
              <td className="font-medium border border-gray-500 px-4 py-2">Speciality:</td>
              <td className="border border-gray-500 px-4 py-2">{doctorDetails.speciality}</td>
            </tr>
            <tr>
              <td className="font-medium border border-gray-500 px-4 py-2">Contact No:</td>
              <td className="border border-gray-500 px-4 py-2">{doctorDetails.contactNo}</td>
            </tr>
            <tr>
              <td className="font-medium border border-gray-500 px-4 py-2">Designation:</td>
              <td className="border border-gray-500 px-4 py-2">{doctorDetails.designation}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Loading doctor details...</p>
      )}
   
    </div>
  );
};

export default DoctorDetailsPage;

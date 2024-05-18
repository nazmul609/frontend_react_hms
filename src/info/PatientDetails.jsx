import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PatientDetailsPage = () => {
  const [patientDetails, setPatientDetails] = useState(null);
  const { patientId } = useParams();
  const parsedpatientId = parseInt(patientId); // Parse the doctorId to an integer

  useEffect(() => {
    // Fetch patient details based on userId
    const refreshToken = localStorage.getItem('token');
    fetch(`http://localhost:8080/patient/patientId/${parsedpatientId}`, {
        headers: {
          Authorization: `Bearer ${refreshToken}`
        }
      })
      .then(response => response.json())
      .then(data => setPatientDetails(data))
      .catch(error => console.error('Error fetching patient details:', error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-center mt-10">Patient Details</h2>
      {patientDetails ? (
        <table className="mx-auto border-collapse border border-gray-500">
          <tbody>
            <tr>
              <td className="font-medium border border-gray-500 px-4 py-2">Email:</td>
              <td className="border border-gray-500 px-4 py-2">{patientDetails.email}</td>
            </tr>
            <tr>
              <td className="font-medium border border-gray-500 px-4 py-2">ID:</td>
              <td className="border border-gray-500 px-4 py-2">{patientDetails.id}</td>
            </tr>
            <tr>
              <td className="font-medium border border-gray-500 px-4 py-2">First Name:</td>
              <td className="border border-gray-500 px-4 py-2">{patientDetails.firstName}</td>
            </tr>
            <tr>
              <td className="font-medium border border-gray-500 px-4 py-2">Last Name:</td>
              <td className="border border-gray-500 px-4 py-2">{patientDetails.lastName}</td>
            </tr>
            <tr>
              <td className="font-medium border border-gray-500 px-4 py-2">Contact No 1:</td>
              <td className="border border-gray-500 px-4 py-2">{patientDetails.contactNo1}</td>
            </tr>
            <tr>
              <td className="font-medium border border-gray-500 px-4 py-2">Contact No 2:</td>
              <td className="border border-gray-500 px-4 py-2">{patientDetails.contactNo2}</td>
            </tr>
            <tr>
              <td className="font-medium border border-gray-500 px-4 py-2">Address:</td>
              <td className="border border-gray-500 px-4 py-2">{patientDetails.address}</td>
            </tr>
          </tbody>
        </table>

      ) : (
        <p>Loading patient details...</p>
      )}

    </div>
  );
};

export default PatientDetailsPage;

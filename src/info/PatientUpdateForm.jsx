import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UpdatePatientInfoPage = () => {
  const [formData, setFormData] = useState({
    id:'',
    email:'',
    firstName: '',
    lastName: '',
    contactNo1: '',
    contactNo2: '',
    address: '',
  });
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const refreshToken = localStorage.getItem('token');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/patient/updateProfile', {
        method: 'PUT',
        headers: {
           Authorization: `Bearer ${refreshToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setUpdateSuccess(true);
      } else {
        console.error('Error updating patient information:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating patient information:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-center mt-10">Update Patient Information</h2>
      {updateSuccess && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
          <p className="font-bold">Update Successful</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="id" className="block mb-2 text-sm font-medium">ID</label>
            <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="firstName" className="block mb-2 text-sm font-medium">First Name</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-2 text-sm font-medium">Last Name</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="contactNo1" className="block mb-2 text-sm font-medium">Contact No 1</label>
            <input type="text" id="contactNo1" name="contactNo1" value={formData.contactNo1} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="contactNo2" className="block mb-2 text-sm font-medium">Contact No 2</label>
            <input type="text" id="contactNo2" name="contactNo2" value={formData.contactNo2} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="address" className="block mb-2 text-sm font-medium">Address</label>
            <textarea id="address" name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"></textarea>
          </div>
        </div>
        <button type="submit" className="mt-6 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-full">Update</button>
      </form>

      <Link to={`/patient-details/${localStorage.getItem('userId')}`} className="block mt-4 text-blue-500 hover:underline text-center">View Patient Details</Link>
    </div>
  );
};

export default UpdatePatientInfoPage;

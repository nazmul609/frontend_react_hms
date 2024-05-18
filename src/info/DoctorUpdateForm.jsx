import React, { useState } from 'react';


const UpdateDoctorInfoPage = () => {
  const [formData, setFormData] = useState({
    id:'',
    email:'',
    firstName: '',
    lastName: '',
    department: '',
    speciality: '',
    contactNo: '',
    designation: '',
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
      const response = await fetch('http://localhost:8080/doctor/updateProfile', {
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
        console.error('Error updating doctor information:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating doctor information:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-center mt-10">Update Doctor Information</h2>
      {updateSuccess && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
          <p className="font-bold">Update Successful</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        {/* Basic Information */}
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="firstName" className="block mb-2 text-sm font-medium">First Name</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-2 text-sm font-medium">Last Name</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="department" className="block mb-2 text-sm font-medium">Department</label>
            <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="speciality" className="block mb-2 text-sm font-medium">Speciality</label>
            <input type="text" id="speciality" name="speciality" value={formData.speciality} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="contactNo" className="block mb-2 text-sm font-medium">Contact No</label>
            <input type="text" id="contactNo" name="contactNo" value={formData.contactNo} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="designation" className="block mb-2 text-sm font-medium">Designation</label>
            <input type="text" id="designation" name="designation" value={formData.designation} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label htmlFor="id" className="block mb-2 text-sm font-medium">ID</label>
            <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
        </div>
        <button type="submit" className="mt-6 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-full">Update</button>
      </form>


    </div>
  );
};

export default UpdateDoctorInfoPage;

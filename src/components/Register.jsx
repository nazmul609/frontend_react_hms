import React, { useState } from 'react';
import AuthLayout from './AuthLayout';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('patient');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const [showPasswordMessage, setShowPasswordMessage] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [isRegisterDisabled, setIsRegisterDisabled] = useState(true);

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setShowPasswordMessage(!passwordRegex.test(value));
    setIsPasswordMatch(value === confirmPassword);
    setIsRegisterDisabled(!(email && value && confirmPassword && passwordRegex.test(value) && role));
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setIsRegisterDisabled(!(value && password && confirmPassword && passwordRegex.test(password) && role));
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
    setIsPasswordMatch(password === value);
    setIsRegisterDisabled(!(email && password && value && passwordRegex.test(password) && role));
  };

  const handleUserTypeChange = (event) => {
    const value = event.target.value;
    setRole(value);
    setIsRegisterDisabled(!(email && password && confirmPassword && passwordRegex.test(password) && value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if password matches confirm password
    if (password !== confirmPassword) {
      setIsPasswordMatch(false);
      return;
    }

    // Prepare request body
    const requestBody = {
      email: email,
      password: password,
      role: role
    };

    try {
      // Send POST request to backend 
      const response = await fetch('http://localhost:8080/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        // Handle error responses
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }

      setRegistrationSuccess(true);
    } catch (error) {
      console.error('Registration error:', error.message);
      alert('Registration failed. Please try again later.');
    }
  };

  return (
    <AuthLayout>
      {registrationSuccess ? (
        <div>
          <h1 className="text-3xl font-bold mb-6">Welcome!</h1>
          <p>You have successfully registered. Please <Link to="/login" className="text-indigo-600 hover:underline">login here</Link>.</p>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-6">Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {showPasswordMessage && (
                <p className="text-sm text-gray-500 mt-1">Password must be at least 8 characters long and contain at least one letter and one number.</p>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="confirm-password" className="block text-sm font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${!isPasswordMatch && 'border-red-500'}`}
              />
              {!isPasswordMatch && (
                <p className="text-sm text-red-500 mt-1">Passwords do not match.</p>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="user-type" className="block text-sm font-medium mb-2">
                User Type
              </label>
              <select
                id="user-type"
                value={role}
                onChange={handleUserTypeChange}
                className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button type="submit" disabled={isRegisterDisabled} className={`w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${isRegisterDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}`}>
              Register
            </button>
          </form>
          <div className="mt-4">
            <p>Already registered? <Link to="/login" className="text-indigo-600 hover:underline">Login here</Link>.</p>
          </div>
        </div>
      )}
    </AuthLayout>
  );
}

export default Register;

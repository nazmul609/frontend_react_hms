import React, { useState } from 'react';
import AuthLayout from './AuthLayout';




const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('patient');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login form submission (replace with API call)
    alert(`Login submitted as ${userType}`);
  };

  return (
    <AuthLayout> 
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
            onChange={(event) => setPassword(event.target.value)}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="user-type" className="block text-sm font-medium mb-2">
            User Type
          </label>
          <select
            id="user-type"
            value={userType}
            onChange={(event) => setUserType(event.target.value)}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input type="checkbox" id="remember-me" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 sm:text-sm" />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              Remember Me
            </label>
          </div>
          <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Forgot Password?
          </a>
        </div>
        <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Sign In
        </button>
      </form>
    </AuthLayout>
  );
}

export default Login;

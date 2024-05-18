import React, { useState } from 'react';
import AuthLayout from './AuthLayout';
import { Link } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('patient');
  const [error, setError] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(false);
  // const history = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestBody = {
      email: email,
      password: password
    };

    try {
      const response = await fetch('http://localhost:8080/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Login failed');
      }

      // Decode token to get userId  
      const decodedToken = jwtDecode(responseData.refreshToken);
      const id = decodedToken.userId;

      // Set login success and redirect only if response is OK
      localStorage.setItem('token', responseData.refreshToken);
      localStorage.setItem('email', email);
      localStorage.setItem('userId', id); 
      localStorage.setItem('role', role); 
      localStorage.setItem('isLoggedIn', true);

      
      setLoginSuccess(true);


    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <AuthLayout>
      {loginSuccess ? (
        <div>
          <h1 className="text-3xl font-bold mb-6">Login Successful</h1>
          <p>Welcome back, {role}!</p>
          <div className="mt-4">
            <Link to="/" className='text-indigo-600 hover:underline'>Go to Home</Link>
            {role === 'patient' && <Link to={`/patient/${localStorage.getItem('userId')}`} className="ml-4 text-indigo-600 hover:underline">Go to Patient Dashboard</Link>}
        {role === 'doctor' && <Link to={`/doctor/${localStorage.getItem('userId')}`} className="ml-4 text-indigo-600 hover:underline">Go to Doctor Dashboard</Link>}
        {role === 'admin' && <Link to={`/admin/${localStorage.getItem('userId')}`} className="ml-4 text-indigo-600 hover:underline">Go to Admin Dashboard</Link>}

          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold mb-6">Login</h1>
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="role" className="block text-sm font-medium mb-2">
                Role
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Login
            </button>
          </form>
          <div className="mt-4">
            <p>Don't have an account? <Link to="/register" className="text-indigo-600 hover:underline">Register here</Link>.</p>
          </div>
        </div>
      )}
    </AuthLayout>
  );
}

export default Login;

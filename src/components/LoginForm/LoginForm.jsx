import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const navigate = useNavigate(); // Use useNavigate from react-router-dom

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);

      // Redirect to the About page after successful login
      navigate('/about');
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="form-container bg-gray-800 p-8 rounded-md shadow-md">
        <form autoComplete="off" onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label className="text-white">Email</label>
          <input
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
            className="p-2 border border-gray-500 rounded-md"
          />
          <label className="text-white">Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
            className="p-2 border border-gray-500 rounded-md"
          />
          <button type="submit" className="bg-teal-500 text-white p-2 rounded-md hover:bg-blue-600">
            LOG IN
          </button>
        </form>
      </div>
      <p className="error-message text-red-500">&nbsp;{error}</p>
    </div>
  );
}

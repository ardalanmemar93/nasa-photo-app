import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../utilities/users-service';

export default function SignUpForm({ setUser }) {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  });

  const handleChange = (evt) => {
    setState({
      ...state,
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { name, email, password } = state;
      const formData = { name, email, password };
      const user = await signUp(formData);
      setUser(user);
      navigate('/about');
    } catch {
      setState({ ...state, error: 'Sign Up Failed - Try Again' });
    }
  };

  const disable = state.password !== state.confirm;

  return (
    <div className="flex items-center justify-center">
      <div className="form-container bg-gray-800 p-8 rounded-md shadow-md">
        <form autoComplete="off" onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label className="text-white">Name</label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            required
            className="p-2 border border-gray-500 rounded-md"
          />
          <label className="text-white">Email</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            required
            className="p-2 border border-gray-500 rounded-md"
          />
          <label className="text-white">Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            required
            className="p-2 border border-gray-500 rounded-md"
          />
          <label className="text-white">Confirm</label>
          <input
            type="password"
            name="confirm"
            value={state.confirm}
            onChange={handleChange}
            required
            className="p-2 border border-gray-500 rounded-md"
          />
          <button
            type="submit"
            disabled={disable}
            className={`bg-teal-500 text-white p-2 rounded-md ${disable ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
          >
            SIGN UP
          </button>
        </form>
      </div>
      <p className="error-message text-red-500">&nbsp;{state.error}</p>
    </div>
  );
}

import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="text-center">
        {showSignUp ? (
          <>
            <SignUpForm setUser={setUser} />
            <button
              onClick={() => setShowSignUp(!showSignUp)}
              className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ls-button mt-2"
            >
              Log In
            </button>
          </>
        ) : (
          <>
            <LoginForm setUser={setUser} />
            <button
              onClick={() => setShowSignUp(!showSignUp)}
              className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 ls-button mt-2"
            >
              Sign Up
            </button>
          </>
        )}
      </div>
    </main>
  );  
}
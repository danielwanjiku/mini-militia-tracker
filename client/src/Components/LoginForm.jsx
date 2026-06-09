// Login form component used on the sign-in page.
import React from "react";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
  // Store what the user types in the email and password fields.
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Track login errors and whether the request is still running.
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  // Run when the user presses the login button.
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(''); // Clear old error messages before trying again.

    try {
      const response = await fetch('https://charity-minds-backend.onrender.com/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // SUCCESS: backend verified the user and attached the cookie
        console.log('Login successful:', data.message);
        
        // Fix: Added a leading slash to ensure it navigates from the root route
        navigate('/dashboard'); 
      } else {
        // FAILURE: backend found invalid credentials or schema mismatch
        setError(data.message || 'Incorrect credentials');
      }
    } catch (err) {
      // NETWORK/SERVER DOWN: Failed to fetch completely
      setError('Server is currently unreachable. Please try again later.');
      console.error('Network error during login:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/60 p-8">
      <h1 className="text-3xl font-semibold text-emerald-900 text-center mb-6">Login</h1>

      {/* Dynamic Error Alert Box */}
      {error && (
        <div className="mb-4 rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-600 font-medium text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="login-email" className="block text-sm font-medium text-slate-700 mb-2">
            Email
          </label>
          <input
            id="login-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
            placeholder="Email"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 disabled:opacity-60"
          />
        </div>

        <div>
          <label htmlFor="login-password" className="block text-sm font-medium text-slate-700 mb-2">
            Password
          </label>
          <input
            id="login-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
            placeholder="Password"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 disabled:opacity-60"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-500/20 transition hover:bg-emerald-800 disabled:bg-slate-400 disabled:shadow-none"
        >
          {loading ? 'SIGNING IN...' : 'SIGN IN'}
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-slate-600 space-y-3">
        <p>
          Don&apos;t have an account?
          <Link to="/signup" className="ml-1 text-emerald-700 font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
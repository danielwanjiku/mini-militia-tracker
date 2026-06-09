// Page wrapper for the login screen.
import { useState } from 'react';
import LoginForm from '../Components/LoginForm';

export default function Login() {
  // This page only wraps the login form in the middle of the screen.

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-300 via-teal-300 to-cyan-400 flex items-center justify-center px-4 py-8">
      <LoginForm />
    </div>
  );
}

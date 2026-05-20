import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignUpForm from '../Components/SignUpForm';

export default function SignUp() {
 

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-200 via-teal-200 to-cyan-300 flex items-center justify-center px-4 py-10">
     <SignUpForm />
    </div>
  );
}

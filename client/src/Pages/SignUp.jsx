import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
  
    navigate('/dashboard');
  };

 

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-200 via-teal-200 to-cyan-300 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl rounded-4xl bg-white border border-slate-300/80 shadow-2xl shadow-slate-700/20 p-8 sm:p-10">
        <h1 className="text-3xl font-semibold text-emerald-900 text-center mb-8">Sign up</h1>

        <form onSubmit={handleSignUp} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-slate-700">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 pr-12 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-800"
          >
            Sign up
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-500">Or register with</p>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <button className="rounded-2xl border border-slate-200 bg-white p-3 text-slate-600 transition hover:border-emerald-300 hover:text-emerald-700">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>
          <button className="rounded-2xl border border-slate-200 bg-white p-3 text-slate-600 transition hover:border-emerald-300 hover:text-emerald-700">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.70 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.70 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.30-4.53 6.16-4.53z" />
            </svg>
          </button>
          <button className="rounded-2xl border border-slate-200 bg-white p-3 text-slate-600 transition hover:border-emerald-300 hover:text-emerald-700">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 13.5c-.91 2.18-.39 4.49 1.60 5.64 1.29.78 3.02.78 4.31 0 2-1.15 2.51-3.46 1.60-5.64C23.10 11.90 21.10 11 19 11s-4.10.90-4.95 2.50z" />
              <path d="M2 2h12v16H2z" opacity="0.3" />
            </svg>
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{' '}
          <Link to="/login" className="text-emerald-700 font-semibold hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

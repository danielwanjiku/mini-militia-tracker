import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login submitted:', { email, password });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-300 via-teal-300 to-cyan-400 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/60 p-8">
        <h1 className="text-3xl font-semibold text-emerald-900 text-center mb-6">Login</h1>

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
              placeholder="Email"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
          </div>

          <div>
            <label htmlFor="login-password" className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>
            <input
              id="login-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-700">
            <input
              id="show-password"
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword((value) => !value)}
              className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
            />
            <label htmlFor="show-password">Show Password</label>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-500/20 transition hover:bg-emerald-800"
          >
            SIGN IN
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-600 space-y-3">
          <p>
            Forgot <Link to="#" className="text-emerald-700 hover:underline">Username / Password?</Link>
          </p>
          <p>
            Don&apos;t have an account?
            <Link to="/signup" className="ml-1 text-emerald-700 font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

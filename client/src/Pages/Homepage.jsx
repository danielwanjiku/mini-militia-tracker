// Landing page shown before users log in or sign up.
import { Link } from 'react-router-dom';

export default function Homepage() {
  // This is the landing page shown before the user logs in.
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-cyan-950 to-emerald-900 text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-emerald-200/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200">
            Mini Militia Tracker
          </span>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Track your games, squads, and progress in one place.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-200/85">
            Securely log in or sign up to manage your Mini Militia sessions, review match stats, and jump back into the battlefield with confidence.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="/login"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-emerald-500 px-6 py-3 text-base font-semibold text-slate-950 transition hover:bg-emerald-400 sm:w-auto"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/20 sm:w-auto"
            >
              Sign up
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

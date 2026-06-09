// Dashboard screen with overview and user-management sections.
import { useState } from 'react';
import UserList from '../Components/user';

export default function Dashboard() {
  // Keep track of which dashboard section is open.
  const [activeTab, setActiveTab] = useState('overview');

  // These are the top menu buttons shown on the dashboard.
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'users', label: 'Users' },
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#020617_0%,#0f172a_45%,#134e4a_100%)] text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col gap-6 px-4 py-6 lg:px-6">
        <main className="flex-1 space-y-6">
          <header className="rounded-3xl border border-white/10 bg-white/8 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-emerald-200">Welcome back</p>
                <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Your battlefield overview</h1>
                <p className="mt-3 max-w-2xl text-slate-200/90">This dashboard is ready for your live data, with the player/user panel left untouched for your backend integration.</p>
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-400/20"
              >
                + New Match
              </button>
            </div>

            <nav className="mt-6 flex flex-wrap gap-3">
              {tabs.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  className={`rounded-2xl border px-4 py-2 text-sm font-semibold transition ${
                    activeTab === item.id
                      ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-100'
                      : 'border-white/10 bg-slate-950/70 text-slate-200 hover:border-white/20 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </header>

          <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            {activeTab === 'users' ? (
              <div className="xl:col-span-2">
                <UserList />
              </div>
            ) : (
              <div className="space-y-6">

              </div>
            )}

            <aside className="space-y-6" />
          </section>
        </main>
      </div>
    </div>
  );
}

export { Dashboard };

import { useState } from 'react';
import React from 'react';
import Login from './Login';  





export function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <header className="mb-10 flex flex-col gap-6 rounded-4xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-emerald-300/80">Dashboard</p>
            <h1 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">Welcome back,</h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
              Review your latest Mini Militia sessions, squad performance, and upcoming challenges from one clean control center.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:w-auto">
            <button className="rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
              New Match
            </button>
            <button className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/40 hover:bg-white/10">
              Sync Stats
            </button>
          </div>
        </header>

        <section className="grid gap-6 xl:grid-cols-[1.75fr_1fr]">
          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-2">
              <article className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10">
                <p className="text-sm font-medium text-slate-400">Total Matches</p>
                <p className="mt-4 text-4xl font-semibold text-white">128</p>
                <p className="mt-2 text-sm text-slate-400">Matches tracked this season.</p>
              </article>
              <article className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10">
                <p className="text-sm font-medium text-slate-400">Win Rate</p>
                <p className="mt-4 text-4xl font-semibold text-white">72%</p>
                <p className="mt-2 text-sm text-slate-400">Your squad is on a strong streak.</p>
              </article>
            </div>

            <div className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-400">Latest Match</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Victory Royale</h2>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-semibold text-emerald-200">
                  +18 XP
                </span>
              </div>

              <div className="mt-6 space-y-4 text-sm text-slate-300">
                <div className="flex items-center justify-between rounded-3xl bg-white/5 px-4 py-4">
                  <span>Damage dealt</span>
                  <strong className="text-white">3.2K</strong>
                </div>
                <div className="flex items-center justify-between rounded-3xl bg-white/5 px-4 py-4">
                  <span>Objectives completed</span>
                  <strong className="text-white">7</strong>
                </div>
                <div className="flex items-center justify-between rounded-3xl bg-white/5 px-4 py-4">
                  <span>Squad rating</span>
                  <strong className="text-white">A+</strong>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10">
              <h2 className="text-lg font-semibold text-white">Quick Overview</h2>
              <ul className="mt-5 space-y-4 text-sm text-slate-300">
                <li className="flex items-center justify-between rounded-3xl bg-white/5 px-4 py-4">
                  <span>Current streak</span>
                  <strong className="text-white">8 wins</strong>
                </li>
                <li className="flex items-center justify-between rounded-3xl bg-white/5 px-4 py-4">
                  <span>Top weapon</span>
                  <strong className="text-white">M16</strong>
                </li>
                <li className="flex items-center justify-between rounded-3xl bg-white/5 px-4 py-4">
                  <span>Team readiness</span>
                  <strong className="text-white">92%</strong>
                </li>
              </ul>
            </div>

            <div className="rounded-4xl border border-white/10 bg-emerald-500/10 p-6 shadow-xl shadow-black/10">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-emerald-200">Mission</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Gear up for the next battle</h3>
              <p className="mt-4 text-sm leading-6 text-slate-200">
                Check your squad, prepare the loadout, and secure your next win with a focused match plan.
              </p>
              <button className="mt-6 inline-flex items-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
                View Squad Setup
              </button>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

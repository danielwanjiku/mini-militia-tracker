// User list panel that fetches backend users and supports month filtering.
import { useEffect, useMemo, useState } from 'react';

const getMonthLabel = (value) => {
  if (!value || value === '—') return '';

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return '';
  }

  return date.toLocaleString('en-US', { month: 'long' });
};

export default function UserList() {
  // Store the users we get from the API.
  const [users, setUsers] = useState([]);
  // Show a loading message while the data is being fetched.
  const [loading, setLoading] = useState(true);
  // Save any error message if the request fails.
  const [error, setError] = useState('');
  // Keep track of the selected month filter.
  const [selectedMonth, setSelectedMonth] = useState('');

  // Run this once when the page loads.
  useEffect(() => {
    let isMounted = true;

    // Fetch the list of users from the backend API.
    async function loadUsers() {
      try {
        const response = await fetch('https://charity-minds-backend.onrender.com/api/v1/users');
        const data = await response.json();

        // If the server returns an error, stop here and show the message.
        if (!response.ok) {
          throw new Error(data?.message || 'Unable to load users.');
        }

        // Some APIs return the users in different shapes, so support a few common formats.
        const list = Array.isArray(data)
          ? data
          : data.users || data.data || data.result || [];

        if (isMounted) {
          setUsers(list);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Something went wrong while fetching users.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadUsers();

    // Clean up when this component is removed from the page.
    return () => {
      isMounted = false;
    };
  }, []);

  const monthOptions = useMemo(() => {
    const months = users
      .map((user) => getMonthLabel(user.createdAt || user.created_at || user.created))
      .filter(Boolean);

    return Array.from(new Set(months)).sort((a, b) => {
      const monthOrder = {
        january: 0,
        february: 1,
        march: 2,
        april: 3,
        may: 4,
        june: 5,
        july: 6,
        august: 7,
        september: 8,
        october: 9,
        november: 10,
        december: 11,
      };

      return monthOrder[a] - monthOrder[b];
    });
  }, [users]);

  const filteredUsers = useMemo(() => {
    if (!selectedMonth) {
      return users;
    }

    return users.filter((user) => {
      const createdAt = user.createdAt || user.created_at || user.created;
      return getMonthLabel(createdAt) === selectedMonth;
    });
  }, [selectedMonth, users]);

  // Show the user list UI.
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4 text-white shadow-2xl shadow-black/20">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-200">User list</p>
          <h2 className="mt-1 text-xl font-semibold">Backend users</h2>
        </div>
        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-100">Live</span>
      </div>

      <div className="mb-4 flex flex-wrap items-end justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-slate-300">Total users</p>
          <p className="mt-2 text-3xl font-semibold text-white">{loading ? '—' : filteredUsers.length}</p>
        </div>

        <label className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-slate-100 shadow-inner shadow-black/20">
          <select
            value={selectedMonth}
            onChange={(event) => setSelectedMonth(event.target.value)}
            className="rounded-xl bg-slate-900 px-3 py-2 text-sm text-white outline-none ring-1 ring-white/10"
            aria-label="Filter users by month"
          >
            <option value="">All months</option>
            {monthOptions.map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </label>
      </div>

      {loading && <p className="text-sm text-slate-300">Loading users…</p>}
      {error && !loading && <p className="text-sm text-red-200">{error}</p>}

      {!loading && !error && filteredUsers.length === 0 && (
        <p className="text-sm text-slate-300">No users found for the selected month.</p>
      )}

      {!loading && !error && filteredUsers.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-300">
                <th className="px-3 py-2 font-semibold">First Name</th>
                <th className="px-3 py-2 font-semibold">Last Name</th>
                <th className="px-3 py-2 font-semibold">Email</th>
                <th className="px-3 py-2 font-semibold">Dob</th>
                <th className="px-3 py-2 font-semibold">Username</th>
                <th className="px-3 py-2 font-semibold">Gender</th>
                <th className="px-3 py-2 font-semibold">Created At</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => {
                // Make the data easy to read, even if the API uses different field names.
                const firstName = user.firstName || user.firstname || user.name?.split(' ')[0] || '—';
                const lastName = user.lastName || user.lastname || user.name?.split(' ').slice(1).join(' ') || '—';
                const email = user.email || user.mail || '—';
                const dob = user.dob || user.dateOfBirth || user.birthDate || '—';
                const username = user.username || '—';
                const gender = user.gender || '—';
                const createdAt = user.createdAt || user.created_at || user.created || '—';

                return (
                  <tr key={user._id || user.id || `${firstName}-${lastName}-${index}`} className="border-b border-white/5 text-slate-100 last:border-b-0 hover:bg-white/5">
                    <td className="px-3 py-3">{firstName}</td>
                    <td className="px-3 py-3">{lastName}</td>
                    <td className="px-3 py-3">{email}</td>
                    <td className="px-3 py-3">{dob}</td>
                    <td className="px-3 py-3">{username}</td>
                    <td className="px-3 py-3">{gender}</td>
                    <td className="px-3 py-3">{createdAt}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// Main app router that maps each page to its URL.
import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;


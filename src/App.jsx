import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ApiPractice from './pages/ApiPractice';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-4">
      <nav className="flex gap-4 mb-6">
        <Link to="/" className="underline">Home</Link>
        <Link to="/api-practice" className="underline">API Practice</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api-practice" element={<ApiPractice />} />
      </Routes>
    </div>
  );
}

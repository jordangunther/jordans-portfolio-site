import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-4">
      <nav className="flex gap-4 mb-6">
        <Link to="/" className="underline">Home</Link>
        <Link to="/projects" className="underline">Projects</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

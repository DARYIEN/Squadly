// components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-white border-b shadow-sm p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">Squadly</Link>
      <div className="space-x-4">
        <Link to="/app" className={`hover:text-blue-600 ${pathname === '/app' ? 'text-blue-600 font-semibold' : ''}`}>Ивенты</Link>
        <Link to="/search" className={`hover:text-blue-600 ${pathname === '/search' ? 'text-blue-600 font-semibold' : ''}`}>Поиск</Link>
        <Link to="/profile" className={`hover:text-blue-600 ${pathname === '/profile' ? 'text-blue-600 font-semibold' : ''}`}>Профиль</Link>
      </div>
    </nav>
  );
}
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const link = (path: string, label: string) => (
    <Link
      to={path}
      className={`px-3 py-1 ${
        location.pathname === path
          ? "text-white border-b-2 border-white"
          : "text-gray-400 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-800">

      <h1 className="font-bold text-lg">Abhishek</h1>

      <div className="flex gap-6">
        {link("/", "Home")}
        {link("/projects", "Projects")}
        {link("/resume", "Resume")}
      </div>

    </nav>
  );
}
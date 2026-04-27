import { NavLink } from "react-router-dom";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-800">

        <h1 className="text-lg font-bold">Abhishek</h1>

        <div className="flex gap-6 text-sm">

          <NavLink 
            to="/" 
            className={({ isActive }) =>
              isActive
                ? "text-white border-b border-white pb-1"
                : "text-gray-400 hover:text-white"
            }
          >
            Home
          </NavLink>

          <NavLink 
            to="/projects" 
            className={({ isActive }) =>
              isActive
                ? "text-white border-b border-white pb-1"
                : "text-gray-400 hover:text-white"
            }
          >
            Projects
          </NavLink>

          <NavLink 
            to="/resume" 
            className={({ isActive }) =>
              isActive
                ? "text-white border-b border-white pb-1"
                : "text-gray-400 hover:text-white"
            }
          >
            Resume
          </NavLink>

        </div>

      </nav>

      {/* PAGE CONTENT */}
      <div className="px-8 py-10">
        {children}
      </div>

      {/* FOOTER */}
      <div className="text-center text-gray-500 text-sm py-6 border-t border-gray-800 mt-10">
        © 2026 Abhishek M T • Built with React & Tailwind
      </div>

    </div>
  );
}
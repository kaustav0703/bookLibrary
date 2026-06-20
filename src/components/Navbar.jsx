import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo / Brand Name */}
          <div className="flex items-center gap-2">
            <span className="text-xl">📚</span>
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-xl font-bold tracking-tight text-transparent">
              Bookworm
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-1 sm:gap-2">
            <NavLink 
              to='/' 
              className={({ isActive }) => `rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isActive 
                  ? "bg-indigo-50 text-indigo-600" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              Home
            </NavLink>
            
            <NavLink 
              to='/browse-books' 
              className={({ isActive }) => `rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isActive 
                  ? "bg-indigo-50 text-indigo-600" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              Browse Books
            </NavLink>
            
            <NavLink 
              to='/add-book' 
              className={({ isActive }) => `rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isActive 
                  ? "bg-indigo-50 text-indigo-600" 
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              Add Book
            </NavLink>
          </div>

        </div>
      </div>
    </nav>
  );
}

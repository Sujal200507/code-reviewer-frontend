import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-400' : 'text-gray-200';
  };

  return (
    <header className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <div className="bg-blue-600 text-white rounded-lg p-2 font-bold text-lg">
            AI
          </div>
          <span className="text-white font-bold text-xl">Code Reviewer</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link 
            to="/" 
            className={`flex items-center gap-1 hover:text-blue-400 transition ${isActive('/')}`}
          >
            🏠 Home
          </Link>

          {/* Features Dropdown */}
          <div className="relative group">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center gap-1 hover:text-blue-400 transition ${isActive('/features')} cursor-pointer`}
            >
              ✨ Features
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-0 w-48 bg-slate-900 border border-slate-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
              <Link 
                to="/features" 
                className="block px-4 py-2 text-gray-200 hover:text-blue-400 hover:bg-slate-800 transition"
              >
                All Features
              </Link>
              <Link 
                to="/features" 
                className="block px-4 py-2 text-gray-200 hover:text-blue-400 hover:bg-slate-800 transition"
              >
                Documentation
              </Link>
              <Link 
                to="/features" 
                className="block px-4 py-2 text-gray-200 hover:text-blue-400 hover:bg-slate-800 transition"
              >
                Code Review
              </Link>
            </div>
          </div>

          <Link 
            to="/about" 
            className={`flex items-center gap-1 hover:text-blue-400 transition ${isActive('/about')}`}
          >
            ℹ️ About
          </Link>

          <Link 
            to="/documentation" 
            className={`flex items-center gap-1 hover:text-blue-400 transition ${isActive('/documentation')}`}
          >
            📚 Docs
          </Link>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          <Link 
            to="/review" 
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition font-semibold flex items-center gap-2"
          >
            💻 Review Code
          </Link>
          
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-blue-400 transition"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

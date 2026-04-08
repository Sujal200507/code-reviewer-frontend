import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-400' : 'text-gray-200';
  };

  return (
    <header className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <div className="bg-blue-600 text-white rounded-lg p-2 font-bold text-lg">AI</div>
          <span className="text-white font-bold text-xl">Code Reviewer</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={`flex items-center gap-1 transition ${isActive('/')}`}>
            🏠 Home
          </Link>

          <Link to="/features" className={`flex items-center gap-1 transition ${isActive('/features')}`}>
            ✨ Features
          </Link>

          <Link to="/about" className={`flex items-center gap-1 transition ${isActive('/about')}`}>
            ℹ️ About
          </Link>

          <Link to="/documentation" className={`flex items-center gap-1 transition ${isActive('/documentation')}`}>
            📚 Docs
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/review" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition font-semibold">
            💻 Review Code
          </Link>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-blue-400 transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded-md text-gray-200 hover:bg-slate-800 transition"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800">
          <div className="flex flex-col gap-2 px-6 py-4">
            <Link to="/" className={`block py-3 text-base ${isActive('/')}`} onClick={() => setIsMenuOpen(false)}>
              🏠 Home
            </Link>
            <Link to="/features" className={`block py-3 text-base ${isActive('/features')}`} onClick={() => setIsMenuOpen(false)}>
              ✨ Features
            </Link>
            <Link to="/about" className={`block py-3 text-base ${isActive('/about')}`} onClick={() => setIsMenuOpen(false)}>
              ℹ️ About
            </Link>
            <Link to="/documentation" className={`block py-3 text-base ${isActive('/documentation')}`} onClick={() => setIsMenuOpen(false)}>
              📚 Docs
            </Link>
            <Link to="/review" className="block py-3 text-base text-blue-400 font-semibold" onClick={() => setIsMenuOpen(false)}>
              💻 Review Code
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

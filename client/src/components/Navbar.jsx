import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github } from 'lucide-react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-center">
      <header className="w-9/12 rounded-3xl bg-white dark:bg-[#ef233c] border-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Brand name */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="flex items-center space-x-2 text-3xl font-semibold text-gray-900 dark:text-white hover:opacity-80 transition-opacity"
              >
                <span>OpenHello</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              <Link
                to="/contributors"
                className="px-3 py-2 text-xl font-semibold rounded-2xl text-gray-700 border-2 border-black dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Contributors
              </Link>
              <a
                href="https://github.com/sidxhdev/OpenHello.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3 py-2 rounded-2xl text-xl font-semibold text-gray-700 border-2 border-black dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-700 dark:text-gray-300 rounded-3xl  hover:bg-gray-100 dark:hover:bg-gray-800  transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/contributors"
                  className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-2xl transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contributors
                </Link>
                <a
                  href="https://github.com/sidxhdev/OpenHello.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-2xl transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Github size={18} />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

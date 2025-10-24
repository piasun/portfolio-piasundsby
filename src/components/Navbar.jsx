import React, { useState, useEffect } from 'react';
import ScrollLink from './ScrollLink';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const linkClass = "text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400";

  return (
    <header className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Pia Sundsby</a>

        {/* Desktop nav */}
        <nav className="hidden sm:flex space-x-6 text-sm font-medium">
          <ScrollLink href="#projects" className={linkClass}>Projects</ScrollLink>
          <ScrollLink href="#about" className={linkClass}>About</ScrollLink>
          <ScrollLink href="#contact" className={linkClass}>Contact</ScrollLink>
        </nav>
        <div className="flex items-center gap-2">

          {/* Mobile menu toggle */}
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="sm:hidden p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {navOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <span className="text-yellow-300">🌞</span>
            ) : (
              <span className="text-gray-700 dark:text-white">🌙</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {navOpen && (
      <div className="sm:hidden px-4 py-4 bg-white dark:bg-gray-900 text-sm">
        <div className="flex flex-col space-y-2">
          <ScrollLink
            href="#projects"
            className="block px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            href="#about"
            className="block px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
             About
          </ScrollLink>
          <ScrollLink
            href="#contact"
            className="block px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Contact
          </ScrollLink>
        </div>
      </div>
      )}

    </header>
  );
}

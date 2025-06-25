
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-lexend-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">lexend</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-lexend-primary transition-colors">Features</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-lexend-primary transition-colors">Pricing</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-lexend-primary transition-colors">Insights</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-lexend-primary transition-colors">About</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-lexend-primary transition-colors">Contact</a>
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-lexend-primary transition-colors">
                More
                <ChevronDown size={16} />
              </button>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 dark:text-gray-300 hover:text-lexend-primary transition-colors">Request a demo</button>
            <button className="text-gray-700 dark:text-gray-300 hover:text-lexend-primary transition-colors">Log in</button>
            <button className="bg-lexend-primary text-white px-4 py-2 rounded-lg hover:bg-lexend-secondary transition-colors">
              Start free trial
            </button>
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <span className="text-sm">En</span>
              <ChevronDown size={16} />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-lexend-primary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t">
              <a href="#" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-lexend-primary">Features</a>
              <a href="#" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-lexend-primary">Pricing</a>
              <a href="#" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-lexend-primary">Insights</a>
              <a href="#" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-lexend-primary">About</a>
              <a href="#" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-lexend-primary">Contact</a>
              <div className="border-t pt-4 mt-4">
                <a href="#" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-lexend-primary">Request a demo</a>
                <a href="#" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-lexend-primary">Log in</a>
                <div className="px-3 py-2">
                  <button className="w-full bg-lexend-primary text-white px-4 py-2 rounded-lg hover:bg-lexend-secondary transition-colors">
                    Start free trial
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

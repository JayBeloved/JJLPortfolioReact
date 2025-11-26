import React, { useState, useEffect } from 'react';
import Logo from './logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Projects', href: '#projects' },
    { name: 'Insights', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Logo type="load" className="h-10 sm:h-12 w-auto" alt="John J. Lawal" />
            <div className="flex flex-col">
              <span className="text-base sm:text-l font-bold text-gray-300 hover:text-blue-400 transition-colors duration-200">
                John J. Lawal
              </span>
              <span className="hidden sm:block text-xs sm:text-sm font-bold text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Tech | Education | Leadership
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Let's Connect
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m4 6h-16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-2 sm:px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 rounded-md px-3 py-3 text-base transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200"
                >
                  Let's Connect
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import { useParams } from 'react-router-dom';
import { NavLink, useLocation } from 'react-router-dom'; // Import useLocation
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi'; // Import sun and moon icons

const Header = () => {
  // const [darkMode, setDarkMode] = useState(false);

  const { darkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the mobile menu
  const location = useLocation(); // Get the current route location

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  //   document.documentElement.classList.toggle('dark');
  // };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 shadow-lg fixed w-full top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          <NavLink to="/">My Portfolio</NavLink>
        </div>
        <div className="hidden md:flex space-x-8"> {/* Desktop Navigation */}
          <NavLink to="/" className="text-gray-800 dark:text-white hover:text-purple-500 dark:hover:text-purple-500 transition-colors">Home</NavLink>
          <NavLink to="/about-me" className="text-gray-800 dark:text-white hover:text-purple-500 dark:hover:text-purple-500 transition-colors">About Me</NavLink>
          <NavLink to="/blog" className="text-gray-800 dark:text-white hover:text-purple-500 dark:hover:text-purple-500 transition-colors">Blog</NavLink>
          <NavLink to="/contact" className="text-gray-800 dark:text-white hover:text-purple-500 dark:hover:text-purple-500 transition-colors">Contact</NavLink>
        </div>

        <div className="md:hidden"> {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="text-gray-800 dark:text-white">
            {isMenuOpen ? <HiX className="w-8 h-8" /> : <HiMenu className="w-8 h-8" />}
          </button>
        </div>

         {/* Conditionally render dark mode button only on the blog page */}
         {location.pathname.includes('/blog') && (
          <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"
          >
            {darkMode ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
            {/* <span className="ml-2">{darkMode ? 'Light Mode' : 'Dark Mode'}</span> */}
          </button>
        )}

      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 p-4 shadow-md">
          <ul className="flex flex-col space-y-4">
            <li><NavLink to="/" className="text-gray-800 dark:text-white hover:text-purple-500 dark:hover:text-purple-500 transition-colors">Home</NavLink></li>
            <li><NavLink to="/about-me" className="text-gray-800 dark:text-white hover:text-purple-500 dark:hover:text-purple-500 transition-colors">About Me</NavLink></li>
            <li><NavLink to="/blog" className="text-gray-800 dark:text-white hover:text-purple-500 dark:hover:text-purple-500 transition-colors">Blog</NavLink></li>
            <li><NavLink to="/contact" className="text-gray-800 dark:text-white hover:text-purple-500 dark:hover:text-purple-500 transition-colors">Contact</NavLink></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  // Placeholder for authentication status
  const isAuthenticated = false; 

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            LearnPlatform
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/" className={({ isActive }) => isActive? "text-blue-600" : "text-gray-600 hover:text-blue-600"}>Home</NavLink>
            <NavLink to="/courses" className={({ isActive }) => isActive? "text-blue-600" : "text-gray-600 hover:text-blue-600"}>Courses</NavLink>
            
            {isAuthenticated? (
              <>
                <NavLink to="/dashboard" className={({ isActive }) => isActive? "text-blue-600" : "text-gray-600 hover:text-blue-600"}>Dashboard</NavLink>
                <NavLink to="/profile" className={({ isActive }) => isActive? "text-blue-600" : "text-gray-600 hover:text-blue-600"}>Profile</NavLink>
                <button className="text-gray-600 hover:text-blue-600">Logout</button>
              </>
            ) : (
              <>
                <NavLink to="/login" className="text-gray-600 hover:text-blue-600">Login</NavLink>
                <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
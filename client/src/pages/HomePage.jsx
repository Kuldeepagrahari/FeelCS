import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Your AI-Powered Learning Journey</h1>
      <p className="text-lg text-gray-600 mb-8">
        Explore interactive courses, engage with AI simulations, and track your progress like never before.
      </p>
      <div className="space-x-4">
        <Link to="/courses" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700">
          Browse Courses
        </Link>
        <Link to="/signup" className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md text-lg hover:bg-gray-300">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
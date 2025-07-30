import React from 'react';

// Note: This page should be a protected route, only accessible to logged-in users. [9, 10]
const DashboardPage = () => {
  // Placeholder data
  const user = {
    name: 'Jane Doe',
    coursesInProgress: 3,
    completedCourses: 5,
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome back, {user.name}!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700">Courses in Progress</h3>
          <p className="text-4xl font-bold text-blue-600 mt-2">{user.coursesInProgress}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700">Completed Courses</h3>
          <p className="text-4xl font-bold text-green-600 mt-2">{user.completedCourses}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700">Next Steps</h3>
          <p className="text-gray-600 mt-2">Continue your 'Advanced React' course.</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
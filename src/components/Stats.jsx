import React from 'react';

function Stats({ totalCourses, filteredCount }) {
  return (
    <div className="mb-6 bg-clemson-purple text-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm opacity-80">Showing Results</p>
          <p className="text-2xl font-bold">{filteredCount.toLocaleString()}</p>
        </div>
        <div className="text-right">
          <p className="text-sm opacity-80">Total Courses</p>
          <p className="text-2xl font-bold">{totalCourses.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
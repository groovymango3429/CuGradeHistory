import React from 'react';

function Stats({ totalCourses, filteredCount, currentPage, itemsPerPage, onItemsPerPageChange }) {
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, filteredCount);

  return (
    <div className="mb-6 bg-clemson-purple text-white p-4 rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex gap-8">
          <div>
            <p className="text-sm opacity-80">Showing</p>
            <p className="text-2xl font-bold">
              {filteredCount > 0 ? `${startIndex}-${endIndex}` : '0'}
            </p>
          </div>
          <div>
            <p className="text-sm opacity-80">Total Results</p>
            <p className="text-2xl font-bold">{filteredCount.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm opacity-80">All Courses</p>
            <p className="text-2xl font-bold">{totalCourses.toLocaleString()}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm opacity-80">Per page:</label>
          <select
            value={itemsPerPage}
            onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
            className="px-3 py-1 rounded bg-white text-clemson-purple font-semibold focus:outline-none focus:ring-2 focus:ring-clemson-orange"
          >
            <option value={15}>15</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Stats;
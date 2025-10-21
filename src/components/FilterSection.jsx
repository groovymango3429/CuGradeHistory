import React from 'react';

function FilterSection({ 
  terms, 
  instructors, 
  selectedTerm, 
  setSelectedTerm, 
  selectedInstructor, 
  setSelectedInstructor,
  sortBy,
  setSortBy,
  onClearFilters 
}) {
  const hasActiveFilters = selectedTerm || selectedInstructor || sortBy !== 'course';

  return (
    <div className="mb-6 bg-white p-6 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Filter by Term
          </label>
          <select
            value={selectedTerm}
            onChange={(e) => setSelectedTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-clemson-orange focus:ring-2 focus:ring-clemson-orange focus:ring-opacity-50"
          >
            <option value="">All Terms</option>
            {terms.map(term => (
              <option key={term} value={term}>{term}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Filter by Instructor
          </label>
          <select
            value={selectedInstructor}
            onChange={(e) => setSelectedInstructor(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-clemson-orange focus:ring-2 focus:ring-clemson-orange focus:ring-opacity-50"
          >
            <option value="">All Instructors</option>
            {instructors.map(instructor => (
              <option key={instructor} value={instructor}>{instructor}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sort By
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-clemson-orange focus:ring-2 focus:ring-clemson-orange focus:ring-opacity-50"
          >
            <option value="course">Course Number</option>
            <option value="aPercentDesc">A% (High to Low)</option>
            <option value="instructor">Instructor Name</option>
          </select>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClearFilters}
            className="px-4 py-2 text-sm font-medium text-clemson-orange border border-clemson-orange rounded-lg hover:bg-clemson-orange hover:text-white transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default FilterSection;
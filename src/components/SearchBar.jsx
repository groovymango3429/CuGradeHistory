import React, { useState, useRef, useEffect } from 'react';

function SearchBar({ searchTerm, setSearchTerm, courses }) {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filtered = courses
        .filter(course => 
          course.course_number.toLowerCase().includes(value.toLowerCase()) ||
          course.course_title.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 8);

      const uniqueSuggestions = Array.from(
        new Set(filtered.map(c => `${c.course_number} - ${c.course_title}`))
      );
      
      setSuggestions(uniqueSuggestions);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const courseNumber = suggestion.split(' - ')[0];
    setSearchTerm(courseNumber);
    setShowSuggestions(false);
  };

  return (
    <div ref={wrapperRef} className="mb-8 relative">
      <div className="relative">
        <input
          type="text"
          placeholder="Search by course number or title (e.g., ACCT 2010 or Financial Accounting)..."
          value={searchTerm}
          onChange={handleInputChange}
          className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-clemson-orange focus:ring-2 focus:ring-clemson-orange focus:ring-opacity-50 shadow-md"
        />
        <svg 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-xl max-h-96 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-6 py-3 hover:bg-clemson-gray cursor-pointer border-b border-gray-100 last:border-b-0"
            >
              <p className="font-medium text-clemson-purple">{suggestion.split(' - ')[0]}</p>
              <p className="text-sm text-gray-600">{suggestion.split(' - ')[1]}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
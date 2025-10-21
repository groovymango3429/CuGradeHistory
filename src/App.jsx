import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FilterSection from './components/FilterSection';
import CourseCard from './components/CourseCard';
import Stats from './components/Stats';

function App() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTerm, setSelectedTerm] = useState('');
  const [selectedInstructor, setSelectedInstructor] = useState('');
  const [sortBy, setSortBy] = useState('course');
  const [loading, setLoading] = useState(true);

  // Load course data
  useEffect(() => {
    fetch('/CuGradeHistory/course_grades_combined.json')
      .then(response => response.json())
      .then(data => {
        setCourses(data);
        setFilteredCourses(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading course data:', error);
        setLoading(false);
      });
  }, []);

  // Get unique terms and instructors for filters
  const terms = useMemo(() => {
    const uniqueTerms = [...new Set(courses.map(c => c.term))];
    return uniqueTerms.sort((a, b) => {
      const termOrder = { 'Spring': 1, 'Summer': 2, 'Fall': 3 };
      const [seasonA, yearA] = a.split(' ');
      const [seasonB, yearB] = b.split(' ');
      if (yearB !== yearA) return yearB - yearA;
      return (termOrder[seasonB] || 0) - (termOrder[seasonA] || 0);
    });
  }, [courses]);

  const instructors = useMemo(() => {
    const uniqueInstructors = [...new Set(courses.map(c => c.instructor))];
    return uniqueInstructors.sort();
  }, [courses]);

  // Filter and search logic
  useEffect(() => {
    let result = courses;

    // Search filter
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      result = result.filter(course => 
        course.course_number.toLowerCase().includes(search) ||
        course.course_title.toLowerCase().includes(search)
      );
    }

    // Term filter
    if (selectedTerm) {
      result = result.filter(course => course.term === selectedTerm);
    }

    // Instructor filter
    if (selectedInstructor) {
      result = result.filter(course => course.instructor === selectedInstructor);
    }

    // Sort
    result = [...result].sort((a, b) => {
      if (sortBy === 'course') {
        return a.course_number.localeCompare(b.course_number);
      } else if (sortBy === 'aPercentDesc') {
        const aPercent = calculateAPercentage(a.grades);
        const bPercent = calculateAPercentage(b.grades);
        return bPercent - aPercent;
      } else if (sortBy === 'instructor') {
        return a.instructor.localeCompare(b.instructor);
      }
      return 0;
    });

    setFilteredCourses(result);
  }, [searchTerm, selectedTerm, selectedInstructor, sortBy, courses]);

  const calculateAPercentage = (grades) => {
    const total = Object.values(grades).reduce((sum, val) => sum + val, 0);
    return total > 0 ? (grades.A / total * 100) : 0;
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedTerm('');
    setSelectedInstructor('');
    setSortBy('course');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchBar 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          courses={courses}
        />

        <FilterSection
          terms={terms}
          instructors={instructors}
          selectedTerm={selectedTerm}
          setSelectedTerm={setSelectedTerm}
          selectedInstructor={selectedInstructor}
          setSelectedInstructor={setSelectedInstructor}
          sortBy={sortBy}
          setSortBy={setSortBy}
          onClearFilters={handleClearFilters}
        />

        <Stats 
          totalCourses={courses.length}
          filteredCount={filteredCourses.length}
        />

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-clemson-orange"></div>
            <p className="mt-4 text-gray-600">Loading course data...</p>
          </div>
        ) : filteredCourses.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No courses found</h3>
            <p className="mt-2 text-gray-500">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course, index) => (
              <CourseCard key={`${course.course_number}-${course.section}-${course.term}-${index}`} course={course} />
            ))}
          </div>
        )}
      </main>

      <footer className="bg-clemson-purple text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">🐅 Clemson Grade Lookup</p>
          <p className="text-xs mt-2 opacity-80">Data provided for educational purposes</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
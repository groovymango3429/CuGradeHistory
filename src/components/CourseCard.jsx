import React from 'react';
import GradeChart from './GradeChart';

function CourseCard({ course }) {
  const calculatePercentage = (grade, total) => {
    return total > 0 ? ((grade / total) * 100).toFixed(1) : '0.0';
  };

  const totalGrades = Object.values(course.grades).reduce((sum, val) => sum + val, 0);
  const aPercentage = calculatePercentage(course.grades.A, totalGrades);

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border-t-4 border-clemson-orange">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-header font-bold text-clemson-purple">
              {course.course_number}
            </h3>
            <p className="text-sm text-gray-500">Section {course.section}</p>
          </div>
          <span className="px-3 py-1 bg-clemson-orange text-white text-xs font-semibold rounded-full">
            {aPercentage}% A
          </span>
        </div>

        <h4 className="text-lg font-semibold text-gray-800 mb-2">
          {course.course_title}
        </h4>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <svg className="h-4 w-4 mr-2 text-clemson-purple" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
            </svg>
            {course.instructor}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <svg className="h-4 w-4 mr-2 text-clemson-purple" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            {course.term}
          </div>
        </div>

        <GradeChart grades={course.grades} />

        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-4 gap-2 text-center text-xs">
            <div>
              <p className="font-semibold text-green-600">{course.grades.A}</p>
              <p className="text-gray-500">A</p>
            </div>
            <div>
              <p className="font-semibold text-blue-600">{course.grades.B}</p>
              <p className="text-gray-500">B</p>
            </div>
            <div>
              <p className="font-semibold text-yellow-600">{course.grades.C}</p>
              <p className="text-gray-500">C</p>
            </div>
            <div>
              <p className="font-semibold text-red-600">{course.grades.D + course.grades.F}</p>
              <p className="text-gray-500">D/F</p>
            </div>
          </div>
          {course.grades.W > 0 && (
            <p className="text-xs text-gray-500 text-center mt-2">
              {course.grades.W} Withdrawals
            </p>
          )}
          <p className="text-xs text-gray-500 text-center mt-1">
            Total: {totalGrades} students
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
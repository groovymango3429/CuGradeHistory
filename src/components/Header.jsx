import React from 'react';

function Header() {
  return (
    <header className="bg-clemson-orange shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-center space-x-4">
          <div className="text-5xl">🐅</div>
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-header font-bold text-white">
              Clemson Grade Lookup
            </h1>
            <p className="text-sm sm:text-base text-white opacity-90 mt-1">
              Search course grades by semester, professor, and title
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
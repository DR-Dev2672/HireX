import React from 'react';

const HeroSection = () => {
  return (
    <div className='py-10 '>
    <section className="bg-gray-100 py-20 shadow-lg rounded-xl ">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Find Your Dream Job, Faster
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Discover thousands of opportunities from top companies. Apply with ease and take the next step in your career journey.
        </p>

        {/* Search Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Search job title or keywords"
            className="w-full sm:w-96 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            Search Jobs
          </button>
        </div>

        {/* CTA */}
        <div className="mt-6">
          <a href="/register" className="text-blue-600 hover:underline font-medium">
            Create a free account →
          </a>
        </div>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;

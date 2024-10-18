import React from 'react';
import Link from 'next/link';

function HomePage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-150">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">COLT Mobile</h1>
        <p className="text-gray-600 text-center mb-6">Enter your name and COLT title</p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Your name</label>
            <p className="text-gray-800 font-bold">user</p>
          </div>

          <div>
            <label htmlFor="coltTitle" className="block text-sm font-medium text-gray-700">COLT title</label>
            <input
              type="text"
              id="coltTitle"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Enter COLT title"
            />
          </div>

          <button
            type="button"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-150 ease-in-out"
          >
            Start
          </button>
        </div>

        <div className="mt-6 text-center space-y-3">
          <Link href="/previousColts" className="text-blue-500 text-sm hover:underline flex items-center justify-center">
            <i className="fas fa-list mr-2"></i> Previous COLTs
          </Link>
          <Link href="#" className="text-blue-500 text-sm hover:underline flex items-center justify-center">
            <i className="fas fa-comments mr-2"></i> Phrases
          </Link>
          <Link href="#" className="text-blue-500 text-sm hover:underline flex items-center justify-center">
            <i className="fas fa-cog mr-2"></i> Configure auto coding
          </Link>
          <Link href="#" className="text-blue-500 text-sm hover:underline flex items-center justify-center">
            <i className="fas fa-sign-out-alt mr-2"></i> Log out
          </Link>
        </div>

        <footer className="mt-6 text-xs text-gray-500 text-center">
          © 2016 HOKKAIDO UNIVERSITY OF EDUCATION all rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default HomePage;




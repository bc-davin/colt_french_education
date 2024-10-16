import React from 'react';

function SignUpForm() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-150">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Sign up.</h2>
        <p className="text-gray-600 mb-6">Enter your account information.</p>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Mail address</label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="institution" className="block text-sm font-medium text-gray-700">Institution</label>
            <input
              type="text"
              id="institution"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <p className="text-sm text-red-500 mt-2">
            * Important! Administrator checks your institution to create your account.
          </p>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-150 ease-in-out"
          >
            Send
          </button>
        </form>

        <div className="mt-6 text-center">
          <a href="/login" className="text-sm text-blue-500 hover:underline">Back to login form.</a>
        </div>

        <footer className="mt-6 text-xs text-gray-500 text-center">
          © 2016 HOKKAIDO UNIVERSITY OF EDUCATION all rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default SignUpForm;

import React from 'react';

function LoginForm() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-200">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">COLT Mobile</h2>
        <p className="text-gray-600 mb-6">Login to your account</p>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Mail address</label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div className="flex items-center">
            <input
              id="rememberMe"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">
              Remember me.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-150 ease-in-out"
          >
            Login
          </button>

          <div className="mt-4 text-center">
            <a href="/signup" className="text-sm text-blue-500 hover:underline">Request to create your account</a>
          </div>
        </form>

        <footer className="mt-6 text-xs text-gray-500 text-center">
          © 2016 HOKKAIDO UNIVERSITY OF EDUCATION all rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default LoginForm;
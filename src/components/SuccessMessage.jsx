import React from 'react';
import { Link } from 'react-router-dom';

const SuccessMessage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-teal-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-semibold text-green-600 mb-4">Registration Successful!</h1>
        <p className="text-lg text-gray-600 mb-6">Welcome to the Multi-Vendor App. You can now login and start managing your products and orders.</p>
        <Link
          to="/"
          className="block w-full bg-blue-500 text-white text-center py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default SuccessMessage;

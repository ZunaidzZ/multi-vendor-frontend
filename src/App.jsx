import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex flex-col items-center justify-center p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to the <span className="text-blue-600">Multi-Vendor App</span>
        </h1>
        <p className="text-lg text-gray-600">
          Manage your products, orders, and more with ease.
        </p>
      </div>

      {/* Login Buttons */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Login as
        </h2>
        <div className="space-y-4">
          <Link
            to="/login/user"
            className="block w-full bg-blue-500 text-white text-center py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            User
          </Link>
          <Link
            to="/login/admin"
            className="block w-full bg-green-500 text-white text-center py-3 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Admin
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-gray-600">
        <p>
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
        <p className="mt-2 text-sm">
          &copy; 2023 Multi-Vendor App. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default App;
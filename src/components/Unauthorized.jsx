const Unauthorized = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-6 bg-white rounded shadow-md">
          <h1 className="text-2xl font-bold mb-4">Unauthorized Access</h1>
          <p className="text-gray-700">
            You do not have permission to view this page.
          </p>
          <p className="mt-4">
            Please contact an administrator if you believe this is an error.
          </p>
        </div>
      </div>
    );
  };
  
  export default Unauthorized;
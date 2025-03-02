import { useAuth } from '../context/AuthContext';

const AdminPanel = () => {
  const { user } = useAuth();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <p className="text-gray-700">
          Welcome, <span className="font-semibold">{user.role}</span>!
        </p>
        <p className="mt-4">
          This page is only accessible to users with the <span className="font-semibold">Admin</span> role.
        </p>
      </div>
    </div>
  );
};

export default AdminPanel;
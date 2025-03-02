import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      {user.role === 'Admin' && (
        <button>Admin Panel</button>
      )}
    </div>
  );
};

export default Dashboard;
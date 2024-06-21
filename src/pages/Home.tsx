import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/atoms/Button'; // Assuming you have a Button component

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
      <Button text="Logout" onClick={handleLogout} />
    </div>
  );
};

export default Home;

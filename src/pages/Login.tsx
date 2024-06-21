import React from 'react';
import LoginForm from '../components/organisms/LoginForm';

const Login: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <LoginForm />
    </div>
  );
};

export default Login;

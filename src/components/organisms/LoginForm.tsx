import React, { useState } from 'react';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';
import { toast } from 'react-toastify';


const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch('http://localhost:3030/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (response.ok) {
      console.log('Login successful:', data);
      toast.success('Login successful!');

      // Store the token and handle successful login
    } else {
      console.error('Login failed:', data);
      toast.error('Failed to login.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-4 border rounded shadow-md">
      <FormField 
        label="Email" 
        type="email" 
        placeholder="Enter your email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <FormField 
        label="Password" 
        type="password" 
        placeholder="Enter your password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <Button text="Login" type="submit" />
    </form>
  );
};

export default LoginForm;

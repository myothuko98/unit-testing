import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const isDisabled = !username || !password;

  const handleSubmit = (e) => {
    setError('');
    setSuccess('');
    e.preventDefault();

    fetch('/api/auth', {
      method: 'POST',
      //   url: '/api/login',
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => setSuccess('Login Successful'))
      .catch((err) => setError('Login Failed'));
  };

  const handleChange = (e) => {
    if (e.target.id === 'username') {
      setUsername(e.target.value);
    } else if (e.target.id === 'password') {
      setPassword(e.target.value);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        {error && <span style={{ color: 'red' }}>{error}</span>}
        {success && <span style={{ color: 'green' }}>{success}</span>}
        <input
          type="text"
          placeholder="Username"
          id="username"
          value={username}
          onChange={handleChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          id="password"
          onChange={handleChange}
        />
        <button type="submit" disabled={isDisabled}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

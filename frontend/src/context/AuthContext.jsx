import React, { createContext, useState, useEffect } from 'react';

// Create AuthContext
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Load user from localStorage if available
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Function to handle login
  const login = async (username, password) => {
    // Simulate a backend call
    const fakeBackendResponse = {
      username,
      roles: username === 'admin' ? ['admin'] : ['user'], // Basic role assignment for example
      token: 'fake-jwt-token',
    };

    // Save user data in state and localStorage
    setUser(fakeBackendResponse);
    localStorage.setItem('user', JSON.stringify(fakeBackendResponse));
  };

  // Function to handle logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

import { createContext, useState, useContext } from 'react';

// Create a context for the authentication status
export const AuthContext = createContext(false);

// Create a provider component that wraps your app and makes the authentication status available to all components
import PropTypes from 'prop-types';

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to change the authentication status
  const setAuthStatus = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuthStatus }}>
      {children}
    </AuthContext.Provider>
  );
}

// Create a custom hook that components can use to access the authentication status
export function useAuth() {
  return useContext(AuthContext);
}

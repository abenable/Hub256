import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Create a context for the authentication status
const AuthContext = createContext();

// Create a provider component that wraps your app and makes the authentication status available to all components
import PropTypes from 'prop-types';

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = document.cookie.includes('jwt');
    setIsAuthenticated(token);

    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <AuthContext.Provider value={isAuthenticated}>
      {children}
    </AuthContext.Provider>
  );
}

// Create a custom hook that components can use to access the authentication status
export function useAuth() {
  return useContext(AuthContext);
}

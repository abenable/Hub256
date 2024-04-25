import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Create a context for the authentication status
const AuthContext = createContext();

// Create a provider component that wraps your app and makes the authentication status available to all components
import PropTypes from 'prop-types';
import axios from 'axios';

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function AuthProvider({ children }) {
  const API_URL =
    import.meta.env.MODE === 'development'
      ? import.meta.env.VITE_LOCAL_URL
      : import.meta.env.VITE_URL;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${API_URL}/auth/checkauth`, {
          withCredentials: true,
        });
        if (res.status === 200) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
      if (!isAuthenticated) {
        navigate('/login');
      }
    })();
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

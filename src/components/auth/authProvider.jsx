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

<<<<<<< HEAD
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${API_URL}/auth/checkauth`, {
          withCredentials: true,
        });
        if (res.status === 200) {
          setIsAuthenticated(true);
          console.log('Authenticated');
        } else {
          setIsAuthenticated(false);
          console.log('Authenticated');
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    })();
  }, []);
=======
  // Function to change the authentication status
  const setAuthStatus = (status) => {
    setIsAuthenticated(status);
  };
>>>>>>> e42cb42 (refactor: Update AuthProvider to use useContext instead of useState for authentication status)

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

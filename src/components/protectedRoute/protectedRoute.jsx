import PropTypes from 'prop-types';
import { useAuth } from '../auth/authProvider';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const isAuthenticated = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

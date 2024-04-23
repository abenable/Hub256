import PropTypes from 'prop-types';
import { useAuth } from '../auth/authProvider';

export function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth();

  return isAuthenticated ? children : null;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

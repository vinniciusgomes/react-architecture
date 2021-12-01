import { ReactElement } from 'react';
import { Navigate } from 'react-router';

interface RouteProps {
  children: ReactElement;
}

const user = false;

export function PrivateRoute({ children }: RouteProps) {
  return user ? children : <Navigate to="/" />;
}

export function PublicRoute({ children }: RouteProps) {
  return user ? <Navigate to="/dashboard" /> : children;
}

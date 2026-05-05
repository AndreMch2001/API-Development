import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const estaLogado = Boolean(localStorage.getItem('token'));
 
  if (!estaLogado) {
    return <Navigate to="/login" replace />;
  }
 
  return children;
}
 
export default PrivateRoute;
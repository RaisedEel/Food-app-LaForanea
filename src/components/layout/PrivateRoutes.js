import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoutes(props) {
  const { accessOn, redirectPath } = props;

  if (!accessOn) return <Navigate replace to={redirectPath || '/'} />;

  return <Outlet />;
}

export default PrivateRoutes;

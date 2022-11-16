import { Navigate, Outlet } from "react-router-dom";

type Props = {
  user: any;
};

const PrivateRoutes = ({ user }: Props) => {
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;

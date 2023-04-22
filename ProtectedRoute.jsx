import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("currentUserData"));

  if (!user) {
    // if the user is not logged in he will be redirected on login page
    return <Navigate to="/login" />;
  }

  // if  user is authorized, return child component(s)
  return children;
}

export default ProtectedRoute;

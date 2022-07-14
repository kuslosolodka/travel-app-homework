import { Navigate } from "react-router-dom";

export const AnonymousRoute = ({ children }) => {
  const user = localStorage.getItem("user");

  if (user) {
    console.log("Yes, user exist");
  } else {
    console.log("No user");
  }

  if (user) {
    return <Navigate to="/main" />;
  }

  return children;
};

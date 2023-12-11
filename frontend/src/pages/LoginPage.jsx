import { useContext, useEffect } from "react";
import authContext from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const { user, login } = useContext(authContext);
  useEffect(() => {
    if (!user) {
      login({ username: "damodar", password: "dadsgift" });
    }
  }, []);
  if (user) {
    return <Navigate to={"/"} />;
  }
  return <>Login Page</>;
};

export default LoginPage;

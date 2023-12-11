import { useContext, useEffect } from "react";
import authContext from "../contexts/AuthContext";
const HomePage = () => {
  const { user, login } = useContext(authContext);

  return <>Hello {user.username}</>;
};

export default HomePage;

import { createContext, useState, useEffect } from "react";
const AuthContext = createContext();
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

import axios from "axios";

export const AuthContextProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access") || null,
  );
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refresh") || null,
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (accessToken === null && refreshToken === null) {
      setUser(null);
      setError(null);
    } else if (refreshToken !== null && accessToken === null) {\

    }
  });

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <AuthContext.Provider value={{ user, error }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContext;

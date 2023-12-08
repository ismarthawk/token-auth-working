import {
  Box,
  Paper,
  TextField,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import { useState, useContext } from "react";

import { Navigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/home" />;
  }

  const handleSubmit = () => {};
  return (
    <Box
      sx={{
        flex: 1,
        alignSelf: "stretch",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "90%",
          padding: 2,
          margin: "60px auto 0 auto",
        }}
      >
        <Stack
          spacing={4}
          sx={{
            alignItems: "center",
          }}
        >
          <Typography variant="h4">Login Here !</Typography>
          <TextField
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          <Button onClick={handleSubmit}>Login</Button>
        </Stack>
      </Paper>
    </Box>
  );
}

import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const res = await axios.post(
          "https://fdcl5f-8000.csb.app/auth/token/",
          {
            username: "damodar",
            password: "dadsgift",
          },
          {
            // withCredentials: true,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              // 'X-CSRFToken': csrftoken
            },
          },
        );
        const token = res.data.access;
        const response = await axios.get(
          "https://fdcl5f-8000.csb.app/auth/routes/",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          },
        );
        console.log(response.data);

        const resp = await axios.get("https://fdcl5f-8000.csb.app/api/books/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(resp);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRoutes();
    return () => {};
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

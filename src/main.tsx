import { StrictMode, Suspense, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import "./index.css";

import routes from "~react-pages";
import { getCurrentUser } from "./utils/auth";

const AppLayout = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getCurrentUser();
        console.log(user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchData();
  }, []);

  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
};

const app = createRoot(document.getElementById("root")!);

app.render(
  <StrictMode>
    <Router>
      <AppLayout />
    </Router>
  </StrictMode>
);

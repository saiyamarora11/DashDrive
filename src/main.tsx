import { StrictMode, Suspense, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "~react-pages";
//actions
import { getCurrentUser } from "./utils/auth";

//imports
import "./index.css";

const AppLayout = () => {
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        await getCurrentUser();
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUserDetails();
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

import { StrictMode, Suspense, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "~react-pages";
//actions
import { getCurrentUser } from "./utils/auth";

//store
import useUserStore from "./store/user";

//imports
import "./index.css";

//types
import { User } from "@firebase/auth";

const AppLayout = () => {
  const { setUserDetails } = useUserStore();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getCurrentUser();
        setUserDetails(user as User);
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

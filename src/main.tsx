import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import "./index.css";

import routes from "~react-pages";

const AppLayout = () => {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
};

const app = createRoot(document.getElementById("root")!);

app.render(
  <Router>
    <AppLayout />
  </Router>
);

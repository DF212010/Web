import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import { ContentProvider } from "./context/ContentContext.jsx";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
createRoot(document.getElementById("root")).render(
    <ContentProvider>
      <Router>
        <App />
      </Router>
    </ContentProvider>
);

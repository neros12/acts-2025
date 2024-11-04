import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Router from "pages/router";
import { AuthContextProvider } from "contexts/AuthContext";

import "styles/global.css";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </AuthContextProvider>
);

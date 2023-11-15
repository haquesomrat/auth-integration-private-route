import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import ProjectRoutes from "./Router/ProjectRoutes.jsx";
import UserProvider from "./context/userProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={ProjectRoutes} />
    </UserProvider>
  </React.StrictMode>
);

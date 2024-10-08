import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Layout } from "./components/layout.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Discover } from "./pages/discover.jsx";
import { BlogDetails } from "./components/blogDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  
    children: [
      { path: "/", element: <App /> },       
      { path: "discover", element: <Discover /> },
      {path: "discover/:id", element: <BlogDetails />}
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import NotFoundPage from "./Pages/NotFoundPage";
import HeroPage from "./Pages/HeroPage";
import EducationPage from "./Pages/EducationPage";
import InternshipPage from "./Pages/InternshipPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HeroPage /> },
      { path: "/education", element: <EducationPage /> },
      { path: "/internships", element: <InternshipPage /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

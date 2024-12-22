import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  // createBrowserRouter,
  // RouterProvider,
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./components/Layout";
import NotFoundPage from "./Pages/NotFoundPage";
import HeroPage from "./Pages/HeroPage";
import EducationPage from "./Pages/EducationPage";
import InternshipPage from "./Pages/InternshipPage";
import ProjectPage from "./Pages/ProjectPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "/", element: <HeroPage /> },
//       { path: "/education", element: <EducationPage /> },
//       { path: "/internship", element: <InternshipPage /> },
//       { path: "/project", element: <ProjectPage /> },
//     ],
//   },
//   { path: "*", element: <NotFoundPage /> },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter path="/portfolio-website">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HeroPage />} />
          <Route path="education" element={<EducationPage />} />
          <Route path="internship" element={<InternshipPage />} />
          <Route path="project" element={<ProjectPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
    {/* <RouterProvider router={router} /> */}
  </StrictMode>
);

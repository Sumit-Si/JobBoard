import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import {Home,SavedJob} from "./pages"
import JobDetails from "./pages/JobDetails.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='details/:id' element={<JobDetails />} />
      <Route path='saved-job' element={<SavedJob />} />
    </Route>
  )
)

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

// Pages //
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import DataYoutubeApi from "./pages/DataYoutubeApi"
import ShowVideo from "./pages/ShowVideo";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
//=== Pages ===//

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
    errorElement: <ErrorPage />
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/data",
    element: <DataYoutubeApi />,
  },
  {
    path: "/showVideo/:vidId",
    element: <ShowVideo />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// API //

// API Key:     AIzaSyCySTLbPbzs_-iwhdQ9DwQT382ZTC-sPdo
// URL :        https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&regionCode=Sa&chart=mostPopular&maxResults=50&key=AIzaSyCySTLbPbzs_-iwhdQ9DwQT382ZTC-sPdo

// API //

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
//=== Pages ===//

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
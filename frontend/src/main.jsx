import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from "./App";
import ErrorPage from "./error-page";
import Navbar from "./components/Navbar";
import Swipe from "./Swipe";
import Homepage from "./Homepage";
import LoginForm from "./LoginForm";
import Register from "./Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Swipe",
    element: <Swipe />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Homepage",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Login",
    element: <LoginForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Register",
    element: <Register />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
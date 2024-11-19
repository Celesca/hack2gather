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
import Register from "./Register";
import LoginForm from "./LoginForm";
import Profile from "./profile";

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
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,  
  },
  { 
    path: "/login",
    element: <LoginForm />,
    errorElement: <ErrorPage />,  
  },
  {
  path: "/profile",
  element: <Profile />,
  errorElement: <ErrorPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default React
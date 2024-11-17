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
<<<<<<< HEAD
=======
import Homepage from "./Homepage";
import LoginForm from "./LoginForm";
>>>>>>> 87495c25203e6f15b7d85be02b678782c7c5cf01
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
<<<<<<< HEAD
  { 
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,  
  },
  { 
    path: "/login",
    element: <Swipe />,
    errorElement: <ErrorPage />,  
=======
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
>>>>>>> 87495c25203e6f15b7d85be02b678782c7c5cf01
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);

export default React
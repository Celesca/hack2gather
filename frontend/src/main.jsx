import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from "./App";
import Profile from "./profile";
import ErrorPage from "./error-page";
import Navbar from "./components/Navbar";
import Swipe from "./Swipe";
import Register from "./Register";
import LoginForm from "./LoginForm";
import Profile from "./profile";
import EventDetail from './EventDetail';
import Personal from "./personal";

const router = createBrowserRouter([
  {
<<<<<<< HEAD
    path: "/",
    element: (
      <>
        <Navbar />
        <App />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/Swipe",
    element: (
      <>
        <Navbar />
        <Swipe />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  { 
    path: "/register",
    element: (
      <>
        <Navbar />
        <Register />
      </>
    ),
    errorElement: <ErrorPage />,  
  },
  { 
    path: "/login",
    element: (
      <>
        <Navbar />
        <LoginForm />
      </>
    ),
    errorElement: <ErrorPage />,  
  },
  {
    path: "/profile",
    element: (
      <>
        <Navbar />
        <Profile />
      </>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/EventDetail",
    element: (
      <>
        <Navbar />
        <EventDetail />
      </>
    ),
    errorElement: <ErrorPage />
  },
  {
    path: "/Personal",
    element: (
      <>
        <Navbar />
        <Personal />
      </>
    ),
    errorElement: <ErrorPage />
=======
    path: "",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <ErrorPage />,
>>>>>>> 11d646c95153433dce9d4690ae44e1f7a23b3860
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

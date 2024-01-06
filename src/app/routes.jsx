import Layout from "../pages/Layout";
import App from "../App";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Login from "../pages/Login";
import authRoles from "./auth/authRole";
import Home from "../pages/Home";

export const router = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "dashboard",
        element: <Dashboard />,
        auth: authRoles.user,
      },
      {
        path: "blog",
        element: <Blog />,
        auth: authRoles.user,
      },
      {
        path: "about",
        element: <About />,
        auth: authRoles.onlyGuest,
      },
      {
        path: "/contact",
        element: <Contact />,
        auth: authRoles.onlyGuest,
      },
      {
        path: "/sign-up",
        element: <Register />,
        auth: authRoles.onlyGuest,
      },
      {
        path: "/sign-in",
        element: <Login />,
        auth: authRoles.onlyGuest,
      },
    ],
  },
];

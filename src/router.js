import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Login from "./pages/Login";
import Reset from "./pages/Reset";
import Register from "./pages/Register";
import CheckAuth from "./util/CheckAuth";
import Guest from "./util/Guest";
import { createBrowserRouter } from "react-router-dom";

export default createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <CheckAuth>
            <Home />
          </CheckAuth>
        ),
      },
      {
        path: "/about",
        element: (
          <CheckAuth>
            <About />
          </CheckAuth>
        ),
      },
      {
        path: "/contact",
        element: (
          <CheckAuth>
            <Contact />
          </CheckAuth>
        ),
      },
      {
        path: "/skills",
        element: (
          <CheckAuth>
            <Skills />
          </CheckAuth>
        ),
      },
      {
        path: "/login",
        element: (
          <Guest>
            <Login />
          </Guest>
        ),
      },
      {
        path: "forgot-password",
        element: <Reset />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

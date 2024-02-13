import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./contact";

export const AppRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <h2> Hello world </h2>,
    },
    {
      path: "/dist/index",
      element: <h2> Hello world </h2>,
    },
    {
      path: "/dist/index",
      element: <Home />,
    },
    {
      path: "/dist/about",
      element: <About />,
    },
    {
      path: "/dist/contact",
      element: <Contact />,
    },
    {
      path: "/dist/index",
      element: <Home />,
    },
  ],
  { basename: "/dist/index" }
);

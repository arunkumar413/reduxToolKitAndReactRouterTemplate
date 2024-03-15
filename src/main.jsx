import React from "react";
import ReactDOM from "react-dom/client";
import appStore from "./store/appStore.js";
import { Provider } from "react-redux";
import { AppRouter } from "./components/AppRouter.jsx";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={AppRouter} />
      {/* <Home /> */}
    </Provider>
  </React.StrictMode>
);

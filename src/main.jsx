import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./app/store.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { router } from "./app/routes.jsx";
export const routes = createBrowserRouter(router);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);

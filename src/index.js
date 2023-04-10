import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Home from "./Screens/Home/Home.jsx";
import ErrorPage from "./error-page";
import Categories from "./Screens/Categories/Categories";
import Contact from "./routes/contact";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "contacts/:contactId",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //   <BrowserRouter>

  <App />
  //   </BrowserRouter>
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

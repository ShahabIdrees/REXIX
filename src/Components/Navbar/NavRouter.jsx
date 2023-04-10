import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../Screens/Home/Home";
import Categories from "../../Screens/Categories/Categories";
import Feed from "../../Screens/Feed/Feed";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/Categories",
        element: <Categories />,
      },
    ],
  },

  {
    path: "Categories",
    element: <Categories />,
  },

  {
    path: "Feed",
    element: <Feed />,
  },
]);
const NavRouter = () => {
  return <RouterProvider router={Router} />;
};

export default NavRouter;

import React, { useState } from "react";
import { Header, TopReviews } from "./containers";
import { Navbar, Footer } from "./Components";
import "./App.css";
import {
  Route,
  Routes,
  Switch,
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import TopProducts from "./containers/TopProducts/TopProducts.jsx";
import TopCategories from "./containers/TopCategories/TopCategories.jsx";
import Home from "./Screens/Home/Home.jsx";
import Categories from "./Screens/Categories/Categories";
import Register from "./Screens/Register/Register";
import About from "./Screens/Register/About/About";
import Foryou from "./containers/Foryou/Foryou";
import Feed from "./Screens/Feed/Feed";
import Login from "./Screens/Authentication/Login.tsx";
import Signup from "./Screens/Authentication/Signup.tsx";
import Auth from "./Screens/Authentication/Auth.tsx";

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/Categories",
        },
      ],
    },
  ]);

  return (
    <div
      className="App p-2 border-0 m-0"
      data-bs-theme="dark"
      style={{ background: "#1B1D1F" }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="feed" element={<Feed />} />
          <Route path="Register" element={<Register />} />
          <Route path="About" element={<About />} />
          <Route path="Authenticate" element={<Auth />} />
          <Route path="SignUp" element={<Signup />} />
          <Route path="Login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

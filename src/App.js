import React, { useState } from "react";
import { Header, TopReviews, Feed } from "./containers";
import { Navbar, Footer } from "./Components";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import TopProducts from "./containers/TopProducts/TopProducts.jsx";
import TopCategories from "./containers/TopCategories/TopCategories.jsx";
import Home from "./Screens/Home/Home.jsx";
import Categories from "./Screens/Categories/Categories.jsx";

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="App p-0 border-0 m-0" style={{ background: "#1B1D1F" }}>
      <Categories />
      {/* <Home /> */}
      {/* <CategoriesScreen /> */}
      {/* <Navbar /> */}
      {/* <Header /> */}
      {/* <TopProducts /> */}
      {/* <TopCategories /> */}
      {/* <Feed /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;

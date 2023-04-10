import { render } from "@testing-library/react";
import React from "react";
import { Feed, TopReviews } from "../../containers";
import Navbar from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components";
import TopCategories from "../../containers/TopCategories/TopCategories.jsx";

const Home = () => {
  return (
    <div>
      <TopReviews />
      <TopCategories />
      <Feed />
    </div>
  );
};
export default Home;

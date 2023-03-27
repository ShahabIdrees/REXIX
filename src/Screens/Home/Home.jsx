import { render } from "@testing-library/react";
import React from "react";
import { Feed, TopReviews } from "../../containers";
import Navbar from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components";
import TopCategories from "../../containers/TopCategories/TopCategories.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <TopReviews />
      <TopCategories />
      <Feed />
      <Footer />
    </div>
  );
};
export default Home;

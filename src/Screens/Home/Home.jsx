import { render } from "@testing-library/react";
import React from "react";
import { Feed, TopReviews } from "../../containers";
import Navbar from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components";
import { useState } from "react";
import TopCategories from "../../containers/TopCategories/TopCategories.jsx";

// fetch("http://localhost:3001/").then(setProducts);
// function callAPI() {
//     fetch("http://localhost:9000/testAPI")
//         .then(res => res.text())
//         .then(res => this.setState({ apiResponse: res }));
// };

// componentWillMount() {
//     this.callAPI();
// }

const Home = () => {
  // const [Products, setProducts] = useState([]);
  // setProducts(fetch("http://localhost:3001/"));
  return (
    <div>
      <TopReviews />
      <TopCategories />
      <Feed />
    </div>
  );
};
export default Home;
import React from "react";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "../../Components/Carousel/Carousel";
import { Footer, Navbar } from "../../Components";
const Categories = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Carousel />
        {/* bg-opacity-25 */}
        <p className="text-bg-dark z-0">klnjknkjj</p>
      </div>
      <div className="z-1">
        <Footer />
      </div>
    </div>
  );
};

export default Categories;

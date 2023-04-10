import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./CategoryCard.css";
import React from "react";

const CategoryCard = () => {
  return (
    <div className="card text-bg-dark mb-3">
      <h3 className="text-center">Technology</h3>
      <div className="ratio ratio-1x1">
        <img
          src="/mbookair.png"
          className="figure-img img-fluid p-0"
          alt="..."
          // style={{ height: "350px", width: "350px" }}
        />
      </div>

      <div className="text-center">
        <a href="#" className="btn btn-outline-info m-2 ">
          See Products
        </a>
      </div>
    </div>
  );
};

export default CategoryCard;

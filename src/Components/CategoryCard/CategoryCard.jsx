import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./CategoryCard.css";
import React from "react";

const CategoryCard = (props) => {
  return (
    <div className="card text-bg-dark mb-3" aria-hidden="true">
      <h3 className="text-center card-title placeholder-glow">{props.name}</h3>
      <div className="ratio ratio-1x1">
        <img
          src={props.imgPath}
          className="figure-img img-fluid p-0"
          alt="..."
          // style={{ height: "350px", width: "350px" }}
        />
      </div>

      <div className="text-center">
        <a href="#" className="btn btn-outline-info m-2">
          See Products
        </a>
      </div>
    </div>
  );
};

export default CategoryCard;

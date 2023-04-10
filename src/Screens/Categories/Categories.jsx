import React from "react";
import { useState } from "react";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "../../Components/Carousel/Carousel";
import { Footer, Navbar, CategoryCard } from "../../Components";

function getCategories() {
  return [
    {
      Name: "Books",
      imgPath: "/Books.jpg",
    },
    {
      Name: "Computers",
      imgPath: "/Computers.jpg",
    },
    {
      Name: "Health & Household",
      imgPath: "/HomeAppliances.jpg",
    },
    {
      Name: "Home & Kitchen",
      imgPath: "/Kitchenware.jpg",
    },
    {
      Name: "Movies & Tv",
      imgPath: "/Movies.jpg",
    },
    {
      Name: "Sports & Outdoors",
      imgPath: "/SportsTall.jpg",
    },
    {
      Name: "Gym Equipment",
      imgPath: "/gym.jpg",
    },
  ];
}

const Categories = () => {
  // const [CategoriesArray, setCategoriesArray] = useState([]);
  // setCategoriesArray(getCategories());
  return (
    <div>
      <div>
        <Carousel />
        {/* bg-opacity-25 */}
        <p className="text-bg-dark z-0">klnjknkjj</p>
      </div>
      <div className="row m-0 mt-2">
        <div className="text-bg-dark rounded-top-3 fs-3">Categories</div>

        <div className="row justify-content-center m-auto mt-2">
          {/* {CategoriesArray.map((category) => (
            <div className="col-6 col-sm-4 col-lg-3">
              <CategoryCard Category={category} />
            </div>
          ))} */}
          <div className="col-6 col-sm-4 col-lg-3">
            <CategoryCard />
          </div>
          <div className="col-6 col-sm-4 col-lg-3">
            <CategoryCard />
          </div>
          <div className="col-6 col-sm-4 col-lg-3">
            <CategoryCard />
          </div>
          <div className="col-6 col-sm-4 col-lg-3">
            <CategoryCard />
          </div>
          <div className="col-6 col-sm-4 d-none d-sm-block col-lg-3">
            <CategoryCard />
          </div>
          <div className="col-6 col-sm-4 d-none d-sm-block col-lg-3">
            <CategoryCard />
          </div>
          <div className="col-6 col-sm-4 col-lg-3 d-none d-lg-block">
            <CategoryCard />
          </div>
          <div className="col-6 col-sm-4 col-lg-3 d-none d-lg-block">
            <CategoryCard />
          </div>
          <div className="col-6 col-sm-4 col-lg-3">
            <CategoryCard />
          </div>
          <div className="col-6 col-sm-4 col-lg-3">
            <CategoryCard />
          </div>
          <div className="col-6 col-sm-4 col-lg-3">
            <CategoryCard />
          </div>
          <div className="col-6 col-sm-4 col-lg-3">
            <CategoryCard />
          </div>
          <div className="col-6 col-sm-4 d-none d-sm-block col-lg-3">
            <CategoryCard />
          </div>
          <div className="col-6 col-sm-4 d-none d-sm-block col-lg-3">
            <CategoryCard />
          </div>
          <div className="col-6 col-sm-4 col-lg-3 d-none d-lg-block">
            <CategoryCard />
          </div>
          <div className="col-6 col-sm-4 col-lg-3 d-none d-lg-block">
            <CategoryCard />
          </div>
        </div>
      </div>
      <div className="z-1"></div>
    </div>
  );
};

export default Categories;

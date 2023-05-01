import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TopCategories = () => {
  const [topCategories, setTopCategories] = useState([]);
  useEffect(() => {
    async function getTopCategories() {
      const response = await fetch("http://localhost:5000/getTopCategories");
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const records = await response.json();
      await setTopCategories(records);
    }
    getTopCategories();
    return;
  }, []);
  return (
    <div className="row m-0 mt-2">
      <div className="text-bg-dark rounded-top-3 fs-3">Categories</div>

      <div className="row justify-content-center m-auto mt-2">
        {topCategories.map((category) => {
          return (
            <div className="col-6 col-sm-4 col-lg-3">
              <CategoryCard
                key={category.name}
                name={category.name}
                imgPath={category.img_url}
              />
            </div>
          );
        })}
      </div>
      <div className="text-center mt-2 mb-2">
        <Link className="btn btn-outline-info btn-sm" to="/Categories">
          Show all
        </Link>
      </div>
    </div>
  );
};

export default TopCategories;

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";

const TopCategories = () => {
  return (
    <div className="row p-2" style={{ background: "1B1D1F" }}>
      <div className="text-bg-dark ms-3 fs-3">Categories</div>

      <div className="row justify-content-center m-auto mt-2">
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
      <div className="text-center mt-2 mb-2">
        <a
          className="btn btn-outline-info btn-sm"
          href="../../Screens/Categories/Categories.jsx"
        >
          Show all
        </a>
      </div>
    </div>
  );
};

export default TopCategories;

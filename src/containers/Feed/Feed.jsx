import React from "react";
import ReviewCard from "../../Components/ReviewCard/Reviewcard";

const Feed = () => {
  return (
    <div className="row m-0 " style={{ background: "1B1D1F" }}>
      <div className="text-bg-dark rounded-top-3 ps-2 m-0 fs-3">For You</div>
      <div className="row justify-content-center m-auto mt-2">
        <span className="col-6 col-md-4 col-lg-3 mt-2">
          <ReviewCard />
        </span>
        <span className="col-6 col-md-4 col-lg-3 mt-2">
          <ReviewCard />
        </span>
        <span className="col-6 col-md-4 col-lg-3 mt-2">
          <ReviewCard />
        </span>
        <span className="col-6 col-md-4 col-lg-3 mt-2">
          <ReviewCard />
        </span>
        <span className="col-6 col-md-4 col-lg-3 mt-2">
          <ReviewCard />
        </span>
        <span className="col-6 col-md-4 col-lg-3 mt-2">
          <ReviewCard />
        </span>
        <span className="col-6 col-md-4 col-lg-3 mt-2">
          <ReviewCard />
        </span>
        <span className="col-6 col-md-4 col-lg-3 mt-2">
          <ReviewCard />
        </span>
        <span className="col-6 col-md-4 col-lg-3 mt-2">
          <ReviewCard />
        </span>
        <span className="col-6 col-md-4 col-lg-3 mt-2">
          <ReviewCard />
        </span>
        <span className="col-6 col-md-4 col-lg-3 mt-2">
          <ReviewCard />
        </span>
        <span className="col-6 col-md-4 col-lg-3 mt-2">
          <ReviewCard />
        </span>
        <span className="col-6 col-md-4 col-lg-3 mt-2">
          <ReviewCard />
        </span>
        <span className="col-6 col-md-4 col-lg-3 mt-2">
          <ReviewCard />
        </span>
        <span className="col-6 col-md-4 col-lg-3 mt-2">
          <ReviewCard />
        </span>
        <span className="col-6 col-md-4 col-lg-3 mt-2">
          <ReviewCard />
        </span>
      </div>
      <div className="text-center">
        <button className="btn btn-outline-info mt-2 mb-2 m-auto">
          See more
        </button>
      </div>
    </div>
  );
};

export default Feed;

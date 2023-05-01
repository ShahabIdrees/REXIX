import ReviewCard from "../../Components/ReviewCard/Reviewcard";
import React from "react";

const Feed = () => {
  return (
    <span>
      <span className="left-sidebar text-light d-lg-inline-block d-none col-lg-3">
        left
      </span>
      <div
        className="main-content text-white d-inline-block overflow-hidden col-12 col-md-8 col-lg-6 h-100"
        data-bs-spy="scroll"
        data-bs-smooth-scroll="true"
        style={{ height: "200px", overflow: "hidden" }}
      >
        <div>
          <ReviewCard />
        </div>
        <div>
          <ReviewCard />
        </div>
        <div>
          <ReviewCard />
        </div>
        <div>
          <ReviewCard />
        </div>
        <div>
          <ReviewCard />
        </div>
        <div>
          <ReviewCard />
        </div>
        <div>
          <ReviewCard />
        </div>
        <div>
          <ReviewCard />
        </div>
        <div>
          <ReviewCard />
        </div>
        <div>
          <ReviewCard />
        </div>
      </div>
      <span className="right- text-white  d-none d-md-inline-block col-md-4 col-lg-3">
        Right
      </span>
    </span>
  );
};

export default Feed;

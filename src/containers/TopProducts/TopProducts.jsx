import React from "react";
import ReviewCard from "../../Components/ReviewCard/Reviewcard";
import "./TopReviews.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const TopProducts = () => {
  return (
    //     <div className='reviews-container' style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }}>
    //         <h2 style={{color: 'white', margin: '20px'}}>Top Products</h2>
    //         <div className='reviews-scroller' style={{ width: '100%', display: 'grid',
    //   gridTemplateColumns: 'repeat(10, 1fr)', }}>
    //         <ReviewCard/>
    //         <ReviewCard/>
    //         <ReviewCard/>
    //         <ReviewCard/>
    //         <ReviewCard/>
    //         <ReviewCard/>
    //         <ReviewCard/>
    //         <ReviewCard/>
    //         <ReviewCard/>
    //         <ReviewCard/>

    //         </div>
    //     </div>

    <div
      data-bs-target="#navbar-example2"
      data-bs-smooth-scroll="true"
      className=" mt-2"
      tabindex="0"
    >
      <div className="fs-3 p-1 ms-3 text-bg-dark">Top Products</div>
      <div
        className="scrollspy-example  p-2 rounded-3 gx-2 m-1 "
        style={{
          overflowX: "scroll",
          whiteSpace: "nowrap",
          background: "#1B1D1F",
        }}
      >
        <div
          id="card1"
          className="col-5 col-sm-3 col-md-2 ms-1 d-inline-block "
        >
          <ReviewCard />
        </div>
        <div id="card2" className="col-5 col-sm-3 col-md-2 ms-1 d-inline-block">
          <ReviewCard />
        </div>
        <div id="card3" className="col-5 col-sm-3 col-md-2 ms-1 d-inline-block">
          <ReviewCard />
        </div>
        <div id="card4" className="col-5 col-sm-3 col-md-2 ms-1 d-inline-block">
          <ReviewCard />
        </div>
        <div id="card5" className="col-5 col-sm-3 col-md-2 ms-1 d-inline-block">
          <ReviewCard />
        </div>
        <div id="card6" className="col-5 col-sm-3 col-md-2 ms-1 d-inline-block">
          <ReviewCard />
        </div>
        <div id="card7" className="col-5 col-sm-3 col-md-2 ms-1 d-inline-block">
          <ReviewCard />
        </div>
        <div id="card8" className="col-5 col-sm-3 col-md-2 ms-1 d-inline-block">
          <ReviewCard />
        </div>
        <div id="card9" className="col-5 col-sm-3 col-md-2 ms-1 d-inline-block">
          <ReviewCard />
        </div>
        <div
          id="card10"
          className="col-5 col-sm-3 col-md-2 ms-1 d-inline-block"
        >
          <ReviewCard />
        </div>
      </div>
    </div>
  );
};

export default TopProducts;

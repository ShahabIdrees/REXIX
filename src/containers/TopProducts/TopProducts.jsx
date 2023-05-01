import React from "react";
import { useState, useEffect } from "react";
import ReviewCard from "../../Components/ReviewCard/Reviewcard";
import "./TopReviews.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

const TopProducts = () => {
  const [TopProducts, setTopProducts] = useState([]);

  useEffect(() => {
    async function getTopProducts() {
      const response = await fetch(`http://localhost:5000/getTopProducts`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const records = await response.json();
      await setTopProducts(records);
      console.log(TopProducts);
    }
    getTopProducts();
    console.log(TopProducts);
    return;
  }, []);

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
      <div className="fs-3 text-bg-dark ps-2">Top Products</div>
      <div
        className="scrollspy-example rounded-3 gx-2 p-2"
        style={{
          overflowX: "scroll",
          whiteSpace: "nowrap",
          background: "#1B1D1F",
        }}
      >
        {TopProducts.map((product) => {
          return (
            <div
              id="card1"
              className="col-5 col-sm-3 col-md-2 gx-1 d-inline-block ms-1"
            >
              <ReviewCard
                key={product.Name}
                name={product.Name}
                description={product.description}
                imgUrl={product.imgUrl}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopProducts;

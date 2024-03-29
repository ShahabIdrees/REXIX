import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Foryou = () => {
  const [ForYou, setForYou] = useState([]);

  useEffect(() => {
    async function getForYouProducts() {
      const response = await fetch(`http://localhost:5000/getForYouProducts`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const records = await response.json();
      await setForYou(records);
    }
    getForYouProducts();

    return;
  }, []);

  return (
    <div className="row m-0" style={{ background: "#1B1D1F" }}>
      <div className="text-bg-dark rounded-top-3 ps-2 m-0 fs-3">For You</div>
      <div className="row justify-content-center m-auto mt-2">
        {ForYou.map((product) => (
          <div key={product.name} className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <ProductCard
              title={product.name}
              description={product.description}
              imageUrl={product.imgUrl}
              rating={product.rating}
            />
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link to="/Feed" className="btn btn-outline-info mt-2 mb-2 m-auto">
          See more
        </Link>
      </div>
    </div>
  );
};

export default Foryou;

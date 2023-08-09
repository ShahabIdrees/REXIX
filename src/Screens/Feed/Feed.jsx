import ReviewCard from "../../Components/ReviewCard/Reviewcard";
import { useState, useEffect } from "react";
import React from "react";

const FeedScreen = () => {
  const [FeedContent, setFeedContent] = useState([]);

  useEffect(() => {
    async function getFeedContent() {
      const response = await fetch(`http://localhost:5000/getFeedContent`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const records = await response.json();
      setFeedContent(records);
    }

    getFeedContent();

    console.log(FeedContent);
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col bg-danger col-4">div 1</div>

        <div
          className="col bg-dark overflow-scroll col-5 justify-content-center"
          style={{ height: "100vh" }}
        >
          {FeedContent.map((post) => {
            return (
              <ReviewCard
                title={"Macbook Air M2 15 inches"}
                description={
                  "The MacBook is a remarkable blend of elegant design and exceptional performance. With its sleek aluminum chassis, Retina display that dazzles the eyes, and powerful hardware under the hood, it's a true embodiment of sophistication. The buttery smooth user experience, aided by the intuitive macOS, makes every task a pleasure. From creative professionals to students, the MacBook caters to a diverse audience. Its stunning display showcases vibrant colors and sharp details, perfect for editing photos or watching movies. The lightweight build and impressive battery life make it an ideal companion for those on the move. The keyboard's tactile feedback and the spacious trackpad's precision enhance productivity. The MacBook's processing power, whether you opt for the Air or Pro, effortlessly handles multitasking and resource-intensive applications. Innovation extends to its ecosystem, integrating seamlessly with other Apple devices. The MacBook truly encapsulates Apple's commitment to excellence, offering a blend of style, performance, and reliability that sets it apart in the world of laptops."
                }
                imageUrl={"/mbookairm2.jpeg"}
                rating={4}
                likeCount={69}
                dislikeCount={4}
                commentCount={39}
                shareCount={7}
              />
            );
          })}
          <button className="btn btn-outline-info">See more</button>
        </div>
        <div className="col bg-warning col-3"></div>
      </div>
    </div>
  );
};

export default FeedScreen;

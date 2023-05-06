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
                imgUrl={post.imgUrl}
                name={post.Name}
                description={post.description}
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

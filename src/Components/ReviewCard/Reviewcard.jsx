import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { teal } from "@mui/material/colors";

const ReviewCard = ({
  title,
  description,
  rating,
  imageUrl,
  likeCount,
  dislikeCount,
  commentCount,
  shareCount,
}) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [currentLikeCount, setCurrentLikeCount] = useState(likeCount);
  const [currentDislikeCount, setCurrentDislikeCount] = useState(dislikeCount);

  const handleLikeClick = () => {
    if (!liked) {
      setLiked(true);
      setDisliked(false);
      if (!disliked) {
        setCurrentLikeCount(currentLikeCount + 1);
      } else {
        setCurrentLikeCount(currentLikeCount + 1);
        setCurrentDislikeCount(currentDislikeCount - 1);
      }
    } else {
      setLiked(false);
      setCurrentLikeCount(currentLikeCount - 1);
    }
  };

  const handleDislikeClick = () => {
    if (!disliked) {
      setDisliked(true);
      setLiked(false);
      if (!liked) {
        setCurrentDislikeCount(currentDislikeCount + 1);
      } else {
        setCurrentLikeCount(currentLikeCount - 1);
        setCurrentDislikeCount(currentDislikeCount + 1);
      }
    } else {
      setDisliked(false);
      setCurrentDislikeCount(currentDislikeCount - 1);
    }
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="card bg-dark h-auto text-white review-card w-100">
      <div className="card-body">
        <div>
          {" "}
          //Could not render progress bar check dev tools console etc
          <div className="d-flex justify-content-center mt-3">
            <div className="progress ">
              <div
                className="progress-bar "
                role="progressbar w-100"
                style={{
                  width: `${rating * 20}%`,
                  borderRadius: "50%",
                  backgroundColor: teal,
                }}
                aria-valuenow={rating * 20}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        <h2 className="card-title fs-4">{title}</h2>
        <p className="card-text review-description">
          {showFullDescription
            ? description
            : description.split(" ").slice(0, 35).join(" ")}
          {!showFullDescription && (
            <span
              className="text-info cursor-pointer"
              onClick={toggleDescription}
            >
              ... See more
            </span>
          )}
          {showFullDescription && (
            <span
              className="text-info cursor-pointer"
              onClick={toggleDescription}
            >
              {" "}
              See less
            </span>
          )}
        </p>
        <div className="text-center mb-3">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              className="review-image img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          )}
        </div>

        <div className="d-flex justify-content-around mt-3">
          <button
            className={`btn btn-outline-info interaction-button ${
              liked ? "active" : ""
            }`}
            onClick={handleLikeClick}
          >
            <FontAwesomeIcon icon={faThumbsUp} />
            <span className="ms-1">{currentLikeCount}</span>
          </button>
          <button
            className={`btn btn-outline-info interaction-button ${
              disliked ? "active" : ""
            }`}
            onClick={handleDislikeClick}
          >
            <FontAwesomeIcon icon={faThumbsDown} />
            <span className="ms-1">{currentDislikeCount}</span>
          </button>
          <button className="btn btn-outline-info interaction-button">
            <FontAwesomeIcon icon={faComment} />
            <span className="ms-1">{commentCount}</span>
          </button>
          <button className="btn btn-outline-info interaction-button">
            <FontAwesomeIcon icon={faShare} />
            <span className="ms-1">{shareCount}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imageUrl: PropTypes.string, // Optional
  likeCount: PropTypes.number.isRequired,
  dislikeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  shareCount: PropTypes.number.isRequired,
};

export default ReviewCard;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChevronDown,
  faUsers,
  faComments,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./RightSidebar.css"; // Import your custom CSS file

// ... (import statements)

const RightSidebar = () => {
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [showAllFriends, setShowAllFriends] = useState(false);
  const [showAllGroupChats, setShowAllGroupChats] = useState(false);

  const toggleBrandsVisibility = () => {
    setShowAllBrands(!showAllBrands);
  };

  const toggleFriendsVisibility = () => {
    setShowAllFriends(!showAllFriends);
  };

  const toggleGroupChatsVisibility = () => {
    setShowAllGroupChats(!showAllGroupChats);
  };

  // Example data for profile images
  const followedBrands = [
    "brand1.jpg",
    "brand2.jpg",
    "brand3.jpg",
    // ...
  ];

  const friends = [
    "friend1.jpg",
    "friend2.jpg",
    "friend3.jpg",
    // ...
  ];

  const groupChats = [
    "group1.jpg",
    "group2.jpg",
    "group3.jpg",
    // ...
  ];

  const renderProfileImages = (images, limit, showAll) => {
    const displayedImages = showAll ? images : images.slice(0, limit);

    return displayedImages.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Profile ${index}`}
        className="profile-image"
      />
    ));
  };

  return (
    <div className="right-sidebar bg-dark text-white">
      <section className="sidebar-section">
        <h4>Followed Brands</h4>
        {followedBrands.length > 5 && (
          <button className="btn btn-sidebar" onClick={toggleBrandsVisibility}>
            {showAllBrands ? "See Less" : "See More"}{" "}
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        )}
        <ul className="list-unstyled followed-brands">
          {renderProfileImages(followedBrands, 5, showAllBrands)}
        </ul>
        {/* ... */}
      </section>

      <section className="sidebar-section">
        <h4>
          Friends & Family{" "}
          <FontAwesomeIcon icon={faUsers} className="section-icon" />
        </h4>
        <ul className="list-unstyled friends-list">
          {renderProfileImages(friends, 15, showAllFriends)}
        </ul>
        {friends.length > 15 && (
          <button className="btn btn-sidebar" onClick={toggleFriendsVisibility}>
            {showAllFriends ? "See Less" : "See More"}{" "}
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        )}
        {/* ... */}
      </section>

      <section className="sidebar-section">
        <h4>Group Conversations</h4>
        <ul className="list-unstyled group-chats">
          {renderProfileImages(groupChats, 5, showAllGroupChats)}
        </ul>
        {groupChats.length > 5 && (
          <button
            className="btn btn-sidebar"
            onClick={toggleGroupChatsVisibility}
          >
            {showAllGroupChats ? "See Less" : "See More"}{" "}
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        )}
        {/* ... */}
      </section>
    </div>
  );
};

export default RightSidebar;

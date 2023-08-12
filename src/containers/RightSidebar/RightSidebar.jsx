import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faUsers,
  faComments,
  faStar,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./RightSidebar.css"; // Import your custom CSS file

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

  const followedBrands = [
    { name: "Apple", image: "Computers.jpg", rating: 4.5 },
    { name: "Samsung", image: "HomeAppliances.jpg", rating: 3.7 },
    { name: "Dell", image: "Imac.jpg", rating: 4.5 },
    { name: "Lenovo", image: "Kitchenware.jpg", rating: 3.7 },
    { name: "HP", image: "mbookair.png", rating: 4.5 },
    { name: "MSI", image: "brand2.jpg", rating: 3.7 },
    { name: "Asus", image: "brand1.jpg", rating: 4.5 },
    { name: "Acer", image: "brand2.jpg", rating: 3.7 },
    // ...
  ];

  const friends = [
    { name: "Shahab Idrees", image: "/Shahab_Photo.png", rating: 4.8 },
    { name: "Asif Munir", image: "/Shahab_Photo.png", rating: 4.2 },
    { name: "Arif Akram", image: "/Shahab_Photo.png", rating: 4.8 },
    { name: "Ammad Chattha", image: "/Shahab_Photo.png", rating: 4.2 },
    { name: "Majid Mughal", image: "/Shahab_Photo.png", rating: 4.8 },
    { name: "Taimoor Khan", image: "/Shahab_Photo.png", rating: 4.2 },
    { name: "Ali Hassan", image: "/Shahab_Photo.png", rating: 4.8 },
    { name: "Babar Azam", image: "/Shahab_Photo.png", rating: 5.0 },
    { name: "Saud Shakeel", image: "/Shahab_Photo.png", rating: 4.8 },
    { name: "Asif Afridi", image: "/Shahab_Photo.png", rating: 4.2 },
    { name: "General Asim Munir", image: "/Shahab_Photo.png", rating: 4.8 },
    { name: "Kamran Saboor", image: "/Shahab_Photo.png", rating: 5.0 },
    { name: "Hamza Riaz", image: "/Shahab_Photo.png", rating: 4.8 },
    { name: "Asif Afridi", image: "/Shahab_Photo.png", rating: 4.2 },
    { name: "Ali Hassan", image: "/Shahab_Photo.png", rating: 4.8 },
    { name: "Asif Afridi", image: "/Shahab_Photo.png", rating: 4.2 },
    { name: "Shahab Idrees", image: "/Shahab_Photo.png", rating: 4.8 },
    { name: "Asif Munir", image: "/Shahab_Photo.png", rating: 4.2 },
    { name: "Arif Akram", image: "/Shahab_Photo.png", rating: 4.8 },
    { name: "Ammad Chattha", image: "/Shahab_Photo.png", rating: 4.2 },
    { name: "Majid Mughal", image: "/Shahab_Photo.png", rating: 4.8 },
    { name: "Taimoor Khan", image: "/Shahab_Photo.png", rating: 4.2 },
    { name: "Ali Hassan", image: "/Shahab_Photo.png", rating: 4.8 },
    { name: "Babar Azam", image: "/Shahab_Photo.png", rating: 5.0 },
    { name: "Saud Shakeel", image: "/Shahab_Photo.png", rating: 4.8 },
    { name: "Asif Afridi", image: "/Shahab_Photo.png", rating: 4.2 },
    { name: "General Asim Munir", image: "/Shahab_Photo.png", rating: 4.8 },
    { name: "Kamran Saboor", image: "/Shahab_Photo.png", rating: 5.0 },
    { name: "Hamza Riaz", image: "/Shahab_Photo.png", rating: 4.8 },
    { name: "Asif Afridi", image: "/Shahab_Photo.png", rating: 4.2 },
    { name: "Ali Hassan", image: "/Shahab_Photo.png", rating: 4.8 },
    { name: "Asif Afridi", image: "/Shahab_Photo.png", rating: 4.2 },
    // ...
  ];

  const groupChats = [
    { name: "Group Chat 1", image: "group1.jpg", rating: 3.9 },
    { name: "Group Chat 2", image: "group2.jpg", rating: 4.1 },
    { name: "Group Chat 3", image: "group1.jpg", rating: 3.9 },
    { name: "Group Chat 4", image: "group2.jpg", rating: 4.1 },
    { name: "Group Chat 5", image: "group1.jpg", rating: 3.9 },
    { name: "Group Chat 6", image: "group2.jpg", rating: 4.1 },
    { name: "Group Chat 7", image: "group1.jpg", rating: 3.9 },
    { name: "Group Chat 8", image: "group2.jpg", rating: 4.1 },
    // ...
  ];

  const renderContactCards = (contacts, limit, showAll) => {
    const displayedContacts = showAll ? contacts : contacts.slice(0, limit);

    return displayedContacts.map((contact, index) => (
      // Inside the renderContactCards function
      // Inside the renderContactCards function
      <div className="contact-card" key={index}>
        <img
          src={contact.image}
          alt={`Profile ${index}`}
          className="profile-image"
        />
        <div className="contact-info">
          <span className="contact-name">{contact.name}</span>
          <div className="rating-bar">
            <div
              className="rating-filled"
              style={{ width: `${contact.rating * 20}%` }}
            >
              <div className="rating-number">{contact.rating.toFixed(1)}</div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="right-sidebar bg-dark text-white">
      <section className="sidebar-section">
        <h4>Followed Brands</h4>
        <div className="contact-cards">
          {renderContactCards(followedBrands, 5, showAllBrands)}
        </div>
        {followedBrands.length > 5 && (
          <button className="btn btn-sidebar" onClick={toggleBrandsVisibility}>
            {showAllBrands ? "See Less" : "See More"}{" "}
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        )}
      </section>

      <section className="sidebar-section">
        <h4>
          Friends & Family{" "}
          <FontAwesomeIcon icon={faUsers} className="section-icon" />
        </h4>
        <div className="contact-cards">
          {renderContactCards(friends, 15, showAllFriends)}
        </div>
        {friends.length > 15 && (
          <button className="btn btn-sidebar" onClick={toggleFriendsVisibility}>
            {showAllFriends ? "See Less" : "See More"}{" "}
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        )}
      </section>

      <section className="sidebar-section">
        <h4>Group Conversations</h4>
        <div className="contact-cards">
          {renderContactCards(groupChats, 5, showAllGroupChats)}
        </div>
        {groupChats.length > 5 && (
          <button
            className="btn btn-sidebar"
            onClick={toggleGroupChatsVisibility}
          >
            {showAllGroupChats ? "See Less" : "See More"}{" "}
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        )}
      </section>
    </div>
  );
};

export default RightSidebar;

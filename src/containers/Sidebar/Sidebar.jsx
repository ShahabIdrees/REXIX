import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faHeart,
  faListAlt,
  faStar,
  faBookmark,
  faSearch,
  faBell,
  faEnvelope,
  faCaretDown,
  faCog,
  faSignOutAlt,
  faBars,
  faUsers,
  faCamera,
  faMusic,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css"; // Import your custom CSS file

const Sidebar = () => {
  return (
    <div className="sidebar bg-dark text-white flex-column">
      <button className="btn btn-sidebar btn-block mb-3">
        <FontAwesomeIcon icon={faPlus} className="me-2" />
        Create New Review
      </button>
      <div className="divider mb-3"></div>
      <button className="btn btn-sidebar mb-2">
        <FontAwesomeIcon icon={faHome} className="me-2" />
        Home
      </button>
      <button className="btn btn-sidebar mb-2">
        <FontAwesomeIcon icon={faUser} className="me-2" />
        Profile
      </button>
      <button className="btn btn-sidebar mb-2">
        <FontAwesomeIcon icon={faUsers} className="me-2" />
        Friends
      </button>
      <button className="btn btn-sidebar mb-2">
        <FontAwesomeIcon icon={faHeart} className="me-2" />
        Favorites
      </button>
      <button className="btn btn-sidebar mb-2">
        <FontAwesomeIcon icon={faListAlt} className="me-2" />
        My Reviews
      </button>
      <button className="btn btn-sidebar mb-2">
        <FontAwesomeIcon icon={faStar} className="me-2" />
        Top Reviews
      </button>
      <button className="btn btn-sidebar mb-2">
        <FontAwesomeIcon icon={faBookmark} className="me-2" />
        Saved Reviews
      </button>
      <div className="divider mb-3"></div>
      <button className="btn btn-sidebar mb-2">
        <FontAwesomeIcon icon={faSearch} className="me-2" />
        Explore
      </button>
      <div className="divider mb-3"></div>
      <button className="btn btn-sidebar mb-2">
        <FontAwesomeIcon icon={faCog} className="me-2" />
        Settings
      </button>
      <button className="btn btn-danger">
        <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;

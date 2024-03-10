import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import "./UserItem.css";

const UserItem = ({ user, viewDetails }) => {
  const navigateTo = useNavigate();

  const handleViewDetails = () => {
    navigateTo("/user");
    viewDetails(user.login);
  };

  const { avatar_url, login } = user;

  return (
    <div className="user">
      <img src={avatar_url} alt="profile pic" />
      <h2>{login}</h2>
      <button onClick={handleViewDetails}>View Details</button>
    </div>
  );
};

UserItem.Prototypes = {
  user: PropTypes.object.isRequired,
  viewDetails: PropTypes.func.isRequired,
};

export default UserItem;

import React from "react";
import "./ProfileCard.css";

const ProfileCard = ({ name, title, bio, image }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={name} />
      <div className="profile-card-text">
        <h3>{name}</h3>
        <p className="title">{title}</p>
        <p className="bio">{bio}</p>
      </div>
    </div>
  );
};

export default ProfileCard;

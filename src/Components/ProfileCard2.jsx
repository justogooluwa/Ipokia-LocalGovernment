import React from "react";
import "./ProfileCard2.css";

const ProfileCard2 = ({ name, title, bio, image, list, lists, bios }) => {
  return (
    <div className="profile-cards">
      <img src={image} alt={name} />
      <div className="profile-card-text">
        <h3>{name}</h3>
        <p className="title">{title}</p>
        <p className="bio">{bio}</p>

        {list && (
          <ul className="duties-list">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        <p className="bio">{bios}</p>

        {list && (
          <ul className="duties-list">
            {lists.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProfileCard2;

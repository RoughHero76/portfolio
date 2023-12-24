import React from 'react';
import "./ProfilePic.css"
const ProfilePic = ({ imageUrl }) => {
  return (
    <div className="profile-pic">
      <img src={require("../assets/ProfilePic.jpg")} className="profile-img"  alt="ProfilePic"  />
    </div>
  );
};

export default ProfilePic;

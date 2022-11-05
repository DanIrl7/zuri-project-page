import React from "react";
import image from './image.jpg'

export default function Profile() {
  return (
    <div className="profile-card">
      
      <div className="profile-pic">
        <img src={image} alt="dp" />
      </div>
      <p>Daniel Masona</p>
      <div id="slack">Daniel Masona</div>
    </div>
  );
}

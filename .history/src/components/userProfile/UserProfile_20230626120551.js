import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main_userprofile">
        <div className="profile_card user_profile_image">
          <div className="profile_image">
            <img src="profile.jpg" />
          </div>
          <h4>Fernando Faucho</h4>
          <p>CEO & Founder at Highly Inc</p>
        </div>
        <div className="profile_card">
          <div className="card_header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card_content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>
        </div>
      </div>
    );
  }
}
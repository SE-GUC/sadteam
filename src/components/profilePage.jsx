import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Edit from "./edit";
import MasterClassess from "./masterclassess";
import Tasks from "./tasks";
import Email from "./email";
import ProfilePic from "./uploadProfilePic";
import Fullname from "./fullName";
import Skills from "./skills";
class ProfilePage extends Component {
  render() {
    return (
      <div>
        <ProfilePic />
        <Fullname />
        <Email />
        <Skills />
        <Tasks />
        <MasterClassess />
        <Edit />
      </div>
    );
  }
}

export default ProfilePage;

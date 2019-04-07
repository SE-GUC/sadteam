
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Edit from "./edit";
import MasterClassess from "./masterclassess";
import Tasks from "./tasks";
import Email from "./email";
import ViewProfilePic  from "./viewProfilePicture";
import Fullname from "./fullName";
import Skills from "./skills";
class ProfilePage extends Component {
  render() {
    return (
      <div>
        <ViewProfilePic />
        <Fullname />
        <Email />
        <Skills />
        <Tasks />
        <MasterClassess />
      </div>
    );
  }
}

export default viewProfile;

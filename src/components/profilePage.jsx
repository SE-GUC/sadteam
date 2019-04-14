import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Edit from "./edit";
import Email from "./email";
import Tasks from "./tasks";
import ProfilePic from "./uploadProfilePic";
import Fullname from "./fullName";
import Skills from "./skills";
import RecommendTask from "./recommendTaskbutton";
import Axios from "axios";
class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName:null,
      middleName:null,
      lastName:null,
      FullName: firstName+" "+" "+middleName+" "+lastName+" ",
      email: props.email, // it should be passed from the login component,
      tasks: [],
      user: null,
      masterclassess: []
    };
  }
  getTasksfromDb() {
    Axios.get(""api/tasks/")
      .then(res => res)
      .then(data => this.setState({ tasks: data }));
  }
  getUserfromDb() {
    Axios.get("api/users/records/" + this.state.email)
      .then(res => res)
      .then(data => this.setState({ user: data.user }));
  }
  getMasterClassesFromDb() {
    Axios.get("api/masterclasses")
      .then(res => res)
      .then(data => this.setState({ masterclassess: data.masterclassess }));
  }
  componentDidMount() {
    this.getUserfromDb();
    this.getMasterClassesFromDb();
    this.getTasksfromDb();
  }
  render() {
    const { FullName, email, MasterClassess, tasks, user } = this.state;
    return (
      <div>
        <ProfilePic />
        <Fullname name={FullName} />
        <Email email={email} />
        <Skills />
        <Tasks />
        <MasterClassess masterclassess={MasterClassess} />
        <Edit />
        <p />
        <RecommendTask email={email} />
      </div>
    );
  }
}

export default ProfilePage;

import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Edit from "./edit";
import Email from "./email";
import Tasks from "./tasks";
import ProfilePic from "./uploadProfilePic";
import Fullname from "./fullName";
import Skills from "./skills";
import MasterClassessLink from "./masterclassess";
import RecommendTask from "./recommendTaskbutton";
import Axios from "axios";
class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FullName: "Ahmed",
      email: props.email, // it should be passed from the login component,
      tasks: [],
      user: null,
      masterclassess: []
    };
  }
  getTasksfromDb() {
    Axios.get("http://localhost:8080/api/tasks/")
      .then(res => res)
      .then(data => this.setState({ tasks: data }));
  }
  getUserfromDb() {
    Axios.get("http://localhost:8080/api/users/records/" + this.state.email)
      .then(res => res)
      .then(data => this.setState({ user: data.user }));
  }
  getMasterClassesFromDb() {
    Axios.get("http://localhost:8080/api/masterclasses")
      .then(res => res)
      .then(data => this.setState({ masterclassess: data.masterclassess }));
  }
  componentDidMount() {
    this.getUserfromDb();
    this.getMasterClassesFromDb();
    this.getTasksfromDb();
    this.setState({FullName})
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
        <MasterClassessLink masterclassess={MasterClassess} />
        <Edit />
        <p />
        <RecommendTask email={email} />
      </div>
    );
  }
}

export default ProfilePage;

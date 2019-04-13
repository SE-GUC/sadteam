
// -- backend + front end => Register button is working to be able to use it to make 
// any action we want (insert in db)

// -- as unregistered user , I could register as member

import React from "react";
import axios from "axios"
import Component from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
class RegisterMember extends React.Component{
  constructor(){
  super();
  this.state = {
    firstName : '' ,
    middleName : '' ,
    lastName : '' ,
    password : '' ,
    email : '' ,
    skills : [],
    age : 0,
    birthDate : null,
    educationakBackground :'',
    portofolio : '' 
  }
}
  handleChange = event => {
    this.setState({ firstName: event.target.value });
    this.setState({ middleName: event.target.value });
    this.setState({ lastName: event.target.value });
    this.setState({ password: event.target.value });
    this.setState({ email: event.target.value });
    this.setState({ skills: event.target.value });
    this.setState({ age: event.target.value });
    this.setState({ birthDate: event.target.value });
    this.setState({ educationalBackground: event.target.value });
    this.setState({ portofolio: event.target.value });
  }

  handleSubmit = event => {
    const user = {
      firstName: this.state.firstName,
      middleName: this.state.middleName,
      lastName: this.state.firstName,
      password: this.state.firstName,
      email: this.state.firstName,
      skills: this.state.firstName,
      birthDate: this.state.birthDate,
      educationalBackground: this.state.educationalBackground,
      portofolio: this.state.portofolio
    };

    axios.post(`http://localhost:8080/api/users`, { user })
      .then(alert(user.firstName)) // just sending an alert by the data i typed in the first name
      event.preventDefault();         // to make sure that register button is working

      
  }
  
  


render(){
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit = {this.handleSubmit}>
            <p className="h4 text-center mb-4">Lirten Sign up</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              First Name
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              placeholder="Enter your first name"
              onChange = {this.handleChange}
            />
            <br />
             <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Middle Name
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              placeholder="Enter your middle name"
              onChange = {this.handleChange}
            />
            <br />
             <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Last Name
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              placeholder="Enter your last name"
              onChange = {this.handleChange}
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Age
            </label>
            <input
              type="Number"
              id="defaultFormRegisterEmailEx"
              className="form-control"
              placeholder="Enter your age"
              onChange = {this.handleChange}
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormRegisterEmailEx"
              className="form-control"
              placeholder=".......@example.com"
              onChange = {this.handleChange}
            />
            <br />
            <label
              htmlFor="defaultFormRegisterConfirmEx"
              className="grey-text"
            >
              Confirm your email
            </label>
            <input
              type="email"
              id="defaultFormRegisterConfirmEx"
              className="form-control"
              placeholder=".......@example.com"
              onChange = {this.handleChange}
            />
            <br />
            <label
              htmlFor="defaultFormRegisterPasswordEx"
              className="grey-text"
            >
              Password
            </label>
            <input
              type="password"
              id="defaultFormRegisterPasswordEx"
              className="form-control"
              placeholder="Enter your password"
              onChange = {this.handleChange}
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Birthdate
            </label>
            <input
              type="Date"
              id="defaultFormRegisterEmailEx"
              className="form-control"
              onChange = {this.handleChange}
            />
            <br />
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Skills
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              placeholder="Write down all your skills here"
              onChange = {this.handleChange}
            />
            <br />
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Educational Background
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              placeholder="Enter your educational background"
              onChange = {this.handleChange}
            />
            <br />
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Portofolio
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              placeholder="Enter your portofolio"
              onChange = {this.handleChange}
            />
            <br />
            <div className="text-center mt-4">
              <MDBBtn color="primary" type="submit">
                Register
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
}
export default RegisterMember; 

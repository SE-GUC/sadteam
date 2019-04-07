// -- new user registeration form


import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const FormPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h4 text-center mb-4">Lirten Sign up</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              First Name
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              placeholder="Enter your first name"
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
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Birthdate
            </label>
            <input
              type="Date"
              id="defaultFormRegisterEmailEx"
              className="form-control"
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

export default FormPage;
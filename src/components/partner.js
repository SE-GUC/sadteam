// -- Creating account as a partner - form
// -- Business information, partners, board members, events organised, and field of work

import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const FormPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h4 text-center mb-4 text-primary">Lirten Partner Sign up</p>
            <label htmlFor="defaultFormRegisterNameEx" className="text-primary">
              Partner Name
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              placeholder="Enter your name"
            />
            <br />
             <label htmlFor="defaultFormRegisterNameEx" className="text-primary">
              Business Information
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              placeholder="Please type your business information"
            />
            <br />
             <label htmlFor="defaultFormRegisterNameEx" className="text-primary">
              Partners
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              placeholder="Please enter your partners names"
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="text-primary">
              Board Members
            </label>
            <input
              type="text"
              id="defaultFormRegisterEmailEx"
              className="form-control"
              placeholder="Your board members"
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="text-primary">
              Events Oragnized
            </label>
            <input
              type="email"
              id="defaultFormRegisterEmailEx"
              className="form-control"
              placeholder="Events"
            />
            <br />
            <label
              htmlFor="defaultFormRegisterConfirmEx"
              className="text-primary"
            >
              Field Of Work
            </label>
            <input
              type="email"
              id="defaultFormRegisterConfirmEx"
              className="form-control"
              placeholder="Write down your work field "
            />
            <br />
            <label htmlFor="defaultFormRegisterNameEx" className="text-primary">
              Email
            </label>
            <input
              type="email"
              id="defaultFormRegisterNameEx"
              className="form-control"
              placeholder="....@example.com"
            />
            <br />
            <label
              htmlFor="defaultFormRegisterPasswordEx"
              className="text-primary"
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

/*
<br />
            <select class="dropdown" multiple>
            <option value ="" disabled selected>
              Skills
              </option>
              <option value ="1">Java</option>
              <option value ="2">CSS</option>
              <option value ="3">HTML</option>
              </select>
            <br />*/
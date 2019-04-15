// -- Creating account as agency - form
// -- Business information, partners, board members, events organised, and reports/studies



import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const FormPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h4 text-center mb-4 text-warning ">Lirten Consultancy Sign up</p>
            <label htmlFor="defaultFormRegisterNameEx" className="text-warning">
              Consultancy Name
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              placeholder="Enter consultancy name"
            />
            <br />
             <label htmlFor="defaultFormRegisterNameEx" className="text-warning">
              Business Information
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              placeholder="Basic business info"
            />
            <br />
             <label htmlFor="defaultFormRegisterNameEx" className="text-warning">
              Partners
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              placeholder="Consultancy partners"
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="text-warning">
              Board Members
            </label>
            <input
              type="text"
              id="defaultFormRegisterEmailEx"
              className="form-control"
              placeholder="Consultancy board members"
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="text-warning">
              Events Oragnized
            </label>
            <input
              type="email"
              id="defaultFormRegisterEmailEx"
              className="form-control"
              placeholder="Events oragnized by agency"
            />
            <br />
            <label htmlFor="defaultFormRegisterNameEx" className="text-warning">
              Reports/Studies
            </label>
            <input
              type="email"
              id="defaultFormRegisterNameEx"
              className="form-control"
              placeholder="Reports or studies consultancy have posted"
            />
            <br />
            <label htmlFor="defaultFormRegisterNameEx" className="text-warning">
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
              className="text-warning"
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
            <div className="text-center mt-4 text-warning">
              <MDBBtn color="warning" type="submit">
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
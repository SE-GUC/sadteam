// -- Creating account as partner coworking space - form
// -- basic information, the facilities, rooms, 
// business plans they offer the availability of their reservations.



import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const FormPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h4 text-center mb-4 text-primary ">Partner Coworking Space Register</p>
            <label htmlFor="defaultFormRegisterNameEx" className="text-primary">
              Space Name
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              placeholder="Enter space name"
            />
            <br />
             <label htmlFor="defaultFormRegisterNameEx" className="text-primary">
              Info
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              placeholder="Basic info"
            />
            <br />
             <label htmlFor="defaultFormRegisterNameEx" className="text-primary">
              Facilities
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              placeholder="Facilities"
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="text-primary">
              Rooms
            </label>
            <input
              type="text"
              id="defaultFormRegisterEmailEx"
              className="form-control"
              placeholder="Rooms"
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="text-primary">
              Business Plans
            </label>
            <input
              type="email"
              id="defaultFormRegisterEmailEx"
              className="form-control"
              placeholder="Business plans you offer the availability of your reservations"
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
            <div className="text-center mt-4 text-primary">
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
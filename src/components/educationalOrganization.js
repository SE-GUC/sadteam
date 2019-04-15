// -- Creating account as educational organization - form
// -- Basic information, courses, trainers/educators, certificates, and training programs



import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const FormPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h4 text-center mb-4 text-primary ">Educational Organization Register</p>
            <label htmlFor="defaultFormRegisterNameEx" className="text-primary">
              Organization Name
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              placeholder="Enter organization name"
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
              Courses
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
              placeholder="Courses you offer"
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="text-primary">
              Trainers/Educators
            </label>
            <input
              type="text"
              id="defaultFormRegisterEmailEx"
              className="form-control"
              placeholder="Trainers"
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="text-primary">
              Events Oragnized
            </label>
            <input
              type="email"
              id="defaultFormRegisterEmailEx"
              className="form-control"
              placeholder="Events oragnized by agency"
            />
            <br />
            <label htmlFor="defaultFormRegisterNameEx" className="text-primary">
              Certificates
            </label>
            <input
              type="email"
              id="defaultFormRegisterNameEx"
              className="form-control"
              placeholder="Certificates you supply"
            />
            <br />
            <label htmlFor="defaultFormRegisterNameEx" className="text-primary">
              Training Programs
            </label>
            <input
              type="email"
              id="defaultFormRegisterNameEx"
              className="form-control"
              placeholder="Training programs"
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
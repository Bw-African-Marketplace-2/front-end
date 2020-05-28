import React from "react";
import { Link } from "react-router-dom";
import api from "./auth/api.js";
import styled from "styled-components";

const StyledForm = styled.div`
.header{
  font-family: 'Barlow', sans-serif;
  background-color: #003049;
}     
  

.header nav{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: no-wrap;
  flex-direction: row;
  padding: 2% 12%;
  border-bottom: 0.2rem solid #003049;
  color: white;
     
}

.header nav a{
font-size: 1.6 rem;
text-decoration: none;
color: #edf2f4;
padding: 20px;

}
`

export default function Form(props) {
  const {
    values,
    onInputChange,
    onSubmit,

    disabled,
    errors,
    onCheckboxChange,
  } = props;

  return (
    <StyledForm>
    <>
      <form className="form container" onSubmit={onSubmit}>
      <div className='header'>
         <nav>
          <a href="https://africanmarketplace-2.netlify.app/index.html">Home</a>
          <a href="https://africanmarketplace-2.netlify.app/about.html" target="_blank">About Us</a>
         </nav>
         
        </div> 
        <div className="form-group submit">
          <h2>Register</h2>

          <div className="errors">
            <div>{errors.username}</div>
            <div>{errors.email}</div>

            <div>{errors.role}</div>
          </div>
        </div>

        <div className="form-group inputs">
          <h4>General information</h4>

          <label>
            Username&nbsp;
            <input
              value={values.username}
              onChange={onInputChange}
              name="username"
              type="text"
            />
          </label>

          <br/>
          <br/>

          <label>
            Email&nbsp;
            <input
              value={values.email}
              onChange={onInputChange}
              name="email"
              type="email"
            />
          </label>

          <br/>
          <br/>

          <label>
            Password&nbsp;
            <input
              value={values.password}
              onChange={onInputChange}
              name="password"
              type="password"
            />
          </label>

          <br/>
          <br/>

          <button disabled={disabled}>Register</button>
        </div>
      </form>
      <h4>Already a Member?</h4>
      <Link to="/login">Login Here</Link>
    </>
    </StyledForm>
  );
}

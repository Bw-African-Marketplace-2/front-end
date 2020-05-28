import React from "react";
import { Link } from "react-router-dom";
import api from "./auth/api.js";
import styled from "styled-components";

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
    <>
      <form className="form container" onSubmit={onSubmit}>
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
  );
}

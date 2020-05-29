import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { api } from "./auth/api";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from "./reducers/actions";
import styled from "styled-components";

const StyledLogin = styled.div`
  .header {
    font-family: "Barlow", sans-serif;
    background-color: #003049;
  }

  .header nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: no-wrap;
    flex-direction: row;
    padding: 2% 12%;
    border-bottom: 0.2rem solid #003049;
    color: white;
  }

  .header nav a {
    font-size: 1.6 rem;
    text-decoration: none;
    color: #edf2f4;
    padding: 20px;
  }
`;
const schema = yup.object().shape({
  username: yup.string().required("Username is Required"),
  password: yup.string().required("Password is Required"),
  email: yup.string().email("Invalid email").required("Email is Required"),
});

export default function Login(props) {
  const { register, handleSubmit, errors, getValues } = useForm({
    validationSchema: schema,
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch({ type: LOGIN_START });
    const values = getValues();
    api()
      .post("/api/auth/login", values)
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        history.push("/cards");
        console.log(res);
      })
      .catch((err) => {
        dispatch({ type: LOGIN_FAIL, payload: err });
        console.log(err);
      });
  };

  return (
    <StyledLogin>
      <form className="form container" onSubmit={handleSubmit(onSubmit)}>
        <div className="header">
          <nav>
            <a href="https://africanmarketplace-2.netlify.app/index.html">
              Home
            </a>
            <a
              href="https://africanmarketplace-2.netlify.app/about.html"
              target="_blank"
            >
              About Us
            </a>
          </nav>
        </div>
        <div className="form-group submit">
          <h2>Sign In</h2>

          <div className="errors">
            <p style={{ color: "red", fontWeight: "bold" }}>
              {errors.username && errors.username.message}
            </p>
            <p style={{ color: "red", fontWeight: "bold" }}>
              {errors.email && errors.email.message}
            </p>
            <p style={{ color: "red", fontWeight: "bold" }}>
              {errors.password && errors.password.message}
            </p>
          </div>
        </div>
        <div className="form-group inputs">
          <h4>General information</h4>
          <label>
            Username&nbsp;
            <input ref={register} name="username" type="text" />
          </label>
          <br />
          <br />
          <label>
            Email&nbsp;
            <input ref={register} name="email" type="email" />
          </label>
          <br />
          <br />
          <label>
            Password&nbsp;
            <input ref={register} name="password" type="password" />
          </label>
        </div>
        <br />

        <button> Log In </button>
        <br />
        <br />

        <Link to={"/"}>Or Register</Link>
        <br />
      </form>
    </StyledLogin>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { api } from "./auth/api";

const schema = yup.object().shape({
  username: yup.string().required("Username is Required"),
  password: yup.string().required("Password is Required"),
  email: yup.string().email("Invalid email").required("Email is Required"),
});

export default function Login(props) {
  const { register, handleSubmit, errors, getValues } = useForm({
    validationSchema: schema,
  });

  const onSubmit = () => {
    const values = getValues();
    api()
      .post("/api/auth/login", values)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="form container" onSubmit={handleSubmit(onSubmit)}>
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
        <label>
          Email
          <input ref={register} name="email" type="email" />
        </label>
        <label>
          Password
          <input ref={register} name="password" type="password" />
        </label>
      </div>
      <button> Log In </button>
      <br/>
      <Link to={'/registration'}>Or Register</Link>
      <br/>
      <Link to={"/cards"}> Products </Link>
      
      
    </form>
  );
}

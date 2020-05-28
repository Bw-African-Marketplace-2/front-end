import "./App.css";
import React, { useState, useEffect } from "react";
import Login from "./Login.js";
import Form from "./Form.js";
import formSchema from "./formSchema.js";
import User from "./Product.js";
import Cards from "./Cards.js";
import { ProtectedRoute } from "./auth/ProtectedRoute";

import { Link } from "react-router-dom";
import { api } from "./auth/api.js";

import {
  useParams,
  NavLink,
  Route,
  Switch,
  useRouteMatch,
  useHistory,
} from "react-router-dom";

import { useDispatch } from "react-redux";
import axios from "axios";
import * as yup from "yup";
import useForm from "react-hook-form";

const initialFormValues = {
  username: "",
  email: "",
  password: "",
};

const initialFormErrors = {
  username: "",
  email: "",
  password: "",
};

const initialUsers = [];
const initialDisabled = true;

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const history = useHistory();
  const postNewUser = (newUser) => {
    api()
      .post("/api/auth/register", newUser)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        history.push("/login");
        console.log(res);
      })
      .catch((err) => {
        debugger;
      });
    // .finally(() => {
    //   setFormValues(initialFormValues);

    // });
  };

  const onInputChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
    };
    console.log(newUser);
    postNewUser(newUser);
    //debugger
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  //debugger;
  return (
    <div className="App">
      Sign-In and Registration
      <Switch>
        <Route exact path="/">
          <Form
            values={formValues}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <ProtectedRoute path="/cards" component={Cards} />
      </Switch>
    </div>
  );
}

export default App;

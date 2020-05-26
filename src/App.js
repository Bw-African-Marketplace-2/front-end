

import "./App.css";
import React, { useState, useEffect } from 'react';
import Login from './Login.js';
import Form from './Form.js';

import axios from 'axios';
import * as yup from 'yup';
import { useForm } from "react-hook-form";

const initialFormValues = {
 
  username: '',
  email: '',

  password: '',
  
  
  
  
    
  
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  
}

const initialUsers = []
const initialDisabled = true

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
 
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  return <div className="App">Sign-In and Registration</div>;
}

export default App;

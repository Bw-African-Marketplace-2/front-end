

import "./App.css";
import React, { useState, useEffect } from 'react';
import Login from './Login.js';
import Form from './Form.js';
import formSchema from './formSchema.js'
import User from './User.js'

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
  const getUsers = () => {
    
  axios.get('')
      .then(res => {
        setUsers(res.data)
        console.log(res.data)
      })
      .catch(err => {
        //debugger
      })
  }

  const postNewUser= newUser=> {
   
  axios.post('', newUser)
      .then(res => {
        setUsers([res.data, ...users])
        
      })
      .catch(err => {
        //debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    yup
      .reach(formSchema, name)

      .validate(value)
      .then(valid => {
     
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      })
      .catch(err => {
        
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })


    setFormValues({
      ...formValues,
      [name]: value 
    })
  }



  const onSubmit = evt => {
    evt.preventDefault()

    const newUser = {
      username: formValues.username.trim(),
      special: formValues.special.trim(),
      size: formValues.size,
     
      
      toppings: Object.keys(formValues.toppings)
        .filter(topping => formValues.toppings[topping] === true)
      
    
    }
  
    postNewUser(newUser)
    //debugger
  }

  
  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    
    formSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  debugger;
  return( <div className="App">Sign-In and Registration

    <Form
    values={formValues}
    onInputChange={onInputChange}
    onSubmit={onSubmit}

    disabled={disabled}
    errors={formErrors}
   
    />

  {
    users.map(user => {
      return (
        <User key={user.id} details={user} />
     )
    })
  }
</div>
  )
}

export default App;

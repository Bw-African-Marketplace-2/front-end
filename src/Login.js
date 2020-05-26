
import React from 'react';
import {Link} from 'react-router-dom'

export default function Login(props) {

    const {
      values,
      onInputChange,
      onSubmit,
     
      disabled,
      errors,
      
    } = props
  
    return (
        
    
      <form className='form container' onSubmit={onSubmit}>
        <div className='form-group submit'>
        <Link to={'/'}> Register</Link>
          <h2>Sign In</h2>
  
         
          
  
          <div className='errors'>
            
            <div>{errors.username}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            
            
          </div>
        </div>
  
        <div className='form-group inputs'>
          <h4>General information</h4>
  
          
          <label>Username&nbsp;
            <input
              value={values.username}
              onChange={onInputChange}
              name='username'
              type='text'
            />
          </label>
  
          <label>Email
            <input
              value={values.special}
              onChange={onInputChange}
              name='special'
              type='email'
            />
          </label>

          <label>Password
          <input
            value={values.password}
            onChange={onInputChange}
            name='password'
            type='password'
          />
        </label>
  
          
  
         
          
          
        </div>
  
        
            

        <button disabled={disabled}>Log In </button>
  
         
        
      </form>
     
    )
  }
  
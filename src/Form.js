import React from 'react';
import {Link} from 'react-router-dom'



export default function Form(props) {

    const {
      values,
      onInputChange,
      onSubmit,
     
      disabled,
      errors,
      onCheckboxChange,
    } = props
  
    return (
        
    
      <form className='form container' onSubmit={onSubmit}>
        <div className='form-group submit'>
        
          <h2>Create your Pizza</h2>
  
         
          <button disabled={disabled}>Add to Order</button>
  
          <div className='errors'>
            
            <div>{errors.username}</div>
            <div>{errors.special}</div>
           
            <div>{errors.role}</div>
            
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
      </form>
     
    )
  }
  
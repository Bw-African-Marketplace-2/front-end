
import React from 'react';
import {Link} from 'react-router-dom'

export default function Login(props) {

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
        <Link to={'/'}> Home</Link>
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
  
          
          <label>Name&nbsp;
            <input
              value={values.username}
              onChange={onInputChange}
              name='username'
              type='text'
            />
          </label>
  
          <label>Special Instructions
            <input
              value={values.special}
              onChange={onInputChange}
              name='special'
              type='text'
            />
          </label>
  
          
  
         
          <label>Pizza Size
            <select
              onChange={onInputChange}
              value={values.size}
              name='size'
            >
              <option value=''>- Select an option -</option>
              <option value='Small'>Small</option>
              <option value='Medium'>Medium</option>
              <option value='Large'>Large</option>
              <option value='Extra-Large'>Extra-Large</option>
            </select>
          </label>
  
          
          
        </div>
  
        <div className='form-group checkboxes'>
        <h4>Toppings</h4>

            <label>Mushrooms
                <input
                    type='checkbox'
                    name='mushrooms'
                    checked={values.toppings.mushrooms}
                    onChange={onCheckboxChange}
                />
            </label>

            <label>Pinapples
                <input
                    type='checkbox'
                    name='pinapples'
                    checked={values.toppings.pineapples}
                    onChange={onCheckboxChange}
                />
            </label>

            <label>Salami
                <input
                    type='checkbox'
                    name='salami'
                    checked={values.toppings.salami}
                    onChange={onCheckboxChange}
                />
            </label>

            <label>Jalapenos
                <input
                    type='checkbox'
                    name='jalapenos'
                    checked={values.toppings.jalapenos}
                    onChange={onCheckboxChange}
                />
            </label>
  
         
        </div>
      </form>
     
    )
  }
  
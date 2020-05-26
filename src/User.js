import React from 'react'

function User({ details }) {
    if (!details) {
      return <h3>Working fetching your friend&apos;s details...</h3>
    }
  
    return (
      <div className='friend container'>
        <h2>{details.username}</h2>
        <p>Special Instructions: {details.special}</p>
        
        <p>Size: {details.size}</p>
       
        
  
        {
          !!details.toppings && !!details.toppings.length &&
          <div>
            Toppings:
            <ul>
              {details.toppings.map((topping, idx) => <li key={idx}>{topping}</li>)}
              
            </ul>
          </div>
        }
      </div>
    )
  }
  
  export default User;
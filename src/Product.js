import React from 'react';

export default function Product({ details }) {
    if (!details) {
      return <h3>Working fetching your user&apos;s details...</h3>
    }
  
    return (
      <div className='product container'>
     
      {
        
        <div>
          
          <h2>{details.product_name}</h2>
          <img src={details.image}/>
          <p>Price: {details.price}</p>
        
        </div>
        
      }
    </div>
    )
  }
  

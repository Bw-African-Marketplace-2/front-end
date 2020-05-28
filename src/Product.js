import React from 'react';

export default function Product({ details }) {
    if (!details) {
      return <h3>Working fetching your user&apos;s details...</h3>
    }
  
    return (
      <div className='product container'>
     
  

      {
        !!details.products && !!details.products.length &&
        <div>
          Product
        </div>
      }
    </div>
    )
  }
  

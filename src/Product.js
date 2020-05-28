import React from 'react';
import styled from 'styled-components';

const StyledProduct = styled.div`
.productContainer {
    width: 500px;
    
  }
  img{
    width:500px;
  }

  

`

export default function Product({ details }) {
    if (!details) {
      return <h3>Working fetching your user&apos;s details...</h3>
    }
  
    return (
      <StyledProduct>
      <div className='productContainer'>
     
      {
        
        <div>
          
          <h2>{details.product_name}</h2>
          <img src={details.image}/>
          <p>Price: {details.price}</p>
        
        </div>
        
      }
    </div>
    </StyledProduct>
    )
  }
  

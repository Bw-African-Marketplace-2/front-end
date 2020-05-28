
import {api} from './auth/api.js';
import Product from './Product.js';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const StyledProducts = styled.div`
.products {
  display: flex;  
}
.header{
    font-family: 'Barlow', sans-serif;
    background-color: #003049;
}     
    

.header nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: no-wrap;
    flex-direction: row;
    padding: 2% 12%;
    border-bottom: 0.2rem solid #003049;
    color: white;
    


      
}
    
`

const initialProducts = [{description: "Beautiful fresh farmed brown eggs.",
id: 1,
image: "https://i.imgur.com/skrBl9o.jpg",
price: 3,
product_name: "Eggs",
user_id: 1}]

export default function Cards() {
  const [products, setProducts] = useState(initialProducts)
  
  const getProducts = () => {
    api()
      .get("/api/products")
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setProducts(res.data)

        
      })
      .catch((err) => {
        debugger;
      });
    }

   

    useEffect(() => {
      getProducts()
    }, [])
    debugger;
    return(
      <StyledProducts>
      
       <div className='header'>
         <nav>
          <a href="https://africanmarketplace-2.netlify.app/index.html">Home</a>
          <a href="https://africanmarketplace-2.netlify.app/about.html" target="_blank">About Us</a>
         </nav>
         <div className='social'>
          <a href="https://twitter.com/sautiorg" class="fa fa-twitter" target="_blank"></a>
          <a href="https://www.facebook.com/sautiorg/" class="fa fa-facebook" target="_blank"></a>
         </div>
        </div> 
    <div className='products'>    
    {
      products.map(product => {
        return (
          <Product key={product.id} details={product} />
        )
      })
    }
    </div>
    </StyledProducts>
    )
}
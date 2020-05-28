
import {api} from './auth/api.js';
import Product from './Product.js';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components'

const StyledProducts = styled.div`
.products {
    display: flex;
    
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
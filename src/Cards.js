
import {api} from './auth/api.js';
import Product from './Product.js';
import React, { useState, useEffect } from 'react'
import axios from 'axios';

const initialProducts = []

export default function Cards() {
  const [products, setProducts] = useState(initialProducts)
  
  const getProducts = () => {
    api()
      .get("/api/auth/products")
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

    return(
      <div className='products'>
    {
      products.map(product => {
        return (
          <Product key={product.id} details={product} />
        )
      })
    }
    </div>
    )
}
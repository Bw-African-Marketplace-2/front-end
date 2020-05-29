import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { api } from "./auth/api";
import styled from 'styled-components';

const StyledAddProduct = styled.div`
  color: black;
  text-decoration: none;
  .productContainer {
    width: 500px;
    font-family: "Barlow", sans-serif;
  }
  img {
    width: 500px;
  }
  .header{
    font-family: 'Barlow', sans-serif;
    background-color: #003049;
  }     
    
  
  .header nav{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: no-wrap;
    flex-direction: row;
    padding: 2% 12%;
    border-bottom: 0.2rem solid #003049;
    color: white;
       
  }
  
  .header nav a{
  font-size: 1.6 rem;
  text-decoration: none;
  color: #edf2f4;
  padding: 20px;
  
  }
  h1{
    font-family: 'Barlow', sans-serif;
  }
`;

export default function AddProduct() {
  const { id } = useSelector((state) => state.userReducer.user);
  const history = useHistory();
  const [form, setForm] = useState({
    product_name: "",
    image: "",
    description: "",
    price: "",
    users_id: id,
  });
  console.log(form);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    api()
      .post("/api/products/add", form)
      .then((res) => {
        console.log(res);
        history.push("/cards");
      })
      .catch((err) => console.log(err));
  };

  return (
    <StyledAddProduct>
      <div className='header'>
         <nav>
          <a href="https://africanmarketplace-2.netlify.app/index.html">Home</a>
          <a href="https://africanmarketplace-2.netlify.app/about.html" target="_blank">About Us</a>
         </nav>
         
        </div> 
        <br/>
        <br/>
      <h1>Add New Product</h1>
      <br/>
      <br/>
    <form onSubmit={handleSubmit}>
      <input
        name="product_name"
        value={form.product_name}
        onChange={handleChange}
        placeholder="Product Name"
      />
      <br/>
      <br/>
    
      <input
        name="image"
        value={form.image}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <br/>
      <br/>
      <input
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Product Description"
      />
      <br/>
      <br/>
      <input
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="Product Price"
      />
      <br/>
      <br/>
      <button type="submit">Add New Product</button>
    </form>
    </StyledAddProduct>
  );
}

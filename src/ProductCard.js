import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { api } from "./auth/api";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  img {
    width: 25%;
  }
  h3 {
    font-size: 3rem;
  }
  form {
    font-family: 'Barlow', sans-serif;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
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
  label{
    font-weight: bold;
  }
`;

export default function ProductCard() {
  const [product, setProduct] = useState();
  const [edit, setEdit] = useState(false);
  const { id } = useParams();
  const history = useHistory();
  console.log(product);

  useEffect(() => {
    api()
      .get(`/api/products/single/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    api()
      .put(`/api/products/update/${id}`, product)
      .then((res) => {
        console.log(res);
        history.push("/cards");
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = () => {
    api()
      .delete(`/api/products/delete/${id}`)
      .then((res) => {
        history.push("/cards");
      });
  };

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <div className='header'>
         <nav>
          <a href="https://africanmarketplace-2.netlify.app/index.html">Home</a>
          <a href="https://africanmarketplace-2.netlify.app/about.html" target="_blank">About Us</a>
         </nav>
         
      </div> 
      {product && <h3> {product.product_name} </h3>}
      {product && <img src={product.image} alt={product.name} />}
      {product && <p> {product.description} </p>}
      {product && <p>Price: ${product.price} </p>}
      {!edit && <button onClick={() => setEdit(true)}>Edit Product</button>}
      {edit && (
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <br/>
          <br/>
          <input
            name="product_name"
            value={product && product.product_name}
            onChange={handleChange}
          />
          <br/>
          <br/>
          <label>Image Url</label>
          <br/>
          <br/>
          <input
            name="image"
            value={product && product.image}
            onChange={handleChange}
          />
          <br/>
          <br/>
          <label>Description</label>
          <br/>
          <br/>
          <input
            name="description"
            value={product && product.description}
            onChange={handleChange}
          />
          <br/>
          <br/>
          <label>Price</label>
          <br/>
          <br/>
          <input
            name="price"
            value={product && product.price}
            onChange={handleChange}
          />
          <br/>
          <br/>
          <button type="submit">Save Changes</button>
          <br/>
          <br/>
          <button onClick={handleDelete}>Delete</button>
        </form>
      )}
    </Container>
  );
}

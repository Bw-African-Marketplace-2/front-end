import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { api } from "./auth/api";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  img {
    width: 25%;
  }
  h3 {
    font-size: 3rem;
  }
  form {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
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
      {product && <h3> {product.product_name} </h3>}
      {product && <img src={product.image} alt={product.name} />}
      {product && <p> {product.description} </p>}
      {product && <p>Price: ${product.price} </p>}
      {!edit && <button onClick={() => setEdit(true)}>Edit Product</button>}
      {edit && (
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            name="product_name"
            value={product && product.product_name}
            onChange={handleChange}
          />
          <label>Image Url</label>
          <input
            name="image"
            value={product && product.image}
            onChange={handleChange}
          />
          <label>Description</label>
          <input
            name="description"
            value={product && product.description}
            onChange={handleChange}
          />
          <label>Price</label>
          <input
            name="price"
            value={product && product.price}
            onChange={handleChange}
          />
          <button type="submit">Save Changes</button>
          <button onClick={handleDelete}>Delete</button>
        </form>
      )}
    </Container>
  );
}

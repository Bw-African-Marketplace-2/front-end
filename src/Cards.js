import { api } from "./auth/api.js";
import Product from "./Product.js";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StyledProducts = styled.div`
  .html {
    font-family: "Barlow", sans-serif;
  }
  .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .header {
    font-family: "Barlow", sans-serif;
    background-color: #003049;
  }

  .header nav {
    font-family: "Open Sans Condensed", sans-serif;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: no-wrap;
    flex-direction: row;
    padding: 2% 12%;
    border-bottom: 0.2rem solid #003049;
    color: white;
  }

  .header nav a {
    font-size: 1 rem;
    text-decoration: none;
    color: #edf2f4;
    padding: 0 3rem;
  }
`;

const initialProducts = [
  {
    description: "Beautiful fresh farmed brown eggs.",
    id: 1,
    image: "https://i.imgur.com/skrBl9o.jpg",
    price: 3,
    product_name: "Eggs",
    user_id: 1,
  },
];

export default function Cards() {
  const [products, setProducts] = useState(initialProducts);
  const history = useHistory();
  const getProducts = () => {
    api()
      .get("/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        // debugger;
      });
  };

  useEffect(() => {
    getProducts();
  }, []);
  // debugger;
  return (
    <StyledProducts>
      <div className="html">
        <div className="header">
          <nav>
            <a href="https://africanmarketplace-2.netlify.app/index.html">
              Home
            </a>
            <a
              href="https://africanmarketplace-2.netlify.app/about.html"
              target="_blank"
            >
              About Us
            </a>
          </nav>
        </div>
        <h1>Products for Sale</h1>
        <button onClick={() => history.push("/new-product")}>
          Add a New Product
        </button>
        <div className="products">
          {products.map((product) => {
            return <Product key={product.id} details={product} />;
          })}
        </div>
      </div>
    </StyledProducts>
  );
}

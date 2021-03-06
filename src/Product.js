import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledProduct = styled(Link)`
  color: black;
  text-decoration: none;
  .productContainer {
    width: 500px;
    font-family: "Barlow", sans-serif;
  }
  img {
    width: 500px;
  }
`;

export default function Product({ details }) {
  if (!details) {
    return <h3>Working fetching your user&apos;s details...</h3>;
  }

  return (
    <StyledProduct to={`/product/${details.id}`}>
      <div className="productContainer">
        {
          <div>
            <h2>{details.product_name}</h2>
            <img src={details.image} alt="product for sale" />
            <p>Price: {details.price}</p>
          </div>
        }
      </div>
    </StyledProduct>
  );
}

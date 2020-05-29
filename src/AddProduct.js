import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { api } from "./auth/api";

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
    <form onSubmit={handleSubmit}>
      <input
        name="product_name"
        value={form.product_name}
        onChange={handleChange}
        placeholder="Product Name"
      />
      <input
        name="image"
        value={form.image}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <input
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Product Description"
      />
      <input
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="Product Price"
      />
      <button type="submit">Add New Product</button>
    </form>
  );
}

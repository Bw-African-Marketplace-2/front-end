import axios from "axios";

export function api() {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://build-marketplace.herokuapp.com",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
}

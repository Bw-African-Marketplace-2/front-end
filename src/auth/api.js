import axios from "axios";

export function api() {
  const token = localStorage.getItem("token");
  return axios.create({
    baseUrl: "base",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  });
}

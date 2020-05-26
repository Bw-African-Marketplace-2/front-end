import axios from "axois";

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

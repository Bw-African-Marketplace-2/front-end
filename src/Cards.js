import react from 'react';
import {api} from './auth/api.js';

export default function Cards() {
  const getItems = () => {
    api()
      .get("/api/auth/products")
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        
      })
      .catch((err) => {
        debugger;
      });
    }

 
}
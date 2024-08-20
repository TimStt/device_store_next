import axios from "axios";

const apiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL_PRODUCTS,

  headers: {
    "Content-Type": "application/json",
  },
});

export default apiInstance;

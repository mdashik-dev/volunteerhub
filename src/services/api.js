import axios from "axios";

const api = axios.create({
  baseURL: "https://volunteer-management-tau.vercel.app",
  // baseURL: "http://localhost:3000",
  timeout: 10000,
});

export default api;

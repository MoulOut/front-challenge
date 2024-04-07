import axios, { AxiosInstance } from "axios";

const clientHttp: AxiosInstance = axios.create({
  baseURL: "https://circle-frontend-challenge.onrender.com",
});

export default clientHttp;

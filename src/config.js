import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://blogapp-backend-rddt.onrender.com/api"
})

export const PF = "https://blogapp-backend-rddt.onrender.com/images/"
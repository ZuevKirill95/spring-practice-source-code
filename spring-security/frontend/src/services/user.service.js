import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/products";

const getProducts = () => {
    return axios.get(API_URL);
};

const createProduct = (product) => {
    return axios.post(API_URL, product, {headers: authHeader()});
};

const getModeratorBoard = () => {
    return axios.get(API_URL + "mod", {headers: authHeader()});
};

const getAdminBoard = () => {
    return axios.get(API_URL + "admin", {headers: authHeader()});
};

const userService = {
    getProducts,
    createProduct,
    getModeratorBoard,
    getAdminBoard,
};

export default userService
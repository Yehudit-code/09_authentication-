import { httpGet, setToken } from "./http.js";

export const setFoodToken = (token) => setToken(token);

export const getFood = () => httpGet("/food");
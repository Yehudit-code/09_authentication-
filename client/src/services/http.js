import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3010/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const setToken = (token) => {
  if (token) {
    http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete http.defaults.headers.common["Authorization"];
  }
};

// GET request
const httpGet = async (url) => {
  try {
    const response = await http.get(url);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching data:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// POST request
const httpPost = async (url, data = {}) => {
  try {
    const response = await http.post(url, data);
    return response.data;
  } catch (error) {
    console.error(
      "Error posting data:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export { httpGet, httpPost, setToken };
import axios from 'axios';

const http = axios.create({
  baseURL: `http://localhost:3010/api`,
  headers: {
    "Content-Type": "application/json",
  },
});
const httpGet = async (url) => {
  console.log(url)
  try {
    const response = await http.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const httpPost = async (url, data) => {
  try {
    const response = await http.post(url, data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};


export { httpGet, httpPost };
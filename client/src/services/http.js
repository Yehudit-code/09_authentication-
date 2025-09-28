import axios from 'axios';

const httpGet = (url) => {
  return axios.get(url)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error;
    });
}

const httpPost = (url, data) => {
  return axios.post(url, data)
    .then(response => response.data)
    .catch(error => {
      console.error('Error posting data:', error);
      throw error;
    });
}

export { httpGet, httpPost };
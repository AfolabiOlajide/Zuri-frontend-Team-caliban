import axios from 'axios';
// http://localhost:8080/api
// axios config for server
const $http = axios.create({
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    credentials: 'include',
    // 'Access-Control-Allow-Origin': '*',
  },
  // withCredentials: false,
});

export default $http;

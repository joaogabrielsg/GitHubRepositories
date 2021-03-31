import axios from 'axios';
import {BASE_URL} from '../../config';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
});

export default api;

import axios from 'axios';
import { env } from 'configs';

const http = axios.create({
  baseURL: env.apiUrl,
});

export default http;

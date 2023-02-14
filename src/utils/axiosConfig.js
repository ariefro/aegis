import axios from 'axios';
import cookie from 'cookiejs';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AEGIS_API,
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.response.use((res) => {
  if (res.status === 401) {
    instance({
      url: '/api/refresh-token',
      method: 'POST'
    })
      .then(({ data }) => {
        cookie.set('aegis_token', data.token);
        axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      })
      .catch((err) => {
        cookie.remove('aegis_token');
        delete axios.defaults.headers.common.Authorization;
        return err.response;
      });
  }

  return res;
});
export default instance;

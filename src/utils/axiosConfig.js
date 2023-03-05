import axios from 'axios';
import cookie from 'js-cookie';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AEGIS_API,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

const refreshToken = () =>
  axios({
    url: `${process.env.NEXT_PUBLIC_AEGIS_API}/api/refresh-token`,
    method: 'POST',
    withCredentials: true
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

instance.interceptors.request.use(
  (config) => {
    const cookieToken = cookie.get('aegis_token');
    if (cookieToken) {
      const token = `Bearer ${cookieToken}`;
      axios.defaults.headers.common.Authorization = token;
      const headers = { ...config.headers, Authorization: token };
      config = { ...config, headers };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { config, response } = error;
    if (response.status === 403) {
      refreshToken();
      return instance(config);
    }

    if (response.status === 401) {
      cookie.remove('aegis_token');
      delete axios.defaults.headers.common.Authorization;
      window.location = '/login';
    }
    return Promise.reject(error);
  }
);

export default instance;

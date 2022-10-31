import axios from 'axios';
import { useState } from 'react';

const useAxios = ({
  body = null,
  authorization = null,
  method,
  params = null,
  url
}) => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');

  axios[method](url, JSON.stringify(body), {
    headers: {
      'Content-Type': 'application/json',
      Authorization: authorization
    },
    params
  })
    .then((res) => setResponse(res.data))
    .catch((err) => setError(err))
    .finally(() => setLoading(false));

  return { response, error, loading };
};

export default useAxios;

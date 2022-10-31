import { useState } from 'react';
import axios from 'axios';

const useAxios = async ({
  body = null,
  authorization = null,
  method,
  params = null,
  url
}) => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');

  try {
    const res = await axios[method](url, JSON.stringify(body), {
      headers: JSON.stringify({
        'Content-Type': 'application/json',
        Authorization: authorization
      }),
      params
    });

    if (res === 200 && res.data) {
      setResponse(res.data);
    }
  } catch (err) {
    setError(err);
  }
  setLoading(false);

  return { response, error, loading };
};

export default useAxios;

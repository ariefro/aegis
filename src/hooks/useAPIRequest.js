import { useCallback, useState } from 'react';
import axios from '../utils/axiosConfig';

const useAPIRequest = (config) => {
  const [loading, setIsLoading] = useState(config.initialLoading || false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const fire = useCallback(
    () =>
      new Promise((resolve, reject) => {
        setIsLoading(true);
        axios({
          method: config.method || 'GET',
          url: `${process.env.NEXT_PUBLIC_AEGIS_API}${config.url}`,
          ...config
        })
          .then((res) => {
            setResponse(res.data);
            setError(null);
            setIsLoading(false);
            resolve(res.data);
          })
          .catch((err) => {
            setResponse(null);
            setError(err.response.data);
            setIsLoading(false);
            reject(err.response.data);
          });
      }),
    [config]
  );
  return { fire, loading, response, error };
};

export default useAPIRequest;

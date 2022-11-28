import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_AEGIS_STAGE_API;
const request = async ({ method, url, config, ...props }) => {
  switch (method) {
    case 'GET':
    case 'DELETE':
    case 'OPTION':
    case 'HEAD':
      try {
        const res = await axios[method.toLowerCase()](`${baseUrl}${url}`, {
          headers: {
            'Content-Type': 'application/json',
            ...config
          }
        });
        return res.data;
      } catch (err) {
        return err;
      }
    case 'POST':
    case 'PUT':
    case 'PATCH':
      try {
        const res = await axios[method.toLowerCase()](
          `${baseUrl}${url}`,
          props.data,
          {
            headers: {
              'Content-Type': 'application/json',
              ...config
            }
          }
        );
        return res.data;
      } catch (err) {
        return err;
      }
    default:
      try {
        const res = await axios.get(`${baseUrl}${url}`, config);
        return res.data;
      } catch (err) {
        return err;
      }
  }
};

export default request;

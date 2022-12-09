import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_AEGIS_API;
const request = async ({ method, url, config, ...props }) => {
  let response;
  switch (method) {
    case 'GET':
    case 'DELETE':
    case 'OPTION':
    case 'HEAD':
      response = await axios[method.toLowerCase()](`${baseUrl}${url}`, {
        headers: {
          'Content-Type': 'application/json',
          ...config
        },
        withCredentials: true
      });
      break;
    case 'POST':
    case 'PUT':
    case 'PATCH':
      response = await axios[method.toLowerCase()](
        `${baseUrl}${url}`,
        props.data,
        {
          headers: {
            'Content-Type': 'application/json',
            ...config
          },
          withCredentials: true
        }
      );
      break;
    default:
      response = await axios.get(`${baseUrl}${url}`, config);
  }
  return response;
};

export default request;

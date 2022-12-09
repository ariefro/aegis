import jwt from 'jsonwebtoken';

const options = {
  expiresIn: '1h',
  algorithm: 'HS256'
};

export const sign = (payload) => jwt.sign(payload, process.env.SECRET, options);
export const verify = (token) => jwt.verify(token, process.env.SECRET, options);

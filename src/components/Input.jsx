import React from 'react';

const Input = ({ className, type, ...props }) => (
  <input
    className={`${className} rounded-2xl h-11 p-5`}
    type={type}
    {...props}
  />
);

export default Input;

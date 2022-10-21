import React from 'react';

const Button = ({ children, className, ...props }) => (
  <button
    type="button"
    className={`${className} disabled:opacity-50 shadow-lg px-5 py-5 rounded-2xl`}
    {...props}
  >
    {children}
  </button>
);

export default Button;

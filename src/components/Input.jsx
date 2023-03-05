import React from 'react';

const Input = ({ className, prefix, suffix, type, ...props }) => (
  <div className={`${className} relative`}>
    {prefix && <div className="absolute top-1/4 pl-5">{prefix}</div>}
    <input
      className={`rounded-2xl h-11 px-5 w-72 outline-dark-purple-3 shadow-md bg-slate-white ${
        prefix && `pl-14`
      } ${suffix && `pr-14`}`}
      type={type}
      {...props}
    />
    {suffix && <div className="absolute top-1/4 right-0 pr-5">{suffix}</div>}
  </div>
);

export default Input;

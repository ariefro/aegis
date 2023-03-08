import React from 'react';

const Modal = ({ children, visible }) => (
  <div
    className={`absolute ${
      visible ? null : 'hidden'
    } top-0 bottom-0 right-0 left-0 z-10 bg-[rgb(0,0,0,0.4)] min-h-[200] min-w-[200]`}
  >
    <div className="flex h-full justify-center items-center">
      <div className="min-w-[300px] p-6 bg-white rounded-3xl">{children}</div>
    </div>
  </div>
);

export default Modal;

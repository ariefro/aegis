import React from 'react';
import { DIAL } from '../utils/const';
import Icon from './Icon';

const Dial = ({ className, onClick }) => (
  <div className={`grid grid-cols-3 max-w-xs gap-y-8 m-auto ${className}`}>
    {DIAL.map((num) => (
      <button
        key={num}
        className="font-quicksand font-medium text-2xl leading-10 mx-7 text-black"
        type="button"
        onClick={() => onClick(num)}
      >
        {num === 'del' ? (
          <Icon.CloseCircle className="mx-auto stroke-black" />
        ) : (
          num
        )}
      </button>
    ))}
  </div>
);

export default Dial;

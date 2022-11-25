import React, { useRef, useState } from 'react';
import Icon from './Icon';

const Select = ({ children, onClick, options, value }) => {
  const dropDownRef = useRef(null);
  const [showOption, setShowOption] = useState(false);
  const handleSelectOption = (option) => {
    onClick(option);
    setShowOption((prev) => !prev);
  };

  const handleClickOutsideSelect = (e) => {
    if (e.target === dropDownRef.current) setShowOption(false);
  };
  return (
    <>
      <div
        className={`${
          !showOption && 'hidden'
        } fixed top-0 bottom-0 right-0 left-0`}
        ref={dropDownRef}
        onClick={(e) => handleClickOutsideSelect(e)}
        aria-hidden="true"
      />
      <div className="flex-col flex relative">
        <button
          disabled={!options && true}
          className="w-72 h-12 bg-white rounded-2xl px-5 outline-dark-purple-3"
          type="button"
          onClick={() => setShowOption((prev) => !prev)}
        >
          <div className="flex justify-between items-center">
            <p className="font-medium">{value || 'No Option'}</p>
            <Icon.ArrowDown
              className={`${
                showOption && 'rotate-180'
              } stroke-dark-purple-1 transition-all ease-out duration-300`}
            />
          </div>
        </button>
        {showOption && (
          <div className="w-72 bg-white rounded-xl leading-loose absolute top-14 z-10 overflow-hidden">
            {children}
            {options.map((option) => (
              <button
                className="block min-w-full text-left mx-4"
                key={option.id}
                onClick={() => handleSelectOption(option)}
                type="button"
              >
                {option.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Select;

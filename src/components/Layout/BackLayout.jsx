import { useRouter } from 'next/router';
import React from 'react';
import Icon from '../Icon';

const BackLayout = ({ children, icon, label, onClick }) => {
  const router = useRouter();
  return (
    <>
      <header>
        <button type="button" onClick={() => router.replace('/home')}>
          <Icon.BackArrowCircle className="w-9 h-9 stroke-dark-purple-2 active:bg-slate-300" />
        </button>
      </header>
      {children}
      <footer className="absolute bottom-16 left-0 right-0 px-6">
        <div>
          <button
            className="flex flex-col justify-center items-center mx-auto"
            type="button"
            onClick={onClick}
          >
            <div className="border border-dark-purple-2 rounded-full h-16 w-16 flex justify-center items-center my-3 active:bg-slate-300">
              {icon}
            </div>
            <p className="heading-m text-dark-purple-2">{label}</p>
          </button>
        </div>
      </footer>
    </>
  );
};

export default BackLayout;

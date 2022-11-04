import Image from 'next/image';
import React from 'react';
import Navigation from '../NavBar/Navigation';

const NavLayout = ({ children }) => (
  <>
    <div>
      <header className="flex justify-between items-center pb-6">
        <div>
          <h1 className="heading-l text-dark-purple-1">Wallet</h1>
          <p className="body-m text-grey-4">Active</p>
        </div>
        <div className="h-14 w-14 rounded-full bg-blue-600 overflow-hidden">
          <Image
            src="http://source.unsplash.com/300x300?portraits"
            alt="user image"
            height={300}
            width={300}
          />
        </div>
      </header>
      {children}
    </div>
    <footer className="absolute bottom-4 right-0 left-0 px-6">
      <div className="max-w-sm m-auto">
        <Navigation />
      </div>
    </footer>
  </>
);

export default NavLayout;

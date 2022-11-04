import React from 'react';
import BackLayout from './BackLayout';
import NavLayout from './NavLayout';

const Layout = ({ children, icon, label, noNavigation, onClick }) => (
  <div className="px-8 py-6">
    {noNavigation ? (
      <BackLayout label={label} icon={icon} onClick={onClick}>
        {children}
      </BackLayout>
    ) : (
      <NavLayout>{children}</NavLayout>
    )}
  </div>
);

export default Layout;

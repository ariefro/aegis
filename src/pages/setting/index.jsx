import cookie from 'cookiejs';
import { useRouter } from 'next/router';
import React from 'react';
import { Icon, Layout } from '../../components';

const Setting = () => (
  <p className="flex justify-center items-center h-[calc(100vh-192px)] body-m text-grey-4 text-center">
    Coming soon
  </p>
);

Setting.getLayout = function getLayout(page) {
  const router = useRouter();
  const handleLogout = () => {
    cookie.remove('aegis_token');
    router.replace('/login');
  };
  return (
    <Layout
      noNavigation
      label="Log Out"
      icon={<Icon.LogoutOutlined className="stroke-dark-purple-1 h-9 w-9" />}
      onClick={handleLogout}
    >
      {page}
    </Layout>
  );
};

export default Setting;

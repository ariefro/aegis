import React from 'react';
import { Layout } from '../components';

const Notification = () => (
  <p className="flex justify-center items-center h-[calc(100vh-192px)] body-m text-grey-4 text-center">
    Coming soon
  </p>
);

Notification.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Notification;

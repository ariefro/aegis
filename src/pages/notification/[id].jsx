import React from 'react';
import moment from 'moment';
import { Layout } from '../../components';
import { notifications } from '../../../dummy.json';
import Card from '../../components/Pages/notification/Card';

const Notification = () => (
  <div>
    <h1 className="heading-l text-center text-dark-purple-1 mt-6 mb-14">
      Notification
    </h1>
    {notifications.map((notif) => (
      <Card
        key={notif.id}
        date={moment(notif.created_at).format('DD MMMM YYYY, hh.mm A')}
        message={notif.message}
        name={notif.name}
        type={notif.type}
      />
    ))}
  </div>
);

Notification.getLayout = function getLayout(page) {
  return <Layout noNavigation>{page}</Layout>;
};
export default Notification;

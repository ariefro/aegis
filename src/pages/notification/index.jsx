import React, { useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from '../../components';
import Card from '../../components/Pages/notification/Card';
import { getNotifications } from '../../store/logSlice';

const Notification = () => {
  const dispatch = useDispatch();
  const { loading, notifications } = useSelector((state) => state.log);

  useEffect(() => {
    const init = async () => {
      await dispatch(getNotifications()).unwrap();
    };
    init();
  }, []);

  return (
    <div>
      <h1 className="heading-l text-center text-dark-purple-1 mt-6 mb-14">
        Notification
      </h1>
      {!notifications && loading && (
        <>
          <Card loading={loading} />
          <Card loading={loading} />
          <Card loading={loading} />
        </>
      )}
      {notifications && !notifications.length ? (
        notifications.map((notif) => (
          <Card
            key={notif.created_at}
            date={moment(notif.created_at).format('DD MMMM YYYY, hh.mm A')}
            message={notif.message}
            name={notif.name}
            type={notif.type}
          />
        ))
      ) : (
        <div className="text-center text-grey-4">
          <p>No Notifications</p>
        </div>
      )}
    </div>
  );
};

Notification.getLayout = function getLayout(page) {
  return <Layout noNavigation>{page}</Layout>;
};

export default Notification;

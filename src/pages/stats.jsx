import React from 'react';
import { Layout } from '../components';

const Stats = () => (
  <p className="flex justify-center items-center h-[calc(100vh-192px)] body-m text-grey-4 text-center">
    Coming soon
  </p>
);

Stats.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Stats;

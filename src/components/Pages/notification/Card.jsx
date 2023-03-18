import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Icon from '../../Icon';

const Card = ({ date, message, name, type, loading }) => (
  <div className="flex items-center justify-between gap-1 shadow-[3px_3px_10px_rgba(0,0,0,0.1)] my-4 p-4 rounded-2xl">
    <div>
      <p className="body-helper text-[#BDBDBD]">
        {loading ? <Skeleton width={120} /> : date}
      </p>
      <p className="body-s">
        {loading ? <Skeleton count={2} width={240} /> : message}
      </p>
      <p className="body-helper text-[#BDBDBD]">
        {loading ? <Skeleton width={120} /> : name}
      </p>
    </div>
    <div>
      {!loading && type === 'transfer' ? (
        <Icon.Transfer className="stroke-purple" />
      ) : (
        <Icon.ArrowSquared
          className={
            type === 'expense' ? 'stroke-red rotate-180' : 'stroke-green'
          }
        />
      )}
    </div>
  </div>
);

export default Card;

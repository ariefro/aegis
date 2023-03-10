import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { maskToIdr } from '../../../utils/parser';
import Icon from '../../Icon';

const iconMap = (type) => {
  const className = 'h-7 w-7 stroke-dark-purple-1';
  return type === 'transfer' ? (
    <Icon.Transfer className={className} />
  ) : type === 'payment' ? (
    <Icon.Payment className={className} />
  ) : type === 'payout' ? (
    <Icon.Payout className={className} />
  ) : (
    <Icon.TopUp className={className} />
  );
};

const LoadingSkeleton = () => (
  <div className="flex mb-4">
    <Skeleton style={{ height: '40px', width: '40px', borderRadius: '16px' }} />
    <div className="w-full ml-4">
      <Skeleton width={100} />
      <Skeleton />
    </div>
  </div>
);

const Transactions = ({ transactions, loading }) => (
  <div className="pb-24 overflow-auto top-[419.5px] right-8 left-8">
    {loading ? (
      <>
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
      </>
    ) : transactions?.length ? (
      transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="flex items-center justify-between mb-2 mt-2"
        >
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-2xl border-dark-purple-1 border-2 drop-shadow-md bg-white flex justify-center items-center">
              {iconMap(transaction.slug)}
            </div>
            <div>
              <p className="font-semibold">{transaction.name}</p>
              <p className="body-s text-grey-4">{transaction.type}</p>
            </div>
          </div>
          <div>
            <p
              className={`font-semibold ${
                transaction.amount < 0 ? 'text-red' : 'text-green'
              }`}
            >
              {maskToIdr(transaction.amount)}
            </p>
          </div>
        </div>
      ))
    ) : (
      <p className="body-s text-grey-4 text-center mt-16">No record</p>
    )}
  </div>
);

export default Transactions;

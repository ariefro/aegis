import React from 'react';

import { transactions } from '../../../../dummy.json';
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

const Transactions = () => (
  <div className="pb-28 overflow-auto absolute bottom-0 top-[419.5px] right-8 left-8">
    {transactions.length ? (
      transactions.map((t) => (
        <div key={t.id} className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-2xl border border-black bg-white flex justify-center items-center">
              {iconMap(t.type)}
            </div>
            <div>
              <p className="">{t.name}</p>
              <p className="body-s text-grey-4">{t.type}</p>
            </div>
          </div>
          <div>
            <p className={t.amount < 0 ? 'text-red' : 'text-green'}>
              {maskToIdr(t.amount)}
            </p>
          </div>
        </div>
      ))
    ) : (
      <p className="body-s text-grey-4 text-center">No record</p>
    )}
  </div>
);

export default Transactions;

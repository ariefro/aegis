import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Icon from '../../Icon';
import Menu from './Menu';

const WalletList = ({ children, className, onClick }) => (
  <button
    type="button"
    className={`bg-purple rounded-xl text-center text-white body-m py-1 active:bg-dark-purple-2 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const Hero = ({ detail }) => {
  const { push, query, prefetch } = useRouter();

  useEffect(() => {
    prefetch('/transaction/[id]');
    prefetch('/setting');
    prefetch('/notification/[id]');
    prefetch('/stats/[id]');
  }, []);

  const handleTransaction = (type, slug) => {
    push({
      pathname: '/transaction/[id]',
      query: { id: query.id, type, slug }
    });
  };

  return (
    <div>
      <button
        type="button"
        className="relative shadow-md shadow-grey-4 bg-dark-purple-2 h-36 min-w-full px-4 rounded-[50px] flex justify-around items-center active:bg-dark-purple-1 overflow-hidden"
      >
        {detail ? (
          <div className="relative z-10 text-left">
            <p className="text-white font-semibold font-quicksand text-2xl">
              {detail.name}
            </p>
            <p className="text-white font-bold font-quicksand text-4xl">{`${detail.currency} ${detail.balance}`}</p>
          </div>
        ) : (
          <p className="body-m text-white z-10 ">No Wallet</p>
        )}
        <div className="w-14 h-14 bg-dark-purple-3 rounded-full absolute -top-7 left-4" />
        <div className="w-36 h-36 border-4 border-dark-purple-3 rounded-full absolute -bottom-16 -right-4" />
      </button>
      <div className="grid grid-cols-3 gap-1 pt-2">
        {detail &&
          detail.wallets?.map((e) => (
            <WalletList key={e.id}>{e.name}</WalletList>
          ))}
        {detail && detail.wallets?.length < 6 && (
          <WalletList className="border-2 border-dark-purple-2 ">
            Add Wallet
          </WalletList>
        )}
      </div>
      <div className="flex items-center justify-around pt-3">
        <Menu
          label="Transfer"
          onClick={() => handleTransaction('transfer', 'transfer')}
        >
          <Icon.Transfer className="h-8 w-8 stroke-dark-purple-1" />
        </Menu>
        <Menu
          label="Payment"
          onClick={() => handleTransaction('expense', 'payment')}
        >
          <Icon.Payment className="h-8 w-8 stroke-dark-purple-1" />
        </Menu>
        <Menu
          label="Payout"
          onClick={() => handleTransaction('expense', 'payout')}
        >
          <Icon.Payout className="h-8 w-8 stroke-dark-purple-1" />
        </Menu>
        <Menu
          label="Top up"
          onClick={() => handleTransaction('income', 'topup')}
        >
          <Icon.TopUp className="h-8 w-8 stroke-dark-purple-1" />
        </Menu>
      </div>
    </div>
  );
};

export default Hero;

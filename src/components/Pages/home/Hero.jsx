import { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { maskToIdr } from '../../../utils/parser';

import Icon from '../../Icon';
import Menu from './Menu';

const WalletList = ({ bg, children, className, onClick }) => (
  <button
    type="button"
    className={`${className} bg-${bg} rounded-xl text-center text-white body-m py-1`}
    onClick={onClick}
  >
    {children}
  </button>
);

const Hero = ({ detail, loading }) => {
  const { push, query } = useRouter();

  const handleTransaction = (slug) => {
    push({
      pathname: '/transaction/[id]',
      query: { id: query.id, slug }
    });
  };

  return (
    <div>
      {loading ? (
        <Skeleton className="h-36" style={{ borderRadius: '50px' }} />
      ) : (
        <button
          type="button"
          className="relative shadow-md shadow-grey-4 bg-dark-purple-2 h-36 min-w-full px-4 rounded-[50px] flex justify-around items-center active:bg-dark-purple-1 overflow-hidden"
          onClick={() => push(`/detail/${detail.wallet_id}`)}
        >
          {detail ? (
            <div className="relative z-10 text-left">
              <p className="text-white font-semibold font-quicksand text-2xl">
                {detail.name}
              </p>
              <p className="text-white font-bold font-quicksand text-4xl">
                {maskToIdr(detail.balance)}
              </p>
            </div>
          ) : (
            <p className="body-m text-white z-10 ">No Wallet</p>
          )}
          <div className="w-14 h-14 bg-dark-purple-3 rounded-full absolute -top-7 left-4" />
          <div className="w-36 h-36 border-4 border-dark-purple-3 rounded-full absolute -bottom-16 -right-4" />
        </button>
      )}
      {loading ? (
        <Skeleton
          height={32}
          width={120}
          style={{ borderRadius: '12px', marginTop: '16px' }}
        />
      ) : (
        <div className="grid grid-cols-3 gap-1 pt-3">
          {detail &&
            detail.wallets?.map((wallet) => (
              <WalletList
                bg={query.id === wallet.id ? 'dark-purple-1' : 'dark-purple-3'}
                key={wallet.id}
                onClick={() => push(`/home/${wallet.id}`)}
              >
                {wallet.name}
              </WalletList>
            ))}
          {detail && detail.wallets?.length < 6 && (
            <WalletList
              bg="transparent"
              className="outline outline-1 outline-dark-purple-2 text-black font-bold"
              onClick={() => push('/create')}
            >
              Add Wallet
            </WalletList>
          )}
        </div>
      )}
      <div className="flex align-middle justify-around pt-3">
        <Menu label="Transfer" onClick={() => handleTransaction('transfer')}>
          <Icon.Transfer className="h-8 w-8 stroke-dark-purple-1" />
        </Menu>

        <Menu label="Payment" onClick={() => handleTransaction('payment')}>
          <Icon.Payment className="h-8 w-8 stroke-dark-purple-1" />
        </Menu>

        <Menu label="Payout" onClick={() => handleTransaction('payout')}>
          <Icon.Payout className="h-8 w-8 stroke-dark-purple-1" />
        </Menu>

        <Menu label="Top up" onClick={() => handleTransaction('top up')}>
          <Icon.TopUp className="h-8 w-8 stroke-dark-purple-1" />
        </Menu>
      </div>
    </div>
  );
};

export default Hero;

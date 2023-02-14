import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, Hero } from '../../components';
import Transactions from '../../components/Pages/home/Transactions';
import { getDetailWallet } from '../../store/walletSlice';

const Home = () => {
  const dispatch = useDispatch();
  const wallet = useSelector((state) => state.wallet);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    dispatch(getDetailWallet(router.query.id));
  }, [router.isReady]);
  return (
    <div>
      <Hero detail={wallet.detail} />
      <div className="flex items-center justify-between pt-8">
        <p className="heading-m text-dark-purple-1">Last Transaction</p>
        <button type="button" className="body-s text-grey-4" disabled>
          View all
        </button>
      </div>
      <Transactions />
    </div>
  );
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;

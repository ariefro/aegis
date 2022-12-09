import { Layout, Hero } from '../../components';
import Transactions from '../../components/Pages/home/Transactions';

const Home = () => (
  <div>
    <Hero />
    <div className="flex items-center justify-between pt-8">
      <p className="heading-m text-dark-purple-1">Last Transaction</p>
      <button type="button" className="body-s text-grey-4" disabled>
        View all
      </button>
    </div>
    <Transactions />
  </div>
);

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;

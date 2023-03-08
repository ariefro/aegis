import moment from 'moment';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { Layout, Modal } from '../../components';
import { getWalletProfile } from '../../store/walletSlice';
import { maskToIdr } from '../../utils/parser';
import useAPIRequest from '../../hooks/useAPIRequest';

const Info = ({ label, loading, value, valueColor }) => (
  <div className="flex gap-3">
    <p className="body-m text-[#BDBDBD] w-20">{label}</p>
    <p className={`body-m text-${valueColor}`}>
      {loading ? <Skeleton width={100} /> : value}
    </p>
  </div>
);

const DetailWallet = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { profile: detail, loading } = useSelector((state) => state.wallet);

  const { loading: loadingDelete, fire } = useAPIRequest({
    method: 'DELETE',
    url: `/api/wallet/${router.query.id}`
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!router.isReady) return;
    const init = async () => {
      await dispatch(getWalletProfile(router.query.id)).unwrap();
    };

    init();
  }, [router.isReady, router.query]);

  const handleDelete = () => {
    const loadingToast = toast.loading('Loading');
    fire()
      .then((res) => {
        toast.success('Deleted');
        router.push(`/home/${res.wallets[0].id}`);
      })
      .catch((err) => toast.error(err.message))
      .finally(() => toast.dismiss(loadingToast));
  };

  return (
    <Layout
      noNavigation
      footer={
        <div className="text-center">
          <button
            type="button"
            className="heading-m text-dark-purple-2"
            onClick={() => setShowModal(true)}
          >
            Delete Card
          </button>
        </div>
      }
    >
      <h1 className="heading-l text-center text-dark-purple-1 mt-6">
        Detail card
      </h1>
      <div className="mt-9 mb-12 max-w-[320px] mx-auto">
        <Image
          src="/credit-card-landscape.png"
          alt="credit card"
          height={330}
          width={467}
        />
      </div>
      <div className="w-max mx-auto">
        <Info
          loading={loading}
          label="Name"
          value={detail?.name || 'No Name'}
        />
        <Info
          loading={loading}
          label="Balance"
          value={maskToIdr(detail?.balance || 0)}
        />
        <Info
          loading={loading}
          label="Expense"
          value={maskToIdr(detail?.total.expense || 0)}
          valueColor="red"
        />
        <Info
          loading={loading}
          label="Income"
          value={maskToIdr(detail?.total.income || 0)}
          valueColor="green"
        />
        <Info
          loading={loading}
          label="Created"
          value={moment(detail?.creatd_at).format('DD/MM/YYYY')}
        />
      </div>
      <Modal visible={showModal}>
        <p className="body-m text-center font-semibold my-2">
          Are you sure
          <br />
          want to <span className="text-red">delete</span> this account ?
        </p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <button
            className="heading-s bg-dark-purple-3 py-2 rounded-2xl text-white"
            type="button"
            onClick={() => setShowModal(false)}
            disabled={loadingDelete}
          >
            No
          </button>
          <button
            className="heading-s bg-red py-2 rounded-2xl text-white"
            type="button"
            onClick={handleDelete}
            disabled={loadingDelete}
          >
            Yes
          </button>
        </div>
      </Modal>
    </Layout>
  );
};

export default DetailWallet;

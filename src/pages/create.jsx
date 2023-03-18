import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Input, Layout } from '../components';
import useAPIRequest from '../hooks/useAPIRequest';
import { inputMaskToIdr } from '../utils/parser';

const AddButton = ({ ...props }) => (
  <div className="text-center">
    <button
      className="heading-m text-dark-purple-2 mx-auto disabled:text-gray-300"
      type="submit"
      {...props}
    >
      Add Card
    </button>
  </div>
);

const Create = () => {
  const { push } = useRouter();

  const [balance, setBalance] = useState('');
  const [name, setName] = useState('');
  const { fire, error } = useAPIRequest({
    method: 'POST',
    url: 'api/wallet',
    data: {
      name,
      balance: Number(balance.split('.').join('')),
      currency: 'IDR'
    }
  });

  const handleBalanceChange = (e) => {
    const { value } = e.target;
    setBalance(inputMaskToIdr(value));
  };

  const handleSubmit = (e) => {
    const loadingToast = toast.loading('Loading');
    e.preventDefault();
    fire()
      .then((res) => {
        toast.success('Success!');
        push(`/home/${res.wallet_id}`);
      })
      .catch(() => toast.error(error.message))
      .finally(() => toast.dismiss(loadingToast));
  };

  return (
    <Layout noNavigation>
      <h1 className="heading-l text-center text-dark-purple-1 mt-6">
        Add card
      </h1>
      <div className="mt-9 mb-12 max-w-[240px] mx-auto">
        <Image
          src="/credit-card.png"
          alt="credit-card"
          height={511}
          width={361}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Name (Max 10 characters)"
          className="mb-6 mx-auto"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={10}
        />
        <Input
          placeholder="Initial balance"
          className="mb-10 mx-auto"
          suffix="IDR"
          name="balance"
          value={balance}
          onChange={handleBalanceChange}
        />
        <AddButton disabled={!name} />
      </form>
    </Layout>
  );
};

export default Create;

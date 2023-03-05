import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Input, Layout } from '../components';
import useAPIRequest from '../hooks/useAPIRequest';

const AddButton = () => (
  <div className="text-center">
    <button className="heading-m text-dark-purple-2 mx-auto" type="submit">
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
    data: { name, balance: Number(balance), currency: 'IDR' }
  });

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
          placeholder="Name"
          className="mb-6 mx-auto"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Initial balance"
          className="mb-10 mx-auto"
          suffix="IDR"
          name="balance"
          type="number"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
        />
        <AddButton />
      </form>
    </Layout>
  );
};

export default Create;

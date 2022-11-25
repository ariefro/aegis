import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Dial, Input, Layout, Select } from '../../components';
import {
  setTransactionAmount,
  setTransactionTarget,
  setTransactionType
} from '../../store/transactionSlice';
import { maskToIdr, toArrayOption } from '../../utils/parser';

const options = [
  {
    wallet_id: 2,
    name: 'Mabank'
  },
  {
    wallet_id: 0,
    name: 'Mabank3'
  },
  {
    wallet_id: 1,
    name: 'Mabank2'
  }
];

const Create = () => {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const transaction = useSelector((state) => state.transaction);

  useEffect(() => {
    dispatch(
      setTransactionType({
        wallet_id: Number(query.id),
        type: query.type,
        slug: query.slug
      })
    );
    dispatch(setTransactionTarget(options[0].wallet_id));
  }, [query]);

  const data = toArrayOption(options, 'name', 'wallet_id');

  const handleSelectOption = (id) => {
    dispatch(setTransactionTarget(id));
  };

  const handleClickDial = (val) => {
    if (val === 'del') {
      dispatch(setTransactionAmount(0));
    } else {
      dispatch(setTransactionAmount(transaction.amount + val));
    }
  };

  return (
    <div>
      <p className="text-dark-purple-1 font-rubik font-medium text-3xl text-center mt-12 break-all">
        {maskToIdr(transaction.amount)}
      </p>
      <div className="pt-11">
        <Input className="mb-3 text-center" placeholder="Name" />
        <div className="flex justify-center">
          {query.type === 'transfer' && (
            <Select
              options={data}
              onClick={(value) => handleSelectOption(value.wallet_id)}
              value={data.find((e) => e.id === transaction.to_wallet_id)?.name}
            />
          )}
        </div>
        <Dial className="pt-11" onClick={handleClickDial} />
      </div>
    </div>
  );
};

Create.getLayout = function getLayout(page) {
  return (
    <Layout
      footer={
        <div className="text-center">
          <Button
            className="bg-dark-purple-2 text-white w-48 font-quicksand font-medium text-xl"
            type="button"
          >
            Confirm
          </Button>
        </div>
      }
      noNavigation
    >
      {page}
    </Layout>
  );
};

export default Create;

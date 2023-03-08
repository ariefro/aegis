import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Dial, Input, Layout, Select } from '../../components';
import {
  createTransaction,
  setTransactionAmount,
  setTransactionTarget,
  setTransactionType,
  setTransactionName,
  resetTransaction
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
  const { transaction } = useSelector((state) => state);

  useEffect(() => {
    dispatch(resetTransaction());
    dispatch(
      setTransactionType({
        wallet_id: query.id,
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

  const handleConfirm = async () => {
    const loadingToast = toast.loading('Sending');
    const values = { ...transaction, amount: Number(transaction.amount) };
    const res = await dispatch(createTransaction(values)).unwrap();

    if (res.status !== 200) {
      toast.error(res.data.message);
    } else {
      toast.success('Created');
    }

    toast.dismiss(loadingToast);
  };

  const handleChangeName = (value) => {
    dispatch(setTransactionName(value));
  };

  return (
    <Layout
      footer={
        <div className="text-center">
          <Button
            className="bg-dark-purple-2 text-white w-48 font-quicksand font-medium text-xl"
            type="button"
            onClick={handleConfirm}
            disabled={!transaction.name || !transaction.amount}
          >
            Confirm
          </Button>
        </div>
      }
      noNavigation
    >
      <p className="text-dark-purple-1 font-rubik font-medium text-3xl text-center mt-12 break-all">
        {maskToIdr(transaction.amount)}
      </p>
      <div className="pt-11">
        <Input
          className="mb-3 mx-auto"
          placeholder="Name"
          onChange={(e) => handleChangeName(e.target.value)}
        />
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
    </Layout>
  );
};

export default Create;

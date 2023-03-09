import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Dial, Input, Layout, Select } from '../../components';
import {
  setTransactionAmount,
  setTransactionTarget,
  setTransactionSlug,
  setTransactionName,
  resetTransaction
} from '../../store/transactionSlice';
import { maskToIdr, toArrayOption } from '../../utils/parser';
import useApiRequest from '../../hooks/useAPIRequest';
import { getToWalletList } from '../../store/walletSlice';

const Create = () => {
  const { query, push } = useRouter();
  const dispatch = useDispatch();
  const { transaction, wallet } = useSelector((state) => state);
  const { loading: loadingCreate, fire } = useApiRequest({
    method: 'POST',
    url: '/api/transaction',
    data: {
      ...transaction,
      amount: Number(transaction.amount),
      to_wallet_id: query.slug === 'transfer' ? transaction.to_wallet_id : null
    }
  });

  const getList = async () => {
    await dispatch(getToWalletList(query.id)).unwrap();
  };

  // const options = wallet.toWalletList?.map((list) => ({
  //   wallet_id: list.id,
  //   name: list.name
  // }));
  const options = [
    {
      name: 'mencoba',
      wallet_id: 1
    },
    {
      name: 'sukses selalu',
      wallet_id: 2
    }
  ];

  useEffect(() => {
    if (query.slug === 'transfer') getList();

    dispatch(resetTransaction());
    dispatch(
      setTransactionSlug({
        wallet_id: query.id,
        slug: query.slug
      })
    );
    dispatch(setTransactionTarget(options[0].wallet_id));
  }, [query]);

  const mappedOption = toArrayOption({
    arrOfObj: options,
    keyOfName: 'name',
    keyOfId: 'wallet_id'
  });

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

  const handleConfirm = () => {
    const loadingToast = toast.loading('Sending');
    fire()
      .then(() => {
        toast.success('Created');
        push(`/home/${query.id}`);
      })
      .catch((err) => toast.error(err.message))
      .finally(() => toast.dismiss(loadingToast));
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
            disabled={!transaction.name || !transaction.amount || loadingCreate}
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
          {query.slug === 'transfer' && (
            <Select
              options={mappedOption}
              onClick={(value) => handleSelectOption(value.wallet_id)}
              value={
                mappedOption.find((e) => e.id === transaction.to_wallet_id)
                  ?.name
              }
            />
          )}
        </div>
        <Dial className="pt-11" onClick={handleClickDial} />
      </div>
    </Layout>
  );
};

export default Create;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wallet_id: 0,
  amount: 0,
  slug: 'transfer',
  to_wallet_id: null,
  name: '',
  currency: 'IDR'
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setTransactionSlug: (state, action) => {
      state.wallet_id = action.payload.wallet_id;
      state.slug = action.payload.slug;
    },
    setTransactionAmount: (state, action) => {
      state.amount = action.payload;
    },
    setTransactionTarget: (state, action) => {
      state.to_wallet_id = action.payload;
    },
    setTransactionName: (state, action) => {
      state.name = action.payload;
    },
    resetTransaction: (state) => {
      state.name = '';
      state.amount = 0;
      state.to_wallet_id = null;
    }
  }
});

export const {
  setTransactionSlug,
  setTransactionAmount,
  setTransactionTarget,
  setTransactionName,
  resetTransaction
} = transactionSlice.actions;
export default transactionSlice.reducer;

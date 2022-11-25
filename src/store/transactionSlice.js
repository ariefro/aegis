import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wallet_id: 0,
  amount: 0,
  type: 'transfer',
  slug: 'transfer',
  to_wallet_id: null
};
const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setTransactionType: (state, action) => {
      state.wallet_id = action.payload.wallet_id;
      state.type = action.payload.type;
      state.slug = action.payload.slug;
    },
    setTransactionAmount: (state, action) => {
      state.amount = action.payload;
    },
    setTransactionTarget: (state, action) => {
      state.to_wallet_id = action.payload;
    }
  }
});

export const {
  setTransactionType,
  setTransactionAmount,
  setTransactionTarget
} = transactionSlice.actions;
export default transactionSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../utils/axiosConfig';

const initialState = {
  wallet_id: 0,
  amount: 0,
  type: 'transfer',
  slug: 'transfer',
  to_wallet_id: null,
  name: '',
  currency: 'IDR'
};

export const createTransaction = createAsyncThunk(
  'transaction/create',
  async (data) => {
    try {
      const res = await axios({
        method: 'POST',
        url: '/api/transaction',
        data
      });
      if (res.status !== 200) {
        throw res.data;
      }
      return res.data;
    } catch (err) {
      return { data: err.response.data, status: err.status };
    }
  }
);

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
  setTransactionType,
  setTransactionAmount,
  setTransactionTarget,
  setTransactionName,
  resetTransaction
} = transactionSlice.actions;
export default transactionSlice.reducer;

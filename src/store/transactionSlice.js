import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import request from '../utils/apiRequest';

const initialState = {
  wallet_id: 0,
  amount: 0,
  type: 'transfer',
  slug: 'transfer',
  to_wallet_id: null,
  name: ''
};

export const createTransaction = createAsyncThunk(
  'transaction/create',
  async (req, { rejectWithValue }) => {
    try {
      const res = request({
        method: 'POST',
        url: '/api/something',
        data: req
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
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
    }
  }
});

export const {
  setTransactionType,
  setTransactionAmount,
  setTransactionTarget,
  setTransactionName
} = transactionSlice.actions;
export default transactionSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import request from '../utils/apiRequest';

const initialState = {
  detail: {},
  loading: false
};

export const getWallets = createAsyncThunk('wallet/getWallets', async () => {
  try {
    const { data, status } = await request({
      method: 'GET',
      url: '/api/wallets'
    });

    if (status !== 200) {
      throw data;
    }
    return data;
  } catch (err) {
    return err.response.data;
  }
});

export const getDetailWallet = createAsyncThunk(
  'wallet/getDetailWallet',
  async (walletId) => {
    try {
      const { data, status } = await request({
        method: 'GET',
        url: `/api/wallet/${walletId}`
      });

      if (status !== 200) {
        throw data;
      }

      return data;
    } catch (err) {
      return err.response.data;
    }
  }
);

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDetailWallet.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDetailWallet.fulfilled, (state, action) => {
      state.detail = action.payload;
      state.loading = false;
    });
  }
});

export default walletSlice.reducer;

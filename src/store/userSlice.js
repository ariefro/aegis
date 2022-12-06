import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import request from '../utils/apiRequest';

const initialState = {
  loading: false
};

export const authenticate = createAsyncThunk(
  'user/authenticate',
  async (req) => {
    try {
      const res = await request({
        method: 'POST',
        url: '/api/login',
        data: req
      });
      return res.data;
    } catch (err) {
      return err.response.data;
    }
  }
);

export const register = createAsyncThunk('user/register', async (req) => {
  try {
    const res = await request({
      method: 'POST',
      url: '/api/register',
      data: req
    });
    return res.data;
  } catch (err) {
    return err.response.data;
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(authenticate.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authenticate.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(authenticate.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(register.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(register.rejected, (state) => {
      state.loading = false;
    });
  }
});

export default userSlice.reducer;

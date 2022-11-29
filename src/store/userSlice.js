import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import request from '../utils/apiRequest';

const baseUrl = process.env.NEXT_PUBLIC_AEGIS_STAGE_API;
const initialState = {
  loading: false,
  response: ''
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
    } catch (error) {
      return error.response.data;
    }
  }
);

export const register = createAsyncThunk(
  'user/register',
  async (req, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${baseUrl}/api/register`, req, {
        headers: { 'Content-Type': 'application/json' }
      });

      return data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(authenticate.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authenticate.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(authenticate.rejected, (state) => {
      state.loading = false;
      state.response = '';
    });

    builder.addCase(register.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      state.response = action.payload;
    });
    builder.addCase(register.rejected, (state) => {
      state.loading = false;
      state.response = '';
    });
  }
});

export default userSlice.reducer;
